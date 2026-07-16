import { StatusCodes } from "http-status-codes";
import { prisma } from "../../lib/prisma.js";
import { hashPassword, verifyPassword } from "../../utils/hashPassword.js";
import { generateOTP, hashOTP, verifyOTP } from "../../utils/otp.js";
import { sendVerificationEmail } from "../../utils/sendVerificationEmail.js";
import { OTPServices } from "../../services/otpServices.js";
import { redisClient } from "../../config/redis.js";
import {
    UserCreateType,
    UserLoginType,
    EmailVerifyType,
    ForgotPasswordType,
    ResetPasswordType,
} from "./auth.validation.js";
import { JwtPayload } from "../../types/index.js";
import {
    createAccessToken,
    createRefreshToken,
    createTempLoginToken,
    generateSessionId,
    verifyRefreshToken,
    verifyTempLoginToken,
} from "./auth.helper.js";
import { UAParser, IResult } from "ua-parser-js";

// ─────────────────────────────────────────────
// Route 1: Register User
// ─────────────────────────────────────────────
const registerUser = async (payload: UserCreateType) => {
    const { email, password, fullName } = payload;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        throw Object.assign(new Error("User already exists"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const hashedPassword = await hashPassword(password);
    const otp = generateOTP();
    const hashedOTP = await hashOTP(otp);

    const newUser = await prisma.user.create({
        data: { email, password: hashedPassword, fullName },
        select: { id: true, email: true, fullName: true, isVerified: true },
    });

    try {
        await OTPServices.saveOTP("email_verification", newUser.id, hashedOTP);
        await sendVerificationEmail(newUser.email, newUser.fullName, otp);
    } catch {
        await prisma.user.delete({ where: { id: newUser.id } });
        throw Object.assign(new Error("Failed to send verification email"), { statusCode: StatusCodes.INTERNAL_SERVER_ERROR });
    }

    return newUser;
};

// ─────────────────────────────────────────────
// Route 2: Verify Email
// ─────────────────────────────────────────────
const verifyEmail = async (payload: EmailVerifyType) => {
    const { email, otp } = payload;

    const user = await prisma.user.findUnique({
        where: { email },
        select: { id: true, email: true, fullName: true, isVerified: true },
    });

    if (!user) {
        throw Object.assign(new Error("User not found"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const otpRecord = await OTPServices.getOTP("email_verification", user.id);
    if (!otpRecord) {
        throw Object.assign(new Error("OTP expired or not found"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const isOTPValid = await verifyOTP(otp, otpRecord);
    if (!isOTPValid) {
        throw Object.assign(new Error("Invalid OTP"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { isVerified: true },
        select: { id: true, email: true, fullName: true, isVerified: true },
    });

    await OTPServices.deleteOTP("email_verification", user.id);

    return updatedUser;
};

// ─────────────────────────────────────────────
// Route 3: Login
// ─────────────────────────────────────────────
const loginUser = async (payload: UserLoginType, userAgent?: string, ip?: string) => {
    const { email, password } = payload;

    const parser = new UAParser(userAgent);
    const sessionInfo: IResult = parser.getResult();
    const deviceName = sessionInfo.os.name || "Unknown OS";
    const browserName = sessionInfo.browser.name || "Unknown Browser";

    const user = await prisma.user.findUnique({
        where: { email },
        select: { id: true, email: true, fullName: true, password: true, isVerified: true, status: true, isTwoFactorEnabled: true },
    });

    if (!user) {
        throw Object.assign(new Error("Invalid email or password"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    if (user.status === "DELETED") {
        throw Object.assign(new Error("Your account has been deleted"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw Object.assign(new Error("Invalid email or password"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    if (!user.isVerified) {
        throw Object.assign(new Error("Please verify your email before logging in"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const jwtPayload: JwtPayload = { userId: user.id, email: user.email };
    const sessionId = generateSessionId();
    const accessToken = createAccessToken(jwtPayload);
    const refreshToken = createRefreshToken({ userId: user.id, email: user.email, sessionId });

    await prisma.session.create({
        data: {
            userId: user.id,
            sessionId,
            refreshToken,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            deviceInfo: `${deviceName} - ${browserName}`,
            ipAddress: ip,
        },
    });

    return { accessToken, refreshToken };
};

// ─────────────────────────────────────────────
// Route 4: Forgot Password
// ─────────────────────────────────────────────
const forgotPassword = async (payload: ForgotPasswordType) => {
    const user = await prisma.user.findUnique({ where: { email: payload.email } });
    if (!user) {
        throw Object.assign(new Error("User not found"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const otp = generateOTP();
    const hashedOTP = await hashOTP(otp);

    await OTPServices.saveOTP("password_reset", user.id, hashedOTP);
    await sendVerificationEmail(user.email, user.fullName, otp);

    return { message: "OTP sent to your email" };
};

// ─────────────────────────────────────────────
// Route 5: Verify Forgot Password OTP
// ─────────────────────────────────────────────
const verifyForgotPasswordOTP = async (payload: EmailVerifyType) => {
    const { email, otp } = payload;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw Object.assign(new Error("User not found"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const otpRecord = await OTPServices.getOTP("password_reset", user.id);
    if (!otpRecord) {
        throw Object.assign(new Error("OTP expired or not found"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const isOTPValid = await verifyOTP(otp, otpRecord);
    if (!isOTPValid) {
        throw Object.assign(new Error("Invalid OTP"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const resetToken = crypto.randomUUID();
    await redisClient.set(`reset:${resetToken}`, user.id, { EX: 300 }); // 5 min
    await OTPServices.deleteOTP("password_reset", user.id);

    return { resetToken };
};

// ─────────────────────────────────────────────
// Route 6: Reset Password
// ─────────────────────────────────────────────
const resetPassword = async (resetToken: string, payload: ResetPasswordType) => {
    const userId = await redisClient.get(`reset:${resetToken}`);
    if (!userId) {
        throw Object.assign(new Error("Invalid or expired reset token"), { statusCode: StatusCodes.BAD_REQUEST });
    }

    const hashedPassword = await hashPassword(payload.newPassword);

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
        select: { id: true, email: true, fullName: true },
    });

    await redisClient.del(`reset:${resetToken}`);
    await prisma.session.deleteMany({ where: { userId } });

    return updatedUser;
};

// ─────────────────────────────────────────────
// Route 7: Refresh Token
// ─────────────────────────────────────────────
const refreshToken = async (token: string) => {
    const payload = verifyRefreshToken(token);
    if (!payload) {
        throw Object.assign(new Error("Invalid refresh token"), { statusCode: StatusCodes.UNAUTHORIZED });
    }

    const newAccessToken = createAccessToken({ userId: payload.userId, email: payload.email });
    const newRefreshToken = createRefreshToken({ userId: payload.userId, email: payload.email, sessionId: payload.sessionId });

    await prisma.session.update({
        where: { refreshToken: token },
        data: { refreshToken: newRefreshToken, expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) },
    });

    return { newAccessToken, newRefreshToken };
};

export const AuthService = {
    registerUser,
    verifyEmail,
    loginUser,
    forgotPassword,
    verifyForgotPasswordOTP,
    resetPassword,
    refreshToken,
};
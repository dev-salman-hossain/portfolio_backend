import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { AuthService } from "./auth.service.js";
import { StatusCodes } from "http-status-codes";
const isProduction = process.env.NODE_ENV === "production";
// Route 1: POST /register
const register = catchAsync(async (req, res) => {
    const result = await AuthService.registerUser(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Registration successful. Please check your email to verify your account.",
        data: result,
    });
});
// Route 2: POST /verify-email
const verifyEmail = catchAsync(async (req, res) => {
    const result = await AuthService.verifyEmail(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Email verified successfully. You can now log in.",
        data: result,
    });
});
// Route 3: POST /login
const login = catchAsync(async (req, res) => {
    const userAgent = req.headers["user-agent"];
    const ip = req.ip;
    const result = await AuthService.loginUser(req.body, userAgent, ip);
    res.cookie("accessToken", result.accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        maxAge: 1000 * 60 * 15, // 15 minutes
    });
    res.cookie("refreshToken", result.refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Logged in successfully.",
        data: { accessToken: result.accessToken },
    });
});
// Route 4: POST /forgot-password
const forgotPassword = catchAsync(async (req, res) => {
    const result = await AuthService.forgotPassword(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Password reset OTP sent to your email.",
        data: result,
    });
});
// Route 5: POST /verify-forgot-password-otp
const verifyForgotPasswordOTP = catchAsync(async (req, res) => {
    const result = await AuthService.verifyForgotPasswordOTP(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "OTP verified. Use the reset token to reset your password.",
        data: result,
    });
});
// Route 6: POST /reset-password/:resetToken
const resetPassword = catchAsync(async (req, res) => {
    const resetToken = req.params.resetToken;
    const result = await AuthService.resetPassword(resetToken, req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Password reset successfully. Please log in again.",
        data: result,
    });
});
// Route 7: POST /refresh-token
const refreshToken = catchAsync(async (req, res) => {
    const token = req.cookies.refreshToken;
    const result = await AuthService.refreshToken(token);
    res.cookie("accessToken", result.newAccessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        maxAge: 1000 * 60 * 15,
    });
    res.cookie("refreshToken", result.newRefreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Tokens refreshed successfully.",
        data: null,
    });
});
export const AuthController = {
    register,
    verifyEmail,
    login,
    forgotPassword,
    verifyForgotPasswordOTP,
    resetPassword,
    refreshToken,
};
//# sourceMappingURL=auth.controller.js.map
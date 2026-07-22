import { UserCreateType, UserLoginType, EmailVerifyType, ForgotPasswordType, ResetPasswordType } from "./auth.validation.js";
export declare const AuthService: {
    registerUser: (payload: UserCreateType) => Promise<{
        id: string;
        fullName: string;
        email: string;
        isVerified: boolean;
    }>;
    verifyEmail: (payload: EmailVerifyType) => Promise<{
        id: string;
        fullName: string;
        email: string;
        isVerified: boolean;
    }>;
    loginUser: (payload: UserLoginType, userAgent?: string, ip?: string) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    forgotPassword: (payload: ForgotPasswordType) => Promise<{
        message: string;
    }>;
    verifyForgotPasswordOTP: (payload: EmailVerifyType) => Promise<{
        resetToken: `${string}-${string}-${string}-${string}-${string}`;
    }>;
    resetPassword: (resetToken: string, payload: ResetPasswordType) => Promise<{
        id: string;
        fullName: string;
        email: string;
    }>;
    refreshToken: (token: string) => Promise<{
        newAccessToken: string;
        newRefreshToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map
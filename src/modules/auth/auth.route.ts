import { Router } from "express";
import { AuthController } from "./auth.controller.js";

const router = Router();

// Route 1: ইউজার রেজিস্ট্রেশন করবে এবং OTP ইমেইলে যাবে
router.post("/register", AuthController.register);

// Route 2: ইমেইলে পাওয়া OTP দিয়ে ইমেইল ভেরিফাই করবে
router.post("/verify-email", AuthController.verifyEmail);

// Route 3: লগইন করবে এবং tokens cookie-তে set হবে
router.post("/login", AuthController.login);

// Route 4: পাসওয়ার্ড ভুলে গেলে ইমেইলে OTP পাঠাবে
router.post("/forgot-password", AuthController.forgotPassword);

// Route 5: ফরগট পাসওয়ার্ডের OTP ভেরিফাই করবে, resetToken পাবে
router.post("/verify-forgot-password-otp", AuthController.verifyForgotPasswordOTP);

// Route 6: resetToken ব্যবহার করে নতুন পাসওয়ার্ড সেট করবে
router.post("/reset-password/:resetToken", AuthController.resetPassword);

// Route 7: access token expire হলে refresh token দিয়ে নতুন token নেবে
router.post("/refresh-token", AuthController.refreshToken);

export const AuthRoutes = router;

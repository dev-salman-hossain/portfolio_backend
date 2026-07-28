import bcrypt from "bcrypt";

/**
 * Generates a 6-digit numeric OTP code string.
 */
export const generateOTP = (): string => {
    // Generate a secure random 6-digit numeric verification code
    return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Hashes a generated OTP string using bcrypt.
 */
export const hashOTP = async (otp: string): Promise<string> => {
    // Secure cost factor of 15 selected to prevent fast brute force attempts
    return bcrypt.hash(otp, 15);
};

/**
 * Verifies the validity of an OTP against its hashed counterpart.
 */
export const verifyOTP = async (otp: string, hashedOTP: string): Promise<boolean> => {
    return bcrypt.compare(otp, hashedOTP);
};

import { redisClient } from "../config/redis.js";

const OTP_EXPIRY = 2 * 60; // 2 minutes in seconds

type OTPType = "email_verification" | "password_reset" | "two_factor";

/**
 * Persists a hashed OTP to Redis with an expiration timeframe.
 */
const saveOTP = async (type: OTPType, userId: string, hashedOTP: string) => {
    const key = `otp:${type}:${userId}`;
    await redisClient.set(key, hashedOTP, { EX: OTP_EXPIRY });
    return { userId, type };
};

const getOTP = async (type: OTPType, userId: string): Promise<string | null> => {
    const key = `otp:${type}:${userId}`;
    return redisClient.get(key);
};

const deleteOTP = async (type: OTPType, userId: string) => {
    const key = `otp:${type}:${userId}`;
    await redisClient.del(key);
};

export const OTPServices = {
    saveOTP,
    getOTP,
    deleteOTP,
};

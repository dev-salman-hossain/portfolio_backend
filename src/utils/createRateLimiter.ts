import rateLimit, { RateLimitRequestHandler } from "express-rate-limit"
import { RateLimiterOptions } from "../types/index.js"

export const createRateLimiter =({
    windowMs = 15 * 60 * 1000,
    max = 5, 
    message = 'Too many requests, please try again later.',
    prefix,
}:RateLimiterOptions):RateLimitRequestHandler =>{
    return rateLimit ({
        windowMs,
        max, 
        standardHeaders:true, legacyHeaders :false,
        message : {
            success :false,
            message
        },
    })
}
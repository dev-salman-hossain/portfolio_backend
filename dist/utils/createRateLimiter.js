import rateLimit from "express-rate-limit";
export const createRateLimiter = ({ windowMs = 15 * 60 * 1000, max = 5, message = 'Too many requests, please try again later.', prefix, }) => {
    return rateLimit({
        windowMs,
        max,
        standardHeaders: true, legacyHeaders: false,
        message: {
            success: false,
            message
        },
    });
};
//# sourceMappingURL=createRateLimiter.js.map
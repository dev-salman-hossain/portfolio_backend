import { RateLimitRequestHandler } from "express-rate-limit";
import { RateLimiterOptions } from "../types/index.js";
export declare const createRateLimiter: ({ windowMs, max, message, prefix, }: RateLimiterOptions) => RateLimitRequestHandler;
//# sourceMappingURL=createRateLimiter.d.ts.map
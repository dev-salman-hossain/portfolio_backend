import { createRateLimiter } from "../utils/createRateLimit.js";

const loginRateLimiter = createRateLimiter({
    prefix : 'login',
    max:5,
    message:'Too many login attempts.'
})
import { createRateLimiter } from "../utils/createRateLimiter.js";


const loginRateLimiter = createRateLimiter({
    prefix : 'login',
    max:5,
    message:'Too many login attempts.'
})
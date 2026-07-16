export interface RateLimiterOptions {
    windowMs ?: number
    max ?: number
    message ?: string
    prefix ?: string
}

export interface JwtPayload {
    userId: string;
    email: string;
}

export interface RefreshTokenPayload {
    userId: string;
    email: string;
    sessionId: string;
}
import jwt from "jsonwebtoken";
import env from "../../config/env.js";
import { JwtPayload, RefreshTokenPayload } from "../../types/index.js";

/**
 * Creates a JWT access token valid for 15 minutes.
 */
export const createAccessToken = (payload: JwtPayload) => {
    return jwt.sign(payload, env.jwt_access_secret, { expiresIn: "15m" });
};

export const createRefreshToken = (payload: RefreshTokenPayload) => {
    return jwt.sign(payload, env.jwt_refresh_secret, { expiresIn: "7d" });
};

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, env.jwt_access_secret) as JwtPayload;
};

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, env.jwt_refresh_secret) as RefreshTokenPayload;
};

export const createTempLoginToken = (payload: { userId: string; email: string }) => {
    return jwt.sign(payload, env.jwt_temp_secret, { expiresIn: "5m" });
};

export const verifyTempLoginToken = (token: string) => {
    return jwt.verify(token, env.jwt_temp_secret) as { userId: string; email: string };
};

export const generateSessionId = () => {
    return crypto.randomUUID();
};

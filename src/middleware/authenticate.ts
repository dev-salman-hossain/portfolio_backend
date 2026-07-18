import { AppError } from "../errors/AppError.js";
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "../types/index.js";
import { verifyAccessToken } from "../modules/auth/auth.helper.js";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../lib/prisma.js";

// Extend express Request to include user
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}

const isAuthenticated = async (req: Request, _res: Response, next: NextFunction) => {
    try {
        const cookieToken = req.cookies.accessToken;
        const headerToken = req.headers.authorization?.split(" ")[1];
        const token = headerToken || cookieToken;

        if (!token) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access");
        }

        const decoded = verifyAccessToken(token) as JwtPayload;
        if (!decoded) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access");
        }

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, email: true, status: true },
        });

        if (!user) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access");
        }

        if (user.status === "DELETED") {
            throw new AppError(StatusCodes.FORBIDDEN, "Your account has been deleted");
        }

        if (user.status === "BLOCKED") {
            throw new AppError(StatusCodes.FORBIDDEN, "Your account has been blocked");
        }

        req.user = {
            userId: decoded.userId,
            email: decoded.email,
        };

        next();
    } catch (error) {
        next(error);
    }
};

export default isAuthenticated;

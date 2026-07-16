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
            throw Object.assign(new Error("Unauthorized access"), { statusCode: StatusCodes.UNAUTHORIZED });
        }

        const decoded = verifyAccessToken(token) as JwtPayload;
        if (!decoded) {
            throw Object.assign(new Error("Unauthorized access"), { statusCode: StatusCodes.UNAUTHORIZED });
        }

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, email: true, status: true },
        });

        if (!user) {
            throw Object.assign(new Error("Unauthorized access"), { statusCode: StatusCodes.UNAUTHORIZED });
        }

        if (user.status === "DELETED") {
            throw Object.assign(new Error("Your account has been deleted"), { statusCode: StatusCodes.FORBIDDEN });
        }

        if (user.status === "BLOCKED") {
            throw Object.assign(new Error("Your account has been blocked"), { statusCode: StatusCodes.FORBIDDEN });
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

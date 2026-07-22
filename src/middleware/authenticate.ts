import { AppError } from "../errors/AppError.js";
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "../types/index.js";
import { verifyAccessToken } from "../modules/auth/auth.helper.js";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../lib/prisma.js";

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
        const authToken = headerToken || cookieToken;

        if (!authToken) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "Unauthorized access token missing");
        }

        const decodedToken = verifyAccessToken(authToken) as JwtPayload;
        if (!decodedToken) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid authentication token");
        }

        const activeUser = await prisma.user.findUnique({
            where: { id: decodedToken.userId },
            select: { id: true, email: true, status: true },
        });

        if (!activeUser) {
            throw new AppError(StatusCodes.UNAUTHORIZED, "User account not found");
        }

        if (activeUser.status === "DELETED") {
            throw new AppError(StatusCodes.FORBIDDEN, "Your account has been deleted");
        }

        if (activeUser.status === "BLOCKED") {
            throw new AppError(StatusCodes.FORBIDDEN, "Your account has been blocked");
        }

        req.user = {
            userId: activeUser.id,
            email: activeUser.email,
        };

        next();
    } catch (error) {
        next(error);
    }
};

export default isAuthenticated;
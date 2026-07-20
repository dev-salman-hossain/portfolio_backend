import { Request, Response, NextFunction } from "express";

/**
 * Fallback middleware for handling undefined API routes (404 Not Found).
 */
const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
        errorSources: [
            {
                path: req.originalUrl,
                message: "API Route Not Found",
            },
        ],
    });
};

export default notFound;

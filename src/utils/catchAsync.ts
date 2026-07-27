import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * Wraps an asynchronous Express request handler to catch any rejected promises
 * and pass them to the next middleware (error handler).
 */
const catchAsync = (fn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // Ensure all async execution errors are caught and forwarded to Express error handling pipeline
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};

export default catchAsync;

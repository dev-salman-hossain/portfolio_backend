import { Response } from "express";

type TResponseData<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data: T;
};

/**
 * Sends a standardized API response JSON structure.
 */
const sendResponse = <T>(res: Response, payload: TResponseData<T>): void => {
    res.status(payload.statusCode).json({
        success: payload.success,
        message: payload.message || "Request completed successfully",
        data: payload.data,
    });
};

export default sendResponse;
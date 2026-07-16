import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import authService from "./auth.service.js";
import { UserCreateType, UserLoginType } from "./auth.validation.js";

const register = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body as UserCreateType;
    const result = await authService.createUser(userData);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User registered successfully",
        data: result,
    });
});

const login = catchAsync(async (req: Request, res: Response) => {
    const loginData = req.body as UserLoginType;
    const result = await authService.loginUser(loginData);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully",
        data: result,
    });
});

export const AuthController = {
    register,
    login,
};

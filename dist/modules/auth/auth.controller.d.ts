import { Request, Response } from "express";
export declare const AuthController: {
    register: (req: Request, res: Response, next: import("express").NextFunction) => void;
    verifyEmail: (req: Request, res: Response, next: import("express").NextFunction) => void;
    login: (req: Request, res: Response, next: import("express").NextFunction) => void;
    forgotPassword: (req: Request, res: Response, next: import("express").NextFunction) => void;
    verifyForgotPasswordOTP: (req: Request, res: Response, next: import("express").NextFunction) => void;
    resetPassword: (req: Request, res: Response, next: import("express").NextFunction) => void;
    refreshToken: (req: Request, res: Response, next: import("express").NextFunction) => void;
};
//# sourceMappingURL=auth.controller.d.ts.map
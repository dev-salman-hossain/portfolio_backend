import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { ContactService } from "./contact.service.js";
import { StatusCodes } from "http-status-codes";

const saveMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.saveMessage(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Message sent successfully",
    data: result,
  });
});

const getMessages = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.getMessages();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Messages retrieved successfully",
    data: result,
  });
});

const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.deleteMessage(req.params.id as string);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Message deleted successfully",
    data: result,
  });
});

export const ContactController = {
  saveMessage,
  getMessages,
  deleteMessage,
};
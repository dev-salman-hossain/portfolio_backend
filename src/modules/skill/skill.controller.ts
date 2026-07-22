import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { SkillService } from "./skill.service.js";
import { StatusCodes } from "http-status-codes";

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.createSkill(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.getAllSkills();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.updateSkill(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.deleteSkill(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skill deleted successfully",
    data: result,
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
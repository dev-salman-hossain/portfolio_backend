import { z } from "zod";

export const createExperienceValidationSchema = z.object({
  body: z.object({
    role: z.string({ required_error: "Role is required" }),
    company: z.string({ required_error: "Company is required" }),
    startDate: z.string({ required_error: "Start Date is required" }),
    endDate: z.string().optional(),
    currentlyWorking: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

export const updateExperienceValidationSchema = z.object({
  body: z.object({
    role: z.string().optional(),
    company: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    currentlyWorking: z.boolean().optional(),
    description: z.string().optional(),
  }),
});
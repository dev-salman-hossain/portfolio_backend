import { z } from "zod";

// Validation schema for creating a work experience entry
export const createExperienceValidationSchema = z.object({
  body: z.object({
    role: z.string().min(1, "Role is required"),
    company: z.string().min(1, "Company is required"),
    startDate: z.string().min(1, "Start Date is required"),
    endDate: z.string().optional(),
    currentlyWorking: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

// Validation schema for updating a work experience entry
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
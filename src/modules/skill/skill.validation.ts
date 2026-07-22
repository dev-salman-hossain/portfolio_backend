import { z } from "zod";

export const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    icon: z.string().optional(),
    proficiency: z.number().min(0).max(100).default(80),
    category: z.string().optional(),
  }),
});

export const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    icon: z.string().optional(),
    proficiency: z.number().min(0).max(100).optional(),
    category: z.string().optional(),
  }),
});
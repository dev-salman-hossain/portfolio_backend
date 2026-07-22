import { z } from "zod";

export const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }),
    description: z.string({ required_error: "Description is required" }),
    content: z.string().optional(),
    thumbnail: z.string().optional(),
    githubUrl: z.string().url().optional().or(z.literal("")),
    liveUrl: z.string().url().optional().or(z.literal("")),
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(["DRAFT", "PUBLISHED"]).default("PUBLISHED"),
    categoryId: z.string().optional(),
  }),
});

export const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    content: z.string().optional(),
    thumbnail: z.string().optional(),
    githubUrl: z.string().url().optional().or(z.literal("")),
    liveUrl: z.string().url().optional().or(z.literal("")),
    technologies: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
    categoryId: z.string().optional(),
  }),
});
import { z } from "zod";

export const UserCreateSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 character'),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'password must be at least 6 character long').max(16, 'password must be less than 16 character'),
    role: z.enum(['ADMIN', 'USER'], { invalid_type_error: 'Invalid user role' }).optional()
});

export const UserLoginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(1, 'Password is required')
});

export type UserCreateType = z.infer<typeof UserCreateSchema>;
export type UserLoginType = z.infer<typeof UserLoginSchema>;
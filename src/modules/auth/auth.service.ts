import { prisma } from "../../lib/prisma.js";
import { UserCreateType, UserLoginType } from "./auth.validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../../config/env.js";

const createUser = async (payload: UserCreateType) => {
    const existingUser = await prisma.user.findUnique({ where: { email: payload.email } });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await prisma.user.create({
        data: {
            ...payload,
            password: hashedPassword,
        },
    });

    return user;
};

const loginUser = async (payload: UserLoginType) => {
    const user = await prisma.user.findUnique({ where: { email: payload.email } });
    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(payload.password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET || 'secret123',
        { expiresIn: "1d" }
    );

    return { user, token };
};

export default { createUser, loginUser };
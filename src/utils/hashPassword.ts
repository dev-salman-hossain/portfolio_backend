import bcrypt from "bcrypt";

/**
 * Hashes a plaintext password using bcrypt with high work factor.
 */
export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, 15);
};

/**
 * Compares plaintext password against a hashed representation.
 */
export const verifyPassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

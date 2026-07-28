/**
 * Simple regular expression for email validation.
 *
 * @param email - The email string to validate.
 * @returns True if valid email format, false otherwise.
 */
export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

import nodemailer from "nodemailer";
import env from "../config/env.js";

const transporter = nodemailer.createTransport({
    host: env.smtp_host,
    port: env.smtp_port,
    auth: {
        user: env.smtp_user,
        pass: env.smtp_pass,
    },
});

export const sendVerificationEmail = async (
    toEmail: string,
    fullName: string,
    otp: string
) => {
    const mailOptions = {
        from: `"Portfolio App" <${env.smtp_user}>`,
        to: toEmail,
        subject: "Email Verification OTP",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
                <h2>Hello, ${fullName}!</h2>
                <p>Your OTP code is:</p>
                <div style="background: #f4f4f4; padding: 16px; font-size: 28px; font-weight: bold; letter-spacing: 8px; text-align: center; border-radius: 8px;">
                    ${otp}
                </div>
                <p>This code expires in <strong>5 minutes</strong>. Do not share it with anyone.</p>
            </div>
        `,
    };

    await transporter.sendMail(mailOptions);
};

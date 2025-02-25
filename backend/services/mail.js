import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const refreshToken = process.env.REFRESH_TOKEN;
const senderEmail = process.env.GMAIL_USER;

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
oAuth2Client.setCredentials({ refresh_token: refreshToken });

const sendReferralEmail = async (to, subject, text,referralCode) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: senderEmail,
                clientId,
                clientSecret,
                refreshToken,
                accessToken: accessToken.token,
            },
        });
        const accessLink = "https://accredian.com/"
        const mailOptions = {
            from: `Accredian <${senderEmail}>`,
            to,
            subject,
            text:`${text}`,
            html:  `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; padding: 20px;">
                <div style="max-width: 500px; background: #ffffff; padding: 20px; border-radius: 8px; margin: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <h2 style="color: #333;">You're Invited! 🎉</h2>
                    <p>Hello,</p>
                    <p>${text}</p>
                    <p>Here is your Refrral code - ${referralCode}</p>
                    <a href="${accessLink}" 
                       style="display: inline-block; padding: 12px 20px; font-size: 16px; color: #ffffff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-top: 10px;">
                       Access Now
                    </a>
                    <p style="margin-top: 20px; font-size: 14px; color: #777;">© 2025 Accredian. All rights reserved.</p>
                </div>
            </div>
        `,
        };

        const result = await transport.sendMail(mailOptions);
        console.log(`📧 Email sent to ${to}`);
        return result;
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw new Error("Failed to send email");
    }
};

export { sendReferralEmail };

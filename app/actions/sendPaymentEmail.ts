"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

export async function sendPaymentEmails({
    email,
    paymentMethod,
}: {
    email: string;
    paymentMethod: string;
}) {
    try {
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "Unknown IP";
        const dateTime = new Date().toLocaleString("en-US", { timeZoneName: "short" });

        // Provide an automatic free testing fallback for development if .env is not yet configured
        let transporter;
        if (process.env.SMTP_HOST && process.env.SMTP_HOST !== "") {
            transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || "587"),
                secure: process.env.SMTP_SECURE === "true",
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });
        } else {
            console.log("No SMTP_HOST found in .env. Automatically generating a free test email account...");
            const testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
        }

        const adminHtml = `
            <h2>New client request received</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            <p><strong>Date:</strong> ${dateTime}</p>
            <p><strong>IP:</strong> ${ip}</p>
        `;

        const userHtml = `
            <p>Your request has been received successfully.</p>
            <p><strong>Selected Payment Method:</strong> ${paymentMethod}</p>
            <p>Our team is currently processing your request. You will receive further instructions shortly.</p>
        `;

        // Send both emails concurrently. We wrap in try block so if env vars aren't set, it fails gracefully.
        const [adminInfo, userInfo] = await Promise.all([
            transporter.sendMail({
                from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@8kprime.com",
                to: "infos@8kprime.com",
                subject: "New Payment Request",
                html: adminHtml,
            }),
            transporter.sendMail({
                from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@8kprime.com",
                to: email,
                subject: "Payment Request Received",
                html: userHtml,
            })
        ]);

        if (!process.env.SMTP_HOST || process.env.SMTP_HOST === "") {
            console.log("\n=============================================");
            console.log("SUCCESS! Test emails sent via Ethereal.");
            console.log("Admin Email Preview URL: " + nodemailer.getTestMessageUrl(adminInfo));
            console.log("User Email Preview URL: " + nodemailer.getTestMessageUrl(userInfo));
            console.log("=============================================\n");
        }

        return { success: true };
    } catch (error) {
        console.error("Error sending emails:", error);
        return { success: false, error: "Failed to send emails" };
    }
}

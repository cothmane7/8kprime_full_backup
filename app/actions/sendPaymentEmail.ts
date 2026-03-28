"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

const PRICE_MAP: Record<string, string> = {
    "12mo": "€79.99",
    "6mo": "€59.99",
    "3mo": "€39.99",
    "24mo": "€129.99",
};

const PLAN_LABELS: Record<string, string> = {
    "12mo": "12 Months Access",
    "6mo": "6 Months Access",
    "3mo": "3 Months Access",
    "24mo": "24 Months Access",
};

const PAYMENT_LINKS: Record<string, string> = {
    "3mo": "https://nas.io/checkout-global?communityId=69a2be48dd35f30983fdb5d9&communityCode=BUSINESS_223679&requestor=signupRequestor&linkClicked=https%3A%2F%2Fnas.io%2F8kprime&tierId=69c6ff9748ef0799ea7d7df7",
    "6mo": "https://nas.io/checkout-global?communityId=69a2be48dd35f30983fdb5d9&communityCode=BUSINESS_223679&requestor=signupRequestor&linkClicked=https%3A%2F%2Fnas.io%2F8kprime&tierId=69c6ffb50452adfa7b38c19d",
    "12mo": "https://nas.io/checkout-global?communityId=69a2be48dd35f30983fdb5d9&communityCode=BUSINESS_223679&requestor=signupRequestor&linkClicked=https%3A%2F%2Fnas.io%2F8kprime&tierId=69c6fe4a5e80817cdbe8918b",
};

export async function sendPaymentEmails({
    email,
    paymentMethod,
    plan,
    devices,
}: {
    email: string;
    paymentMethod: string;
    plan: string;
    devices: string;
}) {
    try {
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "Unknown IP";
        const dateTime = new Date().toLocaleString("en-US", { timeZoneName: "short" });
        const price = PRICE_MAP[plan] || "N/A";
        const planLabel = PLAN_LABELS[plan] || plan;

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

        // ── Admin notification email ──
        const adminHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; border-radius: 16px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #b08d3e, #d4a843); padding: 24px 32px;">
                    <h1 style="margin: 0; font-size: 22px; color: #000;">🔔 New Order Received</h1>
                </div>
                <div style="padding: 32px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Customer Email</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: bold; text-align: right;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Plan</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: bold; text-align: right;">${planLabel}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Devices</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: bold; text-align: right;">${devices}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Payment Method</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #d4a843; font-weight: bold; text-align: right; text-transform: uppercase;">${paymentMethod}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Total Price</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #4ade80; font-weight: bold; font-size: 18px; text-align: right;">${price}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Date & Time</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; text-align: right;">${dateTime}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #888; font-size: 13px;">IP Address</td>
                            <td style="padding: 12px 0; color: #fff; text-align: right;">${ip}</td>
                        </tr>
                    </table>
                </div>
            </div>
        `;

        // ── Customer confirmation email ──
        const userHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; border-radius: 16px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #b08d3e, #d4a843); padding: 24px 32px;">
                    <h1 style="margin: 0; font-size: 22px; color: #000;">✅ Order Confirmation</h1>
                    <p style="margin: 8px 0 0; color: #000; font-size: 14px;">Thank you for choosing 8K PRIME TV</p>
                </div>
                <div style="padding: 32px;">
                    <p style="color: #fff; line-height: 1.6; margin-bottom: 24px; text-align: center; font-size: 15px;">
                        To activate your subscription instantly, please complete your secure payment by selecting one of the plans below:
                    </p>

                    <!-- Nas.io Payment Button (Dynamic) -->
                    ${PAYMENT_LINKS[plan] ? `
                    <div style="text-align: center; margin-bottom: 32px;">
                        <div style="background: #111; border: 1px solid ${plan === '12mo' ? '#d4a843' : '#333'}; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                            ${plan === '12mo' ? `<div style="background: #d4a843; color: #000; font-size: 11px; font-weight: bold; text-transform: uppercase; padding: 4px 8px; border-radius: 4px; display: inline-block; margin-bottom: 8px;">Most Popular</div>` : ''}
                            <h3 style="color: #fff; margin: 0 0 8px; font-size: 18px;">${planLabel}</h3>
                            <p style="color: #d4a843; font-size: 20px; font-weight: bold; margin: 0 0 16px;">${price}</p>
                            <a href="${PAYMENT_LINKS[plan]}" style="display: inline-block; background: linear-gradient(135deg, #b08d3e, #d4a843); color: #000; text-decoration: none; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-transform: uppercase; font-size: 14px;">Get Instant Access</a>
                        </div>
                    </div>
                    ` : `
                    <div style="text-align: center; margin-bottom: 32px;">
                        <p style="color: #d4a843; font-size: 15px; font-weight: bold;">Our team will reply shortly with the payment details for your chosen plan.</p>
                    </div>
                    `}

                    <p style="color: #888; font-size: 13px; margin-bottom: 16px; border-top: 1px solid #222; padding-top: 24px;">
                        Order Request Summary:
                    </p>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Plan</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: bold; text-align: right;">${planLabel}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Devices</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: bold; text-align: right;">${devices}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Payment Method</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #d4a843; font-weight: bold; text-align: right; text-transform: uppercase;">${paymentMethod}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #888; font-size: 13px;">Total</td>
                            <td style="padding: 12px 0; color: #4ade80; font-weight: bold; font-size: 18px; text-align: right;">${price}</td>
                        </tr>
                    </table>
                    <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                        <p style="color: #d4a843; font-weight: bold; margin: 0 0 8px;">⏳ What happens next?</p>
                        <p style="color: #aaa; font-size: 13px; line-height: 1.6; margin: 0;">
                            Our team will process your payment and deliver your subscription credentials and setup instructions to this email address shortly.
                        </p>
                    </div>
                    <p style="color: #666; font-size: 11px; text-align: center; margin: 0;">
                        If you have any questions, reply to this email or contact us at infos8kprime@gmail.com
                    </p>
                </div>
            </div>
        `;

        const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || "infos8kprime@gmail.com";
        const emailFromName = "8K PRIME TV Support";
        const [adminInfo, userInfo] = await Promise.all([
            transporter.sendMail({
                from: fromAddress,
                to: "infos8kprime@gmail.com",
                subject: `🔔 New Order: ${planLabel} (${devices} device${parseInt(devices) > 1 ? 's' : ''}) — ${price}`,
                html: adminHtml,
            }),
            transporter.sendMail({
                from: fromAddress,
                to: email,
                subject: "Your 8K PRIME TV Order Confirmation",
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

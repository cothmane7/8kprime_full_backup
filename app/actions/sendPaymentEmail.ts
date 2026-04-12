"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

const PRICE_MAP: Record<string, string> = {
    "12mo": "$69.99",
    "6mo": "$49.99",
    "3mo": "$29.99",
    "24mo": "$119.99",
};

const PLAN_LABELS: Record<string, string> = {
    "12mo": "12 Months Access",
    "6mo": "6 Months Access",
    "3mo": "3 Months Access",
    "24mo": "24 Months Access",
};

const PAYPAL_LINKS: Record<string, string> = {
    // 1 Device Plans
    "3mo_1": "https://www.paypal.com/ncp/payment/JKB4L3Z33JN6N",
    "6mo_1": "https://www.paypal.com/ncp/payment/TJGUAJKSDC8KY",
    "12mo_1": "https://www.paypal.com/ncp/payment/FUC32WLY2VHN2",
    "24mo_1": "https://www.paypal.com/ncp/payment/3ZSGWQJCUTE6Y",

    // 2 Devices Plans
    "3mo_2": "https://www.paypal.com/ncp/payment/GLW8GKB6LW3U8",
    "6mo_2": "https://www.paypal.com/ncp/payment/FW3MRDXCDNJHJ",
    "12mo_2": "https://www.paypal.com/ncp/payment/TK324HG894ZM8",
    "24mo_2": "https://www.paypal.com/ncp/payment/YUV7HZK2SCDJU",

    // 3 Devices Plans
    "3mo_3": "https://www.paypal.com/ncp/payment/5N44QP2Y9CTBG",
    "6mo_3": "https://www.paypal.com/ncp/payment/TK324HG894ZM8",
    "12mo_3": "https://www.paypal.com/ncp/payment/6VW56E3RAZA5S",
    "24mo_3": "https://www.paypal.com/ncp/payment/N32REYDFM7BNW",
};

export async function sendPaymentEmails({
    email,
    username,
    whatsapp,
    paymentMethod,
    plan,
    devices,
    ibo,
}: {
    email: string;
    username?: string;
    whatsapp?: string;
    paymentMethod: string;
    plan: string;
    devices: string;
    ibo?: boolean;
}) {
    try {
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "Unknown IP";
        const dateTime = new Date().toLocaleString("en-US", { timeZoneName: "short" });
        
        // Compute dynamic price using the device multiplier strategy
        const basePriceStr = PRICE_MAP[plan] || "0";
        const basePriceMatch = basePriceStr.match(/[\d.]+/);
        const basePriceNum = basePriceMatch ? parseFloat(basePriceMatch[0]) : 0;
        const multipliers: Record<string, number> = { "1": 1, "2": 1.5, "3": 2, "4": 2.5 };
        const finalPriceNum = basePriceNum * (multipliers[devices] || 1) + (ibo ? 10 * parseInt(devices) : 0);
        const price = basePriceNum > 0 ? `$${finalPriceNum.toFixed(2)}` : "N/A";
        
        const planLabel = PLAN_LABELS[plan] || plan;
        const paymentKey = `${plan}_${devices}`;
        // Exclusively use PayPal links
        const checkoutUrl = PAYPAL_LINKS[paymentKey];
        const displayPaymentMethod = "paypal";

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
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Desired Username</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #d4a843; font-weight: bold; text-align: right;">${username || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">WhatsApp</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: bold; text-align: right;">${whatsapp || 'N/A'}</td>
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
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #d4a843; font-weight: bold; text-align: right; text-transform: uppercase;">${displayPaymentMethod}</td>
                        </tr>
                        ${ibo ? `<tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">IBO Player</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #e50914; font-weight: bold; text-align: right;">✅ Activation Requested</td>
                        </tr>` : ''}
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
            <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #ffffff; color: #333;">
                <div style="background: #0a0a0a; padding: 20px 24px; text-align: center;">
                    <h1 style="margin: 0; font-size: 18px; color: #d4a843; letter-spacing: 2px;">8KPRIME TV</h1>
                </div>
                <div style="padding: 24px;">
                    <p style="margin: 0 0 16px; font-size: 15px;">Hi <strong>${username || 'there'}</strong>, your order is confirmed! 🎉</p>

                    <table style="width: 100%; background: #f7f7f7; border-radius: 8px; padding: 2px; margin-bottom: 16px; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 14px; font-size: 13px; color: #666;">Plan</td>
                            <td style="padding: 10px 14px; font-size: 13px; font-weight: bold; text-align: right;">${planLabel}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 14px; font-size: 13px; color: #666; border-top: 1px solid #eee;">Devices</td>
                            <td style="padding: 10px 14px; font-size: 13px; font-weight: bold; text-align: right; border-top: 1px solid #eee;">${devices}</td>
                        </tr>
                        ${ibo ? `<tr>
                            <td style="padding: 10px 14px; font-size: 13px; color: #666; border-top: 1px solid #eee;">IBO Player</td>
                            <td style="padding: 10px 14px; font-size: 13px; font-weight: bold; text-align: right; color: #e50914; border-top: 1px solid #eee;">Included</td>
                        </tr>` : ''}
                        <tr>
                            <td style="padding: 12px 14px; font-size: 15px; font-weight: bold; border-top: 2px solid #d4a843;">Total</td>
                            <td style="padding: 12px 14px; font-size: 20px; font-weight: bold; text-align: right; color: #d4a843; border-top: 2px solid #d4a843;">${price}</td>
                        </tr>
                    </table>

                    <p style="margin: 0 0 8px; font-size: 14px; font-weight: bold;">Complete payment in 3 steps:</p>
                    <p style="margin: 0 0 4px; font-size: 13px; color: #444;">1️⃣ Click the button below</p>
                    <p style="margin: 0 0 4px; font-size: 13px; color: #444;">2️⃣ Send <strong>${price}</strong> via PayPal</p>
                    <p style="margin: 0 0 16px; font-size: 13px; color: #444;">3️⃣ You'll receive your login within minutes</p>

                    <div style="text-align: center; margin-bottom: 16px;">
                        <a href="https://www.paypal.com/paypalme/nohakd/${finalPriceNum.toFixed(2)}" style="display: inline-block; background: #d4a843; color: #000; text-decoration: none; font-weight: bold; padding: 14px 40px; border-radius: 6px; font-size: 16px;">PAY ${price} NOW →</a>
                    </div>

                    <p style="margin: 0; font-size: 11px; color: #999; text-align: center;">Questions? Reply to this email or WhatsApp us at +1 818 565 6691</p>
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

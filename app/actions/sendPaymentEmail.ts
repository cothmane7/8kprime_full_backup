"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

const PRICE_TABLE: Record<string, Record<string, number>> = {
    "1": { "3mo": 39.99, "6mo": 59.99, "12mo": 79.99 },
    "2": { "3mo": 69.99, "6mo": 99.99, "12mo": 149.99 },
    "3": { "3mo": 99.99, "6mo": 159.99, "12mo": 199.99 },
    "4": { "3mo": 129.99, "6mo": 199.99, "12mo": 259.99 },
};

const PLAN_LABELS: Record<string, string> = {
    "12mo": "12 Months Access",
    "6mo": "6 Months Access",
    "3mo": "3 Months Access",
};

export async function sendPaymentEmails({
    email,
    username,
    whatsapp,
    paymentMethod,
    plan,
    devices,
    ibo,
    couponApplied,
}: {
    email: string;
    username?: string;
    whatsapp?: string;
    paymentMethod: string;
    plan: string;
    devices: string;
    ibo?: boolean;
    couponApplied?: boolean;
}) {
    try {
        const headersList = await headers();
        const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "Unknown IP";
        const dateTime = new Date().toLocaleString("en-US", { timeZoneName: "short" });
        
        // Compute price from fixed lookup table
        const basePriceNum = PRICE_TABLE[devices]?.[plan] || 0;
        const subtotal = basePriceNum + (ibo ? 10 * parseInt(devices) : 0);
        const discountAmount = couponApplied ? subtotal * 0.1 : 0;
        const finalPriceNum = subtotal - discountAmount;
        const price = basePriceNum > 0 ? `$${finalPriceNum.toFixed(2)}` : "N/A";
        
        const planLabel = PLAN_LABELS[plan] || plan;
        // Dynamic PayPal.me link with preset amount
        const checkoutUrl = `https://www.paypal.com/paypalme/nohakd/${finalPriceNum.toFixed(2)}`;
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
                        ${couponApplied ? `<tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Coupon Discount</td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #4ade80; font-weight: bold; text-align: right;">-10% (EXTRA10) applied</td>
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

                    <div style="background: #fee2e2; border: 2px solid #ef4444; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <p style="margin: 0 0 8px; font-size: 14px; font-weight: bold; color: #dc2626; text-align: center;">⚠️ VERY IMPORTANT — READ BEFORE PAYING ⚠️</p>
                        <p style="margin: 0 0 6px; font-size: 13px; color: #991b1b; text-align: center; font-weight: bold;">DO NOT write anything in the PayPal notes/message field.</p>
                        <p style="margin: 0; font-size: 12px; color: #991b1b; text-align: center;">Never mention IPTV, streaming, channels, or TV in your payment. Leave the notes section <strong>completely empty</strong>. Failure to do so may result in payment delays or cancellation.</p>
                    </div>

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

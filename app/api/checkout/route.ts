import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { type, fullName, email, whatsapp, deviceType, macAddress, plan, devices, price } = data;

        // Create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 1. Email to admin (infos8kprime@gmail.com)
        const adminMailOptions = {
            from: `"${fullName}" <${process.env.SMTP_FROM}>`,
            to: "infos8kprime@gmail.com",
            replyTo: email,
            subject: `New IPTV Order: ${plan.months} Months - ${fullName}`,
            html: `
                <h2>New Subscription Order</h2>
                <p><strong>Customer Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                <br />
                <h3>Order Details</h3>
                <p><strong>Type:</strong> ${type === 'new' ? 'New Account' : 'Renew Account'}</p>
                <p><strong>Plan:</strong> ${plan.months} Months</p>
                <p><strong>Connections:</strong> ${devices}</p>
                <p><strong>Total Price:</strong> €${price}</p>
                <br />
                <h3>Device Information</h3>
                <p><strong>Device Type:</strong> ${deviceType}</p>
                ${macAddress ? `<p><strong>MAC Address:</strong> ${macAddress}</p>` : ''}
            `,
        };

        // Send admin email only
        await transporter.sendMail(adminMailOptions);

        return NextResponse.json({ success: true, message: "Emails sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send emails" }, { status: 500 });
    }
}

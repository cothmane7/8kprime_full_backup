import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Shield, FileText, ChevronRight } from "lucide-react";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return { title: `Terms of Service - 8KPRIME` };
}

export default async function TermsPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    const sections = [
        {
            title: "1. ACCEPTANCE OF TERMS",
            content: [
                "By accessing and using the services provided by 8KPRIME (\"we,\" \"us,\" or \"our\") through our website at 8kprime.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
                "Your use of our website and services constitutes your express acceptance of these terms, our Privacy Policy, and any other legal notices published by us on the Service."
            ]
        },
        {
            title: "2. DESCRIPTION OF SERVICES",
            content: [
                "8KPRIME provides digital streaming services, including live TV channels and on-demand content. We operate as a technical service provider and reserve the right to modify or discontinue any part of the service at any time without notice.",
                "We strive to provide continuous access but do not guarantee specific channel availability or uptime for third-party content feeds."
            ]
        },
        {
            title: "3. ELIGIBILITY AND REGISTRATION",
            content: [
                "To use our Services, you must represent and warrant that you are at least 18 years of age and possess the legal capacity to enter into a binding contract.",
                "Users must provide accurate, current, and complete registration information, including a valid email address and payment details. Failure to maintain accurate information may result in service suspension."
            ]
        },
        {
            title: "4. ACCOUNT SECURITY AND USAGE",
            content: [
                "4.1 Account Creation: You are required to provide a valid email and secure payment information for account activation.",
                "4.2 Security Responsibility: You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
                "4.3 Personal Use Only: Accounts are provided for personal, non-commercial use only. Account sharing or simultaneous use beyond your plan's limits is strictly prohibited and may result in permanent termination of service."
            ]
        },
        {
            title: "5. SUBSCRIPTION PLANS AND FINANCIAL TERMS",
            content: [
                "5.1 Subscription Options: We offer various subscription durations (1, 3, 6, and 12 months). Benefits and features vary by plan selected.",
                "5.2 Pricing: All prices are displayed on our website and are subject to change. However, price changes will not affect active subscriptions until renewal.",
                "5.3 Payment Methods: We accept major credit/debit cards and PayPal. You represent that you have the legal right to use any payment instrument provided.",
                "5.4 Failed Payments: If a payment is not successfully settled, we reserve the right to suspend access to the service until valid payment is received."
            ]
        },
        {
            title: "6. COMPREHENSIVE REFUND POLICY",
            content: [
                "6.1 Refund Eligibility: Refunds are considered exclusively for unresolved technical issues on our end or verified billing errors. We aim to resolve all technical issues within 24-48 hours.",
                "6.2 Refund Process: To request a refund, contact our support team at infos8kprime@gmail.com within 7 days of purchase. Requests beyond this period will not be entertained.",
                "6.3 Non-Refundable Situations: Refunds will not be issued for change of mind, internet connectivity issues on the user's end, device incompatibility, or service interruptions beyond our direct control."
            ]
        },
        {
            title: "7. ACCEPTABLE USE AND PROHIBITIONS",
            content: [
                "You agree not to use the service for any illegal purpose or in violation of any local, state, national, or international law.",
                "Prohibited activities include: reselling the service, redistributing content, using the service for public screenings, and any attempt to reverse engineer or interfere with our servers.",
                "Any violation of this policy will result in immediate termination of all services without refund."
            ]
        },
        {
            title: "8. DEVICE COMPATIBILITY AND LIMITATIONS",
            content: [
                "Our service is compatible with Smart TVs, Android devices, iOS, and Fire Stick. It is your responsibility to ensure your hardware meets the minimum requirements for streaming.",
                "Concurrent connections are strictly limited based on the subscription plan purchased. Attempting to bypass these limits will trigger an automatic account lock."
            ]
        },
        {
            title: "9. SERVICE AVAILABILITY AND MAINTENANCE",
            content: [
                "While we strive for 99.9% uptime, we do not guarantee uninterrupted service. Periodic maintenance and technical upgrades are necessary to maintain service quality.",
                "We are not liable for outages caused by upstream providers, global internet infrastructure issues, or force majeure events."
            ]
        },
        {
            title: "10. INTELLECTUAL PROPERTY RIGHTS",
            content: [
                "All software, branding, logos, and website content are the exclusive property of 8KPRIME or its licensors and are protected by international copyright and trademark laws.",
                "The streaming content itself remains the property of its respective owners; 8KPRIME only provides a technical interface for access."
            ]
        },
        {
            title: "11. GOVERNING LAW AND JURISDICTION",
            content: [
                "These Terms of Service shall be governed by and construed in accordance with the laws of Scotland, United Kingdom.",
                "Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in Scotland, UK."
            ]
        },
        {
            title: "12. CONTACT AND SUPPORT",
            content: [
                "For any legal inquiries or technical questions regarding these Terms, please contact our official support channel at infos8kprime@gmail.com.",
                "We strive to respond to all inquiries within 24 hours during business days."
            ]
        },
        {
            title: "13. PRIVACY AND DATA PROTECTION",
            content: [
                "Your privacy is paramount. Our collection and processing of personal data are governed by our Privacy Policy, which is compliant with GDPR and other relevant data protection regulations.",
                "By using our service, you consent to the data practices described in our Privacy Policy."
            ]
        },
        {
            title: "14. WARRANTIES AND DISCLAIMERS",
            content: [
                "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.",
                "TO THE FULLEST EXTENT PERMITTED BY LAW, 8KPRIME DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT."
            ]
        },
        {
            title: "15. LIMITATION OF LIABILITY",
            content: [
                "TO THE MAXIMUM EXTENT PERMITTED BY LAW, 8KPRIME SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.",
                "IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE TOTAL AMOUNT PAID BY YOU FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM."
            ]
        },
        {
            title: "16. INDEMNIFICATION",
            content: [
                "You agree to indemnify, defend, and hold harmless THE STREAMING AUDIO COMPANY LIMITED, its officers, directors, and employees from any claims, damages, or costs (including legal fees) arising from your breach of these Terms or misuse of the Services."
            ]
        },
        {
            title: "17. DISPUTE RESOLUTION",
            content: [
                "17.1 Informal Resolution: In the event of a dispute, we highly encourage you to contact us first at infos8kprime@gmail.com for an informal resolution.",
                "17.2 Formal Proceedings: If a resolution cannot be reached informally, any formal legal action must be conducted under the jurisdiction of Scotland, UK."
            ]
        },
        {
            title: "18. MODIFICATIONS TO TERMS",
            content: [
                "We reserve the right to revise these Terms at any time. The most current version will always be posted on our website.",
                "Your continued use of the Services after revisions become effective constitutes your agreement to be bound by the revised Terms."
            ]
        },
        {
            title: "19. SEVERABILITY AND WAIVER",
            content: [
                "If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall continue in full force and effect.",
                "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
            ]
        },
        {
            title: "20. ENTIRE AGREEMENT",
            content: [
                "These Terms of Service and our Privacy Policy constitute the entire and exclusive agreement between you and THE STREAMING AUDIO COMPANY LIMITED regarding the Services, superseding any prior agreements."
            ]
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">Legal Framework</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
                        {dictionary.legal.terms_title}
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        {dictionary.legal.terms_subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <section key={index} className="relative group">
                                <div className="absolute -left-6 top-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-300 rounded-full hidden md:block" />
                                <h2 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                                    <span className="text-primary text-sm font-mono opacity-50">#{index + 1}</span>
                                    {section.title}
                                </h2>
                                <div className="space-y-6">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="text-zinc-100 leading-8 text-[17px] font-normal opacity-95 text-justify">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-center">
                            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs mb-2">
                                {dictionary.legal.last_updated}
                            </p>
                            <p className="text-zinc-400 text-sm">
                                © 2018-2026 THE STREAMING AUDIO COMPANY LIMITED. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

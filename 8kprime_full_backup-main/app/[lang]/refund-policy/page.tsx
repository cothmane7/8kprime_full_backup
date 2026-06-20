import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { RotateCcw, Shield } from "lucide-react";

export async function generateMetadata(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return {
        title: `${dictionary.legal.refund_title} - 8KPRIME`,
    };
}

export default async function RefundPolicyPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    const sections = [
        {
            title: "1. INTRODUCTION AND SATISFACTION GUARANTEE",
            content: [
                "At 8KPRIME, customer satisfaction is our absolute priority. We provide a premium streaming experience and stand firmly behind the quality of our service. This Refund Policy outlines the circumstances under which THE STREAMING AUDIO COMPANY LIMITED (operating as 8KPRIME) will process refunds.",
                "We encourage all users to reach out to our 24/7 technical support team before requesting a refund, as most issues are resolved within minutes."
            ]
        },
        {
            title: "2. ELIGIBILITY FOR REFUNDS",
            content: [
                "You are eligible for a full refund if you experience critical technical issues that our elite support team cannot resolve. Eligibility criteria include:",
                "• Persistent buffering or freezing issues directly attributed to our server infrastructure.",
                "• Failure to activate your subscription or provide credentials within the promised timeframe.",
                "• Significant and permanent channel or content availability issues on our end.",
                "• Documented service downtime exceeding 24 consecutive hours."
            ]
        },
        {
            title: "3. REFUND TIMEFRAME",
            content: [
                "Standard refund requests must be submitted within seven (7) days of your initial purchase, in accordance with our 8KPRIME Gold Standard Guarantee.",
                "Requests submitted after the 7-day period will be reviewed on an exceptional basis but are generally not guaranteed for a full refund."
            ]
        },
        {
            title: "4. NON-REFUNDABLE SCENARIOS",
            content: [
                "Refunds will not be issued in the following circumstances:",
                "• Change of mind or personal preference regarding specific content availability.",
                "• Violation of our Acceptable Use Policy or multiple simultaneous connections beyond your plan limit.",
                "• Connectivity issues arising from the user's ISP (Internet Service Provider) or lack of adequate local bandwidth.",
                "• Device incompatibility where the user has not followed our official Setup Guides.",
                "• Applications that have been fully active and utilized beyond the trial or guarantee period."
            ]
        },
        {
            title: "5. HOW TO SUBMIT A REFUND REQUEST",
            content: [
                "To ensure your request is processed efficiently, please follow these formal steps:",
                "1. Contact our Support: Email us at infos8kprime@gmail.com or use our official WhatsApp channel.",
                "2. Required Information: Provide your Order Number, the Email Address used for purchase, and a detailed description of the technical failure.",
                "3. Troubleshooting Consent: You must allow our technical team at least one opportunity to resolve the issue via remote assistance or guided setup before a refund is finalized."
            ]
        },
        {
            title: "6. PROCESSING AND DISBURSEMENT",
            content: [
                "• Review Period: All refund claims are audited by our billing department within 24-48 hours.",
                "• Disbursement: Once approved, the refund is initiated immediately. Depending on your financial institution, funds typically appear in your account within 3-5 business days.",
                "• Method of Refund: All funds will be returned exclusively to the original payment method used (PayPal, Credit Card, or Crypto) to ensure anti-fraud compliance."
            ]
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
                        <RotateCcw className="w-4 h-4 text-primary" />
                        <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">Protection Policy</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
                        {dictionary.legal.refund_title}
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        Experience 8KPRIME completely risk-free. Excellence in service is our commitment to every subscriber.
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
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-center">
                            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs mb-2">
                                {dictionary.legal.last_updated}
                            </p>
                            <p className="text-zinc-400 text-sm">
                                Security & Trust Guaranteed by THE STREAMING AUDIO COMPANY LIMITED.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

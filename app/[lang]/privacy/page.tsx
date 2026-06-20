import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Shield, Lock } from "lucide-react";

export async function generateMetadata(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return {
        title: `${dictionary.legal.privacy_title} - 8KPRIME`,
    };
}

export default async function PrivacyPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    const sections = [
        {
            title: "1. COMMITMENT TO DATA PRIVACY",
            content: [
                "At 8KPRIME, we recognize the importance of personal data privacy. This Policy explains our data practices and the choices you can make about the way your information is collected and used in connection with our premium streaming services.",
                "By utilizing our Platform, you consent to the data collection and usage practices described in this dynamic Policy."
            ]
        },
        {
            title: "2. CATEGORIES OF INFORMATION COLLECTED",
            content: [
                "To provide an elite streaming experience, we collect specific categories of information including:",
                "• Identification Data: Name, email address, and billing credentials necessary for account management.",
                "• Technical Metadata: IP addresses, device hardware identifiers, and operating system versions to ensure stream compatibility and security.",
                "• Interaction Logs: Viewing history and service utilization patterns to optimize our global server load and content delivery."
            ]
        },
        {
            title: "3. UTILIZATION OF COLLECTED DATA",
            content: [
                "Your data is utilized strictly for the following operational purposes:",
                "• Facilitating secure access to our 60,000+ channel infrastructure.",
                "• Processing subscription renewals and prevent fraudulent transactions.",
                "• Providing 24/7 VIP technical support and resolving service-level interruptions.",
                "• Enhancing our proprietary anti-freeze technology based on localized performance metrics."
            ]
        },
        {
            title: "4. ARCHITECTURAL DATA SECURITY",
            content: [
                "We implement military-grade 256-bit AES encryption across all data transmission channels. Your information is stored on high-security, decentralized servers with strict access controls.",
                "We do not store full credit card details on our servers; all financial processing is handled via PCI-DSS compliant payment gateways such as PayPal and major bank processors."
            ]
        },
        {
            title: "5. THIRD-PARTY DISCLOSURE POLICY",
            content: [
                "8KPRIME does not sell, rent, or lease its customer lists to third parties. We may share data with trusted partners to help perform statistical analysis, send you email or postal mail, or provide customer support.",
                "All such third parties are prohibited from using your personal information except to provide these services to us, and they are required to maintain the strictest confidentiality of your data."
            ]
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
                        <Lock className="w-4 h-4 text-primary" />
                        <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">Data Protection</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
                        {dictionary.legal.privacy_title}
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        Your digital sovereignty is our priority. Learn how 8KPRIME implements elite security protocols to protect your identity.
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
                                Verified Secure. © 2018-2026 THE STREAMING AUDIO COMPANY LIMITED.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

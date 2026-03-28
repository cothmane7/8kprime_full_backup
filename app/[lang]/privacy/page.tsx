import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Shield, Eye, FileText, Lock, ChevronRight } from "lucide-react";

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

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 text-balance">
            <div className="container mx-auto px-6 relative z-10 text-gray-400">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full mb-6">
                        <Shield className="w-3.5 h-3.5 text-primary" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        {dictionary.legal.privacy_title}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        Your privacy is our priority. Learn how 8KPRIME protects your data and ensures a secure streaming experience.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <section className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-primary">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-white tracking-wide">Introduction</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-base font-medium opacity-90">
                            At 8KPRIME, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our premium IPTV services. By subscribing to 8KPRIME, you agree to the terms outlined in this policy.
                        </p>
                    </section>

                    <section className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-primary">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-white tracking-wide">Information We Collect</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: "Personal Details", desc: "Name, email address, and billing information used for account management." },
                                { title: "Device Information", desc: "IP address, device type, and operating system to optimize streaming quality." },
                                { title: "Usage Data", desc: "Viewing preferences and service usage patterns to improve our content recommendations." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="mt-1.5 shrink-0">
                                        <ChevronRight className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1 text-sm tracking-wide">{item.title}</h3>
                                        <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-primary">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-white tracking-wide">Data Security</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-base font-medium opacity-90">
                            We implement military-grade encryption and advanced security protocols to protect your data. Your information is stored on secure servers with restricted access, and all payment transactions are processed through verified, secure gateways.
                        </p>
                    </section>

                    <div className="pt-12 text-center text-gray-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                        {dictionary.legal.last_updated}
                    </div>
                </div>
            </div>
        </div>
    );
}

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
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 overflow-hidden text-balance">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-fuchsia-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-white text-xs font-black uppercase tracking-[0.2em]">LEGAL CENTER</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                        {dictionary.legal.privacy_title.split(' ')[0]} <span className="text-gradient-premium">{dictionary.legal.privacy_title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="text-gray-400 text-xl font-medium leading-relaxed">
                        Your privacy is our priority. Learn how 8KPRIME protects your data and ensures a secure streaming experience.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <Eye className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest">Introduction</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg font-medium">
                            At 8KPRIME, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our premium IPTV services. By subscribing to 8KPRIME, you agree to the terms outlined in this policy.
                        </p>
                    </section>

                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <FileText className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest">Information We Collect</h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                { title: "Personal Details", desc: "Name, email address, and billing information used for account management." },
                                { title: "Device Information", desc: "IP address, device type, and operating system to optimize streaming quality." },
                                { title: "Usage Data", desc: "Viewing preferences and service usage patterns to improve our content recommendations." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="mt-1.5 shrink-0">
                                        <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1 tracking-wide">{item.title}</h3>
                                        <p className="text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <Lock className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest">Data Security</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg font-medium">
                            We implement military-grade encryption and advanced security protocols to protect your data. Your information is stored on secure servers with restricted access, and all payment transactions are processed through verified, secure gateways.
                        </p>
                    </section>

                    <div className="pt-12 text-center text-gray-600 font-bold uppercase tracking-[0.2em] text-xs">
                        {dictionary.legal.last_updated}
                    </div>
                </div>
            </div>
        </div>
    );
}

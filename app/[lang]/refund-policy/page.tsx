import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { RotateCcw, Clock, HelpCircle, AlertCircle, ChevronRight, Zap } from "lucide-react";

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

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 overflow-hidden text-balance">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-orange-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8">
                        <RotateCcw className="w-4 h-4 text-primary" />
                        <span className="text-white text-xs font-black uppercase tracking-[0.2em]">REFUND CENTER</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                        {dictionary.legal.refund_title.split(' ')[0]} <span className="text-gradient-premium">{dictionary.legal.refund_title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="text-gray-200 text-xl font-medium leading-relaxed">
                        We stand behind our service. Experience 8KPRIME completely risk-free with our premium protection guarantee.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="bg-gradient-to-br from-primary/20 to-orange-500/10 p-1 rounded-[3rem] shadow-2xl">
                        <div className="bg-[#111115] p-12 rounded-[2.8rem] border border-white/5 flex flex-col md:flex-row items-center gap-10">
                            <div className="shrink-0 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(176,141,62,0.3)] animate-pulse">
                                <Zap className="text-black w-16 h-16" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">7-Day Money-Back Guarantee</h2>
                                <p className="text-gray-200 text-lg leading-relaxed font-medium">
                                    Subscription services shouldn't be a gamble. If our service cannot be made to work properly on your device after assistance from our support team, we will provide a <span className="text-white font-bold">full refund</span> within 7 days of your purchase.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <Clock className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest">Refund Conditions</h2>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Request must be within 7 days of purchase",
                                "Must allow support team to troubleshoot",
                                "Issues must be related to service quality",
                                "Original purchaser only",
                                "Technical failure prevents service",
                                "Account must be in good standing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 group">
                                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                                    <span className="text-gray-200 font-bold text-sm tracking-wide group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <AlertCircle className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest">No-Refund Cases</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed font-medium mb-6">
                            Refunds are generally not available for the following scenarios:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Change of mind or simple content preferences",
                                "Poor internet connectivity on the user's side",
                                "Abuse of service or sharing account credentials",
                                "Subscriptions longer than 7 days old"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <ChevronRight className="w-5 h-5 text-gray-700 mt-1" />
                                    <span className="text-gray-200 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5 text-center">
                        <HelpCircle className="text-primary w-12 h-12 mx-auto mb-6" />
                        <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-widest">How to Request?</h2>
                        <p className="text-gray-200 leading-relaxed font-medium mb-8">
                            Simply contact our elite support team at <span className="text-primary font-bold">vip@8kprime.tv</span> with your order details. We'll handle it within 24 hours.
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

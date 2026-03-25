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
                        TERMS <span className="text-gradient-premium">OF SERVICE</span>
                    </h1>
                    <p className="text-gray-400 text-xl font-medium leading-relaxed">
                        By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                <FileText className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest">Global Content Access</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg font-medium">
                            8KPRIME provides access to third-party streaming content. We do not host, store, reproduce, or distribute any media content on our servers. The service acts purely as a conduit to global premium entertainment feeds. 
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

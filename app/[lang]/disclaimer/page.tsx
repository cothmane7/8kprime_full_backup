import { Shield } from "lucide-react";

export const metadata = {
    title: "DMCA & Disclaimer - 8KPRIME",
    robots: { index: false, follow: false }
};

export default function DisclaimerPage() {
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
                        LEGAL <span className="text-gradient-premium">DISCLAIMER</span>
                    </h1>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="glass-premium p-10 rounded-[2.5rem] border border-white/5">
                        <h2 className="text-2xl font-black text-primary uppercase tracking-widest mb-4">DMCA & Content Policy</h2>
                        <p className="text-gray-400 leading-relaxed text-lg font-medium">
                            We do not host, store, or distribute any media content. All services provided are for access to third-party content. 8KPRIME respects the intellectual property of others and expects its users to do the same. If you believe your copyrighted work has been infringed by third-party feeds linked through our service, please contact us immediately.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

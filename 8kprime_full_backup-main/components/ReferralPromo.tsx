"use client";

import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReferralPromo({ lang }: { lang: string }) {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0B0B0F] via-[#111118] to-[#0B0B0F] relative overflow-hidden border-y border-white/5">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-white/5 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
                    
                    {/* Icon */}
                    <div className="shrink-0 relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                            <Gift size={40} className="text-black" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight uppercase"
                        >
                            Share & Earn <span className="text-gradient-premium">Free Rewards!</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl"
                        >
                            Get a free subscription by referring friends! Each signup earns you a reward—no limits, keep sharing and enjoy premium access for free.
                        </motion.p>
                    </div>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="shrink-0 w-full md:w-auto"
                    >
                        <Link href={`/${lang}/rewards`}>
                            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary via-yellow-200 to-primary bg-[length:200%_auto] hover:bg-right text-black font-black uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 group">
                                Claim Deal
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

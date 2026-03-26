"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export default function ComparisonTable({ dictionary }: { dictionary: any }) {
    const comparisons = [
        { feature: dictionary["4k_8k_quality"], premium: true, other: false },
        { feature: dictionary.anti_freeze_10, premium: true, other: false },
        { feature: dictionary.instant_activation, premium: true, other: dictionary.hours_48 },
        { feature: dictionary.no_buffering, premium: true, other: false },
        { feature: dictionary.all_countries, premium: true, other: dictionary.partial },
        { feature: dictionary.vip_support_24_7, premium: true, other: false },
    ];

    return (
        <section className="py-16 bg-[#050505] relative overflow-hidden">
            {/* Background glowing orbs */}
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
                    >
                        <Trophy size={14} className="text-primary" />
                        {dictionary.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter"
                    >
                        {dictionary.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">{dictionary.title_highlight}</span>
                    </motion.h2>
                </div>

                <div className="max-w-[1000px] mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0A0F] shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                    {/* Header Row */}
                    <div className="grid grid-cols-3 bg-[#12121A] p-4 md:p-6 border-b border-white/10 relative">
                        {/* Golden Highlight over our column */}
                        <div className="absolute inset-y-0 left-1/3 w-1/3 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

                        <div className="flex items-center text-gray-300 font-black uppercase tracking-widest text-[10px] md:text-xs">
                            {dictionary.feature_label}
                        </div>

                        <div className="flex flex-col items-center relative z-10">
                            <div className="bg-gradient-to-br from-primary to-yellow-600 p-3 md:p-4 rounded-2xl mb-3 md:mb-4 shadow-[0_0_20px_rgba(176,141,62,0.4)]">
                                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div className="text-white font-black uppercase tracking-widest text-xs md:text-sm drop-shadow-md">
                                {dictionary.our_name}
                            </div>
                        </div>

                        <div className="flex flex-col items-center opacity-70">
                            <div className="bg-[#1A1A22] border border-white/5 p-3 md:p-4 rounded-2xl mb-3 md:mb-4">
                                <X className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
                            </div>
                            <div className="text-gray-300 font-black uppercase tracking-widest text-xs md:text-sm">
                                {dictionary.others_name}
                            </div>
                        </div>
                    </div>

                    {/* Features Rows */}
                    <div className="p-2 md:p-6 space-y-2 bg-[#0A0A0F]/80">
                        {comparisons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="grid grid-cols-3 py-2 md:py-3 items-center px-4 md:px-6 rounded-2xl hover:bg-[#15151E] transition-all duration-300 border border-transparent hover:border-white/5 group relative"
                            >
                                {/* Column Highlight */}
                                <div className="absolute inset-y-0 left-1/3 w-1/3 bg-primary/[0.02] group-hover:bg-primary/[0.05] transition-colors pointer-events-none rounded-xl" />

                                <div className="text-white font-black text-[11px] md:text-[15px] tracking-wider md:tracking-widest group-hover:text-primary transition-colors flex items-center gap-3">
                                    <Sparkles size={16} className="text-primary hidden md:inline-block opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {item.feature}
                                </div>

                                <div className="flex justify-center relative z-10">
                                    <div className="bg-emerald-500/10 p-2 text-emerald-500 rounded-full group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                        <Check className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                                    </div>
                                </div>

                                <div className="flex justify-center relative z-10">
                                    {item.other ? (
                                        <span className="text-red-400 font-bold text-[10px] md:text-xs uppercase tracking-widest bg-red-500/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-red-500/20">
                                            {item.other}
                                        </span>
                                    ) : (
                                        <div className="text-red-500/50 p-2 rounded-full transition-all">
                                            <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Row */}
                    <div className="bg-[#12121A] p-8 text-center border-t border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
                        <div className="flex items-center justify-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-[11px] md:text-xs relative z-10">
                            <ShieldCheck className="w-5 h-5" />
                            {dictionary.footer_text}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { TrendingDown, Calculator, ArrowDown, Info } from "lucide-react";

export default function SavingsCalculator() {
    const data = [
        { service: "Netflix (Premium)", monthly: "$25", yearly: "$300" },
        { service: "Hulu + Disney+ (No Ads)", monthly: "$20", yearly: "$240" },
        { service: "Amazon Prime Video", monthly: "$18", yearly: "$216" },
        { service: "HBO Max (Ultimate)", monthly: "$21", yearly: "$252" },
        { service: "Apple TV+", monthly: " $13", yearly: "$156" },
        { service: "Cable TV (Standard)", monthly: "$108", yearly: "$1296" },
        { service: "Live PPV Events (2/mo Avg)", monthly: "$40", yearly: "$480" },
    ];

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-red-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 px-6 py-2 rounded-full border border-red-500/20 bg-red-500/5"
                    >
                        <Calculator size={14} />
                        Savings Calculator
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter mb-6"
                    >
                        STOP OVERPAYING FOR <br />
                        <span className="text-red-500">ENTERTAINMENT.</span>
                    </motion.h2>
                    <p className="text-gray-400 font-medium text-lg">
                        See how much you are currently wasting on fragmented streaming services and cable bundles.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-[#0A0A0F] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl"
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-3 p-6 md:p-8 border-b border-white/5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 bg-white/[0.02]">
                            <div>Service</div>
                            <div className="text-right">Monthly</div>
                            <div className="text-right">Yearly</div>
                        </div>

                        {/* Service Rows */}
                        <div className="divide-y divide-white/5">
                            {data.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="grid grid-cols-3 p-6 md:p-8 hover:bg-white/[0.01] transition-colors group"
                                >
                                    <div className="text-gray-300 font-bold text-sm md:text-base">{item.service}</div>
                                    <div className="text-right text-red-400/80 font-bold text-sm md:text-base group-hover:text-red-500 transition-colors">{item.monthly}</div>
                                    <div className="text-right text-red-400 font-black text-sm md:text-base group-hover:text-red-400 transition-colors">{item.yearly}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Competitor Total */}
                        <div className="grid grid-cols-3 p-6 md:p-8 bg-red-500/5 border-t border-red-500/10">
                            <div className="text-white font-black text-base md:text-xl uppercase tracking-tighter">Total Cost</div>
                            <div className="text-right text-red-500 font-black text-base md:text-xl tracking-tighter">$245</div>
                            <div className="text-right text-red-500 font-black text-base md:text-xl tracking-tighter">$2,940</div>
                        </div>

                        {/* Our Price */}
                        <div className="grid grid-cols-3 p-8 md:p-10 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 border-t border-primary/30 relative">
                            <div className="absolute inset-0 bg-primary/5 animate-pulse pointer-events-none" />
                            <div className="text-white font-black text-lg md:text-2xl uppercase tracking-tighter flex flex-col">
                                8KPRIME TV
                                <span className="text-[10px] tracking-widest text-primary font-black opacity-80">(All-In-One Access)</span>
                            </div>
                            <div className="text-right text-primary font-black text-lg md:text-2xl tracking-tighter">$6.67</div>
                            <div className="text-right text-primary font-black text-lg md:text-2xl tracking-tighter">$80</div>
                        </div>

                        {/* Savings Final Row */}
                        <div className="p-8 md:p-12 text-center bg-metallic-gold">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="text-black font-black text-2xl md:text-4xl uppercase tracking-tighter leading-none">
                                    YOU SAVE $2,860 PER YEAR!
                                </div>
                                <div className="flex items-center gap-2 text-black/60 font-black text-[10px] uppercase tracking-widest mt-2">
                                    <TrendingDown size={14} />
                                    That's 98% more affordable than cable
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <p className="text-center mt-10 text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <Info size={12} className="text-primary" />
                        Prices based on average 2024 North American subscription rates
                    </p>
                </div>
            </div>
        </section>
    );
}

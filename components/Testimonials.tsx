"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials({ dictionary }: { dictionary: any }) {
    const testimonials = [
        {
            name: dictionary.t1_name,
            country: dictionary.t1_country,
            text: dictionary.t1_text,
            flag: "🇺🇸",
        },
        {
            name: dictionary.t2_name,
            country: dictionary.t2_country,
            text: dictionary.t2_text,
            flag: "🇨🇦",
        },
        {
            name: dictionary.t3_name,
            country: dictionary.t3_country,
            text: dictionary.t3_text,
            flag: "🇺🇸",
        },
        {
            name: dictionary.t4_name,
            country: dictionary.t4_country,
            text: dictionary.t4_text,
            flag: "🇨🇦",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#0B0B0F] relative overflow-hidden">
            <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
                    >
                        {dictionary.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter"
                    >
                        {dictionary.title_part1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">{dictionary.title_part2}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:bg-white/[0.05] hover:border-primary/10 transition-all duration-500 group relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <Quote size={40} />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={14} className="text-primary fill-primary" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-200 font-medium text-[15px] leading-relaxed mb-8 italic">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-2xl border border-primary/10">
                                    {t.flag}
                                </div>
                                <div>
                                    <div className="text-white font-black text-sm tracking-tight">{t.name}</div>
                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t.country}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

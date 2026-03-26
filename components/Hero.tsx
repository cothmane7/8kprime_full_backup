"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const backgrounds = [
    "/hero-bgs/Gemini_Generated_Image_3io7013io7013io7.png",
    "/hero-bgs/Gemini_Generated_Image_ggl1asggl1asggl1 (1).png",
    "/hero-bgs/Gemini_Generated_Image_ggl1asggl1asggl1 (2).png",
    "/hero-bgs/Gemini_Generated_Image_ggl1asggl1asggl1 (3).png",
    "/hero-bgs/Gemini_Generated_Image_ggl1asggl1asggl1 (4).png",
    "/hero-bgs/Gemini_Generated_Image_ggl1asggl1asggl1.png"
];

export default function Hero({ lang, dictionary, common }: { lang: any; dictionary: any; common: any }) {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[100dvh] min-h-[650px] flex items-center overflow-hidden bg-[#0A0A0F]">
            {/* Background Layer: Cinematic Full-Bleed Image Slideshow */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0F]">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentBg}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url('${backgrounds[currentBg]}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </AnimatePresence>
                {/* Dark gradient overlay — keeps text perfectly readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/90 to-[#0A0A0F]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/80" />
                {/* Gold atmospheric glow on top of image */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(176,141,62,0.15)_0%,transparent_60%)]" />
            </div>
            
            <div className="container-responsive relative z-10 w-full pt-20 pb-12 md:pt-0 md:pb-0">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[clamp(1.75rem,8vw,3.5rem)] md:text-[clamp(3rem,10vw,5rem)] xl:text-[6.5rem] font-black text-white leading-[0.95] tracking-tighter mb-6 italic uppercase antialiased"
                        >
                            {dictionary.title_part1}<br />
                            <span 
                                className="text-transparent bg-clip-text bg-gradient-to-b from-[#FBF3D5] via-[#D4AF37] to-[#8E6927] italic inline-block drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                            >
                                {dictionary.title_part2} {dictionary.title_part3} {dictionary.title_part4}
                            </span>
                        </motion.h1>

                        <div className="flex justify-center lg:justify-start mb-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(176,141,62,0.15)] group hover:border-primary/40 transition-all gold-reflection"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-xs">
                                    {dictionary.badge}
                                </span>
                            </motion.div>
                        </div>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-100/90 text-[15px] md:text-lg lg:text-xl font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance"
                        >
                            {dictionary.subtext}
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6"
                        >
                            <Link 
                                href={`/${lang}/pricing`} 
                                className="w-full sm:w-auto bg-primary text-black px-10 py-5 md:px-12 md:py-7 rounded-[2rem] text-lg md:text-2xl font-extrabold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 group/btn relative overflow-hidden flex items-center justify-center gap-3"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                {dictionary.cta_main}
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            <Link 
                                href={`/${lang}/channels`} 
                                className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-7 rounded-[2rem] text-lg md:text-2xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3 backdrop-blur-sm shadow-xl"
                            >
                                {dictionary.cta_secondary}
                            </Link>
                        </motion.div>

                        {/* Quick Stats: Balanced Spacing */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 grid grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-8 max-w-2xl"
                        >
                            {[
                                { label: dictionary.stat_resolution, value: "8K UHD" },
                                { label: dictionary.stat_channels, value: "60,000+" },
                                { label: dictionary.stat_uptime, value: "99.9%" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-white font-black text-xl md:text-3xl mb-1 tracking-tighter italic whitespace-nowrap">{stat.value}</div>
                                    <div className="text-gray-500 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Visual: Clean Professional Decorative Element */}
                    <div className="hidden lg:block flex-1 relative min-h-[400px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="relative z-10 flex justify-center"
                        >
                            <div className="w-full max-w-md aspect-video rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator: Refined */}
            <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
            >
                <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1.5">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                </div>
            </motion.div>
        </section>
    );
}

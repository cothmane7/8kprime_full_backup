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
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-[100px] overflow-hidden bg-[#0A0A0F]">
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(176,141,62,0.15)_0%,transparent_60%)]" />
            </div>
            
            <div className="w-full max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Centered Content Block */}
                <div className="flex flex-col items-center w-full">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(176,141,62,0.15)] group hover:border-primary/40 transition-all gold-reflection"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                                {dictionary.badge}
                            </span>
                        </motion.div>
                    </div>

                    {/* Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(2.5rem,8vw,5rem)] md:text-[clamp(4.5rem,10vw,7.5rem)] xl:text-[8.5rem] font-black text-white leading-[1.05] tracking-tighter mb-8 italic uppercase antialiased"
                    >
                        {dictionary.title_part1}<br />
                        <span 
                            className="text-transparent bg-clip-text bg-gradient-to-b from-[#FBF3D5] via-[#D4AF37] to-[#8E6927] italic inline-block drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] px-6 pb-6 -mb-6"
                        >
                            {dictionary.title_part2} {dictionary.title_part3} {dictionary.title_part4}
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-100 text-[17px] md:text-xl lg:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed text-balance"
                    >
                        {dictionary.subtext}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full sm:w-auto"
                    >
                        <Link 
                            href={`/${lang}/pricing`} 
                            className="w-full sm:w-auto bg-primary text-black px-12 py-6 md:px-14 md:py-7 rounded-[2rem] text-xl md:text-2xl font-extrabold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 group/btn relative overflow-hidden flex items-center justify-center gap-3"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                            {dictionary.cta_main}
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            href={`/${lang}/channels`} 
                            className="w-full sm:w-auto px-12 py-6 md:px-14 md:py-7 rounded-[2rem] text-xl md:text-2xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm shadow-xl"
                        >
                            {dictionary.cta_secondary}
                        </Link>
                    </motion.div>

                    {/* Quick Stats: Integrated into the centered Flow */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/10 pt-10 w-full max-w-2xl"
                    >
                        {[
                            { label: dictionary.stat_resolution, value: dictionary.stat_resolution_val },
                            { label: dictionary.stat_channels, value: dictionary.stat_channels_val },
                            { label: dictionary.stat_uptime, value: dictionary.stat_uptime_val }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-white font-black text-2xl md:text-4xl mb-1.5 tracking-tighter italic">{stat.value}</div>
                                <div className="text-gray-500 font-bold text-[9px] md:text-[11px] uppercase tracking-[0.25em]">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
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

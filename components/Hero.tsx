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
        <section className="relative h-[100dvh] min-h-[600px] flex items-center pt-32 md:pt-16 overflow-hidden bg-[#0A0A0F]">
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/70" />
                {/* Gold atmospheric glow on top of image */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(176,141,62,0.12)_0%,transparent_60%)]" />
            </div>
            
            <div className="container-responsive relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-[5.5rem] xl:text-[7rem] font-black text-white leading-[0.85] tracking-tighter mb-8 hero-text-glow italic uppercase"
                        >
                            {dictionary.title_part1}<br />
                            <span 
                                className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2B2] via-[#D4AF37] to-[#805A16] italic inline-block"
                                style={{ WebkitTextStroke: "1px #FFD700" }}
                            >
                                {dictionary.title_part2}<br />
                                {dictionary.title_part3} {dictionary.title_part4}
                            </span>
                        </motion.h1>

                        <div className="flex justify-center lg:justify-start mb-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(176,141,62,0.15)] group hover:border-primary/40 transition-all gold-reflection"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                                    {dictionary.badge}
                                </span>
                            </motion.div>
                        </div>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-base md:text-xl font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            {dictionary.subtext}
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
                        >
                            <Link 
                                href={`/${lang}/pricing`} 
                                className="w-full sm:w-auto bg-primary text-black px-12 py-7 rounded-[2rem] text-lg md:text-2xl font-extrabold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 group/btn relative overflow-hidden flex items-center justify-center gap-3"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                {dictionary.cta_main}
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            <Link 
                                href={`/${lang}/channels`} 
                                className="w-full sm:w-auto px-12 py-7 rounded-[2rem] text-lg md:text-2xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3 backdrop-blur-sm shadow-xl"
                            >
                                {dictionary.cta_secondary}
                            </Link>
                        </motion.div>

                        {/* Quick Stats: Mobile Optimized */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 grid grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-8 max-w-2xl"
                        >
                            {[
                                { label: dictionary.stat_resolution, value: "8K UHD" },
                                { label: dictionary.stat_channels, value: "60,000+" },
                                { label: dictionary.stat_uptime, value: "99.9%" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-white font-black text-xl md:text-3xl mb-2 tracking-tighter italic">{stat.value}</div>
                                    <div className="text-gray-500 font-bold text-[9px] md:text-[11px] uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Visual (Placeholder or decorative element) */}
                    <div className="hidden lg:block flex-1 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="relative z-10"
                        >
                            {/* You could add a decorative image or 3D element here */}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 rounded-full border border-white/10 flex justify-center p-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
            </motion.div>
        </section>
    );
}

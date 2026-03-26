"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle, ShieldCheck, Star } from "lucide-react";
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

                    {/* Headline — Pyramid Layout */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center text-center mb-8 w-full"
                    >
                        {[
                            { text: dictionary.title_part1, gold: false, scale: "scale-[1]", size: "text-[clamp(1.3rem,4.8vw,2rem)] md:text-[clamp(2rem,3.8vw,3.2rem)] xl:text-[clamp(2.8rem,3.5vw,3.8rem)]" },
                            { text: dictionary.title_part2, gold: false, scale: "scale-[0.92]", size: "text-[clamp(1.2rem,4.4vw,1.85rem)] md:text-[clamp(1.85rem,3.5vw,2.9rem)] xl:text-[clamp(2.5rem,3.2vw,3.4rem)]" },
                            { text: dictionary.title_part3, gold: true, scale: "scale-[0.84]", size: "text-[clamp(1.1rem,4vw,1.7rem)] md:text-[clamp(1.7rem,3.2vw,2.6rem)] xl:text-[clamp(2.2rem,2.9vw,3rem)]" },
                            { text: dictionary.title_part4, gold: true, scale: "scale-[0.76]", size: "text-[clamp(1rem,3.6vw,1.55rem)] md:text-[clamp(1.55rem,2.9vw,2.3rem)] xl:text-[clamp(2rem,2.6vw,2.6rem)]" },
                            { text: dictionary.title_part5, gold: true, scale: "scale-[0.68]", size: "text-[clamp(0.9rem,3.2vw,1.4rem)] md:text-[clamp(1.4rem,2.6vw,2rem)] xl:text-[clamp(1.8rem,2.3vw,2.2rem)]" },
                        ].map((line, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.06 }}
                                className={`block whitespace-nowrap ${line.scale} ${line.size} font-black leading-[1.15] tracking-tight italic uppercase antialiased origin-center ${
                                    line.gold 
                                        ? "text-transparent bg-clip-text bg-gradient-to-b from-[#FBF3D5] via-[#D4AF37] to-[#8E6927]" 
                                        : "text-white"
                                }`}
                            >
                                {line.text}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Subtext */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-100 text-[17px] md:text-xl lg:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-[1.8] text-balance"
                    >
                        {dictionary.subtext}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center w-full"
                    >
                        <Link 
                            href={`/${lang}/pricing`} 
                            className="w-full sm:w-auto bg-metallic-gold text-black px-14 py-6 md:px-16 md:py-7 rounded-[2rem] font-extrabold hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(212,175,55,0.4),0_0_80px_rgba(212,175,55,0.15)] group/btn relative overflow-hidden flex flex-col items-center justify-center gap-1 border border-yellow-400/30"
                        >
                            {/* Animated shine sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                            {/* Pulsing glow ring */}
                            <div className="absolute inset-0 rounded-[2rem] animate-pulse bg-primary/20 blur-xl -z-10" />
                            <span className="relative z-10 text-xl md:text-2xl tracking-tight flex items-center gap-3">
                                <PlayCircle className="w-6 h-6 md:w-7 md:h-7" />
                                {dictionary.cta_main}
                            </span>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 text-white/90"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-500/20 p-2 rounded-xl border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                                <ShieldCheck size={20} className="text-orange-500" />
                            </div>
                            <span className="text-sm md:text-base font-black uppercase tracking-wider">{dictionary.trust_guarantee}</span>
                        </div>
                        
                        <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
                            <span className="text-sm md:text-base font-black uppercase tracking-widest">{dictionary.trust_score_label}</span>
                            <div className="flex gap-1.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="bg-[#00B67A] p-1.5 rounded-md shadow-lg shadow-[#00B67A]/20">
                                        <Star size={12} fill="white" className="text-white" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

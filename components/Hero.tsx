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

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes("#")) {
            const [path, hash] = href.split("#");
            const currentPath = window.location.pathname.replace(/\/$/, "");
            const targetPath = path.replace(/\/$/, "");

            if (currentPath === targetPath || (targetPath === "" && (currentPath === `/${lang}` || currentPath === `/${lang}/`))) {
                e.preventDefault();
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", href);
                }
            }
        }
    };

    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-[120px] pb-[80px] overflow-hidden bg-[#050505]">
            {/* Background Layer: Cinematic Full-Bleed Image Slideshow */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentBg}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url('${backgrounds[currentBg]}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center top",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </AnimatePresence>
                
                {/* Cinematic Vignette & Core Darkness Overlay */}
                <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] shadow-[inset_0_0_150px_rgba(5,5,5,1)]" />
                
                {/* Netflix-style deep lateral fade */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
                
                {/* Premium Gold Atmospheric Glow behind text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)] mix-blend-color-dodge blur-2xl" />
            </div>
            
            <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Centered Content Block */}
                <div className="flex flex-col items-center w-full mt-auto mb-auto">

                    {/* Headline — Optimized Client Hook */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center text-center mb-8 w-full text-[clamp(2.5rem,7vw,3.5rem)] md:text-[clamp(4rem,7vw,5rem)] xl:text-[clamp(4.5rem,6vw,6rem)] font-black leading-[1.02] tracking-[-0.02em] uppercase antialiased drop-shadow-2xl"
                    >
                        {[
                            { text: dictionary.title_part1, gold: false },
                            { text: dictionary.title_part2, gold: false },
                            { text: dictionary.title_part3, gold: true },
                            { text: dictionary.title_part4, gold: true },
                            { text: dictionary.title_part5, gold: true },
                        ].filter(line => line.text && line.text.trim() !== "").map((line, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className={`block pb-1 ${
                                    line.gold 
                                        ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFD700] to-[#AA7900] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]" 
                                        : "text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                                }`}
                            >
                                {line.text}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Subtext — Sleek & Elegant Contrast */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-medium mb-12 max-w-2xl mx-auto leading-[1.6] tracking-wide text-balance drop-shadow-lg"
                    >
                        {dictionary.subtext}
                    </motion.p>

                    {/* CTA Buttons — Luxury Gold Glow */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        <Link 
                            href={`/${lang}#pricing`} 
                            onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
                            className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black px-12 py-5 md:px-16 md:py-6 rounded-full font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.5),inset_0_2px_4px_rgba(255,240,179,0.8)] group/btn relative overflow-hidden flex items-center justify-center gap-3 border border-yellow-200/50"
                        >
                            {/* Animated shine sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                            {/* Inner ring */}
                            <div className="absolute inset-1 rounded-full border border-black/10 pointer-events-none" />
                            <span className="relative z-10 text-lg md:text-xl flex items-center gap-3">
                                {dictionary.cta_main}
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex items-center justify-center gap-2 text-white/50 text-xs md:text-sm font-semibold tracking-widest uppercase backdrop-blur-sm bg-black/20 px-6 py-2 rounded-full border border-white/5"
                    >
                        <ShieldCheck size={16} className="text-[#D4AF37]" />
                        <span>{dictionary.trust_single_line || "7-day money-back guarantee · No hidden fees"}</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

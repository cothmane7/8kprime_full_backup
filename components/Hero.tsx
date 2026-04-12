"use client";

import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const backgrounds = [
    "/hero-bgs/premium-bg.jpg"
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
                <div className="absolute inset-0 bg-[#050505]/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505] shadow-[inset_0_0_100px_rgba(5,5,5,0.8)]" />
                
                {/* Netflix-style deep lateral fade */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
                
                {/* Premium Atmospheric Glow behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] mix-blend-screen blur-[120px]" />
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
                                        ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFD700] to-[#AA7900] drop-shadow-[0_8px_32px_rgba(0,0,0,1)]" 
                                        : "text-white drop-shadow-[0_8px_32px_rgba(0,0,0,1)]"
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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
                        <Link 
                            href={`/${lang}#pricing`} 
                            onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
                            className="w-full sm:w-auto bg-[#E50914] hover:bg-[#B20710] text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.4)] group/btn relative overflow-hidden flex items-center justify-center gap-3 border border-red-500/50"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <Play className="w-5 h-5 fill-current" />
                                {dictionary.cta_watch}
                            </span>
                        </Link>

                        <Link 
                            href={`/${lang}#pricing`} 
                            onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
                            className="w-full sm:w-auto bg-transparent backdrop-blur-md border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black px-10 py-5 md:px-12 md:py-6 rounded-full font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)] group/btn-alt relative overflow-hidden flex items-center justify-center gap-3"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {dictionary.cta_plans}
                                <ArrowRight className="w-5 h-5 group-hover/btn-alt:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                    </motion.div>

                    {/* Trust Indicators — From Image Reference */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 flex flex-col items-center gap-8"
                    >
                        {/* Features Row */}
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/90 text-[0.95rem] md:text-[1.05rem] font-bold tracking-tight">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={20} className="text-[#E50914] fill-transparent" />
                                <span>{dictionary.trust_instant || "Instant Activation"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={20} className="text-[#E50914] fill-transparent" />
                                <span>{dictionary.trust_devices || "Works on All Devices"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={20} className="text-[#E50914] fill-transparent" />
                                <span>{dictionary.trust_support || "24/7 Support"}</span>
                            </div>
                        </div>

                        {/* Trustpilot Badge */}
                        <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl">
                            <div className="flex items-center gap-1">
                                <Star size={18} className="text-[#00B67A] fill-[#00B67A]" />
                                <span className="text-white font-bold text-sm tracking-tight">Trustpilot</span>
                            </div>
                            
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`w-4 h-4 rounded-sm flex items-center justify-center ${i < 4 ? "bg-[#00B67A]" : "bg-[#00B67A]/50"}`}>
                                        <Star size={10} className="text-white fill-white" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-1 text-sm">
                                <span className="text-white font-black">4.7</span>
                                <span className="text-white/40">/ 5</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

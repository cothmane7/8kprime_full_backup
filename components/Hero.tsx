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

                        {/* Free Trial Link */}
                        <a 
                            href="https://wa.me/18185656691?text=Hi%2C%20I%27m%20interested%20in%20a%2024h%20free%20test"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-2 text-[#25D366] hover:text-white font-bold text-sm tracking-wide transition-colors group/trial"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            <span className="underline underline-offset-4 decoration-[#25D366]/40 group-hover/trial:decoration-white/40">Try Free for 24 Hours</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

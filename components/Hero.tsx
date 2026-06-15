"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Zap, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
    "/hero/530b38b5e599f02076b45592f9e9641d-removebg-preview.png",
    "/hero/best-iptv-player-setup-removebg-preview.png",
    "/hero/trustfirms-iptv-subscription-removebg-preview.png"
];

export default function Hero({ lang, dictionary, common }: { lang: any; dictionary: any; common: any }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10 * 60 * 60);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) return 10 * 60 * 60;
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerInterval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000); // 4 seconds per image
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

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
        <section className="relative min-h-[100vh] flex flex-col items-center pt-[140px] overflow-hidden bg-[#050505]">
            {/* Background Layer: Radial Glow from Top */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)] mix-blend-screen blur-[80px]" />
            </div>
            
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                
                {/* Left Column: Text & CTA */}
                <div className="flex flex-col text-left pt-10 lg:pt-0">
                    {/* Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.2rem] font-black leading-[1.1] tracking-tight mb-6 uppercase"
                    >
                        <span className="block text-white mb-2 drop-shadow-lg">
                            All Your Sports, <br className="hidden lg:block" /> Movies & Series.
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] pb-2 bg-[length:200%_auto] animate-pulse">
                            One Subscription.
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 text-[1.1rem] md:text-[1.2rem] font-medium mb-10 max-w-xl leading-relaxed"
                    >
                        {dictionary.subtext}
                    </motion.p>

                    {/* CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-start gap-3"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <Link 
                                href={`/${lang}#pricing`} 
                                onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
                                className="bg-gradient-to-r from-[#D4AF37] to-[#AA7900] hover:from-[#FFF0B3] hover:to-[#D4AF37] text-black px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                            >
                                Claim The Offer <Play size={18} className="fill-black" />
                            </Link>

                            <div className="flex flex-col items-start sm:items-center bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    Offer ends in
                                </span>
                                <div className="flex items-center gap-1.5 text-xl font-black text-white tracking-widest font-mono">
                                    <Timer size={18} className="text-[#D4AF37]" />
                                    {formatTime(timeLeft)}
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 pl-2 font-medium">Starts at $9.99. Cancel anytime.</p>
                    </motion.div>
                </div>

                {/* Right Column: Image Slider */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={heroImages[currentImageIndex]}
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.05, x: -20 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute object-contain max-h-full max-w-full drop-shadow-[0_0_50px_rgba(212,175,55,0.2)]"
                            alt="IPTV Experience"
                        />
                    </AnimatePresence>
                </motion.div>
                
            </div>
        </section>
    );
}

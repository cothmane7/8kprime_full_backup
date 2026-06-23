"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Zap, Timer, Unlock, Film, Monitor } from "lucide-react";
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
        const TIMER_DURATION = 10 * 60 * 60; // 10 hours
        const storedEndTime = localStorage.getItem('offerEndTime');
        let endTime = storedEndTime ? parseInt(storedEndTime, 10) : 0;

        if (!storedEndTime || isNaN(endTime) || endTime <= Date.now()) {
            endTime = Date.now() + TIMER_DURATION * 1000;
            localStorage.setItem('offerEndTime', endTime.toString());
        }

        const updateTimer = () => {
            const now = Date.now();
            const remaining = Math.floor((endTime - now) / 1000);
            
            if (remaining <= 0) {
                const newEndTime = Date.now() + TIMER_DURATION * 1000;
                localStorage.setItem('offerEndTime', newEndTime.toString());
                setTimeLeft(TIMER_DURATION);
                endTime = newEndTime;
            } else {
                setTimeLeft(remaining);
            }
        };

        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
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
        <section className="relative min-h-[100vh] flex flex-col items-center pt-[100px] lg:pt-[120px] overflow-hidden bg-[#050505]">
            {/* Background Layer: Radial Glow from Top */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)] mix-blend-screen blur-[80px]" />
            </div>
            
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                
                {/* Left Column: Text & CTA */}
                <div className="flex flex-col text-left pt-6 lg:pt-0">
                    {/* Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.2rem] font-black leading-[1.1] tracking-tight mb-4 uppercase"
                    >
                        <span className="block text-white mb-2 drop-shadow-lg">
                            All Your Sports, <br className="hidden lg:block" /> Movies & Series.
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] pb-2 bg-[length:200%_auto] animate-pulse">
                            One Subscription.
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-200 text-[1.4rem] md:text-[1.6rem] font-medium mb-3 max-w-3xl leading-relaxed whitespace-normal md:whitespace-nowrap"
                    >
                        60,000+ channels · 160,000+ titles · 4K UHD — from <span className="text-[#D4AF37] font-bold">$6.67/mo</span>
                    </motion.div>

                    {/* NFL / Sports callout */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                        className="flex flex-wrap items-center gap-2 mb-6"
                    >
                        {/* NFL — logo + label, gold featured pill */}
                        <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-black uppercase tracking-widest pl-1.5 pr-3 py-1 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                            <img
                                src="/sports/70787d4bf30789ae4e802585cddb9708.jpg"
                                alt="NFL"
                                className="w-8 h-8 rounded-full object-contain bg-white p-0.5"
                            />
                            NFL
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                            🏀 NBA
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                            ⚾ MLB
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                            🏒 NHL
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                            🥊 UFC
                        </span>
                        <span className="text-gray-600 text-[11px] font-bold">& more</span>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-start gap-3"
                    >
                        <div className="flex flex-col items-start gap-3">
                            <div className="flex flex-col items-start sm:items-center bg-white/5 border border-white/10 px-5 py-2 rounded-xl w-fit">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    Offer ends in
                                </span>
                                <div className="flex items-center gap-1.5 text-xl font-black text-white tracking-widest font-mono" suppressHydrationWarning>
                                    <Timer size={18} className="text-[#D4AF37]" />
                                    {formatTime(timeLeft)}
                                </div>
                            </div>

                            <Link 
                                href={`/${lang}#pricing`} 
                                onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
                                className="bg-gradient-to-r from-[#D4AF37] to-[#AA7900] hover:from-[#FFF0B3] hover:to-[#D4AF37] text-black px-10 py-3.5 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                            >
                                Claim The Offer <Play size={18} className="fill-black" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-[10px] md:text-[11px] text-white/80 font-medium">
                            <span className="flex items-center gap-1.5"><Zap size={14} className="text-[#D4AF37]" /> Instant Activation</span>
                            <span className="opacity-50">•</span>
                            <span className="flex items-center gap-1.5"><Unlock size={14} className="text-[#D4AF37]" /> No Contract</span>
                            <span className="opacity-50">•</span>
                            <span className="flex items-center gap-1.5"><Film size={14} className="text-[#D4AF37]" /> 4K UHD</span>
                            <span className="opacity-50">•</span>
                            <span className="flex items-center gap-1.5"><Monitor size={14} className="text-[#D4AF37]" /> All Devices</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Image Slider */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_60%)] mix-blend-screen blur-[40px] pointer-events-none" />
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

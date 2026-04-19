"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { X, Sparkles, Zap, Gift, Check } from "lucide-react";

export default function PromoPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const pathname = usePathname();
    const COUPON_CODE = "EXTRA10";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000); // Show after 3 seconds
        
        return () => {
            clearTimeout(timer);
            setIsVisible(false); // Reset on unmount/path change
        };
    }, [pathname]);

    const closePopup = () => {
        setIsVisible(false);
    };

    const copyCode = () => {
        navigator.clipboard.writeText(COUPON_CODE);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0D0D12] border border-primary/30 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />

                        {/* Close Button */}
                        <button 
                            onClick={closePopup}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-12 text-center relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                <Gift size={32} className="text-primary" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">
                                LIMITED TIME <span className="text-gradient-premium">OFFER</span>
                            </h2>
                            
                            <p className="text-gray-300 text-base md:text-lg mb-8 font-medium italic">
                                Get an exclusive <span className="text-primary font-bold text-xl">10% REDUCTION</span> on all premium plans today!
                            </p>

                            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-8 relative group">
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mb-3">Your Discount Code</p>
                                <div className="flex items-center justify-center gap-4">
                                    <span className="text-3xl md:text-4xl font-black text-white tracking-[0.2em]">{COUPON_CODE}</span>
                                </div>
                                
                                <button 
                                    onClick={copyCode}
                                    className={`mt-4 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 mx-auto ${copied ? 'text-emerald-500' : 'text-primary hover:text-white'}`}
                                >
                                    {copied ? (
                                        <>
                                            <Check size={12} className="text-emerald-500" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles size={12} />
                                            Click to copy code
                                        </>
                                    )}
                                </button>
                            </div>

                            <button
                                onClick={closePopup}
                                className="w-full py-5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black font-black uppercase tracking-widest text-lg shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    CLAIM DISCOUNT NOW
                                    <Zap size={20} className="fill-black" />
                                </span>
                            </button>

                            <p className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                <Sparkles size={10} className="text-primary" />
                                Valid for the next 24 hours only
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

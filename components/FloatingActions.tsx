"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/i18n-config";

export default function FloatingActions({ lang }: { lang: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isLangOpen, setIsLangOpen] = useState(false);

    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "nl", name: "Nederlands", flag: "🇳🇱" },
        { code: "pl", name: "Polski", flag: "🇵🇱" },
    ];

    const currentLangObj = languages.find(l => l.code === lang) || languages[0];

    const handleLangChange = (newLang: string) => {
        // Save to localStorage
        localStorage.setItem("preferred-locale", newLang);
        
        // Construct new path
        const segments = pathname.split("/");
        segments[1] = newLang;
        const newPath = segments.join("/");
        
        router.push(newPath);
        setIsLangOpen(false);
    };

    return (
        <>
            {/* Language Selector - Bottom Left */}
            <div className="fixed bottom-6 left-6 z-[60]">
                <AnimatePresence>
                    {isLangOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full mb-3 left-0 bg-[#15151A] p-2 rounded-2xl border border-white/20 min-w-[180px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-[70] backdrop-blur-md"
                        >
                            <div className="px-3 py-1.5 mb-1">
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Select Language</span>
                            </div>
                            {languages.map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => handleLangChange(l.code)}
                                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[10px] font-black transition-all hover:bg-white/10 active:scale-95 uppercase tracking-widest ${lang === l.code ? "text-primary bg-primary/10" : "text-gray-200 hover:text-white"
                                        }`}
                                >
                                    <span className="text-base">{l.flag}</span>
                                    {l.name}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#15151A]/90 backdrop-blur-xl px-4 py-3 rounded-2xl flex items-center gap-4 border border-white/15 hover:border-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-all duration-300 relative overflow-hidden"
                >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center gap-3 relative z-10">
                        {languages.map((l) => (
                            <div key={l.code} className="relative flex flex-col items-center">
                                <span className={`text-xl transition-all duration-300 ${lang === l.code 
                                    ? "scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] filter-none" 
                                    : "opacity-30 grayscale group-hover:opacity-70 group-hover:grayscale-0"
                                }`}>
                                    {l.flag}
                                </span>
                                {lang === l.code && (
                                    <motion.div 
                                        layoutId="active-dot"
                                        className="absolute -bottom-1.5 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#D4AF37]"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="h-5 w-[1px] bg-white/10 mx-1" />

                    <div className="flex flex-col items-start relative z-10">
                        <span className="text-[10px] font-black text-gray-200 group-hover:text-primary transition-colors tracking-[0.2em] uppercase leading-none">
                            {lang}
                        </span>
                    </div>
                </motion.button>
            </div>
        </>
    );
}

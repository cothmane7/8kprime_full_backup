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
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#15151A] w-10 h-10 rounded-full flex items-center justify-center border border-white/15 hover:border-primary/50 shadow-lg relative group overflow-hidden transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Languages className="w-4 h-4 text-white group-hover:text-primary transition-colors relative z-10" />
                    <div className="absolute -top-0.5 -right-0.5 bg-primary text-black text-[6px] font-black px-1 py-0.5 rounded-full uppercase shadow-lg border border-[#15151A] z-20">
                        {lang.toUpperCase()}
                    </div>
                </motion.button>
            </div>
        </>
    );
}

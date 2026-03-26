"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Globe } from "lucide-react";
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
            {/* WhatsApp Floating Button - Bottom Right */}
            <motion.a
                href="https://wa.me/18185656691"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group"
            >
                <MessageCircle className="w-8 h-8 fill-current" />
                <span className="absolute right-full mr-4 bg-white text-black text-[10px] px-3 py-1.5 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-100 uppercase">
                    Chat with us
                </span>
            </motion.a>

            {/* Language Selector - Bottom Left */}
            <div className="fixed bottom-8 left-8 z-[60]">
                <AnimatePresence>
                    {isLangOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full mb-4 left-0 bg-[#15151A] p-2 rounded-2xl border border-white/20 min-w-[200px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-[70] backdrop-blur-md"
                        >
                            <div className="px-4 py-2 mb-1">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Select Language</span>
                            </div>
                            {languages.map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => handleLangChange(l.code)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-black transition-all hover:bg-white/10 active:scale-95 uppercase tracking-widest ${lang === l.code ? "text-primary bg-primary/10" : "text-gray-200 hover:text-white"
                                        }`}
                                >
                                    <span className="text-lg">{l.flag}</span>
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
                    className="bg-[#15151A] w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/10 hover:border-primary/50 shadow-2xl relative group overflow-hidden transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Globe className="w-6 h-6 text-white group-hover:text-primary transition-colors relative z-10" />
                    <div className="absolute -top-1 -right-1 bg-primary text-black text-[8px] font-black px-2 py-1 rounded-full uppercase shadow-lg border-2 border-[#15151A] z-20">
                        {lang.toUpperCase()}
                    </div>
                </motion.button>
            </div>
        </>
    );
}

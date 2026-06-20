"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StickyCTA({ lang, dictionary }: { lang: string; dictionary: any }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past ~80% of viewport height (past the hero)
            setIsVisible(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
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
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
                >
                    <div className="bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-primary/20 px-4 py-3 shadow-[0_-4px_30px_rgba(0,0,0,0.5)]">
                        <Link
                            href={`/${lang}#pricing`}
                            onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
                            className="flex items-center justify-center gap-2 w-full bg-metallic-gold text-black py-4 rounded-2xl font-extrabold text-base shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
                        >
                            {dictionary.cta_watch}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function LeaguesCarousel({ dictionary }: { dictionary: any }) {
    const leagues = [
        { name: "League 1", img: "/leagues/1278ef345eb81a9285ddf06433e3a07d.jpg" },
        { name: "League 2", img: "/leagues/1e0492d9c6b3b0409a62a2d7babc380e.jpg" },
        { name: "League 3", img: "/leagues/2e025d3d178ed4e39b093ab6576eb0fb.jpg" },
        { name: "League 4", img: "/leagues/3064366928090fbaa2e3d8bd460f057c.jpg" },
        { name: "League 5", img: "/leagues/37aa3c8ee1919e73bea2f1b4b100795d.jpg" },
        { name: "League 6", img: "/leagues/62fba455161cb081a3a7f74f11e2cc26.jpg" },
        { name: "League 7", img: "/leagues/9ed1d460c8483eb854bc8901265e37dc.jpg" },
        { name: "League 8", img: "/leagues/a12b9daea6ec1097989a7f423463b1d0.jpg" },
        { name: "League 9", img: "/leagues/b8b4aa316768025fd1bb254c591e6714.jpg" },
        { name: "League 10", img: "/leagues/c0b97756594680539dbbca2957cfb088.jpg" },
        { name: "League 11", img: "/leagues/c8c8cece4d487df5c61d40d86033608a.jpg" },
        { name: "Sport 1", img: "/sports/52d5598a7c1b5ee04954924c6be828b2.jpg" },
        { name: "Sport 2", img: "/sports/6e883bc5490abb1a2ca51850a928a656.jpg" },
        { name: "Sport 3", img: "/sports/70787d4bf30789ae4e802585cddb9708.jpg" },
        { name: "Sport 4", img: "/sports/88bf83f3286d037740bceff3f5e09b15.jpg" },
        { name: "Sport 5", img: "/sports/e86ce0f9d808dc6c5c56a26289f56d20.jpg" },
    ];

    // Double the content config for marquee
    return (
        <section className="py-20 bg-[#050505] relative overflow-hidden border-y border-white/5">
            {/* Atmospheric Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 w-full mb-12">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <span className="text-xl md:text-3xl font-black text-white tracking-[0.2em] uppercase flex items-center gap-4 shadow-[0_0_15px_rgba(212,175,55,0.3)] gold-reflection soft-gold-glow">
                            <span className="text-2xl md:text-4xl">⚽</span>
                            <span className="text-primary/90">{dictionary.badge_part1}</span> <span className="text-gradient-premium italic">{dictionary.badge_part2}</span>
                            <span className="text-2xl md:text-4xl">🏆</span>
                        </span>
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    </div>
                    <p className="text-gray-500 font-bold text-[10px] md:text-xs tracking-[0.4em] uppercase">{dictionary.subtext}</p>
                </div>
            </div>

            <div className="relative overflow-hidden w-full">
                <div className="marquee-container animate-marquee-right py-4">
                    {[...leagues, ...leagues, ...leagues].map((item, index) => (
                        <div
                            key={index}
                            className="group relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-2xl md:rounded-3xl overflow-hidden bg-white/[0.03] border border-white/5 shadow-2xl transition-all duration-700 flex items-center justify-center p-4 flex-shrink-0"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                                className="w-full h-full object-contain transition-all duration-700 md:group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}

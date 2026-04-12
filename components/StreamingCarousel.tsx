"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function StreamingCarousel({ dictionary }: { dictionary: any }) {
    const services = [
        { name: "Service 1", img: "/premium/09b79481f4e3f0e52e7642e4ac8d47e8.jpg" },
        { name: "Service 2", img: "/premium/0a282f8d039b51d0da3740d836a78844.jpg" },
        { name: "Service 3", img: "/premium/2aa4f65d546acf68d35e609ae7e5c91c.jpg" },
        { name: "Service 4", img: "/premium/2eaf9e269fbbd8d4c90094b1a90709b0.jpg" },
        { name: "Service 5", img: "/premium/8660706a8e41be3c66d05eac4983376a.jpg" },
        { name: "Service 6", img: "/premium/993a88900f40705b2d5346975e13d65b.jpg" },
        { name: "Service 7", img: "/premium/a8cbdef0355ad508eb90b6b6143a0fa1.jpg" },
        { name: "Service 8", img: "/premium/b6a4e6d3b4f4803df9b6fb66216e49b1.jpg" },
        { name: "Service 9", img: "/premium/db37accde45149b05a0297a3ab81e3af.jpg" },
        { name: "Service 10", img: "/premium/e0f29df3a0f19b69254646b40fec595a.jpg" },
        { name: "Service 11", img: "/premium/ea60e224dd6d009926b751998e011154.jpg" },
    ];

    return (
        <section className="py-10 bg-[#050505] relative overflow-hidden">
            {/* Atmospheric Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative overflow-hidden w-full">
                <div className="marquee-container animate-marquee-left py-4">
                    {[...services, ...services, ...services].map((item, index) => (
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
        </section>
    );
}

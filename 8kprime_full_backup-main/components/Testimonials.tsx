"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials({ dictionary }: { dictionary: any }) {
    // Array of the newly added image paths
    const testimonialImages = [
        "/testimonials/1.webp",
        "/testimonials/2.webp",
        "/testimonials/3.webp",
        "/testimonials/4.webp",
        "/testimonials/5.webp",
        "/testimonials/6.webp",
    ];

    return (
        <section className="py-20 md:py-28 bg-[#0B0B0F] relative overflow-hidden">
            <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
                    >
                        {dictionary.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter"
                    >
                        {dictionary.title_part1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">{dictionary.title_part2}</span>
                    </motion.h2>
                </div>

                <div className="relative w-full overflow-hidden max-w-7xl mx-auto py-4">
                    {/* Gradient fade edges for smooth entrance/exit */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0B0F] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0B0F] to-transparent z-20 pointer-events-none" />

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-6 w-max"
                        // Pause animation on hover
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {[...testimonialImages, ...testimonialImages].map((src, index) => (
                            <div
                                key={index}
                                className="w-[280px] md:w-[320px] shrink-0 bg-white/[0.03] border border-white/5 rounded-[2rem] p-4 hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden pointer-events-none">
                                    <Image
                                        src={src}
                                        alt={`Testimonial ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 280px, 320px"
                                    />
                                </div>
                                
                                {/* Stars overlay at the bottom */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} size={14} className="text-primary fill-primary" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

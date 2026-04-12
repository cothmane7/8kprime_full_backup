"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MovieGrid({ lang, dictionary }: { lang: string; dictionary: any }) {
    const content = [
        { title: "Premium Release", category: "MOVIE", img: "/carousell/033508397c8971ca22f046b901265afe.jpg" },
        { title: "Trending Now", category: "MOVIE", img: "/carousell/0774ba575199987ba2f2e2b45dde18e1.jpg" },
        { title: "Exclusive Title", category: "MOVIE", img: "/carousell/328f9a9fff549f49f41c9a6fb0a5f61d.jpg" },
        { title: "New Addition", category: "MOVIE", img: "/carousell/368b4436eeb04ab61db66e63adc7787d.jpg" },
        { title: "Top Rated", category: "MOVIE", img: "/carousell/38bfc6151e43c6301311b1210b3e41df.jpg" },
        { title: "Editor's Choice", category: "MOVIE", img: "/carousell/6bceb5def60142770a832292ada2d390.jpg" },
        { title: "Popular Pick", category: "MOVIE", img: "/carousell/7fc3f524abcc3b8ccbf50f62aaed9078.jpg" },
        { title: "Must Watch", category: "MOVIE", img: "/carousell/95483221e3e8bcf572b3fdbb675f4b79.jpg" },
        { title: "Global Hit", category: "MOVIE", img: "/carousell/9a48a1fd86b56a57ae2027688f62b163.jpg" },
        { title: "Critically Acclaimed", category: "MOVIE", img: "/carousell/ab741c795e9dc6b77d3bb7f314e44fa4.jpg" },
        { title: "Fan Favorite", category: "MOVIE", img: "/carousell/e46a5791f5dfbf78ba6a5c0e56dc497e.jpg" },
        { title: "Box Office Smash", category: "MOVIE", img: "/carousell/f17ee982f45f7d0e4d84a23a5825795e.jpg" },
    ];

    return (
        <section className="pt-4 md:pt-10 pb-20 bg-[#050505] relative overflow-hidden" id="channels">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-responsive relative z-10 w-full max-w-none">
                

                {/* Continuous Marquee */}
                <div className="relative overflow-hidden w-full py-2 md:py-4">
                    <div className="marquee-container animate-marquee-right">
                        {[...content, ...content, ...content].map((item, index) => (
                            <div
                                key={index}
                                className="group relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] aspect-[2/3] rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#1A1A22] shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-500 flex-shrink-0"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex flex-wrap items-center gap-1.5 mb-2 md:mb-3">
                                        <span className="bg-primary text-black text-[7px] md:text-[9px] font-black px-2 py-0.5 rounded-sm tracking-widest uppercase">
                                            {item.category}
                                        </span>
                                        <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[7px] md:text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase">
                                            4K UHD
                                        </span>
                                    </div>
                                    <h3 className="text-xs md:text-lg font-black text-white leading-tight uppercase tracking-wide">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

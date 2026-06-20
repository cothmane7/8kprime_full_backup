"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Tv, Zap, Calendar } from "lucide-react";

function Counter({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;
            const duration = 2;

            const animate = (time: number) => {
                if (!startTime) startTime = time;
                const progress = Math.min((time - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, from, to]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function SocialProofBar({ dictionary }: { dictionary: any }) {
    const stats = [
        { label: dictionary.subscribers, value: 45000, suffix: "+", icon: <Users className="w-4 h-4 md:w-5 md:h-5" /> },
        { label: dictionary.channels, value: 60000, suffix: "+", icon: <Tv className="w-4 h-4 md:w-5 md:h-5" /> },
        { label: dictionary.uptime, value: 99, suffix: ".9%", icon: <Zap className="w-4 h-4 md:w-5 md:h-5" /> },
        { label: dictionary.since, value: 2018, suffix: "", icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" />, isYear: true },
    ];

    return (
        <section className="py-6 md:py-8 bg-[#0B0B0F] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 md:gap-4 justify-center"
                        >
                            <div className="text-primary">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none">
                                    {stat.isYear ? (
                                        <span>2018</span>
                                    ) : (
                                        <Counter from={0} to={stat.value} suffix={stat.suffix} />
                                    )}
                                </div>
                                <div className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Monitor, Tv, Zap } from "lucide-react";

interface CounterProps {
    from: number;
    to: number;
    duration?: number;
}

function Counter({ from, to, duration = 2 }: CounterProps) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;

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
    }, [isInView, from, to, duration]);

    return <span ref={ref}>{count.toLocaleString()}{to > 1000 ? "+" : ""}</span>;
}

export default function Stats({ dictionary }: { dictionary: any }) {
    const stats = [
        { label: dictionary.active_subs, value: 45000, icon: <Users className="w-5 h-5 text-primary" /> },
        { label: dictionary.live_channels, value: 60000, icon: <Tv className="w-5 h-5 text-primary" /> },
        { label: dictionary.vod_content, value: 150000, icon: <Zap className="w-5 h-5 text-primary" /> },
        { label: dictionary.device_types, value: 12, icon: <Monitor className="w-5 h-5 text-primary" /> },
    ];

    return (
        <section className="py-12 bg-[#0B0B0F] relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 md:p-8 rounded-[32px] flex flex-col items-center text-center group hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                                <Counter from={0} to={stat.value} />
                            </div>
                            <div className="text-[10px] md:text-xs font-black text-gray-300 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

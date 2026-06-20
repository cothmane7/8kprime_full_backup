"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function OneSubscription() {


    return (
        <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 -left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
                    
                    {/* Content Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] mb-4 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 w-max">
                            <Sparkles size={12} className="text-primary" />
                            Premium Experience
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter mb-4 uppercase">
                            All What You Need Is <br />
                            <span className="text-gradient-premium">One Subscription</span>
                        </h2>
                        
                        <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm">
                            Stop paying for multiple streaming services. Get everything in one ultimate package.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "100,000+ Channels & VODs",
                                "4K/8K Ultra HD Quality",
                                "Anti-Freeze Technology",
                                "Instant Activation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        
                        <div>
                            <a 
                                href="#pricing"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black font-black uppercase tracking-widest px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] text-xs"
                            >
                                Get Started Now
                            </a>
                        </div>
                    </motion.div>

                    {/* Video Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:col-span-8"
                    >
                        {/* Decorative glow behind video */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-3xl rounded-[3rem] transform scale-95" />
                        
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/50 aspect-video flex items-center justify-center">
                            <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                preload="auto"
                                className="w-full h-full object-cover"
                            >
                                <source src="/videos/8K-prime-Service.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Trophy, Globe, Lock, Cpu } from "lucide-react";

export default function Features({ dictionary }: { dictionary: any }) {
    const features = [
        {
            icon: <Cpu className="w-8 h-8" />,
            title: dictionary.anti_freeze_title,
            description: dictionary.anti_freeze_desc,
            color: "gold",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: dictionary.cinematic_title,
            description: dictionary.cinematic_desc,
            color: "gold",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: dictionary.global_network_title,
            description: dictionary.global_network_desc,
            color: "gold",
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: dictionary.private_secure_title,
            description: dictionary.private_secure_desc,
            color: "gold",
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: dictionary.priority_activation_title,
            description: dictionary.priority_activation_desc,
            color: "gold",
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: dictionary.buyer_protection_title,
            description: dictionary.buyer_protection_desc,
            color: "gold",
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden" id="features">
            <div className="container-responsive">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-sm mb-4 md:mb-6 bg-primary/5 px-6 py-2 rounded-full inline-block border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                    >
                        {dictionary.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-[5rem] lg:text-[6rem] font-black text-white leading-tight tracking-tighter uppercase"
                    >
                        <span className="text-primary/90">{dictionary.title_line1}</span> <span className="text-gradient-premium italic">{dictionary.title_line2}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-premium p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-primary/10 hover:border-primary/40 transition-all duration-700 group cursor-default shadow-2xl"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-metallic-gold rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-all duration-500 button-shine gold-reflection soft-gold-glow">
                                <div className="text-black w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 tracking-tight uppercase group-hover:text-gold-light transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 md:text-gray-300 text-base md:text-lg leading-relaxed font-semibold group-hover:text-white transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

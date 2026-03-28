"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Users, Star, ArrowRight } from "lucide-react";

export default function ResellerPage() {
    const features = [
        "1 Credit = 1 month",
        "3 Credit = 3 Months",
        "6 Credit = 6 Months",
        "12 Credit = 12 Months",
        "Full exclusive access to your Panel",
        "HD/FHD/4K IPTV",
        "60 000+ TV Channels",
        "+160 000 VOD",
        "Free Trials Included",
        "EPG ratio : 25.33%",
        "Playlist scour : 44.39%"
    ];

    const tiers = [
        {
            title: "120 Credits",
            price: 360,
            isHighlighted: true
        },
        {
            title: "240 Credits",
            price: 700,
            isHighlighted: false
        },
        {
            title: "360 Credits",
            price: 1000,
            isHighlighted: false
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                
                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 bg-primary/10 px-6 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                    >
                        <Users size={14} className="text-primary" />
                        Become a Partner
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase"
                    >
                        START YOUR <span className="text-gradient-premium">RESELLER</span> BUSINESS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto italic"
                    >
                        "Stop wasting time money and effort finding the perfect business with a low investment, because only our business has that benefit."
                    </motion.p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 + 0.3 }}
                            className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] md:rounded-[2rem] transition-all duration-500 group gold-glow-hover h-full ${
                                tier.isHighlighted 
                                ? 'bg-gradient-to-b from-[#1A1A22] via-primary/10 to-[#0A0A0F] border-2 border-primary shadow-[0_0_80px_rgba(212,175,55,0.5)] z-10 md:scale-[1.05]' 
                                : 'bg-gradient-to-b from-[#1A1A22] to-[#0A0A0F] border border-white/5 bg-[#0A0A0F]'
                            }`}
                        >
                            {tier.isHighlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-metallic-gold text-black text-[9px] font-black uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg shadow-primary/30 flex items-center gap-2 whitespace-nowrap gold-reflection">
                                    <Star size={12} className="fill-black" />
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase mb-6">
                                    {tier.title}
                                </h3>
                                
                                <div className="flex items-start gap-1">
                                    <span className="text-2xl font-black text-white mt-1">€</span>
                                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">{tier.price}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-xs md:text-[13px] font-semibold text-gray-200">
                                        <div className="mt-0.5 mt-1">
                                            <Check size={16} strokeWidth={3} className="text-primary w-4 h-4" />
                                        </div>
                                        <span className="leading-snug">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a 
                                    href={`https://wa.me/18185656691?text=${encodeURIComponent(`Hello 8KPRIME, I am interested in the ${tier.title} Reseller Plan (€${tier.price}).`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-4 md:py-5 rounded-full font-black uppercase tracking-wider transition-all duration-500 text-lg md:text-xl touch-target hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black shadow-[0_0_30px_rgba(212,175,55,0.4),inset_0_2px_4px_rgba(255,240,179,0.9)] overflow-hidden relative group/btn border border-yellow-200/50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                    <div className="absolute inset-1 rounded-full border border-black/10 pointer-events-none" />
                                    <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                                        BUY NOW
                                        <ArrowRight size={20} className="md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </a>
                                <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                                    <Zap size={10} className="text-primary" />
                                    Ready within 5-7mins
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-20 flex flex-wrap justify-center gap-8 text-center text-gray-500 font-bold uppercase tracking-widest text-xs">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-primary" />
                        100% Secure Payment
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-primary" />
                        Instant Panel Access
                    </div>
                </div>

            </div>
        </div>
    );
}

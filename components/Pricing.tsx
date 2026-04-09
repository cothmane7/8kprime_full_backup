"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShoppingCart, Monitor, ShieldCheck, Zap, PlayCircle, Film, Sparkles, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function Pricing({ lang, dictionary, common }: { lang: any; dictionary: any; common: any }) {
    const [activeDevices, setActiveDevices] = useState(1);

    const plans = [
        {
            months: 3,
            price: 29.99,
            label: dictionary.label_quarterly,
            isPopular: false,
            tag: dictionary.trial_plan,
            saveLabel: "",
            cta: dictionary.cta_subscribe,
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ]
        },
        {
            months: 6,
            price: 39.99,
            label: dictionary.label_semi_annual,
            isPopular: false,
            tag: dictionary.smart_choice,
            saveLabel: `${dictionary.save} 63%`,
            cta: dictionary.cta_subscribe,
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ]
        },
        {
            months: 12,
            price: 59.99,
            label: dictionary.label_annual,
            isPopular: true,
            tag: dictionary.best_value,
            saveLabel: `${dictionary.save} 72%`,
            cta: dictionary.cta_subscribe,
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ]
        },
        {
            months: 24,
            price: 119.99,
            label: dictionary.label_2_year,
            isPopular: false,
            tag: dictionary.max_savings,
            saveLabel: `${dictionary.save} 72%`,
            cta: dictionary.cta_subscribe,
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ]
        },
    ];

    const calculatePrice = (basePrice: number) => {
        const multipliers: any = { 1: 1, 2: 1.5, 3: 2, 4: 2.5 };
        return (basePrice * multipliers[activeDevices]).toFixed(2);
    };

    return (
        <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden" id="pricing">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-bronze/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container-responsive relative z-10 w-full px-4 md:px-8">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 bg-primary/10 px-6 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.15)] gold-reflection soft-gold-glow"
                    >
                        <Sparkles size={14} className="text-gold-light" />
                        {dictionary.badge}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-6 uppercase"
                    >
                        <span className="text-primary/90">{dictionary.title_part1}</span> <span className="text-gradient-premium">{dictionary.title_part2}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-200 text-base md:text-lg font-medium"
                    >
                        {dictionary.subtext}
                    </motion.p>
                </div>

                {/* Device Selector */}
                <div className="flex flex-col items-center mb-16 md:mb-20 relative z-20">
                    <p className="text-[10px] md:text-xs text-gray-300 font-black mb-5 uppercase tracking-[0.4em]">{dictionary.device_selector_label}</p>
                    <div className="inline-flex bg-[#0A0A0F] p-1.5 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
                        <motion.div 
                            className="absolute inset-y-1.5 rounded-[2.5rem] bg-metallic-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                            initial={false}
                            animate={{
                                left: `${(activeDevices - 1) * 33.33}%`,
                                width: '33.33%',
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                onClick={() => setActiveDevices(num)}
                                className={`relative z-10 w-24 sm:w-32 md:w-40 py-3 md:py-4 rounded-[2.5rem] text-sm md:text-base font-black transition-colors duration-500 flex items-center justify-center gap-2 flex-shrink-0 touch-target ${activeDevices === num
                                    ? "text-black"
                                    : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                <Monitor size={16} className={activeDevices === num ? "text-black" : "text-gray-300"} />
                                <span className="uppercase tracking-widest">
                                    {num} <span className="hidden sm:inline">{num === 1 ? dictionary.device : dictionary.devices}</span>
                                    <span className="sm:hidden">{num === 1 ? dictionary.dev : dictionary.devs}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-[1500px] mx-auto items-stretch relative z-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] md:rounded-[2rem] transition-all duration-500 group gold-glow-hover h-full ${plan.isPopular
                                ? "bg-gradient-to-b from-[#1A1A22] via-primary/10 to-[#0A0A0F] border-2 border-primary shadow-[0_0_80px_rgba(212,175,55,0.5)] z-10 md:scale-[1.05]"
                                : "bg-gradient-to-b from-[#1A1A22] to-[#0A0A0F] border border-white/5"
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-metallic-gold text-black text-[9px] font-black uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg shadow-primary/30 flex items-center gap-2 whitespace-nowrap gold-reflection">
                                    <Star size={12} className="fill-black" />
                                    {dictionary.most_popular}
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">{plan.months} {plan.months === 1 ? dictionary.month : dictionary.months}</h3>
                                    {plan.saveLabel && (
                                        <span className="text-gradient-premium font-black text-[9px] tracking-widest">{plan.saveLabel}</span>
                                    )}
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-wider mb-6 text-primary">{plan.tag}</p>

                                <div className="flex items-start gap-1">
                                    <span className="text-2xl font-black text-white mt-1">€</span>
                                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                                        {calculatePrice(plan.price).split('.')[0]}
                                    </span>
                                    <div className="flex flex-col justify-end">
                                        <span className="text-xl md:text-2xl font-black text-white">.{calculatePrice(plan.price).split('.')[1]}</span>
                                    </div>
                                </div>

                                {/* Per-month price breakdown */}
                                <div className="mt-3 flex flex-col gap-1">
                                    {plan.months > 3 && (
                                        <div className="text-gray-500 text-xs font-bold">
                                            <span>{dictionary.regular_price}: </span>
                                            <span className="line-through">€{(17.99 * activeDevices * (activeDevices > 1 ? 0.75 : 1) / activeDevices).toFixed(2)}{dictionary.per_month}</span>
                                        </div>
                                    )}
                                    <div className={`text-sm font-extrabold tracking-tight ${plan.isPopular ? 'text-primary' : 'text-primary/80'}`}>
                                        €{(Math.floor((parseFloat(calculatePrice(plan.price)) / plan.months / activeDevices) * 100) / 100).toFixed(2)}{dictionary.per_month} {activeDevices > 1 && <span className="text-[10px] font-medium opacity-60 ml-0.5">/ {activeDevices === 1 ? dictionary.device || "device" : dictionary.device || "device"}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                <div className="flex items-center gap-3 text-xs md:text-[13px] font-bold text-primary bg-primary/10 px-4 py-2.5 rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                    <Monitor className="w-4 h-4 text-primary shrink-0" />
                                    <span className="leading-none uppercase tracking-wide">
                                        {activeDevices} {activeDevices === 1 ? dictionary.device_connection : dictionary.devices_connection}
                                    </span>
                                </div>
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-xs md:text-[13px] font-semibold text-gray-200">
                                        <div className="mt-0.5">
                                            <feature.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="leading-snug">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Link
                                    href={`/${lang}/checkout?plan=${plan.months}mo&devices=${activeDevices}`}
                                    className="flex items-center justify-center gap-3 w-full py-4 md:py-5 rounded-full font-black uppercase tracking-wider transition-all duration-500 text-lg md:text-xl touch-target hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black shadow-[0_0_30px_rgba(212,175,55,0.4),inset_0_2px_4px_rgba(255,240,179,0.9)] overflow-hidden relative group/btn border border-yellow-200/50"
                                >
                                    {/* Animated shine sweep */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                    {/* Inner ring */}
                                    <div className="absolute inset-1 rounded-full border border-black/10 pointer-events-none" />
                                    <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                                        {plan.cta}
                                        <ShoppingCart size={20} className="md:w-6 md:h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                                    </span>
                                </Link>
                                <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                                    <Zap size={10} className="text-primary" />
                                    {dictionary.instant_global_access}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust & Guarantee Section */}
                <div className="mt-24 max-w-5xl mx-auto relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0A0A0F] border border-white/5 rounded-3xl p-8 mb-10 shadow-2xl">
                        <div className="flex flex-col items-center text-center gap-3 p-4">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-2">
                                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                            </div>
                            <h4 className="text-white font-black text-sm uppercase tracking-widest">{common.secure_payment}</h4>
                            <p className="text-gray-200 text-xs leading-relaxed font-medium">{dictionary.trust_secure_text}</p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-3 p-4 md:border-x border-white/5">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-white font-black text-sm uppercase tracking-widest">{common.instant_activation}</h4>
                            <p className="text-gray-200 text-xs leading-relaxed font-medium">{dictionary.trust_global_text}</p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-3 p-4">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-2">
                                <Clock className="w-6 h-6 text-blue-500" />
                            </div>
                            <h4 className="text-white font-black text-sm uppercase tracking-widest">{common.vip_support}</h4>
                            <p className="text-gray-200 text-xs leading-relaxed font-medium">{dictionary.trust_multi_text}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-300 font-bold text-xs uppercase tracking-widest">
                            {dictionary.guarantee}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

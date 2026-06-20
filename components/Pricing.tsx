"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Monitor, ShieldCheck, Zap, PlayCircle, Film, Sparkles, Clock, Star, MessageCircle } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

export default function Pricing({ lang, dictionary, common }: { lang: any; dictionary: any; common: any }) {
    const [selectedPlan, setSelectedPlan] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedScreens, setSelectedScreens] = useState(2);

    const screenOptions = [2, 3, 4, 5];

    const plans = [
        {
            months: 1,
            price: 17.99,
            label: "1 Month",
            tag: dictionary.trial_plan || "Starter",
            isPopular: false,
            saveLabel: "",
            cta: dictionary.cta_subscribe,
            iframeSrc: "https://pay.hotmart.com/Q102240615C?off=31l91jqt&checkoutMode=10&hidename=1&hideemail=1&hidephone=1",
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ],
        },
        {
            months: 3,
            price: 35.99,
            label: "3 Months",
            tag: dictionary.label_quarterly || "Quarterly",
            isPopular: false,
            saveLabel: "",
            cta: dictionary.cta_subscribe,
            iframeSrc: "https://pay.hotmart.com/Q102240615C?off=cgj0eh3v&checkoutMode=10&hidename=1&hideemail=1&hidephone=1",
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ],
        },
        {
            months: 6,
            price: 49.99,
            label: "6 Months",
            tag: dictionary.smart_choice || "Smart Choice",
            isPopular: false,
            saveLabel: `${dictionary.save || "Save"} 30%`,
            cta: dictionary.cta_subscribe,
            iframeSrc: "https://pay.hotmart.com/Q102240615C?off=x69l6ecu&checkoutMode=10&hidename=1&hideemail=1&hidephone=1",
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ],
        },
        {
            months: 12,
            price: 69.99,
            label: "12 Months",
            tag: dictionary.best_value || "Best Value",
            isPopular: true,
            saveLabel: `${dictionary.save || "Save"} 50%`,
            cta: dictionary.cta_subscribe,
            iframeSrc: "https://pay.hotmart.com/Q102240615C?off=zj5owiaz&checkoutMode=10&hidename=1&hideemail=1&hidephone=1",
            features: [
                { icon: PlayCircle, text: dictionary.feature_live_channels },
                { icon: Film, text: dictionary.feature_vod },
                { icon: Sparkles, text: dictionary.feature_quality },
                { icon: ShieldCheck, text: dictionary.feature_anti_freeze },
                { icon: Zap, text: common.instant_activation },
                { icon: Monitor, text: dictionary.feature_devices },
                { icon: Clock, text: dictionary.feature_support },
            ],
        },
    ];

    const whatsappMessage = encodeURIComponent(
        `Hello 8KPRIME! I'm interested in a multi-screen plan for ${selectedScreens} screens. I'd like to discuss pricing and options.`
    );
    const whatsappUrl = `https://wa.me/18185656691?text=${whatsappMessage}`;

    return (
        <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden" id="pricing">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-bronze/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container-responsive relative z-10 w-full px-4 md:px-8">

                {/* Header */}
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
                        <span className="text-primary/90">{dictionary.title_part1}</span>{" "}
                        <span className="text-gradient-premium">{dictionary.title_part2}</span>
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

                {/* Pricing Cards — 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 max-w-[1400px] mx-auto items-stretch relative z-20">
                    {plans.map((plan, index) => {
                        const priceStr = plan.price.toFixed(2);
                        const [whole, decimal] = priceStr.split(".");
                        const perMonth = (plan.price / plan.months).toFixed(2);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className={`relative flex flex-col p-7 md:p-8 rounded-[2rem] transition-all duration-500 group gold-glow-hover h-full ${
                                    plan.isPopular
                                        ? "bg-gradient-to-b from-[#1A1A22] via-primary/10 to-[#0A0A0F] border-2 border-primary shadow-[0_0_60px_rgba(212,175,55,0.4)]"
                                        : "bg-gradient-to-b from-[#1A1A22] to-[#0A0A0F] border border-white/5 hover:border-white/10"
                                }`}
                            >
                                {/* Popular badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-metallic-gold text-black text-[9px] font-black uppercase tracking-widest py-1.5 px-5 rounded-full shadow-lg shadow-primary/30 flex items-center gap-1.5 whitespace-nowrap gold-reflection">
                                        <Star size={11} className="fill-black" />
                                        {dictionary.most_popular}
                                    </div>
                                )}

                                {/* Plan header */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-lg md:text-xl font-black text-white tracking-tight uppercase">
                                            {plan.months} {plan.months === 1 ? dictionary.month || "Month" : dictionary.months || "Months"}
                                        </h3>
                                        {plan.saveLabel && (
                                            <span className="text-gradient-premium font-black text-[9px] tracking-widest">
                                                {plan.saveLabel}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-wider mb-5 text-primary">
                                        {plan.tag}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-start gap-1 relative">
                                        <span className="text-xl font-black text-white mt-1">$</span>
                                        <AnimatePresence mode="popLayout">
                                            <motion.span
                                                key={whole}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none inline-block"
                                            >
                                                {whole}
                                            </motion.span>
                                        </AnimatePresence>
                                        <div className="flex flex-col justify-end">
                                            <span className="text-lg md:text-xl font-black text-white inline-block">
                                                .{decimal}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Per-month breakdown */}
                                    <div className={`mt-2 text-sm font-extrabold tracking-tight ${plan.isPopular ? "text-primary" : "text-primary/80"}`}>
                                        ${perMonth}{dictionary.per_month || "/mo"}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-xs md:text-[13px] font-semibold text-gray-200">
                                            <div className="mt-0.5">
                                                <feature.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="leading-snug">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="mt-auto flex flex-col gap-3">
                                    <button
                                        onClick={() => {
                                            setSelectedPlan(plan);
                                            setIsModalOpen(true);
                                        }}
                                        className="flex items-center justify-center gap-3 w-full py-4 md:py-5 rounded-full font-black uppercase tracking-wider transition-all duration-500 text-base md:text-lg touch-target hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black shadow-[0_0_30px_rgba(212,175,55,0.4),inset_0_2px_4px_rgba(255,240,179,0.9)] overflow-hidden relative group/btn border border-yellow-200/50"
                                    >
                                        {/* Shine sweep */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                        {/* Inner ring */}
                                        <div className="absolute inset-1 rounded-full border border-black/10 pointer-events-none" />
                                        <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                                            {plan.cta}
                                            <ShoppingCart size={18} className="md:w-5 md:h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                                        </span>
                                    </button>

                                    {/* WhatsApp Secondary CTA */}
                                    <a
                                        href={`https://wa.me/18185656691?text=${encodeURIComponent(`Hello 8KPRIME! I'm interested in the ${plan.label} plan.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold uppercase tracking-wide transition-all duration-300 text-sm md:text-base border border-white/10 bg-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 text-gray-300 hover:text-white"
                                    >
                                        <MessageCircle size={16} className="text-[#25D366]" />
                                        Order via WhatsApp
                                    </a>

                                    <div className="mt-1 flex items-center justify-center gap-2 text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                                        <Zap size={10} className="text-primary" />
                                        {dictionary.instant_global_access}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ─── Multi-Screen Selector Section ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="mt-14 max-w-2xl mx-auto relative z-20"
                >
                    <div className="relative rounded-[2rem] bg-gradient-to-b from-[#1A1A22] to-[#0A0A0F] border border-white/10 p-8 md:p-10 overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#25D366]/10 blur-[100px] rounded-full pointer-events-none" />

                        {/* Header */}
                        <div className="text-center mb-8 relative">
                            <div className="inline-flex items-center gap-2 text-[#25D366] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 bg-[#25D366]/10 px-5 py-2 rounded-full border border-[#25D366]/20">
                                <Monitor size={14} />
                                Multi-Screen
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                                Want Multiple Screens?
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base font-medium">
                                Select how many screens you need and chat with us for a custom deal
                            </p>
                        </div>

                        {/* Screen Count Selector */}
                        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
                            {screenOptions.map((count) => (
                                <button
                                    key={count}
                                    onClick={() => setSelectedScreens(count)}
                                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl font-black text-2xl md:text-3xl transition-all duration-300 flex flex-col items-center justify-center gap-0.5 ${
                                        selectedScreens === count
                                            ? "bg-[#25D366] text-white scale-110 shadow-[0_0_30px_rgba(37,211,102,0.4)] border-2 border-[#25D366]"
                                            : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                    <span className="leading-none">{count}</span>
                                    <span className={`text-[8px] md:text-[9px] uppercase tracking-wider font-bold ${
                                        selectedScreens === count ? "text-white/80" : "text-gray-500"
                                    }`}>
                                        {count === 1 ? "Screen" : "Screens"}
                                    </span>
                                    {selectedScreens === count && (
                                        <motion.div
                                            layoutId="screen-indicator"
                                            className="absolute -bottom-1.5 w-6 h-1 bg-[#25D366] rounded-full shadow-[0_0_10px_rgba(37,211,102,0.6)]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Selected summary */}
                        <div className="text-center mb-6">
                            <p className="text-gray-300 text-sm font-semibold">
                                You selected <span className="text-[#25D366] font-black text-lg">{selectedScreens}</span> screens
                            </p>
                        </div>

                        {/* WhatsApp CTA Button */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="multi-screen-whatsapp-cta"
                            className="flex items-center justify-center gap-3 w-full py-4 md:py-5 rounded-full font-black uppercase tracking-wider transition-all duration-500 text-base md:text-lg hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-[#25D366] via-[#2EE676] to-[#25D366] bg-[length:200%_auto] hover:bg-right text-white shadow-[0_0_30px_rgba(37,211,102,0.35)] overflow-hidden relative group/wa border border-[#34E878]/50"
                        >
                            {/* Shine sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/wa:translate-x-[200%] transition-transform duration-1000" />
                            <div className="absolute inset-1 rounded-full border border-white/10 pointer-events-none" />
                            <span className="relative z-10 flex items-center gap-2.5 drop-shadow-sm">
                                <MessageCircle size={20} className="group-hover/wa:rotate-12 transition-transform duration-300" />
                                Chat on WhatsApp
                            </span>
                        </a>

                        <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-4">
                            Get a personalized quote instantly
                        </p>
                    </div>
                </motion.div>

                {/* Trust & Guarantee Section */}
                <div className="mt-20 max-w-5xl mx-auto relative z-20">
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

            <CheckoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                plan={selectedPlan}
            />
        </section>
    );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Monitor, ShieldCheck, Zap, PlayCircle, Film, Sparkles, Clock, Star, MessageCircle } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

export default function Pricing({ lang, dictionary, common }: { lang: any; dictionary: any; common: any }) {
    const [selectedPlan, setSelectedPlan] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedScreens, setSelectedScreens] = useState(1);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [redirectingLabel, setRedirectingLabel] = useState("");
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const handleCheckout = (url: string, planLabel: string) => {
        setRedirectingLabel(planLabel);
        setIsRedirecting(true);
        setTimeout(() => {
            const a = document.createElement("a");
            a.href = url;
            a.rel = "noreferrer noopener";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, 3000);
    };

    const screenOptions = [1, 2, 3, 4];

    const planPrices: Record<number, Record<number, number>> = {
        1: { 1: 17.97, 2: 24.97, 3: 33.97, 4: 42.97 },     // Starter Plan (1 Month)
        3: { 1: 39.97, 2: 49.97, 3: 69.97, 4: 79.97 },     // The Quarterly Plan (3 Months)
        6: { 1: 49.97, 2: 69.97, 3: 89.97, 4: 109.97 },    // Semiannual Momentum (6 Months)
        12: { 1: 69.97, 2: 99.97, 3: 139.97, 4: 189.97 }   // Annual Plan (12 Months)
    };

    const plans = [
        {
            months: 1,
            label: "Starter Plan",
            durationLabel: "1 Month",
            tag: "Starter",
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
            label: "The Quarterly Plan",
            durationLabel: "3 Months",
            tag: "Quarterly",
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
            label: "Semiannual Momentum",
            durationLabel: "6 Months",
            tag: "Semiannual Momentum",
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
            label: "Annual Plan",
            durationLabel: "12 Months",
            tag: "Annual Plan",
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
        `Hello 8KPRIME! I want more screens. Let's discuss pricing and options.`
    );
    const whatsappUrl = `https://wa.me/18185656691?text=${whatsappMessage}`;

    return (
        <>
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

                {/* Screens Selector */}
                <div className="flex flex-col items-center mb-12 md:mb-16 relative z-20">
                    <span className="text-xs font-black text-primary uppercase tracking-widest mb-4 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                        Choose your devices
                    </span>
                    <div className="inline-flex p-1 bg-[#15151E]/60 border border-white/5 rounded-2xl glass-premium gap-1">
                        {screenOptions.map((count) => (
                            <button
                                key={count}
                                onClick={() => setSelectedScreens(count)}
                                className={`relative px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                                    selectedScreens === count
                                        ? "bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.25)] font-black scale-105"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                <Monitor size={14} className={selectedScreens === count ? "text-black" : "text-gray-500"} />
                                <span>{count} {count === 1 ? "Screen" : "Screens"}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Cards — 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 max-w-[1400px] mx-auto items-stretch relative z-20">
                    {plans.map((plan, index) => {
                        const currentPrice = planPrices[plan.months][selectedScreens];
                        const priceStr = currentPrice.toFixed(2);
                        const [whole, decimal] = priceStr.split(".");
                        const perMonth = (currentPrice / plan.months).toFixed(2);

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
                                            {plan.label}
                                        </h3>
                                        {plan.saveLabel && (
                                            <span className="text-gradient-premium font-black text-[9px] tracking-widest">
                                                {plan.saveLabel}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-wider mb-5 text-primary">
                                        {plan.durationLabel}
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
                                    {plan.features.map((feature, i) => {
                                        let text = feature.text;
                                        if (feature.icon === Monitor) {
                                            text = selectedScreens === 1
                                                ? "1 Screen Connection"
                                                : `${selectedScreens} Screens Connections`;
                                        }
                                        return (
                                            <div key={i} className="flex items-start gap-3 text-xs md:text-[13px] font-semibold text-gray-200">
                                                <div className="mt-0.5">
                                                    <feature.icon className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="leading-snug">{text}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* CTA Buttons */}
                                <div className="mt-auto flex flex-col gap-3">
                                    <button
                                        onClick={() => {
                                            const planKey = plan.months === 1 ? "starter" : plan.months === 3 ? "quarterly" : plan.months === 6 ? "semiannual" : "annual";
                                            handleCheckout(
                                                `https://www.primesheets.shop/checkout.html?plan=${planKey}&tier=${selectedScreens}`,
                                                `${plan.label} — ${selectedScreens} Screen${selectedScreens > 1 ? "s" : ""}`
                                            );
                                        }}
                                        disabled={isRedirecting}
                                        className="flex items-center justify-center gap-3 w-full py-4 md:py-5 rounded-full font-black uppercase tracking-wider transition-all duration-500 text-base md:text-lg touch-target hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black shadow-[0_0_30px_rgba(212,175,55,0.4),inset_0_2px_4px_rgba(255,240,179,0.9)] overflow-hidden relative group/btn border border-yellow-200/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
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
                                        href={`https://wa.me/18185656691?text=${encodeURIComponent(`Hello 8KPRIME! I'm interested in the ${plan.label} with ${selectedScreens} screen${selectedScreens > 1 ? "s" : ""} at $${currentPrice.toFixed(2)}.`)}`}
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

                {/* ─── Want More Screens WhatsApp CTA ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-16 text-center relative z-20 max-w-xl mx-auto px-4"
                >
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full font-black uppercase tracking-wider transition-all duration-500 text-sm md:text-base hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-[#25D366] via-[#2EE676] to-[#25D366] bg-[length:200%_auto] hover:bg-right text-white shadow-[0_0_35px_rgba(37,211,102,0.3)] overflow-hidden relative group/wa border border-[#34E878]/50"
                    >
                        {/* Shine sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/wa:translate-x-[200%] transition-transform duration-1000" />
                        <div className="absolute inset-1 rounded-full border border-white/10 pointer-events-none" />
                        <span className="relative z-10 flex items-center gap-2.5 drop-shadow-sm">
                            <MessageCircle size={20} className="group-hover/wa:rotate-12 transition-transform duration-300 fill-white" />
                            want more screens ? contact us on whatsapp
                        </span>
                    </a>
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

        {/* Portal: rendered directly in document.body, outside any section/overflow/transform context */}
        {mounted && createPortal(
            <AnimatePresence>
                {isRedirecting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]/95 backdrop-blur-xl"
                    >
                        {/* Pulsing gold aura */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.9, 0.55, 0.9] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-[520px] h-[520px] rounded-full pointer-events-none"
                            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 68%)" }}
                        />

                        <motion.div
                            initial={{ scale: 0.88, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.08, type: "spring", stiffness: 200, damping: 20 }}
                            className="relative flex flex-col items-center gap-5 px-8 text-center"
                        >
                            {/* Spinner */}
                            <div className="relative w-20 h-20">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1.05, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary/30"
                                />
                                <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
                                    <ShoppingCart size={22} className="text-primary" />
                                </div>
                            </div>

                            <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight leading-tight">
                                Preparing your checkout
                            </h3>
                            <p className="text-primary font-bold text-xs tracking-widest uppercase -mt-3">
                                {redirectingLabel}
                            </p>
                            <p className="text-gray-500 text-xs font-medium -mt-3">
                                You&apos;re being securely redirected…
                            </p>

                            {/* Progress bar */}
                            <div className="w-56 h-[3px] bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2.8, ease: [0.4, 0, 0.2, 1] }}
                                    className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] rounded-full"
                                />
                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest -mt-1">
                                <ShieldCheck size={11} className="text-emerald-500" />
                                Secure &amp; encrypted connection
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>,
            document.body
        )}
        </>
    );
}

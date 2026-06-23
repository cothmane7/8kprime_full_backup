"use client";

import { useState, useEffect, use, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingCart, ShieldCheck, Zap, Monitor, Star,
    Clock, PlayCircle, Film, Sparkles, ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const PLAN_INFO: Record<string, { months: number; duration: string; saveLabel: string }> = {
    starter:    { months: 1,  duration: "1 Month",   saveLabel: "" },
    quarterly:  { months: 3,  duration: "3 Months",  saveLabel: "" },
    semiannual: { months: 6,  duration: "6 Months",  saveLabel: "Save 30%" },
    annual:     { months: 12, duration: "12 Months", saveLabel: "Save 50%" },
};

function AlmostThereContent({ lang }: { lang: string }) {
    const searchParams = useSearchParams();
    const plan    = searchParams.get("plan")    || "annual";
    const screens = parseInt(searchParams.get("screens") || "1");
    const price   = searchParams.get("price")   || "69.97";
    const label   = searchParams.get("label")   || "Annual Plan";

    const [isRedirecting, setIsRedirecting] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const planInfo   = PLAN_INFO[plan] ?? PLAN_INFO.annual;
    const checkoutUrl = `https://www.primesheets.shop/checkout.html?plan=${plan}&tier=${screens}`;
    const planLabel  = `${label} — ${screens} Screen${screens > 1 ? "s" : ""}`;

    const handleBeginCheckout = () => {
        setIsRedirecting(true);
        setTimeout(() => {
            const a = document.createElement("a");
            a.href = checkoutUrl;
            a.rel  = "noreferrer noopener";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, 3000);
    };

    const features = [
        { icon: PlayCircle, text: "60,000+ Premium Live Channels" },
        { icon: Film,       text: "160,000+ Movies & Series in 4K" },
        { icon: Sparkles,   text: "Anti-Freeze Technology 10.0" },
        { icon: Zap,        text: "Instant Global Activation" },
        { icon: Clock,      text: "24/7 VIP Support" },
        { icon: Monitor,    text: `${screens} Screen${screens > 1 ? "s" : ""} Connection` },
    ];

    return (
        <>
            <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-primary/30 antialiased overflow-x-hidden">
                {/* Ambient glow */}
                <div className="fixed top-0 left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
                <div className="fixed bottom-0 right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

                {/* Navbar spacer */}
                <div className="h-24 md:h-32" />

                <main className="relative z-10 flex-grow flex flex-col items-center px-6 py-12 md:py-20">
                    {/* Back link */}
                    <div className="w-full max-w-2xl mb-10">
                        <Link
                            href={`/${lang}#pricing`}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest"
                        >
                            <ArrowLeft size={14} />
                            Back to plans
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-2xl"
                    >
                        {/* Badge */}
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                                <Star size={12} className="fill-primary" />
                                Plan Confirmed
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight text-center mb-4">
                            You Are{" "}
                            <span className="text-gradient-premium">Almost</span>{" "}
                            There
                        </h1>
                        <p className="text-gray-400 text-center text-base md:text-lg font-medium mb-12 max-w-lg mx-auto">
                            Review your selected plan below, then click the button to proceed to checkout.
                        </p>

                        {/* Plan Summary Card */}
                        <div className="bg-gradient-to-b from-[#1A1A22] via-primary/10 to-[#0A0A0F] border-2 border-primary shadow-[0_0_60px_rgba(212,175,55,0.35)] rounded-[2rem] p-8 md:p-10 mb-6 relative overflow-hidden">
                            {/* Top shine line */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                            {/* Plan header row */}
                            <div className="flex items-start justify-between gap-4 mb-8">
                                <div>
                                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1.5">
                                        Selected Plan
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                                        {label}
                                    </h2>
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <p className="text-primary/80 text-xs font-bold uppercase tracking-wider">
                                            {planInfo.duration}
                                        </p>
                                        {planInfo.saveLabel && (
                                            <span className="text-gradient-premium font-black text-[10px] tracking-widest bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                                                {planInfo.saveLabel}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1.5">
                                        Total
                                    </p>
                                    <div className="text-4xl md:text-5xl font-black text-white leading-none">
                                        ${price}
                                    </div>
                                    <div className="text-gray-400 text-[10px] font-bold mt-2 flex items-center justify-end gap-1 uppercase tracking-widest">
                                        <Monitor size={10} />
                                        {screens} {screens > 1 ? "Screens" : "Screen"}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/5 mb-8" />

                            {/* Features grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {features.map(({ icon: Icon, text }, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-200">
                                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Begin Checkout CTA */}
                            <button
                                onClick={handleBeginCheckout}
                                disabled={isRedirecting}
                                className="w-full flex items-center justify-center gap-3 py-5 md:py-6 rounded-full font-black uppercase tracking-wider transition-all duration-500 text-lg md:text-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black shadow-[0_0_40px_rgba(212,175,55,0.5),inset_0_2px_4px_rgba(255,240,179,0.9)] overflow-hidden relative group/btn border border-yellow-200/50 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                <div className="absolute inset-1 rounded-full border border-black/10 pointer-events-none" />
                                <span className="relative z-10 flex items-center gap-3 drop-shadow-sm">
                                    Begin Checkout
                                    <ShoppingCart size={22} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                                </span>
                            </button>

                            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                                <ShieldCheck size={11} className="text-emerald-500" />
                                Secure &amp; encrypted connection
                            </div>
                        </div>

                        {/* Trust row */}
                        <div className="flex items-center justify-center gap-5 flex-wrap">
                            <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                <ShieldCheck size={13} className="text-primary" />
                                7-Day Guarantee
                            </div>
                            <div className="w-px h-3 bg-white/10" />
                            <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                <Star size={13} className="text-primary" />
                                VIP Support
                            </div>
                            <div className="w-px h-3 bg-white/10" />
                            <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                <Zap size={13} className="text-primary fill-primary" />
                                Instant Activation
                            </div>
                        </div>
                    </motion.div>
                </main>
            </div>

            {/* Checkout animation overlay — portal to document.body */}
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
                                    {planLabel}
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

export default function AlmostTherePage(props: { params: Promise<{ lang: string }> }) {
    const params = use(props.params);
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            </div>
        }>
            <AlmostThereContent lang={params.lang} />
        </Suspense>
    );
}

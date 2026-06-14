"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, PlayCircle, Film, Zap, Star } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

const plans = [
    {
        months: 3,
        label: "3 Months",
        price: 39.99,
        perMonth: 13.33,
        desc: "Test the waters — full access, no commitment.",
        isPopular: false,
    },
    {
        months: 6,
        label: "6 Months",
        price: 59.99,
        perMonth: 10.00,
        desc: "Half the year of elite streaming at a lower rate.",
        isPopular: false,
    },
    {
        months: 12,
        label: "12 Months",
        price: 79.99,
        perMonth: 6.67,
        desc: "The smartest price. Full year of uninterrupted access.",
        isPopular: true,
    },
];

export default function LeanHomepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(plans[2]);

    const openModal = (plan: typeof plans[0]) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-white font-sans scroll-smooth">
            {/* Background glow */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
            </div>

            {/* ── HERO ── */}
            <section className="relative z-10 pt-24 md:pt-32 pb-16 px-6 max-w-5xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
                        Unlock Every Channel,<br />Movie & Live Sport. <span className="text-primary">Instantly.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto mb-10">
                        Zero buffering. Zero hidden fees. The ultimate 4K streaming experience on any device.
                    </p>

                    {/* Price highlight */}
                    <div className="mb-10">
                        <div className="inline-block bg-[#111] border border-primary/30 rounded-3xl px-8 py-6 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                            <div className="flex items-start justify-center gap-2 mb-2">
                                <span className="text-3xl font-black text-white mt-1">$</span>
                                <span className="text-7xl font-black text-white tracking-tighter leading-none">79</span>
                                <span className="text-3xl font-black text-white mt-1">/yr</span>
                            </div>
                            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                (Only $6.67/month)
                            </p>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full inline-block">
                                You save $2,860/year compared to cable
                            </div>
                        </div>
                    </div>

                    {/* Hero CTA — anchors to #pricing */}
                    <a
                        href="#pricing"
                        className="w-full md:w-auto px-12 py-5 rounded-full font-black uppercase tracking-wider transition-all duration-300 text-lg md:text-xl hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-primary to-accent-bronze text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-flex items-center justify-center gap-3"
                    >
                        GET ACCESS NOW
                        <ShoppingCart size={24} />
                    </a>
                </motion.div>
            </section>

            {/* ── 3 VALUE PROPS ── */}
            <section className="relative z-10 py-12 px-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: PlayCircle, title: "30,000+ Live Channels", desc: "Stream every live sports event, news network, and premium channel globally." },
                        { icon: Film, title: "150,000+ Movies & Series", desc: "Binge unlimited on-demand blockbusters in crisp 4K & 8K quality." },
                        { icon: Zap, title: "Instant Activation", desc: "Your private credentials hit your inbox the second you click checkout." },
                    ].map((f, i) => (
                        <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                            <f.icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-lg font-black text-white uppercase mb-2">{f.title}</h3>
                            <p className="text-gray-400 text-sm font-medium">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SOCIAL PROOF ── */}
            <section className="relative z-10 py-16 px-6 max-w-4xl mx-auto border-y border-white/5 my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { quote: "Canceled my $200/mo cable bill instantly. The sports streams never buffer.", name: "Marcus T." },
                        { quote: "Setup took 2 minutes on my Firestick. Flawless 4K quality.", name: "Sarah L." },
                        { quote: "The best investment I've made this year. My whole family uses it.", name: "David R." },
                    ].map((t, i) => (
                        <div key={i} className="text-center">
                            <div className="flex justify-center gap-1 mb-4 text-primary">
                                {[...Array(5)].map((_, j) => <Star key={j} className="fill-primary" size={16} />)}
                            </div>
                            <p className="text-gray-300 font-medium italic mb-4">"{t.quote}"</p>
                            <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="relative z-10 py-12 px-6 max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-black text-center uppercase tracking-widest mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { step: "1", title: "Choose Your Plan", desc: "Click any plan below to secure your access." },
                        { step: "2", title: "Check Your Email", desc: "Get your instant login credentials and quick-start guide." },
                        { step: "3", title: "Start Watching", desc: "Download the app, enter your details, and stream instantly." },
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-black text-xl flex items-center justify-center border border-primary/20 mb-4">
                                {s.step}
                            </div>
                            <h3 className="text-lg font-black text-white uppercase mb-2">{s.title}</h3>
                            <p className="text-gray-400 text-sm font-medium">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRICING PLANS ── */}
            <section id="pricing" className="relative z-10 py-20 px-6 max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                        Pick Your <span className="text-primary">Plan</span>
                    </h2>
                    <p className="text-gray-400 font-medium">No setup fees. No contracts. Cancel anytime.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                                plan.isPopular
                                    ? "bg-gradient-to-b from-[#1C1810] to-[#0A0A0F] border-2 border-primary shadow-[0_0_60px_rgba(212,175,55,0.2)] md:scale-[1.04] z-10"
                                    : "bg-[#0E0E0E] border border-white/8 hover:border-white/15"
                            }`}
                        >
                            {/* Best Value badge */}
                            {plan.isPopular && (
                                <div className="bg-gradient-to-r from-primary to-accent-bronze text-black text-[10px] font-black uppercase tracking-[0.2em] text-center py-2">
                                    ★ Best Value
                                </div>
                            )}

                            <div className="flex flex-col flex-1 p-8">
                                {/* Plan name */}
                                <p className={`text-xs font-black uppercase tracking-widest mb-4 ${plan.isPopular ? "text-primary" : "text-gray-500"}`}>
                                    {plan.label}
                                </p>

                                {/* Price */}
                                <div className="flex items-start gap-1 mb-1">
                                    <span className="text-xl font-black text-white mt-1">$</span>
                                    <span className="text-6xl font-black text-white tracking-tighter leading-none">
                                        {Math.floor(plan.price)}
                                    </span>
                                    <span className="text-xl font-black text-gray-400 mt-2">
                                        .{(plan.price % 1).toFixed(2).slice(2)}
                                    </span>
                                </div>
                                <p className={`text-sm font-bold mb-2 ${plan.isPopular ? "text-primary" : "text-gray-500"}`}>
                                    ${plan.perMonth.toFixed(2)} / month
                                </p>

                                {/* 1-line description */}
                                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 flex-1">
                                    {plan.desc}
                                </p>

                                {/* CTA button */}
                                <button
                                    onClick={() => openModal(plan)}
                                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                                        plan.isPopular
                                            ? "bg-gradient-to-r from-primary to-accent-bronze text-black shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                                            : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary/40"
                                    }`}
                                >
                                    Get Access Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="relative z-10 py-24 px-6 max-w-3xl mx-auto text-center">
                <div className="bg-gradient-to-b from-[#111] to-transparent border border-white/10 rounded-3xl p-10 shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                        Stop Overpaying for TV Today.
                    </h2>
                    <p className="text-xl text-primary font-bold uppercase tracking-widest mb-8">
                        $79/year — Only $6.67/month
                    </p>
                    <button
                        onClick={() => openModal(plans[2])}
                        className="w-full md:w-auto px-12 py-5 rounded-full font-black uppercase tracking-wider transition-all duration-300 text-lg hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-primary to-accent-bronze text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-flex items-center justify-center gap-3"
                    >
                        GET ACCESS NOW
                        <ShoppingCart size={24} />
                    </button>
                </div>
            </section>

            <CheckoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                plan={selectedPlan}
                devices={1}
            />
        </div>
    );
}

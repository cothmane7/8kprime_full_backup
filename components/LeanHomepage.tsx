"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShoppingCart, PlayCircle, Film, Zap, Star } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

export default function LeanHomepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const plan = {
        months: 12,
        price: 79.99,
        label: "ANNUAL",
        tag: "Best Value"
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-primary/30 font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
            </div>

            {/* HERO SECTION */}
            <section className="relative z-10 pt-24 md:pt-32 pb-16 px-6 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
                        Unlock Every Channel,<br />Movie & Live Sport. <span className="text-primary">Instantly.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto mb-10">
                        Zero buffering. Zero hidden fees. The ultimate 4K streaming experience on any device.
                    </p>

                    <div className="mb-10">
                        <div className="inline-block bg-[#111] border border-primary/30 rounded-3xl px-8 py-6 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                            <div className="flex items-start justify-center gap-2 mb-2">
                                <span className="text-3xl font-black text-white mt-1">$</span>
                                <span className="text-7xl font-black text-white tracking-tighter leading-none">79</span>
                                <span className="text-3xl font-black text-white mt-1">/yr</span>
                            </div>
                            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                (Only $6.58/month)
                            </p>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full inline-block">
                                You save $2,860/year compared to cable
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full md:w-auto px-12 py-5 rounded-full font-black uppercase tracking-wider transition-all duration-300 text-lg md:text-xl hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-primary to-accent-bronze text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 mx-auto"
                    >
                        GET ACCESS NOW
                        <ShoppingCart size={24} />
                    </button>
                </motion.div>
            </section>

            {/* 3-BULLET VALUE PROPS */}
            <section className="relative z-10 py-12 px-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: PlayCircle, title: "30,000+ Live Channels", desc: "Stream every live sports event, news network, and premium channel globally." },
                        { icon: Film, title: "150,000+ Movies & Series", desc: "Binge unlimited on-demand blockbusters in crisp 4K & 8K quality." },
                        { icon: Zap, title: "Instant Activation", desc: "Your private credentials hit your inbox the second you click checkout." }
                    ].map((feature, i) => (
                        <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                            <feature.icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-lg font-black text-white uppercase mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <section className="relative z-10 py-16 px-6 max-w-4xl mx-auto border-y border-white/5 my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { quote: "Canceled my $200/mo cable bill instantly. The sports streams never buffer.", name: "Marcus T." },
                        { quote: "Setup took 2 minutes on my Firestick. Flawless 4K quality.", name: "Sarah L." },
                        { quote: "The best investment I've made this year. My whole family uses it.", name: "David R." }
                    ].map((testimonial, i) => (
                        <div key={i} className="text-center">
                            <div className="flex justify-center gap-1 mb-4 text-primary">
                                {[...Array(5)].map((_, j) => <Star key={j} className="fill-primary" size={16} />)}
                            </div>
                            <p className="text-gray-300 font-medium italic mb-4">"{testimonial.quote}"</p>
                            <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">— {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="relative z-10 py-12 px-6 max-w-4xl mx-auto mb-16">
                <h2 className="text-2xl font-black text-center uppercase tracking-widest mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { step: "1", title: "Choose Your Plan", desc: "Click the button below to secure your $79/year access." },
                        { step: "2", title: "Check Your Email", desc: "Get your instant login credentials and quick-start guide." },
                        { step: "3", title: "Start Watching", desc: "Download the app, enter your details, and stream instantly." }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-black text-xl flex items-center justify-center border border-primary/20 mb-4">
                                {step.step}
                            </div>
                            <h3 className="text-lg font-black text-white uppercase mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="relative z-10 pb-24 px-6 max-w-3xl mx-auto text-center">
                <div className="bg-gradient-to-b from-[#111] to-transparent border border-white/10 rounded-3xl p-10 shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                        Stop Overpaying for TV Today.
                    </h2>
                    <p className="text-xl text-primary font-bold uppercase tracking-widest mb-8">
                        $79/year (Only $6.58/month)
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full md:w-auto px-12 py-5 rounded-full font-black uppercase tracking-wider transition-all duration-300 text-lg md:text-xl hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-primary to-accent-bronze text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 mx-auto"
                    >
                        GET ACCESS NOW
                        <ShoppingCart size={24} />
                    </button>
                </div>
            </section>

            <CheckoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                plan={plan}
                devices={1}
            />
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Gift, ShoppingCart, Mail, Smile, BookOpen, CheckSquare, MessageCircle, Share2, ArrowRight } from "lucide-react";

export default function RewardsPage() {
    const steps = [
        {
            icon: Gift,
            title: "Refer A Friend",
            desc: "Refer 8KPRIME to your friends and share your premium streaming experience.",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            icon: ShoppingCart,
            title: "They Make a Purchase",
            desc: "Your friend signs up and completes their order for a subscription.",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            icon: Mail,
            title: "Submit Their Info",
            desc: "Send us their Name, Email, and Phone Number + Your account info.",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            icon: Smile,
            title: "Enjoy a Free Month!",
            desc: "Once completed, we'll add your FREE month(s) to your subscription!",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        }
    ];

    const rules = [
        "Only existing 8KPRIME customers can participate in the referral program.",
        "Referred customers must be new and cannot have previously purchased from 8KPRIME.",
        "The referred customer must complete a successful purchase for the referrer to receive their free month.",
        "Referrers must submit the new customer's name, email, and phone number to claim their reward.",
        "There is no limit to how many referrals a customer can make—more referrals mean more free streaming!",
        "8KPRIME reserves the right to modify or terminate the referral program at any time."
    ];

    return (
        <div className="min-h-screen bg-[#06060A] text-white pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 max-w-6xl relative mb-24 mt-12">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
                        >
                            Claim Your Free <span className="text-gradient-premium">Streaming!</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-300 font-medium mb-8 leading-relaxed max-w-lg"
                        >
                            Invite your friends and get a free month of our streaming service for each one who joins – the more you share, the more you earn!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <a 
                                href="#how-it-works"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] group"
                            >
                                How It Works
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                    
                    {/* Illustration replacement */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-primary/20 blur-3xl rounded-full" />
                        <div className="relative z-10 bg-white/5 border border-white/10 p-12 rounded-[3rem] shadow-2xl backdrop-blur-sm">
                            <Share2 size={120} className="text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                            <div className="absolute -top-6 -right-6 bg-green-500 text-white font-black p-4 rounded-2xl rotate-12 shadow-xl border-2 border-white/20">
                                FREE!
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section id="how-it-works" className="container mx-auto px-6 max-w-6xl mb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0D0D14] border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-colors group"
                        >
                            <div className={`w-16 h-16 ${step.bg} ${step.border} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon size={32} className={step.color} />
                            </div>
                            <h3 className="text-xl font-black text-white mb-4 leading-tight">{step.title}</h3>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="container mx-auto px-6 max-w-5xl mb-32 relative z-10">
                <div className="bg-[#0A0A0F] border border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-2xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="shrink-0"
                    >
                        <div className="w-48 h-48 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)] rotate-3">
                            <BookOpen size={80} className="text-white" />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-grow"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
                            Eligibility Rules
                        </h2>
                        <ul className="space-y-4">
                            {rules.map((rule, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-gray-300 font-medium text-sm md:text-base leading-relaxed">
                                    <div className="mt-1 shrink-0">
                                        <CheckSquare size={18} className="text-green-500" />
                                    </div>
                                    <span>{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-6 max-w-3xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-snug">
                        If you need any additional information, don't hesitate to reach out to us.
                    </h3>
                    <a 
                        href="https://wa.me/18185656691?text=Hello%208KPRIME!%20I'd%20like%20to%20claim%20my%20referral%20reward."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-[length:200%_auto] hover:bg-right text-white font-black uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                    >
                        <Gift size={20} />
                        Claim your Reward
                    </a>
                </motion.div>
            </section>
        </div>
    );
}

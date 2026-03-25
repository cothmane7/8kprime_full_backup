"use client";

import { motion } from "framer-motion";
import {
    CheckCircle,
    Mail,
    Clock,
    MessageSquare,
    ArrowRight,
    Sparkles,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 relative overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none animate-pulse" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    {/* Hero Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="w-32 h-32 bg-gradient-to-br from-primary to-accent-bronze rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(176,141,62,0.3)]"
                    >
                        <CheckCircle size={64} className="text-black" />
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                            ORDER <span className="text-gradient-premium">RECEIVED!</span>
                        </h1>
                        <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Thank you for choosing <span className="text-white font-bold">8KPRIME</span>. Your request has been successfully processed and our deployment team is now setting up your elite access.
                        </p>
                    </motion.div>

                    {/* Instruction Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-premium p-8 rounded-[2rem] border-white/5 text-left"
                        >
                            <Mail className="text-primary w-8 h-8 mb-4" />
                            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-2">Check Your Email</h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                We've sent your login details and a complete setup guide to your inbox. Please check your **spam/junk** folder if you don't see it.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-premium p-8 rounded-[2rem] border-white/5 text-left"
                        >
                            <Clock className="text-primary w-8 h-8 mb-4" />
                            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-2">Delivery Time</h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                Your delivery usually takes **2-5 minutes**. We're working fast to get you streaming in record time!
                            </p>
                        </motion.div>
                    </div>

                    {/* Support & Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl inline-flex items-center gap-4">
                            <MessageSquare className="text-primary w-6 h-6" />
                            <span className="text-gray-300 font-bold">
                                Haven't received it? Contact <a href="mailto:infos@8kprime.com" className="text-primary hover:underline">infos@8kprime.com</a>
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/"
                                className="px-10 py-5 bg-primary text-black rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
                            >
                                Return to Home
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="flex items-center gap-3 text-gray-500 font-black text-[10px] uppercase tracking-[0.2em]">
                                <ShieldCheck size={16} className="text-emerald-500" />
                                Secure Checkout Completed
                            </div>
                        </div>
                    </motion.div>

                    {/* Celebration Particles (Static Placeholder) */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                        <Sparkles className="absolute top-[20%] left-[10%] text-primary animate-bounce" />
                        <Sparkles className="absolute top-[40%] right-[15%] text-primary animate-pulse" />
                        <Sparkles className="absolute bottom-[30%] left-[20%] text-primary animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import {
    CheckCircle,
    Mail,
    Clock,
    MessageSquare,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Zap,
    Shield,
    ShieldAlert
} from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function ThankYouPage(props: { params: Promise<{ lang: string }> }) {
    const params = use(props.params);
    const lang = params.lang;
    
    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 relative overflow-hidden flex items-center justify-center font-sans">
            {/* Pulsing Ambient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[160px] rounded-full pointer-events-none animate-pulse-slow" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-dot.png')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Pending Activation Status */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-8 gold-reflection shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        Status: Awaiting Payment Confirmation
                    </motion.div>

                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            ACTIVATE YOUR <br/>
                            <span className="text-gradient-premium">ELITE ACCESS.</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-2xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                            You're just <span className="text-white font-black underline decoration-primary underline-offset-4">one step away</span> from unlocking 60,000+ channels and 160,000+ titles in 4K resolution.
                        </p>
                    </motion.div>

                    {/* Critical Instructions Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 px-4">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#0A0A0F] p-8 rounded-[2.5rem] border border-white/5 text-left relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 p-6 text-primary/10 font-black text-6xl italic -rotate-12 transition-transform group-hover:rotate-0">01</div>
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                <Mail className="text-primary w-7 h-7" />
                            </div>
                            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-3">Open Your Email</h3>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                Go to the email address you just provided. Look for a message from <span className="text-white font-bold">8KPRIME</span> with your payment link.
                            </p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/20 text-left relative overflow-hidden group shadow-[0_0_50px_rgba(212,175,55,0.05)]"
                        >
                            <div className="absolute top-0 right-0 p-6 text-primary/20 font-black text-6xl italic -rotate-12 transition-transform group-hover:rotate-0">02</div>
                            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                <Zap className="text-primary w-7 h-7 fill-primary" />
                            </div>
                            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-3">Complete Payment</h3>
                            <p className="text-gray-300 text-sm font-medium leading-relaxed">
                                Click the payment button inside the email. Once finished, our system automatically triggers <span className="text-white font-bold">Instant Activation</span>.
                            </p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-[#0A0A0F] p-8 rounded-[2.5rem] border border-white/5 text-left relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 p-6 text-emerald-500/10 font-black text-6xl italic -rotate-12 transition-transform group-hover:rotate-0">03</div>
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                                <CheckCircle className="text-emerald-500 w-7 h-7" />
                            </div>
                            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-3">Start Watching</h3>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                After payment, your credentials arrive in your inbox in <span className="text-emerald-500 font-bold">seconds</span>. Login and enjoy the show!
                            </p>
                        </motion.div>
                    </div>

                    {/* Spam Warning Alert */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="bg-red-500/10 border-2 border-red-500/30 p-8 rounded-[2.5rem] mb-16 relative overflow-hidden group"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6 text-left relative z-10">
                            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 animate-pulse">
                                <ShieldAlert className="text-red-500 w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-red-500 font-black uppercase tracking-wider text-xl mb-1">Missing the confirmation email?</h4>
                                <p className="text-gray-300 font-bold leading-relaxed">
                                    Please check your <span className="text-white underline decoration-red-500 underline-offset-4">SPAM or JUNK folder</span>. Sometimes our lightning-fast emails get filtered by mistake by some providers.
                                </p>
                            </div>
                        </div>
                        {/* Diagonal Caution Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-full bg-red-500/5 -rotate-45 translate-x-1/2 pointer-events-none" />
                    </motion.div>

                    {/* Emergency Support */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-12"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="flex items-center gap-4 text-gray-400 font-bold bg-white/5 px-8 py-5 rounded-2xl border border-white/10 group hover:border-primary/30 transition-all">
                                <MessageSquare className="text-primary w-6 h-6" />
                                <span>
                                    Need help? Contact <a href="mailto:infos8kprime@gmail.com" className="text-white hover:text-primary transition-colors">infos8kprime@gmail.com</a>
                                </span>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all group"
                            >
                                <ArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                                Return to home
                            </Link>
                        </div>

                        {/* Security Badges */}
                        <div className="flex items-center justify-center gap-10 opacity-30 grayscale pt-8 border-t border-white/5">
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                                <ShieldCheck size={18} className="text-emerald-500" />
                                Verified Elite Provider
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                                <Shield size={18} className="text-primary" />
                                End-to-End Encryption
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Particles for Premium Feel */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <Sparkles className="absolute top-[15%] left-[5%] text-primary/20 animate-pulse" size={24} />
                <Sparkles className="absolute top-[60%] right-[10%] text-primary/20 animate-bounce" size={18} />
                <Sparkles className="absolute bottom-[20%] left-[15%] text-primary/20 animate-pulse" size={32} />
                <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-primary/20 rounded-full animate-ping" />
                <div className="absolute top-[70%] right-[30%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" />
            </div>
        </div>
    );
}


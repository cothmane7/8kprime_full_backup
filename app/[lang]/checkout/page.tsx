"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { sendPaymentEmails } from "@/app/actions/sendPaymentEmail";
import {
    Mail,
    ShieldCheck,
    CreditCard,
    Bitcoin,
    Layout,
    ArrowRight,
    Lock,
    BadgeCheck,
    AlertCircle,
    CheckCircle2
} from "lucide-react";

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const plan = searchParams.get("plan") || "12mo";
    const devices = searchParams.get("devices") || "1";

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [errors, setErrors] = useState<{ email?: string; confirmEmail?: string; payment?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleProceed = async () => {
        const newErrors: any = {};

        if (!email) {
            newErrors.email = "Please enter your email address.";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (email !== confirmEmail) {
            newErrors.confirmEmail = "Emails do not match. Please double-check.";
        }

        if (!paymentMethod) {
            newErrors.payment = "Please select a payment method to continue.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        // Send emails asynchronously (fire and forget to not block user experience)
        sendPaymentEmails({ email, paymentMethod }).catch(console.error);

        // Simulate a slight delay for realism/reassurance
        setTimeout(() => {
            router.push("/thanks");
        }, 1500);
    };

    const paymentOptions = [
        { id: "paypal", icon: Layout, label: "PayPal", description: "Fast & Secure via PayPal" },
        { id: "card", icon: CreditCard, label: "Credit / Debit Card", description: "Visa, Mastercard, Amex" },
        { id: "crypto", icon: Bitcoin, label: "Cryptocurrency", description: "BTC, ETH, USDT & More" },
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                                SECURE <span className="text-gradient-premium">CHECKOUT</span>
                            </h1>
                            <p className="text-gray-400 font-medium text-lg">
                                You're moments away from elite entertainment. Complete your details below.
                            </p>
                        </div>

                        {/* Email Section */}
                        <div className="glass-premium p-8 md:p-10 rounded-[2.5rem] border-white/5 space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <Mail className="text-primary w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-black text-white uppercase tracking-widest">Delivery Details</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            placeholder="Where should we send your login details?"
                                            className={`w-full bg-[#111115] border ${errors.email ? 'border-red-500/50' : 'border-white/5 group-hover:border-primary/30'} rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all font-medium`}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <AnimatePresence>
                                            {errors.email && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-2 text-red-500 text-xs font-bold mt-2 ml-1"
                                                >
                                                    <AlertCircle size={14} />
                                                    {errors.email}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Confirm Email</label>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            placeholder="Just to be sure..."
                                            className={`w-full bg-[#111115] border ${errors.confirmEmail ? 'border-red-500/50' : 'border-white/5 group-hover:border-primary/30'} rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all font-medium`}
                                            value={confirmEmail}
                                            onChange={(e) => setConfirmEmail(e.target.value)}
                                        />
                                        <AnimatePresence>
                                            {errors.confirmEmail && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-2 text-red-500 text-xs font-bold mt-2 ml-1"
                                                >
                                                    <AlertCircle size={14} />
                                                    {errors.confirmEmail}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl flex gap-4">
                                    <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                                    <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                        🚀 <span className="text-white font-bold">Important:</span> We'll deliver your subscription credentials and setup instructions to this email immediately after payment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Selection */}
                        <div className="glass-premium p-8 md:p-10 rounded-[2.5rem] border-white/5 space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                                    <CreditCard className="text-primary w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-black text-white uppercase tracking-widest">Payment Method</h2>
                            </div>

                            <div className="space-y-4">
                                {paymentOptions.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setPaymentMethod(opt.id)}
                                        className={`w-full flex items-center gap-5 p-6 rounded-2xl border transition-all duration-300 text-left group ${paymentMethod === opt.id
                                            ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(176,141,62,0.1)]'
                                            : 'bg-[#111115] border-white/5 hover:border-white/20'
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${paymentMethod === opt.id ? 'bg-primary text-black' : 'bg-white/5 text-gray-500 group-hover:text-gray-300'}`}>
                                            <opt.icon size={24} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-white font-black uppercase tracking-widest text-sm mb-0.5">{opt.label}</div>
                                            <div className="text-gray-500 text-xs font-bold">{opt.description}</div>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === opt.id ? 'border-primary bg-primary' : 'border-white/10'}`}>
                                            {paymentMethod === opt.id && <CheckCircle2 className="text-black w-4 h-4" />}
                                        </div>
                                    </button>
                                ))}

                                <AnimatePresence>
                                    {errors.payment && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-red-500 text-xs font-bold mt-2 ml-1"
                                        >
                                            <AlertCircle size={14} />
                                            {errors.payment}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                            onClick={handleProceed}
                            disabled={isSubmitting}
                            className={`w-full py-7 rounded-[2rem] font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 transition-all duration-500 relative overflow-hidden group/btn ${isSubmitting
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-primary text-black shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-6 h-6 border-4 border-gray-600 border-t-primary rounded-full animate-spin" />
                                    Processing Securely...
                                </>
                            ) : (
                                <>
                                    Proceed to Payment
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </>
                            )}
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        </motion.button>
                    </motion.div>

                    {/* Right Side: Order Summary & Trust */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 lg:sticky lg:top-32"
                    >
                        {/* Summary Card */}
                        <div className="glass-premium p-10 rounded-[3rem] border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShieldCheck size={120} className="text-primary" />
                            </div>

                            <h2 className="text-white font-black text-2xl uppercase tracking-tighter mb-8 italic">Order Summary</h2>

                            <div className="space-y-6 mb-10 pb-10 border-b border-white/5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-white font-black text-lg uppercase tracking-widest">{plan.replace('mo', ' MONTHS')} ACCESS</div>
                                        <div className="text-primary text-xs font-bold uppercase tracking-widest">{devices} {parseInt(devices) > 1 ? 'Devices' : 'Device'} Plan</div>
                                    </div>
                                    <div className="text-white font-black text-2xl">Premium</div>
                                </div>
                                <div className="flex justify-between items-center text-gray-400 font-bold">
                                    <span>Instant Activation</span>
                                    <span className="text-emerald-500 uppercase text-xs tracking-widest">FREE</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-400 font-bold">
                                    <span>24/7 VIP Support</span>
                                    <span className="text-emerald-500 uppercase text-xs tracking-widest">INCLUDED</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="text-gray-500 font-black text-xs uppercase tracking-widest mb-1">Total to Pay</div>
                                <div className="text-white font-black text-5xl tracking-tighter">
                                    <span className="text-2xl align-top mt-2 inline-block">€</span>
                                    {plan === '12mo' ? '79.99' : plan === '3mo' ? '39.99' : plan === '6mo' ? '59.99' : '129.99'}
                                </div>
                            </div>
                        </div>

                        {/* Trust Signals */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-5 p-6 bg-white/5 rounded-[2rem] border border-white/5">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                                    <Lock className="text-emerald-500 w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xs uppercase tracking-widest mb-0.5">SSL Encrypted Checkout</div>
                                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Bank-level security standards</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-6 bg-white/5 rounded-[2rem] border border-white/5">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                    <RotateCcw className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xs uppercase tracking-widest mb-0.5">7-Day Refund Guarantee</div>
                                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">No-risk, satisfaction protected</div>
                                </div>
                            </div>
                            <div className="text-center pt-4">
                                <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.3em]">
                                    Trust Score 4.9/5 • 45,000+ Happy Streamers
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Re-using RotateCcw from previous implementation if not imported
function RotateCcw({ className, size }: { className?: string, size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
        </svg>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
        }>
            <CheckoutContent />
        </Suspense>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Info, ArrowLeft } from "lucide-react";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: {
        months: number;
        price: number;
        label: string;
        tag: string;
        iframeSrc: string;
    } | null;
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        type: "new",
        fullName: "",
        email: "",
        whatsapp: "",
    });

    if (!isOpen || !plan) return null;

    const handleClose = (redirect?: boolean) => {
        onClose();
        setTimeout(() => {
            setStep(1);
            setFormData({ type: "new", fullName: "", email: "", whatsapp: "" });
            setIsSubmitting(false);
            if (redirect) {
                // Redirect to thank you page after modal closes
                window.location.href = "/thank-you";
            }
        }, 300);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) handleClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStep(2);
        setIsSubmitting(false);

        // Fire-and-forget admin notification
        fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, plan, price: plan.price }),
        }).catch(console.error);
    };

    return (
        /* Single overlay — same for both steps */
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-6 px-4"
            >
            <AnimatePresence mode="wait">
                {step === 1 ? (
                    /* ── STEP 1: FORM ── */
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md bg-[#0A0A0F] border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(176,141,62,0.2)] overflow-hidden my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                            {/* Close */}
                        <button
                            onClick={() => handleClose()}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#1A1A22] to-[#0A0A0F] px-6 py-5 border-b border-white/5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                                    <ShoppingCart className="text-primary" size={20} />
                                </div>
                                <h2 className="text-xl font-black text-white uppercase tracking-tight">Complete Your Order</h2>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white font-bold text-sm">{plan.label}</p>
                                    <p className="text-gray-500 text-xs">{plan.tag}</p>
                                </div>
                                <p className="text-primary font-black text-2xl">${plan.price.toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            {/* Subscription Type */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                                    Subscription Type
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, type: "new" })}
                                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all duration-200 ${
                                            formData.type === "new"
                                                ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                                                : "bg-white/5 border-white/5 text-gray-400 hover:border-white/15"
                                        }`}
                                    >
                                        New Account
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, type: "renew" })}
                                        className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all duration-200 ${
                                            formData.type === "renew"
                                                ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                                                : "bg-white/5 border-white/5 text-gray-400 hover:border-white/15"
                                        }`}
                                    >
                                        Renew Account
                                    </button>
                                </div>
                            </div>

                            {/* Full Name */}
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-[#13131A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 text-sm"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#13131A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full bg-[#13131A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 text-sm"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>

                            {/* Info */}
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-start gap-2">
                                <Info size={13} className="text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-[11px] text-gray-300 font-medium leading-relaxed">
                                    You will be redirected to our secure payment page. Credentials delivered to your email after payment.
                                </p>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-black uppercase tracking-widest text-sm py-4 rounded-xl transition-all duration-300 ${
                                    isSubmitting
                                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                        : "bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                                }`}
                            >
                                {isSubmitting ? "Processing..." : "Proceed to Payment →"}
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    /* ── STEP 2: PAYMENT IFRAME — same centered modal ── */
                    <motion.div
                        key="payment"
                        initial={{ opacity: 0, scale: 0.97, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 280 }}
                        className="relative w-full max-w-md bg-[#0A0A0F] border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(176,141,62,0.2)] overflow-hidden my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header bar */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#1A1A22] to-[#0A0A0F] border-b border-white/5">
                            <button
                                onClick={() => setStep(1)}
                                className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                            >
                                <ArrowLeft size={14} />
                                Back
                            </button>
                            <div className="text-center">
                                <p className="text-white font-black text-sm uppercase tracking-tight">{plan.label}</p>
                                <p className="text-primary font-black text-xs">${plan.price.toFixed(2)}</p>
                            </div>
                            <button
                                onClick={() => handleClose()}
                                className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Iframe clip wrapper — hides Hotmart header via negative margin-top */}
                        <div style={{ overflow: "hidden" }}>
                            <iframe
                                src={plan.iframeSrc}
                                {...({ scrolling: "yes" } as any)}
                                referrerPolicy="no-referrer"
                                style={{
                                    width: "100%",
                                    height: "2500px",
                                    border: "none",
                                    position: "relative",
                                    zIndex: 1,
                                    display: "block",
                                    backgroundColor: "#ffffff",
                                    marginTop: "-450px",
                                }}
                            />
                        </div>
                        {/* Finish button after payment */}
                        <div className="flex justify-center py-4">
                            <button
                                onClick={() => handleClose(true)}
                                className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] text-black font-black rounded-xl hover:scale-105 transition-transform"
                            >
                                Thank You &amp; Return
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

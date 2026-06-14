"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShoppingCart, Smartphone, Tv, MonitorPlay, Box, Info } from "lucide-react";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: {
        months: number;
        price: number;
        label: string;
        tag: string;
    } | null;
    devices: number;
}

export default function CheckoutModal({ isOpen, onClose, plan, devices }: CheckoutModalProps) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        type: "new",
        fullName: "",
        email: "",
        whatsapp: "",
        deviceType: "smart_tv",
        macAddress: "",
    });

    if (!isOpen || !plan) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculatePrice = (basePrice: number) => {
        const multipliers: any = { 1: 1, 2: 1.5, 3: 2, 4: 2.5 };
        return (basePrice * multipliers[devices]).toFixed(2);
    };

    const finalPrice = calculatePrice(plan.price);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    plan,
                    devices,
                    price: finalPrice
                }),
            });

            if (response.ok) {
                setStep(2); // Move to success step
            } else {
                alert("Something went wrong. Please try again or contact support.");
            }
        } catch (error) {
            console.error(error);
            alert("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
                onClick={handleOverlayClick}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-2xl bg-[#0A0A0F] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(176,141,62,0.15)] overflow-hidden my-8"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#1A1A22] to-[#0A0A0F] p-6 sm:p-8 border-b border-white/5">
                        <div className="flex items-center gap-3 mb-2">
                            <ShoppingCart className="text-primary" size={24} />
                            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Complete Your Order</h2>
                        </div>
                        <p className="text-gray-400 text-sm">Fill in your details below to get instant access.</p>
                    </div>

                    {step === 1 ? (
                        <div className="flex flex-col md:flex-row">
                            {/* Order Summary Sidebar */}
                            <div className="w-full md:w-1/3 bg-[#13131A] p-6 sm:p-8 border-r border-white/5">
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Order Summary</h3>
                                
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Plan</p>
                                        <p className="text-white font-bold">{plan.months} Months ({plan.label})</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">Connections</p>
                                        <p className="text-white font-bold">{devices} {devices === 1 ? 'Device' : 'Devices'}</p>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-xs text-gray-400 font-medium mb-1">Total Amount</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-primary font-black text-xl">€</span>
                                            <span className="text-white font-black text-3xl">{finalPrice.split('.')[0]}</span>
                                            <span className="text-white font-bold text-xl">.{finalPrice.split('.')[1]}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-start gap-2 mt-6">
                                        <Info size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                        <p className="text-[10px] text-gray-300 font-medium leading-relaxed">
                                            Instant delivery to your email after payment. Secure checkout.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Form Section */}
                            <div className="w-full md:w-2/3 p-6 sm:p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Subscription Type */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-white uppercase tracking-widest">Subscription Type</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, type: "new" })}
                                                className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${formData.type === "new" ? "bg-primary/10 border-primary text-primary" : "bg-white/5 border-white/5 text-gray-400 hover:border-white/10"}`}
                                            >
                                                New Account
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, type: "renew" })}
                                                className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${formData.type === "renew" ? "bg-primary/10 border-primary text-primary" : "bg-white/5 border-white/5 text-gray-400 hover:border-white/10"}`}
                                            >
                                                Renew Account
                                            </button>
                                        </div>
                                    </div>

                                    {/* Personal Details */}
                                    <div className="space-y-4">
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
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                        </div>
                                    </div>

                                    {/* Device Info */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Device Type</label>
                                            <select
                                                name="deviceType"
                                                value={formData.deviceType}
                                                onChange={handleChange}
                                                className="w-full bg-[#13131A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm appearance-none"
                                            >
                                                <option value="smart_tv">Smart TV (Samsung/LG)</option>
                                                <option value="android_tv">Android TV / Box</option>
                                                <option value="firestick">Amazon Firestick</option>
                                                <option value="apple_tv">Apple TV</option>
                                                <option value="mag">MAG Box</option>
                                                <option value="smartphone">Smartphone / Tablet</option>
                                                <option value="pc">PC / Laptop</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        
                                        {(formData.deviceType === 'mag' || formData.deviceType === 'smart_tv') && (
                                            <div>
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">MAC Address (Optional)</label>
                                                <input
                                                    type="text"
                                                    name="macAddress"
                                                    value={formData.macAddress}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#13131A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 text-sm"
                                                    placeholder="00:1A:79:XX:XX:XX"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full font-black uppercase tracking-widest text-sm py-4 rounded-xl transition-all ${
                                            isSubmitting 
                                            ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-primary to-accent-bronze text-white hover:shadow-[0_0_20px_rgba(176,141,62,0.4)] active:scale-[0.98]'
                                        }`}
                                    >
                                        {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="p-10 flex flex-col items-center justify-center text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 15 }}
                                className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6"
                            >
                                <CheckCircle2 size={40} className="text-emerald-500" />
                            </motion.div>
                            <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Thank you for your order. We are redirecting you to our secure payment gateway...
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

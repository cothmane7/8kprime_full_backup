"use client";

import { useState, Suspense, use } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { sendPaymentEmails } from "@/app/actions/sendPaymentEmail";
import { Check, Lock, Globe, ArrowLeft, ShieldCheck, Zap, Star, Shield, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function CheckoutContent({ lang }: { lang: string }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const plan = searchParams.get("plan") || "12mo";
    const devices = searchParams.get("devices") || "1";
    const ibo = searchParams.get("ibo") === "1";

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [couponError, setCouponError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [confirmEmailError, setConfirmEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [whatsappError, setWhatsappError] = useState(false);

    const priceTable: Record<string, Record<string, number>> = {
        "1": { "3mo": 39.99, "6mo": 59.99, "12mo": 79.99 },
        "2": { "3mo": 69.99, "6mo": 99.99, "12mo": 149.99 },
        "3": { "3mo": 99.99, "6mo": 159.99, "12mo": 199.99 },
        "4": { "3mo": 129.99, "6mo": 199.99, "12mo": 259.99 },
    };
    
    const basePrice = priceTable[devices]?.[plan] || 59.99;
    const priceWithIbo = basePrice + (ibo ? 10 * parseInt(devices) : 0);
    const discountAmount = isDiscountApplied ? priceWithIbo * 0.1 : 0;
    const finalPrice = (priceWithIbo - discountAmount).toFixed(2);

    const applyCoupon = () => {
        if (couponCode.toUpperCase() === "EXTRA10") {
            setIsDiscountApplied(true);
            setCouponError("");
        } else {
            setCouponError("Invalid coupon code");
            setIsDiscountApplied(false);
        }
    };

    const handleProceed = () => {
        let hasError = false;
        if (!email || !email.includes("@")) {
            setEmailError(true);
            hasError = true;
        } else {
            setEmailError(false);
        }

        if (!confirmEmail || email !== confirmEmail) {
            setConfirmEmailError(true);
            hasError = true;
        } else {
            setConfirmEmailError(false);
        }

        if (!username) {
            setUsernameError(true);
            hasError = true;
        } else {
            setUsernameError(false);
        }

        if (!whatsapp) {
            setWhatsappError(true);
            hasError = true;
        } else {
            setWhatsappError(false);
        }

        if (hasError) return;

        setIsSubmitting(true);
        sendPaymentEmails({ 
            email, 
            username, 
            whatsapp, 
            paymentMethod: "paypal", 
            plan, 
            devices, 
            ibo,
            couponApplied: isDiscountApplied 
        }).catch(console.error);
        
        setTimeout(() => {
            router.push("/thanks");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-primary/30 antialiased overflow-x-hidden">
            {/* Ambient Background Elements */}
            <div className="fixed top-0 left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="fixed bottom-0 right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Added spacer for fixed global Navbar */}
            <div className="h-24 md:h-32" />

            <main className="relative z-10 flex-grow w-full max-w-7xl mx-auto px-6 pt-4 pb-20">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* Header Section - Order 1 on Mobile, Column 1 on Desktop */}
                    <div className="order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6 gold-reflection">
                            <Zap size={12} className="fill-primary" />
                            Almost there
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-4">
                            Complete your <br/>
                            <span className="text-gradient-premium">order now.</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-md font-medium leading-relaxed mb-6 lg:mb-0">
                            You are just 60 seconds away from the ultimate 4K streaming experience. Instant activation guaranteed.
                        </p>
                    </div>

                    {/* Right Column: Form - Order 2 on Mobile, Column 2 on Desktop (Sticky) */}
                    <div className="lg:sticky lg:top-10 order-2 lg:row-span-2">
                        <div className="bg-[#0D0D12] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.6)] relative">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 rounded-[3rem] bg-primary/5 blur-3xl pointer-events-none opacity-20" />
                            
                            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-10 text-center lg:text-left">Customer Details</h2>

                            <div className="flex flex-col gap-8 relative z-10">
                                {/* Email Field */}
                                <div className="group/input">
                                    <label className="text-[10px] text-primary font-black mb-3 block tracking-[0.2em] uppercase transition-all group-focus-within/input:text-white">Email Address</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={e => {
                                                setEmail(e.target.value);
                                                setEmailError(false);
                                            }}
                                            className={`w-full bg-[#15151A] border-2 ${emailError ? 'border-red-500' : 'border-white/5 group-focus-within/input:border-primary/50'} rounded-2xl px-6 py-5 text-white focus:outline-none transition-all text-base md:text-lg font-bold placeholder:text-gray-600 shadow-inner`}
                                        />
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-focus-within/input:opacity-100 transition-opacity">
                                            <Zap size={18} className="text-primary animate-pulse" />
                                        </div>
                                    </div>
                                    {emailError && <p className="text-red-500 text-[11px] mt-3 font-bold uppercase tracking-wider ml-1">Please enter a valid email address</p>}
                                </div>

                                {/* Confirm Email Field */}
                                <div className="group/input">
                                    <label className="text-[10px] text-primary font-black mb-3 block tracking-[0.2em] uppercase transition-all group-focus-within/input:text-white">Confirm Email</label>
                                    <input
                                        type="email"
                                        placeholder="Repeat your email"
                                        value={confirmEmail}
                                        onChange={e => {
                                            setConfirmEmail(e.target.value);
                                            setConfirmEmailError(false);
                                        }}
                                        className={`w-full bg-[#15151A] border-2 ${confirmEmailError ? 'border-red-500' : 'border-white/5 group-focus-within/input:border-primary/50'} rounded-2xl px-6 py-5 text-white focus:outline-none transition-all text-base md:text-lg font-bold placeholder:text-gray-600 shadow-inner`}
                                    />
                                    {confirmEmailError && <p className="text-red-500 text-[11px] mt-3 font-bold uppercase tracking-wider ml-1">The emails do not match</p>}
                                </div>

                                {/* Username Field */}
                                <div className="group/input">
                                    <label className="text-[10px] text-primary font-black mb-3 block tracking-[0.2em] uppercase transition-all group-focus-within/input:text-white">Desired Username</label>
                                    <input
                                        type="text"
                                        placeholder="Choose a username"
                                        value={username}
                                        onChange={e => {
                                            setUsername(e.target.value);
                                            setUsernameError(false);
                                        }}
                                        className={`w-full bg-[#15151A] border-2 ${usernameError ? 'border-red-500' : 'border-white/5 group-focus-within/input:border-primary/50'} rounded-2xl px-6 py-5 text-white focus:outline-none transition-all text-base md:text-lg font-bold placeholder:text-gray-600 shadow-inner`}
                                    />
                                    {usernameError && <p className="text-red-500 text-[11px] mt-3 font-bold uppercase tracking-wider ml-1">Please enter a desired username</p>}
                                </div>

                                {/* WhatsApp Field */}
                                <div className="group/input">
                                    <label className="text-[10px] text-primary font-black mb-3 block tracking-[0.2em] uppercase transition-all group-focus-within/input:text-white">WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={whatsapp}
                                        onChange={e => {
                                            setWhatsapp(e.target.value);
                                            setWhatsappError(false);
                                        }}
                                        className={`w-full bg-[#15151A] border-2 ${whatsappError ? 'border-red-500' : 'border-white/5 group-focus-within/input:border-primary/50'} rounded-2xl px-6 py-5 text-white focus:outline-none transition-all text-base md:text-lg font-bold placeholder:text-gray-600 shadow-inner`}
                                    />
                                    {whatsappError && <p className="text-red-500 text-[11px] mt-3 font-bold uppercase tracking-wider ml-1">Please enter your WhatsApp number</p>}
                                </div>

                                <div className="mt-6">
                                    <button 
                                        onClick={handleProceed}
                                        disabled={isSubmitting}
                                        className={`w-full flex items-center justify-center gap-4 px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-lg md:text-xl border border-yellow-200/30 relative overflow-hidden group/confirm shadow-[0_20px_60px_rgba(212,175,55,0.25)] transition-all ${
                                            isSubmitting 
                                            ? 'bg-gray-800 text-gray-400 cursor-not-allowed border-gray-700 pb-5' 
                                            : 'bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black hover:scale-[1.03] active:scale-[0.98]'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-6 h-6 border-3 border-gray-500 border-t-white rounded-full animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover/confirm:translate-x-[200%] transition-transform duration-1000" />
                                                <span className="relative z-10 flex items-center gap-3">
                                                    Confirm Order
                                                    <Zap size={20} className="fill-black" />
                                                </span>
                                            </>
                                        )}
                                    </button>
                                    
                                    <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 py-4 rounded-xl border border-white/5">
                                        <Shield size={14} className="text-emerald-500" />
                                        100% Encrypted & Secure Checkout
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Trust Indicator (Visible under form on small screens) */}
                        <div className="mt-10 lg:hidden text-center opacity-60">
                             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                Instant access delivery to your inbox
                             </p>
                        </div>
                    </div>

                    {/* Order Summary (Conclusion) - Order 3 on Mobile, Column 1 (below header) on Desktop */}
                    <div className="flex flex-col gap-10 order-3 lg:mt-[-40px]">
                        {/* Order Details Card */}
                        <div className="bg-[#0A0A0F] border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                           {/* Shine Effect */}
                           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                           
                           <div className="flex justify-between items-start mb-10">
                                <div>
                                    <h2 className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-2">Selected Plan</h2>
                                    <div className="text-2xl font-black text-white uppercase tracking-tight">{plan.replace('mo', ' Months')} Access</div>
                                    <div className="text-primary text-xs font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                                        <Monitor size={12} />
                                        {devices} {parseInt(devices) > 1 ? 'Devices' : 'Device'} Connection
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-2">Total Price</div>
                                    <div className="flex flex-col items-end">
                                        {isDiscountApplied && (
                                            <span className="text-gray-500 text-sm line-through font-bold mb-1">
                                                ${(priceWithIbo).toFixed(2)}
                                            </span>
                                        )}
                                        <div className="text-4xl font-black text-white">${finalPrice}</div>
                                        {isDiscountApplied && (
                                            <span className="text-primary text-[10px] font-black uppercase tracking-widest mt-1 animate-pulse">
                                                10% Discount Applied!
                                            </span>
                                        )}
                                    </div>
                                </div>
                           </div>

                           {/* Coupon Code Section */}
                           <div className="mb-10 pt-6 border-t border-white/5">
                                <label className="text-[10px] text-gray-500 font-black mb-3 block tracking-[0.2em] uppercase">Promo Code</label>
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="Enter code"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className="flex-grow bg-[#15151A] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-gray-700 uppercase"
                                    />
                                    <button
                                        onClick={applyCoupon}
                                        className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl font-black uppercase tracking-wider text-xs hover:bg-primary/20 transition-all shadow-sm"
                                    >
                                        Apply
                                    </button>
                                </div>
                                {couponError && (
                                    <p className="text-red-500 text-[9px] mt-2 font-black uppercase tracking-widest ml-1">{couponError}</p>
                                )}
                           </div>

                           <div className="space-y-5 mb-8">
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-200">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <Check size={14} className="text-emerald-500" />
                                    </div>
                                    60,000+ Premium Live Channels
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-200">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <Check size={14} className="text-emerald-500" />
                                    </div>
                                    160,000+ Movies & Series in 4K UHD quality
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-200">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <Check size={14} className="text-emerald-500" />
                                    </div>
                                    Anti-Freeze Technology 10.0
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-200">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <Check size={14} className="text-emerald-500" />
                                    </div>
                                    Instant Global Activation
                                </div>
                                {ibo && (
                                    <div className="flex items-center gap-4 text-sm font-bold text-[#E50914]">
                                        <div className="w-6 h-6 rounded-full bg-[#E50914]/10 flex items-center justify-center">
                                            <Check size={14} className="text-[#E50914]" />
                                        </div>
                                        IBO Player Activation
                                    </div>
                                )}
                           </div>

                           <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-[#111115] px-4 py-2 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <ShieldCheck size={14} className="text-primary" />
                                    7-Day Guarantee
                                </div>
                                <div className="flex items-center gap-2 bg-[#111115] px-4 py-2 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <Star size={14} className="text-primary" />
                                    VIP Support
                                </div>
                           </div>
                        </div>

                        {/* Trust Indicator */}
                        <div className="flex items-center gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 mt-4">
                           <div className="text-gray-400 font-black text-xs uppercase tracking-widest">Secure Checkout Powered by</div>
                           <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#00457C] rounded flex items-center justify-center font-black text-white italic text-[10px]">P</div>
                                <span className="font-bold text-sm">PayPal</span>
                           </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Status */}
            <footer className="relative z-20 py-10 border-t border-white/5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-30 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                    <div>© 2018-2026 8KPRIME Inc.</div>
                    <div className="flex gap-8">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Service Operational
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function CheckoutPage(props: { params: Promise<{ lang: string }> }) {
    const params = use(props.params);
    const lang = params.lang;

    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            </div>
        }>
            <CheckoutContent lang={lang} />
        </Suspense>
    );
}

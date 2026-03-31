"use client";

import { useState, Suspense, use } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { sendPaymentEmails } from "@/app/actions/sendPaymentEmail";
import { Check, Lock, Globe } from "lucide-react";
import Link from "next/link";

function CheckoutContent({ lang }: { lang: string }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const plan = searchParams.get("plan") || "12mo";
    const devices = searchParams.get("devices") || "1";

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const paymentMethod = "paypal";
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [confirmEmailError, setConfirmEmailError] = useState(false);

    const priceMap: Record<string, string> = {
        "12mo": "79.99",
        "6mo": "59.99",
        "3mo": "39.99",
        "24mo": "129.99",
    };
    
    // Calculate final price with devices
    const basePrice = parseFloat(priceMap[plan] || "79.99");
    const multipliers: any = { 1: 1, 2: 1.5, 3: 2, 4: 2.5 };
    const finalPrice = (basePrice * multipliers[parseInt(devices)]).toFixed(2);

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

        if (hasError) return;

        setIsSubmitting(true);
        sendPaymentEmails({ email, paymentMethod, plan, devices }).catch(console.error);
        
        // Slightly delay the routing for UX feedback
        setTimeout(() => {
            router.push("/thanks");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col pt-24 pb-32 font-sans selection:bg-primary/30">
            {/* Subtle premium background glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[40vh] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-xl mx-auto w-full px-5 flex-grow flex flex-col relative z-10">
                
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-12 mt-4 px-2 text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-600 flex items-center justify-center"><Check size={12} /></div>
                        <span className="hidden sm:inline">Cart</span>
                    </div>
                    <div className="h-px bg-gray-800 flex-grow mx-4" />
                    <div className="flex items-center gap-2 text-primary">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-[#FBF3D5] via-[#D4AF37] to-[#8E6927] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center">2</div>
                        <span>Information</span>
                    </div>
                    <div className="h-px bg-gray-800 flex-grow mx-4" />
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-600 flex items-center justify-center">3</div>
                        <span className="hidden sm:inline">Finish</span>
                    </div>
                </div>

                {/* Customer Information Section */}
                <div className="mb-10">
                    <h2 className="text-gray-400 text-xs md:text-sm font-black uppercase tracking-widest mb-4 ml-1">Customer Information</h2>
                    <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-5 shadow-2xl flex flex-col gap-5">
                        <div>
                            <label className="text-[11px] text-primary font-bold mb-2 block tracking-widest uppercase">Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                    setEmailError(false);
                                }}
                                className={`w-full bg-[#111115] border ${emailError ? 'border-red-500' : 'border-white/5'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors text-sm md:text-base font-medium`}
                            />
                            {emailError && <p className="text-red-500 text-xs mt-2 font-bold ml-1">Please enter a valid email address</p>}
                        </div>
                        <div className="border-t border-white/5 pt-5">
                            <label className="text-[11px] text-primary font-bold mb-2 block tracking-widest uppercase">Confirm Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                placeholder="Please confirm your email"
                                value={confirmEmail}
                                onChange={e => {
                                    setConfirmEmail(e.target.value);
                                    setConfirmEmailError(false);
                                }}
                                className={`w-full bg-[#111115] border ${confirmEmailError ? 'border-red-500' : 'border-white/5'} rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors text-sm md:text-base font-medium`}
                            />
                            {confirmEmailError && <p className="text-red-500 text-xs mt-2 font-bold ml-1">Emails do not match</p>}
                        </div>
                    </div>
                </div>

                {/* Payment Method Section */}
                <div className="mb-8">
                    <h2 className="text-gray-400 text-xs md:text-sm font-black uppercase tracking-widest mb-4 ml-1">Payment Method</h2>
                    <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-2.5 shadow-2xl flex flex-col gap-2">
                        
                        {/* PayPal Option */}
                        <div className={`flex items-center p-4 rounded-xl border transition-all duration-300 border-primary bg-primary/5 shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]`}>
                            <div className={`w-4 h-4 rounded-full border border-primary flex items-center justify-center mr-4 shrink-0 transition-colors`}>
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <div className="w-8 h-8 bg-[#00457C] border border-[#0079C1] rounded flex items-center justify-center font-black text-white mr-4 italic shrink-0 shadow-lg">P</div>
                            <div className="flex-grow">
                                <div className="text-sm font-black text-white uppercase tracking-wider mb-0.5">PayPal</div>
                                <div className="text-[11px] text-gray-400 font-medium">Fast and Secure Payment</div>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-black shrink-0 ml-2 shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                                <Check size={12} strokeWidth={3} />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Inline Confirmation Button */}
                <div className="mb-12 px-1">
                    <button 
                        onClick={handleProceed}
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-base border border-yellow-200/30 relative overflow-hidden group/confirm shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all ${
                            isSubmitting 
                            ? 'bg-gray-800 text-gray-400 cursor-not-allowed border-gray-700' 
                            : 'bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black hover:scale-[1.01] active:scale-[0.99]'
                        }`}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-gray-500 border-t-white rounded-full animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/confirm:translate-x-[200%] transition-transform duration-1000" />
                                <span className="relative z-10">Confirm Order</span>
                            </>
                        )}
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="h-px bg-white/10 flex-grow" />
                        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-black uppercase tracking-[0.2em]">
                            <Lock size={12} className="text-primary" />
                            Secure Encryption
                        </div>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="mb-6 mt-4">
                    <h2 className="text-gray-400 text-xs md:text-sm font-black uppercase tracking-widest mb-4 ml-1">Order Summary</h2>
                    <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <div>
                                <div className="text-white font-black text-sm uppercase tracking-widest">{plan.replace('mo', ' MONTHS')} ACCESS</div>
                                <div className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1">{devices} {parseInt(devices) > 1 ? 'Devices' : 'Device'} Plan</div>
                            </div>
                            <div className="text-white font-black text-xl">€{finalPrice}</div>
                        </div>
                        <div className="flex justify-between items-center text-gray-300 font-bold text-[11px] uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                Instant Activation
                            </span>
                            <span className="text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">FREE</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-300 font-bold text-[11px] uppercase tracking-widest mt-1">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                24/7 VIP Support
                            </span>
                            <span className="text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">INCLUDED</span>
                        </div>
                    </div>
                </div>

                {/* Security Note */}
                <div className="flex items-center gap-3 mt-2 mb-28 px-4 text-[11px] text-gray-500 font-medium leading-relaxed bg-[#111115] py-4 rounded-xl border border-white/5 shadow-inner">
                    <Lock size={16} className="text-emerald-500 shrink-0 drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]" />
                    <p>Your data is encrypted and secure. By placing your order you agree to our <Link href="/privacy" className="text-primary font-bold hover:underline cursor-pointer hover:text-primary/80 transition-colors">privacy policy</Link>.</p>
                </div>
            </div>

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0F]/90 backdrop-blur-2xl border-t border-white/5 p-4 md:p-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div className="max-w-xl mx-auto flex gap-3 md:gap-4">
                    <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#111115] rounded-[1.25rem] border border-white/5 text-xs font-black uppercase tracking-widest shadow-xl hover:bg-white/5 transition-colors text-white shrink-0">
                        <Globe size={18} className="text-primary" />
                        <span className="hidden sm:inline">English</span>
                        <span className="sm:hidden">EN</span>
                    </button>
                    
                    <button 
                        onClick={handleProceed}
                        disabled={isSubmitting}
                        className={`flex-grow flex items-center justify-between px-6 md:px-8 py-4 rounded-[1.25rem] font-black uppercase tracking-widest text-sm md:text-base border border-yellow-200/50 relative overflow-hidden group/btn shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all ${
                            isSubmitting 
                            ? 'bg-gray-800 text-gray-400 cursor-not-allowed border-gray-700 shadow-none' 
                            : 'bg-gradient-to-r from-[#D4AF37] via-[#FFF0B3] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right text-black hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                    >
                        {isSubmitting ? (
                            <span className="w-full text-center flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-gray-500 border-t-white rounded-full animate-spin" />
                                Processing...
                            </span>
                        ) : (
                            <>
                                {/* Animated shine sweep */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                <span className="relative z-10 drop-shadow-sm">Place Order</span>
                                <span className="relative z-10 drop-shadow-sm flex items-center gap-1">
                                    <span className="text-[10px] md:text-xs tracking-tight align-top mt-1">—</span> €{finalPrice}
                                </span>
                            </>
                        )}
                    </button>
                </div>
            </div>
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

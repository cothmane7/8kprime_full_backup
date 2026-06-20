"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingCart, X } from "lucide-react";

const MOCK_PURCHASES = [
    { name: "Michael R.", location: "New York, USA", plan: "12 Months Access", time: "2 minutes ago" },
    { name: "Sarah J.", location: "Toronto, Canada", plan: "6 Months Access", time: "5 minutes ago" },
    { name: "Robert P.", location: "Los Angeles, USA", plan: "3 Months Access", time: "8 minutes ago" },
    { name: "Emily W.", location: "Vancouver, Canada", plan: "12 Months Access", time: "12 minutes ago" },
    { name: "David K.", location: "Chicago, USA", plan: "6 Months Access + IBO", time: "15 minutes ago" },
    { name: "Jennifer L.", location: "Montreal, Canada", plan: "12 Months Access", time: "22 minutes ago" },
    { name: "William B.", location: "Houston, USA", plan: "3 Months Access", time: "28 minutes ago" },
    { name: "Jessica M.", location: "Ottawa, Canada", plan: "12 Months Access", time: "35 minutes ago" },
    { name: "Thomas H.", location: "Miami, USA", plan: "6 Months Access", time: "42 minutes ago" },
    { name: "Amanda C.", location: "Calgary, Canada", plan: "12 Months Access", time: "50 minutes ago" },
];

export default function PurchaseNotifications() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        if (isDismissed) return;

        // Initial delay before first notification
        const initialDelay = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // 10 seconds after load

        return () => clearTimeout(initialDelay);
    }, [isDismissed]);

    useEffect(() => {
        if (isDismissed || !isVisible) return;

        // Cycle through notifications every 15 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            
            // Wait 5 seconds between notifications
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % MOCK_PURCHASES.length);
                setIsVisible(true);
            }, 5000);

        }, 8000); // Show for 8 seconds

        return () => clearTimeout(timer);
    }, [isVisible, isDismissed]);

    if (isDismissed) return null;

    const purchase = MOCK_PURCHASES[currentIndex];
    const initials = purchase.name.split(" ").map(n => n[0]).join("");

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    className="fixed bottom-6 left-6 z-[90] max-w-[320px] w-full pointer-events-auto"
                >
                    <div className="bg-[#0D0D12]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4 relative group">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsDismissed(true)}
                            className="absolute top-2 right-2 p-1 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
                        >
                            <X size={12} />
                        </button>

                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                <span className="text-primary font-bold text-sm uppercase tracking-tighter">{initials}</span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0D0D12] flex items-center justify-center">
                                <Check size={10} className="text-white fill-emerald-500" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <ShoppingCart size={10} className="text-primary" />
                                <span className="text-[10px] text-primary font-black uppercase tracking-widest">New Purchase</span>
                            </div>
                            <div className="text-xs font-bold text-white mb-0.5">
                                {purchase.name} from <span className="text-gray-400">{purchase.location}</span>
                            </div>
                            <div className="text-[11px] text-gray-300 font-medium">
                                Just bought: <span className="text-primary font-bold">{purchase.plan}</span>
                            </div>
                            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-tight mt-1">
                                {purchase.time}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

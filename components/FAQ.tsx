"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ dictionary }: { dictionary: any }) {
    const faqs = [
        {
            question: "What is 8KPRIME and how does it work?",
            answer: "8KPRIME is a premium streaming access service that delivers live channels, sports, and on-demand content via an internet connection. It works on all your devices — no satellite dish or cable box needed.",
        },
        {
            question: "What devices do you support?",
            answer: "We support almost every device you can imagine: Smart TVs (Samsung, LG, Sony), Android Box, Firestick, Apple TV, MAG, iOS (iPhone/iPad), Android smartphones/tablets, Windows, and Mac.",
        },
        {
            question: "How long does it take to activate my subscription?",
            answer: "Activation is usually instant. After you complete your payment, you will receive an automated email with your login details and setup instructions. In rare cases, it might take up to 30 minutes.",
        },
        {
            question: "Can I use one subscription on multiple devices?",
            answer: "Yes, depending on the plan you choose. Our Standard plan supports 2 devices, and our Platinum plan supports up to 3 devices simultaneously.",
        },
        {
            question: "Do I need a VPN to use your service?",
            answer: "No, you don't need a VPN. Our service has built-in anti-block technology. However, using a VPN is always a good practice for privacy, and our service works perfectly with all major VPN providers.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#0B0B0F]" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-black uppercase tracking-[0.25em] text-sm mb-4"
                    >
                        {dictionary.badge}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter"
                    >
                        {dictionary.title_part1} <span className="text-primary italic">{dictionary.title_part2}</span>
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#15151E]/40 border border-white/5 rounded-[30px] overflow-hidden"
                        >
                            <button
                                className="w-full p-8 text-left flex items-center justify-between group"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? "bg-primary text-white" : "bg-white/5 text-gray-500"
                                    }`}>
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 text-gray-400 font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

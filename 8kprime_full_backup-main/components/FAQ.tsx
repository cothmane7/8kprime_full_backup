"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ dictionary }: { dictionary: any }) {
    // Dynamically build FAQs from dictionary items (q1/a1, q2/a2, etc.)
    const faqKeys = Object.keys(dictionary.items)
        .filter((key) => key.startsWith("q"))
        .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

    const faqs = faqKeys.map((qKey) => {
        const num = qKey.slice(1);
        return {
            question: dictionary.items[`q${num}`],
            answer: dictionary.items[`a${num}`],
        };
    });

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
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 font-medium mt-4 text-base md:text-lg"
                    >
                        {dictionary.subtext}
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-[#15151E]/40 border border-white/5 rounded-[30px] overflow-hidden"
                        >
                            <button
                                className="w-full p-6 md:p-8 text-left flex items-center justify-between group"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="text-base md:text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight pr-4">
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${activeIndex === index ? "bg-primary text-white" : "bg-white/5 text-gray-300"
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
                                        <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-200 font-medium leading-relaxed">
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

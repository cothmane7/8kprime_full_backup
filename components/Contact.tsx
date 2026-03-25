"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, MessageCircle } from "lucide-react";

export default function Contact({ dictionary, common }: { dictionary: any; common: any }) {
    return (
        <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden" id="contact">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full" />

            <div className="container-responsive relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6"
                    >
                        {dictionary.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase"
                    >
                        <span className="text-primary/90">{dictionary.title_part1}</span> <span className="text-gradient-premium italic">{dictionary.title_part2}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex gap-4 md:gap-6 group"
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                    <Mail className="text-primary group-hover:text-black transition-colors" size={20} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-1">{dictionary.email_us}</h4>
                                    <p className="text-gray-400 font-bold text-lg md:text-xl group-hover:text-primary transition-colors truncate max-w-[200px] xs:max-w-none">infos@8kprime.com</p>
                                </div>
                            </motion.div>

                            <motion.a
                                href="https://wa.me/18185656691"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-4 md:gap-6 group cursor-pointer touch-target"
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-green-500/10 group-hover:bg-[#25D366] group-hover:scale-110 transition-all duration-500">
                                    <MessageCircle className="text-[#25D366] group-hover:text-white transition-colors" size={20} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-1">{dictionary.whatsapp}</h4>
                                    <p className="text-gray-400 font-bold text-lg md:text-xl group-hover:text-[#25D366] transition-colors">+1 (818) 565-6691</p>
                                </div>
                            </motion.a>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-6 group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                    <Clock className="text-primary group-hover:text-black transition-colors" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">{dictionary.response_time}</h4>
                                    <p className="text-gray-400 font-bold text-xl group-hover:text-primary transition-colors">{dictionary.under_15_mins}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Trust Card */}
                        <div className="glass-premium p-10 rounded-[3rem] border border-primary/20 shadow-2xl shadow-primary/5">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-primary/20 p-3 rounded-xl">
                                    <ShieldCheck className="text-primary" size={32} />
                                </div>
                                <div>
                                    <h5 className="text-white font-black uppercase tracking-widest text-xs">{dictionary.trust_title}</h5>
                                    <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">{dictionary.trust_subtitle}</p>
                                </div>
                            </div>
                            <p className="text-gray-500 font-medium leading-relaxed italic">
                                {dictionary.trust_text}
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass-premium p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 relative shadow-2xl"
                    >
                        <form className="space-y-8">
                            <div className="space-y-4">
                                <label className="text-gray-500 font-black uppercase tracking-widest text-[10px] ml-4">{dictionary.form_name}</label>
                                <input
                                    type="text"
                                    placeholder={dictionary.form_name_placeholder}
                                    className="w-full bg-[#0F0F12] border border-white/5 rounded-3xl px-8 py-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-gray-500 font-black uppercase tracking-widest text-[10px] ml-4">{dictionary.form_email}</label>
                                <input
                                    type="email"
                                    placeholder={dictionary.form_email_placeholder}
                                    className="w-full bg-[#0F0F12] border border-white/5 rounded-3xl px-8 py-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-gray-500 font-black uppercase tracking-widest text-[10px] ml-4">{dictionary.form_message}</label>
                                <textarea
                                    placeholder={dictionary.form_message_placeholder}
                                    rows={4}
                                    className="w-full bg-[#0F0F12] border border-white/5 rounded-3xl px-8 py-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold resize-none"
                                />
                            </div>
                            <button className="w-full bg-primary text-black py-5 md:py-7 rounded-2xl md:rounded-[2rem] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/20 touch-target">
                                {common.send_message}
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

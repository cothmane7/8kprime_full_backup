"use client";

import Link from "next/link";
import {
    Twitter,
    Youtube,
    Instagram,
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Globe,
    MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer({ lang, dictionary, common }: { lang: string; dictionary: any; common: any }) {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes("#")) {
            const [path, hash] = href.split("#");
            const currentPath = window.location.pathname.replace(/\/$/, "");
            const targetPath = path.replace(/\/$/, "");

            if (currentPath === targetPath || (targetPath === "" && (currentPath === `/${lang}/`) || currentPath === `/${lang}`)) {
                e.preventDefault();
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", href);
                }
            }
        }
    };

    return (
        <footer className="bg-[#050505] pt-20 md:pt-32 pb-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-[radial-gradient(circle_at_bottom,rgba(176,141,62,0.1)_0%,transparent_70%)]" />

            {/* Newsletter / CTA Section: Mobile-First */}
            <div className="container-responsive mb-20 md:mb-32">
                <div className="glass-premium p-8 md:p-24 rounded-[2.5rem] md:rounded-[4rem] text-center relative overflow-hidden group shadow-2xl border-primary/10">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8 md:mb-10 uppercase"
                    >
                        {dictionary.cta_title_line1} <br />
                        <span className="text-primary/90">{dictionary.cta_title_line2}</span> <span className="text-gradient-premium italic">{dictionary.cta_title_line3}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-200 text-base md:text-xl font-medium mb-10 md:mb-16 max-w-2xl mx-auto"
                    >
                        {dictionary.cta_subtext}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <Link 
                            href={`/${lang}#pricing`} 
                            onClick={(e) => handleScrollTo(e, `/${lang}#pricing`)}
                            className="bg-primary text-black px-10 md:px-16 py-5 md:py-7 rounded-2xl md:rounded-[2.5rem] text-lg md:text-2xl font-extrabold inline-flex items-center gap-3 shadow-2xl shadow-primary/20 group/btn touch-target"
                        >
                            {dictionary.cta_button}
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="container-responsive">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20 xl:gap-32 mb-16 md:mb-24 relative z-10">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href={`/${lang}`} className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <span className="text-black font-black text-xl">8K</span>
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                PRIME<span className="text-primary">TV</span>
                            </span>
                        </Link>
                        <p className="text-gray-300 font-medium leading-relaxed">
                            {dictionary.brand_text}
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Youtube, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-200 hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{dictionary.nav_title}</h4>
                        <ul className="space-y-4">
                            {[
                                { name: common.home, href: `/${lang}` },
                                { name: common.pricing, href: `/${lang}#pricing` },
                                { name: common.channels, href: `/${lang}/channels` },
                                { name: "Blog", href: `/${lang}/blog` },
                                { name: common.faq, href: `/${lang}/#faq` }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        onClick={(e) => handleScrollTo(e, link.href)}
                                        className="text-gray-300 font-bold hover:text-primary transition-colors text-sm uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{dictionary.support_title}</h4>
                        <ul className="space-y-4">
                            {[
                                { name: common.contact, href: `/${lang}/contact` },
                                { name: dictionary.help_center, href: `/${lang}/faq` },
                                { name: dictionary.status, href: "#" },
                                { name: dictionary.privacy_policy, href: `/${lang}/privacy` },
                                { name: dictionary.tos, href: `/${lang}/terms` },
                                { name: "Disclaimer", href: `/${lang}/disclaimer` }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 font-bold hover:text-primary transition-colors text-sm uppercase tracking-widest">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{dictionary.contact_title}</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-primary shrink-0" size={18} />
                                <span className="text-gray-300 font-bold text-sm tracking-wide">{dictionary.hq_location}</span>
                            </li>
                             <li className="flex items-center gap-4">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span className="text-gray-300 font-bold text-sm tracking-wide">infos8kprime@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <MessageCircle className="text-[#25D366] shrink-0" size={18} />
                                <a href="https://wa.me/18185656691" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-bold text-sm tracking-wide hover:text-[#25D366] transition-colors">{dictionary.whatsapp_support}</a>
                            </li>
                            <li className="flex items-center gap-4 text-green-500">
                                <Globe className="shrink-0" size={18} />
                                <span className="font-black text-[10px] uppercase tracking-[0.2em]">{dictionary.service_status}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Refund Policy */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8 bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <h3 className="text-xl md:text-2xl font-black text-white mb-4 flex items-center gap-3">
                            🎯 🛡️ 7-Day Money Back Guarantee
                        </h3>
                        <p className="text-gray-200 font-medium mb-8 text-sm md:text-base leading-relaxed">
                            We stand behind the quality of our service and want you to feel completely confident in your purchase.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="space-y-3">
                                <h4 className="text-primary font-bold text-base tracking-wide flex items-center gap-2">✅ 100% Risk-Free</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">No Questions Asked</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">7 Days Coverage</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">You are eligible for a refund within 7 days from the purchase date.</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">Full Refund</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">Get 100% of your money back — no hidden fees, no partial refunds.</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-white font-bold text-base tracking-wide flex items-center gap-2">Simple Process</h4>
                                <p className="text-gray-300 text-sm leading-relaxed font-medium">If the service does not work properly, just contact our support team, and we’ll take care of the rest.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-8 md:gap-10 relative z-10">
                    <p className="text-gray-300 font-bold uppercase tracking-[0.05em] text-[9px] md:text-[10px] text-center max-w-4xl px-4">
                        We do not host, store, or distribute any media content. All services provided are for access to third-party content.
                    </p>
                    <p className="text-gray-600 font-bold uppercase tracking-[0.1em] text-[10px] md:text-xs text-center max-w-4xl px-4">
                        {dictionary.copyright}
                    </p>

                    {/* Payment Icons: Wrapped for mobile */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 filter grayscale opacity-50 px-4">
                        {[
                            "PayPal", "Visa", "Mastercard", "Google Pay", "Apple Pay", "Bitcoin"
                        ].map((alt) => (
                            <div key={alt} className="bg-white/90 px-3 py-1.5 rounded-lg flex items-center justify-center h-8 w-12 md:h-10 md:w-16">
                                <span className="text-[8px] font-black text-black">{alt}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 px-4">
                        {[
                            { name: common.home, href: `/${lang}` },
                            { name: dictionary.privacy_policy, href: `/${lang}/privacy` },
                            { name: dictionary.refund_policy, href: `/${lang}/refund-policy` },
                            { name: dictionary.tos, href: `/${lang}/terms` },
                            { name: "Disclaimer", href: `/${lang}/disclaimer` }
                        ].map((l) => (
                            <Link key={l.name} href={l.href} className="text-gray-700 font-black uppercase tracking-widest text-[9px] md:text-[10px] hover:text-primary transition-colors touch-target">
                                {l.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

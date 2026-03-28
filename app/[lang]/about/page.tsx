import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Info, Target, Zap, Globe, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return { title: `${dictionary.legal.about_title} - 8KPRIME` };
}

export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    const offerings = [
        { icon: <Zap className="text-primary" />, title: "30,000+ Channels", desc: "Live local and international feeds across sports, news, and entertainment." },
        { icon: <Globe className="text-primary" />, title: "175,000+ VOD", desc: "A massive library of the latest movies and series, updated daily." },
        { icon: <Zap className="text-primary" />, title: "8K Quality", desc: "Support for crystal-clear 4K and 8K streaming with 99.9% uptime." },
        { icon: <Users className="text-primary" />, title: "Multi-Device", desc: "Seamless experience on Smart TV, Android, iOS, and Fire Stick." }
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 text-balance">
            <div className="container mx-auto px-6 relative z-10 text-gray-400">
                <div className="max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight border-b border-white/10 pb-6 uppercase italic">
                        About 8KPRIME
                    </h1>
                    
                    <div className="space-y-12 text-lg leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide italic">Who We Are</h2>
                            <p>
                                Welcome to 8KPRIME, your premier destination for high-quality streaming services. Since our inception, we’ve been dedicated to delivering exceptional entertainment experiences through cutting-edge streaming technology. We provide access to thousands of live TV channels, movies, and series from around the world, all in stunning quality from SD to 8K resolution.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide italic">Our Mission</h2>
                            <p>
                                Our mission is to revolutionize the way people consume entertainment by providing affordable, reliable, and feature-rich streaming services. We believe that everyone deserves access to world-class entertainment without the constraints of traditional cable or satellite TV. Through continuous innovation and unwavering commitment to customer satisfaction, we strive to be the leading streaming service provider globally.
                            </p>
                        </section>

                        <section className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide italic underline decoration-primary/30 underline-offset-8">What We Offer</h2>
                            <p className="mb-6">At 8KPRIME, we pride ourselves on offering comprehensive streaming solutions that cater to diverse viewing preferences:</p>
                            <ul className="space-y-4 list-disc pl-6 marker:text-primary">
                                <li><strong>30,000+ Live TV Channels</strong>: Access channels from over 190 countries, covering sports, news, entertainment, kids’ content, and more.</li>
                                <li><strong>175,000+ Movies & Series</strong>: Extensive on-demand library featuring the latest releases and timeless classics.</li>
                                <li><strong>Premium Quality Streaming</strong>: Support for SD, HD, FHD, 4K, and 8K resolution for the ultimate viewing experience.</li>
                                <li><strong>EPG (Electronic Program Guide)</strong>: Easy-to-navigate program guides for seamless content discovery.</li>
                                <li><strong>Multi-Device Support</strong>: Compatible with Smart TVs, Android devices, iOS, Fire Stick, MAG boxes, and more.</li>
                                <li><strong>99.9% Uptime</strong>: Reliable service with minimal interruptions and buffer-free streaming.</li>
                                <li><strong>24/7 Customer Support</strong>: Dedicated support team ready to assist you anytime.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide italic">Why Choose 8KPRIME?</h2>
                            <ul className="space-y-6">
                                <li>
                                    <h3 className="text-white font-bold mb-2">Unmatched Quality & Performance</h3>
                                    <p>We utilize state-of-the-art streaming infrastructure to ensure smooth, buffer-free playback. Our servers are strategically located worldwide to provide optimal performance regardless of your location.</p>
                                </li>
                                <li>
                                    <h3 className="text-white font-bold mb-2">Affordable Pricing</h3>
                                    <p>We believe premium entertainment shouldn’t break the bank. Our flexible subscription plans offer incredible value.</p>
                                </li>
                                <li>
                                    <h3 className="text-white font-bold mb-2">Easy Setup & User-Friendly</h3>
                                    <p>Getting started with 8KPRIME is simple. Our intuitive setup process takes just minutes.</p>
                                </li>
                                <li>
                                    <h3 className="text-white font-bold mb-2">Universal Compatibility</h3>
                                    <p>Watch your favorite content on virtually any device.</p>
                                </li>
                            </ul>
                        </section>

                        <section className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide italic underline decoration-primary/30 underline-offset-8">Our Commitment to Quality</h2>
                            <p className="mb-4">Quality is at the heart of everything we do. We continuously monitor and optimize our service to ensure:</p>
                            <ul className="space-y-3 list-disc pl-6 marker:text-primary">
                                <li>Consistent streaming performance with minimal buffering.</li>
                                <li>Regular content updates with the latest channels and on-demand titles.</li>
                                <li>Robust security measures to protect your privacy and data.</li>
                                <li>Responsive customer support to address any concerns promptly.</li>
                                <li>Transparent pricing with no hidden fees or surprises.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide italic">Customer Satisfaction Guarantee</h2>
                            <p>Your satisfaction is our top priority. We stand behind our service with a customer satisfaction guarantee. If you encounter any issues with your subscription, our support team is committed to resolving them quickly and effectively.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide italic">Global Reach, Local Support</h2>
                            <p>While we serve customers worldwide, we understand the importance of local support. Our multilingual customer service team is available 24/7 to assist you in your preferred language.</p>
                        </section>

                        <section className="pt-10 border-t border-white/10">
                            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-xs">Registered Legal Entity</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm uppercase tracking-widest opacity-80 font-bold leading-loose">
                                <div>
                                    <p>THE STREAMING AUDIO COMPANY LIMITED</p>
                                    <p>Company Number: SC636552</p>
                                    <p>Incorporated: 2018</p>
                                </div>
                                <div>
                                    <p>17 Smeaton Drive Bishopbriggs</p>
                                    <p>Glasgow, Scotland, G64 3BF</p>
                                    <p>Contact: infos8kprime@gmail.com</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

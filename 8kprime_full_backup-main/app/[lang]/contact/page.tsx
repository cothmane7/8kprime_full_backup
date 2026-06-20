import { Mail, Phone, MessageCircle, Clock, ShieldCheck, MapPin } from "lucide-react";
import Contact from "@/components/Contact";
import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";

export default async function ContactPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    return (
        <div className="pt-32 min-h-screen bg-[#0B0B0F] pb-24">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center mb-20 text-balance">
                    <div className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">
                        {dictionary.contact.badge}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter uppercase">
                        {dictionary.contact.title_part1} <span className="text-primary italic">{dictionary.contact.title_part2}</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        {dictionary.contact.subtext}
                    </p>
                </div>

                {/* Reuse the Contact Component */}
                <Contact dictionary={dictionary.contact} common={dictionary.common} />

                {/* Additional Trust Section for full page */}
                <div className="max-w-6xl mx-auto mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#15151E]/40 border border-white/5 rounded-[40px] p-10 text-center glass-premium">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3">{dictionary.contact.trust_item1_title}</h4>
                            <p className="text-gray-300 font-bold text-sm">{dictionary.contact.trust_item1_text}</p>
                        </div>
                        <div className="bg-[#15151E]/40 border border-white/5 rounded-[40px] p-10 text-center glass-premium">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3">{dictionary.contact.trust_item2_title}</h4>
                            <p className="text-gray-300 font-bold text-sm">{dictionary.contact.trust_item2_text}</p>
                        </div>
                        <div className="bg-[#15151E]/40 border border-white/5 rounded-[40px] p-10 text-center glass-premium">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3">{dictionary.contact.trust_item3_title}</h4>
                            <p className="text-gray-300 font-bold text-sm">{dictionary.contact.trust_item3_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

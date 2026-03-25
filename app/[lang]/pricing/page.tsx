import { Shield, Globe, Monitor } from "lucide-react";
import Pricing from "@/components/Pricing";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function PricingPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    return (
        <div className="pt-32 min-h-screen bg-[#0B0B0F] pb-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 text-balance">
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter uppercase">
                        {dictionary.pricing.hero_title_part1} <span className="text-primary italic">{dictionary.pricing.hero_title_part2}</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        {dictionary.pricing.hero_subtext}
                    </p>
                </div>

                <Pricing lang={lang} dictionary={dictionary.pricing} common={dictionary.common} />

                <div className="max-w-6xl mx-auto mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#15151E]/40 border border-white/5 rounded-[40px] p-10 text-center glass-premium">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3">{dictionary.pricing.trust_secure_title}</h4>
                            <p className="text-gray-500 font-bold text-sm">{dictionary.pricing.trust_secure_text}</p>
                        </div>
                        <div className="bg-[#15151E]/40 border border-white/5 rounded-[40px] p-10 text-center glass-premium">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3">{dictionary.pricing.trust_global_title}</h4>
                            <p className="text-gray-500 font-bold text-sm">{dictionary.pricing.trust_global_text}</p>
                        </div>
                        <div className="bg-[#15151E]/40 border border-white/5 rounded-[40px] p-10 text-center glass-premium">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <Monitor className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-3">{dictionary.pricing.trust_multi_title}</h4>
                            <p className="text-gray-500 font-bold text-sm">{dictionary.pricing.trust_multi_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

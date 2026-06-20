import FAQ from "@/components/FAQ";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateMetadata(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return {
        title: `${dictionary.common.faq} - 8KPRIME`,
    };
}

export default async function FAQPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    return (
        <div className="pt-32 pb-24 bg-[#050505]">
            <div className="container mx-auto px-6 mb-20 text-center">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-8">
                    {dictionary.faq.badge}
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                    {dictionary.faq.title_part1} <span className="text-gradient-premium">{dictionary.faq.title_part2}</span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    {dictionary.faq.subtext}
                </p>
            </div>

            <FAQ dictionary={dictionary.faq} />
        </div>
    );
}

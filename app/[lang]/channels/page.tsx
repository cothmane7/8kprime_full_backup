import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import ChannelsList from "./ChannelsList";

export async function generateMetadata(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return {
        title: dictionary.channels.meta_title,
        description: dictionary.channels.meta_desc,
        robots: { index: false, follow: false }
    };
}

export default async function ChannelsPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    return (
        <ChannelsList 
            lang={lang} 
            dictionary={dictionary.channels} 
            pricingDict={dictionary.pricing}
        />
    );
}

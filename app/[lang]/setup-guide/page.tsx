import SetupGuide from "@/components/SetupGuide";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateMetadata(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return {
        title: dictionary.setup_guide.meta_title,
        description: dictionary.setup_guide.meta_desc,
    };
}

export default async function SetupGuidePage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    return (
        <main>
            <SetupGuide dictionary={dictionary.setup_guide} />
        </main>
    );
}

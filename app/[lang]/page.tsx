import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import SportsSection from "@/components/SportsSection";
import FAQ from "@/components/FAQ";
import Process from "@/components/Process";

import Testimonials from "@/components/Testimonials";
import StickyCTA from "@/components/StickyCTA";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const lang = params.lang;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0F]">
      <Hero lang={lang} dictionary={dictionary.hero} common={dictionary.common} />
      <SportsSection dictionary={dictionary.sports} />
      <ComparisonTable dictionary={dictionary.comparison} />
      <Pricing lang={lang} dictionary={dictionary.pricing} common={dictionary.common} />
      <Process dictionary={dictionary.process} />
      <Testimonials dictionary={dictionary.testimonials} />
      <FAQ dictionary={dictionary.faq} />
      <StickyCTA lang={lang} dictionary={dictionary.hero} />
    </div>
  );
}

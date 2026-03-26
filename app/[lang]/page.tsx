import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import MovieGrid from "@/components/MovieGrid";
import LeaguesCarousel from "@/components/LeaguesCarousel";
import StreamingCarousel from "@/components/StreamingCarousel";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
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
      <WhyChooseUs dictionary={dictionary.why_choose_us} />
      <Process dictionary={dictionary.process} />
      {/* 
      <MovieGrid lang={lang} dictionary={dictionary.movie_grid} />
      <LeaguesCarousel dictionary={dictionary.leagues_carousel} />
      <StreamingCarousel dictionary={dictionary.streaming_apps} />
      */}
      <ComparisonTable dictionary={dictionary.comparison} />
      <Pricing lang={lang} dictionary={dictionary.pricing} common={dictionary.common} />
      <Features dictionary={dictionary.features} />
      <FAQ dictionary={dictionary.faq} />
      <Contact dictionary={dictionary.contact} common={dictionary.common} />
    </div>
  );
}

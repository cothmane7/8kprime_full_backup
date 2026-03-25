import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Barlow_Condensed } from "next/font/google";
import SecurityShield from "@/components/SecurityShield";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-sporty",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang as Locale;
  
  const alternates: Record<string, string> = {};
  i18n.locales.forEach((l) => {
    alternates[l] = `/${l}`;
  });

  return {
    title: "8KPRIME TV | Elite Global Entertainment",
    description: "Experience ultra-luxury entertainment with 8K resolution and zero-latency switching.",
    alternates: {
      canonical: `/${lang}`,
      languages: alternates,
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { children } = props;
  const params = await props.params;
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className={barlowCondensed.variable}>
      <body className="antialiased bg-background text-foreground">
        <SecurityShield />
        <Navbar lang={lang} dictionary={dictionary.common} />
        <main>{children}</main>
        <FloatingActions lang={lang} />
        <Footer lang={lang} dictionary={dictionary.footer} common={dictionary.common} />
      </body>
    </html>
  );
}

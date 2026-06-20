import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Barlow_Condensed, Outfit } from "next/font/google";
import SecurityShield from "@/components/SecurityShield";
import CrispChat from "@/components/CrispChat";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import Script from "next/script";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-sporty",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-ui",
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
    description: "Experience ultra-luxury entertainment with 4K Ultra HD resolution and zero-latency switching.",
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
    <html lang={lang} className={`${barlowCondensed.variable} ${outfit.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17990295486"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17990295486');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '973973055428153');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=973973055428153&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <SecurityShield />
        <PurchaseNotifications />
        <Navbar lang={lang} dictionary={dictionary.common} />
        <main>{children}</main>
        <FloatingActions lang={lang} />
        <Footer lang={lang} dictionary={dictionary.footer} common={dictionary.common} />
        <CrispChat />
      </body>
    </html>
  );
}

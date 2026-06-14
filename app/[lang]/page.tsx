import LeanHomepage from "@/components/LeanHomepage";
import { Locale } from "@/i18n-config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  return <LeanHomepage />;
}

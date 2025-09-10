import { Showcases } from "@/blocks/landing";
import { getShowcaseData } from "@/services/locale";
import { setRequestLocale } from "next-intl/server";

export default async function ShowcasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const showcaseData = await getShowcaseData(locale);

  return (
    <>{showcaseData.showcases && <Showcases data={showcaseData.showcases} />}</>
  );
}

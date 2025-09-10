import { Pricing, FAQ, Testimonials } from "@/blocks/landing";
import { setRequestLocale } from "next-intl/server";
import { getLandingData, getPricingData } from "@/services/locale";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const landingData = await getLandingData(locale);
  const pricingData = await getPricingData(locale);

  return (
    <>
      {pricingData.pricing && <Pricing />}
      {landingData.faq && <FAQ data={landingData.faq} />}
      {landingData.testimonials && (
        <Testimonials data={landingData.testimonials} />
      )}
    </>
  );
}

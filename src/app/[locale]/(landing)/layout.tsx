import { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { getLandingData } from "@/services/locale";
import { Header, Footer } from "@/blocks/landing";

export default async function LandingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const landingData = await getLandingData(locale);

  return (
    <div className="w-screen h-screen">
      {landingData.header && <Header data={landingData.header} />}
      {children}
      {landingData.footer && <Footer data={landingData.footer} />}
    </div>
  );
}

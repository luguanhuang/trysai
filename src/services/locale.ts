export type LandingData = typeof import("@/config/locale/landing/en.json");

export async function getLandingData(locale: string) {
  return await getLocaleData("landing", locale);
}

export async function getPricingData(locale: string) {
  return await getLocaleData("pricing", locale);
}

export async function getShowcaseData(locale: string) {
  return await getLocaleData("showcase", locale);
}

export async function getLocaleData(name: string, locale: string = "en") {
  try {
    if (locale === "zh-CN") {
      locale = "zh";
    }

    return await import(
      `@/config/locale/${name}/${locale.toLowerCase()}.json`
    ).then((module) => module.default);
  } catch (error) {
    console.warn(`Failed to load ${locale}.json, falling back to en.json`);

    return await import(`@/config/locale/${name}/en.json`).then(
      (module) => module.default
    );
  }
}

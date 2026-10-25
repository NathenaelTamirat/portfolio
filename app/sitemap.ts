import type { MetadataRoute } from "next";
import { LANGUAGES } from "./i18n/languages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nathenaeltamirat.dev";
  const languageAlternates: Record<string, string> = {};

  for (const lang of LANGUAGES) {
    languageAlternates[lang.code] = lang.code === "en" ? baseUrl : `${baseUrl}?lang=${lang.code}`;
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: languageAlternates,
      },
    },
  ];
}

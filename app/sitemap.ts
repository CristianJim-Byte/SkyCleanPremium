import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...services.map((s) => `/uslugi/${s.slug}`), "/polityka-prywatnosci", "/regulamin"];
  return pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : p.startsWith("/uslugi") ? 0.8 : 0.3 }));
}

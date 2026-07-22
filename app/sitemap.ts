import type { MetadataRoute } from "next";

const BASE_URL = "https://dalygrowthmedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/story", "/results", "/services", "/why-me"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));
}

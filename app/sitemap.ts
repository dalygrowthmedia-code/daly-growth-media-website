import type { MetadataRoute } from "next";

const BASE_URL = "https://www.dalygrowthmedia.com";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/results", priority: 0.8 },
  { path: "/why-me", priority: 0.7 },
  { path: "/story", priority: 0.7 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority
  }));
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daly Growth Media",
    short_name: "DGM",
    description:
      "Meta ads, Google Ads, SEO and websites for trades and service businesses across Ireland.",
    start_url: "/",
    display: "standalone",
    background_color: "#040e20",
    theme_color: "#040e20",
    lang: "en-IE",
    icons: [
      { src: "/assets/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/assets/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
    ]
  };
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dalygrowthmedia.com"),
  title: {
    default: "Daly Growth Media | Meta Ads for Irish E-commerce Brands",
    template: "%s | Daly Growth Media"
  },
  description:
    "Daly Growth Media helps Irish e-commerce brands run, optimise and scale Meta ads across Facebook and Instagram.",
  openGraph: {
    title: "Daly Growth Media",
    description:
      "Meta ads that actually sell for Irish e-commerce brands.",
    url: "https://dalygrowthmedia.com",
    siteName: "Daly Growth Media",
    images: [
      {
        url: "/assets/social-cover.png",
        width: 851,
        height: 315,
        alt: "Daly Growth Media"
      }
    ],
    locale: "en_IE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Daly Growth Media",
    description:
      "Meta ads that actually sell for Irish e-commerce brands.",
    images: ["/assets/social-cover.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE">
      <body>{children}</body>
    </html>
  );
}

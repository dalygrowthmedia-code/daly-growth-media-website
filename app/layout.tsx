import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5M69WF95PV";

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Daly Growth Media",
  description:
    "Daly Growth Media helps Irish e-commerce brands run, optimise and scale Meta ads across Facebook and Instagram.",
  url: "https://dalygrowthmedia.com",
  email: "sean@dalygrowthmedia.com",
  image: "https://dalygrowthmedia.com/assets/logo.png",
  logo: "https://dalygrowthmedia.com/assets/logo.png",
  telephone: "+353873792059",
  priceRange: "€€",
  areaServed: {
    "@type": "Country",
    name: "Ireland"
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Co. Clare",
    addressCountry: "IE"
  },
  founder: {
    "@type": "Person",
    name: "Sean Daly"
  },
  sameAs: [
    "https://www.instagram.com/dalygrowthmedia/",
    "https://www.facebook.com/profile.php?id=61591304975543"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE">
      <body>
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}

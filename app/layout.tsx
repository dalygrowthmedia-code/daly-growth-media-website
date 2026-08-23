import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5M69WF95PV";

export const metadata: Metadata = {
  metadataBase: new URL("https://dalygrowthmedia.com"),
  title: {
    default:
      "Daly Growth Media | Meta Ads Lead Generation for Trades — Clare, Limerick & Galway",
    template: "%s | Daly Growth Media"
  },
  description:
    "Meta ads lead generation for trades, home improvement and service businesses across Clare, Limerick, Galway and Munster, Ireland. We turn ad spend into booked jobs, not just clicks.",
  openGraph: {
    title: "Daly Growth Media",
    description:
      "We turn ad spend into booked jobs — Meta ads lead generation for trades and service businesses across Clare, Limerick, Galway and Munster.",
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
      "We turn ad spend into booked jobs — Meta ads lead generation for trades and service businesses across Clare, Limerick, Galway and Munster.",
    images: ["/assets/social-cover.png"]
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Daly Growth Media",
  description:
    "Daly Growth Media runs Meta ad campaigns that turn ad spend into booked jobs for trades, home improvement and premium service businesses across Clare, Limerick, Galway and Munster, Ireland.",
  url: "https://dalygrowthmedia.com",
  email: "sean@dalygrowthmedia.com",
  image: "https://dalygrowthmedia.com/assets/logo.png",
  logo: "https://dalygrowthmedia.com/assets/logo.png",
  telephone: "+353873792059",
  priceRange: "€€",
  areaServed: [
    { "@type": "AdministrativeArea", name: "County Clare" },
    { "@type": "AdministrativeArea", name: "County Limerick" },
    { "@type": "AdministrativeArea", name: "County Galway" },
    { "@type": "AdministrativeArea", name: "Munster" },
    { "@type": "Country", name: "Ireland" }
  ],
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
    "https://www.facebook.com/profile.php?id=61591304975543",
    "https://www.linkedin.com/in/sean-daly-a02362378/"
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

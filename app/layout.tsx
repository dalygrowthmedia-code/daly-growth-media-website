import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { SoundEffects } from "./components/SoundEffects";
import { googleBusiness } from "./config/google-business";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5M69WF95PV";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-display",
  display: "swap"
});

const SITE_URL = "https://www.dalygrowthmedia.com";
const SITE_DESCRIPTION =
  "Meta ads lead generation for trades, home improvement and service businesses across Ireland — plus Google Ads, SEO and Google Business Profile optimisation, and websites and landing pages. We turn ad spend into booked jobs, not just clicks.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Daly Growth Media | Meta Ads Lead Generation for Trades Across Ireland",
    template: "%s | Daly Growth Media"
  },
  description: SITE_DESCRIPTION,
  applicationName: "Daly Growth Media",
  authors: [{ name: "Sean Daly", url: `${SITE_URL}/story` }],
  creator: "Sean Daly",
  publisher: "Daly Growth Media",
  category: "Marketing",
  keywords: [
    "Meta ads Ireland",
    "Facebook ads for tradesmen",
    "lead generation for trades Ireland",
    "Google Ads management Ireland",
    "SEO for tradesmen Ireland",
    "Google Business Profile optimisation Ireland",
    "website design for tradesmen Ireland",
    "marketing agency Ennis",
    "marketing agency Ireland",
    "Meta ads agency Ireland"
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Daly Growth Media",
    description:
      "We turn ad spend into booked jobs — Meta ads, Google Ads, SEO and websites for trades and service businesses across Ireland.",
    url: SITE_URL,
    siteName: "Daly Growth Media",
    locale: "en_IE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Daly Growth Media",
    description:
      "We turn ad spend into booked jobs — Meta ads, Google Ads, SEO and websites for trades and service businesses across Ireland."
  },
  other: {
    "geo.region": "IE-CE",
    "geo.placename": "Ennis, Co. Clare",
    "geo.position": "52.8436;-8.9864",
    ICBM: "52.8436, -8.9864"
  }
};

const businessId = `${SITE_URL}/#business`;
const personId = `${SITE_URL}/#sean-daly`;

const serviceAreas = [
  { "@type": "Country", name: "Ireland" },
  { "@type": "City", name: "Dublin" },
  { "@type": "City", name: "Cork" },
  { "@type": "City", name: "Limerick" },
  { "@type": "City", name: "Galway" },
  { "@type": "City", name: "Waterford" },
  { "@type": "City", name: "Ennis" }
];

const serviceCatalog = [
  {
    name: "Meta Ads Lead Generation",
    serviceType: "Facebook and Instagram advertising",
    description:
      "End-to-end Meta ads campaigns for trades, home improvement and service businesses — strategy, creative, tracking and monthly reporting built around booked jobs."
  },
  {
    name: "Google Ads Management",
    serviceType: "Google Ads (search advertising)",
    description:
      "Google search campaigns with conversion tracking that put trades and service businesses in front of customers searching for their service."
  },
  {
    name: "SEO and Google Business Profile Optimisation",
    serviceType: "Local SEO",
    description:
      "Local SEO and Google Business Profile (GMB) optimisation so businesses appear on the map and in local search results."
  },
  {
    name: "Website and Landing Page Design",
    serviceType: "Web design",
    description:
      "Fast, mobile-first websites and single-offer landing pages built to convert ad and search traffic into enquiries."
  }
];

const profileUrl = googleBusiness.profileUrl;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Daly Growth Media",
      inLanguage: "en-IE",
      publisher: { "@id": businessId }
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": businessId,
      name: "Daly Growth Media",
      alternateName: "DGM",
      slogan: "We turn ad spend into booked jobs",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      email: "sean@dalygrowthmedia.com",
      telephone: "+353873792059",
      image: [`${SITE_URL}/opengraph-image.png`, `${SITE_URL}/assets/logo.png`],
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo.png`
      },
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "67 O'Connell Street, Clonrad Beg",
        addressLocality: "Ennis",
        addressRegion: "Co. Clare",
        postalCode: "V95 KT26",
        addressCountry: "IE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.8436,
        longitude: -8.9864
      },
      areaServed: serviceAreas,
      founder: { "@id": personId },
      knowsAbout: [
        "Meta ads",
        "Facebook advertising",
        "Instagram advertising",
        "Google Ads",
        "Local SEO",
        "Google Business Profile optimisation",
        "Lead generation for trades",
        "Website and landing page design"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Marketing services",
        itemListElement: serviceCatalog.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            serviceType: service.serviceType,
            description: service.description,
            provider: { "@id": businessId },
            areaServed: serviceAreas
          }
        }))
      },
      ...(profileUrl ? { hasMap: profileUrl } : {}),
      sameAs: [
        "https://www.instagram.com/dalygrowthmedia/",
        "https://www.facebook.com/profile.php?id=61591304975543",
        "https://www.linkedin.com/in/sean-daly-a02362378/",
        ...(profileUrl ? [profileUrl] : [])
      ]
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Sean Daly",
      jobTitle: "Founder and Meta Ads Specialist",
      url: `${SITE_URL}/story`,
      image: `${SITE_URL}/assets/sean-daly-innovation-clare.webp`,
      worksFor: { "@id": businessId },
      homeLocation: { "@type": "Place", name: "Ennis, Co. Clare, Ireland" },
      knowsAbout: ["Meta ads", "Google Ads", "SEO", "Lead generation"],
      sameAs: ["https://www.linkedin.com/in/sean-daly-a02362378/"]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
        <noscript>
          <style>{`.reveal-fade{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SoundEffects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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

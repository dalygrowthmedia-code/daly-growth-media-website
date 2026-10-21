import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../components/Reveal";
import { ServiceIcon } from "../components/ServiceIcon";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ogImages } from "../seo";

const title =
  "Meta Ads, Google Ads, SEO & Websites for Trades Across Ireland | Daly Growth Media";
const description =
  "Meta ads lead generation for trades and service businesses, plus Google Ads, SEO and Google Business Profile optimisation, and websites and landing pages — across Ireland.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", images: ogImages }
};

const services = [
  {
    title: "Meta ads management",
    detail:
      "I run your Facebook and Instagram account end-to-end — built around booked jobs, not vanity clicks.",
    icon: "M6 18V8l6-4 6 4v10M9 10h6M9 14h6"
  },
  {
    title: "Campaign strategy and setup",
    detail:
      "Pixel verified, tracking confirmed, audiences built around your service area — before a euro goes live.",
    icon: "M5 17l5-5 3 3 6-8M5 7h6M5 11h3"
  },
  {
    title: "Creative direction",
    detail:
      "Creative built and refined from what the data shows — the single biggest lever in lead quality.",
    icon: "M7 7h10v10H7zM10 4v4M14 4v4M10 16v4M14 16v4"
  },
  {
    title: "Optimisation and reporting",
    detail:
      "A plain-English monthly report — what spent, what came in, what's changing next.",
    icon: "M5 18h14M7 15v-4M12 15V6M17 15V9"
  }
];

const moreServices = [
  {
    id: "google-ads",
    title: "Google Ads",
    headline: "Be the first call when someone searches for what you do.",
    detail:
      "Meta ads create demand. Google Ads captures it — putting you in front of homeowners at the exact moment they search for a driveway, roof, extension or repair near them.",
    points: [
      "Search campaigns built around the jobs you actually want to win",
      "Keyword and search-intent research for your trade and county",
      "Conversion tracking on calls and form enquiries, so you see what spend produced",
      "Negative keywords and budget control so money isn't wasted on the wrong clicks"
    ],
    icon: "M10.5 4a6.5 6.5 0 104.1 11.6l4.9 4.9M8 10.5h5M10.5 8v5"
  },
  {
    id: "seo-gmb",
    title: "SEO + Google Business Profile optimisation",
    headline: "Show up on the map and in the results when locals search.",
    detail:
      "Most people pick from the first few businesses Google shows them. A properly optimised Google Business Profile and local SEO keep you in that shortlist without paying for every click.",
    points: [
      "Google Business Profile setup and optimisation — categories, services, photos, posts and Q&A",
      "A simple process for getting more genuine Google reviews from happy customers",
      "Local SEO — service-area pages, on-page fixes and consistent business listings",
      "Tracking calls, direction requests and website clicks from your profile"
    ],
    icon: "M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21zM12 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
  },
  {
    id: "websites-landing-pages",
    title: "Websites & landing pages",
    headline: "A site that turns clicks into enquiries.",
    detail:
      "Great ads and a slow, confusing website is money down the drain. I build fast, mobile-first websites and single-purpose landing pages designed to convert the traffic you're paying for.",
    points: [
      "Fast, mobile-first websites for trades and service businesses",
      "Landing pages built around one offer and one campaign",
      "Enquiry forms wired to your phone, email or CRM so no lead slips through",
      "Built with SEO foundations — speed, clean structure and local service pages"
    ],
    icon: "M3 5h18v14H3zM3 9h18M6.5 7h.01M9.5 7h.01"
  }
];

const freePlanItems = [
  "Full audit of your current lead generation",
  "Recommended campaign and audience strategy",
  "Realistic budget and cost-per-lead targets",
  "Delivered on a 20-minute call — no obligation"
];

const pricingItems = [
  "One Meta lead-gen campaign managed monthly",
  "Multiple ad creatives tested each month — video and static, refined based on what's converting",
  "Monthly performance report — spend vs leads booked",
  "Quarterly content shoot every three months",
  "Full lead tracking setup on your business"
];

const faqs = [
  {
    question: "What does Daly Growth Media do?",
    answer:
      "Daly Growth Media is a lead generation agency run by Sean Daly in Co. Clare, Ireland. The main service is Meta (Facebook and Instagram) ads for trades, home improvement and premium service businesses. I also offer Google Ads, SEO and Google Business Profile optimisation, and websites and landing pages."
  },
  {
    question: "Which areas do you work in?",
    answer:
      "I'm based in Ennis, Co. Clare, and work with trades and service businesses all across Ireland."
  },
  {
    question: "How much does it cost?",
    answer:
      "It starts with a free campaign plan on a 20-minute call. Management pricing is discussed on your discovery call once I understand your business. Ad spend is separate and paid directly to Meta or Google, so you stay in control of your budget."
  },
  {
    question: "How quickly will I see leads?",
    answer:
      "Meta lead-generation campaigns can start producing enquiries within days of going live, and cost per lead improves as creative is tested. Google Ads works on search demand from day one, while SEO and Google Business Profile growth builds over weeks and months."
  },
  {
    question: "Do I need a website to run ads?",
    answer:
      "Not for Meta lead-form campaigns — enquiries can come straight from the ad. A fast landing page or website usually improves results, which is why I also build websites and landing pages."
  },
  {
    question: "Who will I be working with?",
    answer:
      "Directly with me. There are no account managers or junior staff — the person you speak to is the person running your campaigns."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer }
  }))
};

export default function ServicesPage() {
  return (
    <main id="top">
      <SiteHeader />
      <ServicesPageServices />
      <ServicesPageMore />
      <ServicesPagePricing />
      <ServicesPageFaq />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}

function ServicesPageServices() {
  return (
    <section id="services" className="section-band">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal as="div">
            <p className="eyebrow">Services</p>
            <h1 className="section-title">
              Lead generation that fills your calendar, not just your inbox.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              The main service is Meta ads: strategy, build-out, creative,
              tracking and reporting — built for trades, home improvement and
              premium service businesses across Ireland. When it makes sense, I also add Google Ads, local SEO
              and websites that turn that traffic into booked jobs.
            </p>
          </Reveal>

          <div id="meta-ads" className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {services.map((service, index) => (
              <Reveal
                as="article"
                delay={index * 80}
                className="service-card !p-7 sm:!p-8 lg:!p-9"
                key={service.title}
              >
                <ServiceIcon path={service.icon} />
                <h2 className="mt-6 text-xl font-semibold text-brand-ink">
                  {service.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                  {service.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPageMore() {
  return (
    <section id="more-services" className="section-shell">
      <Reveal as="div" className="max-w-3xl">
        <p className="eyebrow">More ways to get booked</p>
        <h2 className="section-title">
          Get found everywhere your customers are looking.
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          Meta ads put your offer in front of people. Google Ads and local SEO
          catch the people already searching. A fast landing page converts
          both. Add them when they make sense for your business.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {moreServices.map((service, index) => (
          <Reveal
            as="article"
            delay={index * 80}
            className="service-card flex flex-col"
            key={service.id}
          >
            <span id={service.id} className="service-anchor" />
            <ServiceIcon path={service.icon} />
            <h3 className="mt-6 text-2xl font-semibold leading-tight text-brand-ink">
              {service.title}
            </h3>
            <p className="mt-3 text-base font-semibold text-brand-blue">
              {service.headline}
            </p>
            <p className="mt-4 leading-7 text-slate-700">{service.detail}</p>
            <ul className="mt-6 grid gap-3 leading-7 text-slate-700">
              {service.points.map((point) => (
                <li key={point} className="border-t border-brand-line pt-3 text-[0.97rem]">
                  {point}
                </li>
              ))}
            </ul>
            <a className="button button-secondary mt-8 self-start" href="/#contact">
              Ask about {service.title.split(" +")[0].split(" &")[0]}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesPagePricing() {
  return (
    <section id="pricing" className="section-band">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <Reveal as="div">
            <p className="eyebrow">Pricing</p>
            <h2 className="section-title">Start with a free plan.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              No confusing packages. Get a free campaign plan first, then one
              focused offer to run it. Google Ads, SEO and website work is
              scoped on the same call.
            </p>
            <Image
              className="mt-8 block aspect-[2/3] w-full rounded-lg border border-brand-line object-cover object-top shadow-soft"
              src="/assets/second-headshot.webp"
              alt="Sean Daly"
              width={900}
              height={1200}
              loading="lazy"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal as="article" className="service-card">
              <p className="eyebrow">Step 1</p>
              <p className="mt-4 text-3xl font-semibold leading-tight text-brand-ink">
                Free Campaign Plan
              </p>
              <ul className="mt-8 grid gap-4 leading-7 text-slate-700">
                {freePlanItems.map((item) => (
                  <li key={item} className="border-b border-brand-line pb-4">
                    {item}
                  </li>
                ))}
              </ul>
              <a className="button button-secondary mt-8" href="/#contact">
                Get My Free Plan
              </a>
            </Reveal>

            <Reveal as="article" delay={80} className="service-card">
              <p className="eyebrow">Step 2</p>
              <p className="mt-4 text-3xl font-semibold leading-tight text-brand-ink">
                Ongoing Campaign Management
              </p>
              <p className="mt-2 text-base font-semibold text-brand-blue">
                Pricing discussed on your Discovery Call
              </p>
              <ul className="mt-8 grid gap-4 leading-7 text-slate-700">
                {pricingItems.map((item) => (
                  <li key={item} className="border-b border-brand-line pb-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-6 text-slate-600">
                You control your own ad spend separately, paid directly to
                Meta. We&apos;ll recommend a realistic starting budget on your
                call.
              </p>
              <a className="button mt-8" href="/#contact">
                Get Started
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPageFaq() {
  return (
    <section id="faq" className="section-shell">
      <Reveal as="div" className="max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Questions, answered.</h2>
      </Reveal>
      <div className="mt-10 grid max-w-3xl gap-4">
        {faqs.map((faq, index) => (
          <Reveal as="div" delay={index * 40} className="faq-item" key={faq.question}>
            <details>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

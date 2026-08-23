import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../components/Reveal";
import { ServiceIcon } from "../components/ServiceIcon";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: {
    absolute:
      "Meta Ads Lead Generation Services — Clare, Limerick & Galway | Daly Growth Media"
  },
  description:
    "Start with a free Meta ads campaign plan, then ongoing lead-gen campaign management for trades, home improvement and premium service businesses across Clare, Limerick, Galway and Munster.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Meta Ads Lead Generation Services — Clare, Limerick & Galway | Daly Growth Media",
    description:
      "Start with a free Meta ads campaign plan, then ongoing lead-gen campaign management for trades, home improvement and premium service businesses across Clare, Limerick, Galway and Munster.",
    url: "/services"
  }
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

const freePlanItems = [
  "Full audit of your current lead generation",
  "Recommended campaign and audience strategy",
  "Realistic budget and cost-per-lead targets",
  "Delivered on a 20-minute call — no obligation"
];

const pricingItems = [
  "One Meta lead-gen campaign managed monthly",
  "One new ad creative produced each month",
  "Monthly performance report — spend vs leads booked",
  "Quarterly content shoot every three months",
  "Full lead tracking setup on your business"
];

export default function ServicesPage() {
  return (
    <main id="top">
      <SiteHeader />
      <ServicesPageServices />
      <ServicesPagePricing />
      <SiteFooter />
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
              The work stays centred on Meta ads: strategy, build-out,
              creative, tracking and reporting — built for trades, home
              improvement and premium service businesses across Clare,
              Limerick, Galway and Munster.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {services.map((service, index) => (
              <Reveal
                as="article"
                delay={index * 80}
                className="service-card !p-7 sm:!p-8 lg:!p-9"
                key={service.title}
              >
                <ServiceIcon path={service.icon} />
                <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                  {service.title}
                </h3>
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

function ServicesPagePricing() {
  return (
    <section id="pricing" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
        <Reveal as="div">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">Start with a free plan.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            No confusing packages. Get a free campaign plan first, then one
            focused offer to run it.
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
    </section>
  );
}

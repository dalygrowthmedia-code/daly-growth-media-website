import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Meta Ads Services | Daly Growth Media" },
  description:
    "One focused Meta ads offer for Irish e-commerce — strategy, creative, tracking and reporting at €300/month."
};

const services = [
  {
    title: "Meta ads management",
    detail:
      "I run your Facebook and Instagram ad account end-to-end — campaign setup, audience targeting, budget management, and ongoing optimisation. One person, one account, full accountability.",
    icon: "M6 18V8l6-4 6 4v10M9 10h6M9 14h6"
  },
  {
    title: "Campaign strategy and setup",
    detail:
      "Before any spend goes live, I build the account structure correctly — pixel verified, tracking confirmed, custom conversions set, audiences built. No guesswork from day one.",
    icon: "M5 17l5-5 3 3 6-8M5 7h6M5 11h3"
  },
  {
    title: "Creative direction",
    detail:
      "I brief, review and iterate on ad creative based on what the data shows. Strong creative is the single biggest lever in Meta performance — it gets treated that way.",
    icon: "M7 7h10v10H7zM10 4v4M14 4v4M10 16v4M14 16v4"
  },
  {
    title: "Optimisation and reporting",
    detail:
      "Every month you get a plain-English report — what spent, what returned, what we're changing and why. No vanity metrics, no agency fluff.",
    icon: "M5 18h14M7 15v-4M12 15V6M17 15V9"
  }
];

const pricingItems = [
  "One Meta ads campaign managed monthly",
  "One new ad creative produced each month",
  "Monthly performance report — spend vs return",
  "Quarterly content shoot every three months",
  "Full tracking setup on your store"
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
          <div className="reveal">
            <p className="eyebrow">Services</p>
            <h2 className="section-title">
              Paid social support without pretending to do everything.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              The work stays centred on Meta ads: strategy, build-out, creative
              learning, optimisation and reporting.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {services.map((service) => (
              <article
                className="service-card reveal !p-7 sm:!p-8 lg:!p-9"
                key={service.title}
              >
                <ServiceIcon path={service.icon} />
                <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-700">
                  {service.detail}
                </p>
              </article>
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
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="reveal">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">One Simple Plan</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            No confusing packages. One focused offer.
          </p>
          <Image
            className="mt-8 block h-[clamp(18rem,34vw,28rem)] w-full rounded-lg border border-brand-line object-cover object-[center_18%] shadow-soft"
            src="/assets/second-headshot.webp"
            alt="Sean Daly"
            width={900}
            height={1200}
            loading="lazy"
            sizes="(min-width: 1024px) 34vw, 100vw"
          />
        </div>

        <article className="service-card reveal">
          <p className="eyebrow">THE OFFER</p>
          <p className="mt-4 text-5xl font-semibold leading-none text-brand-ink">
            €300/month
          </p>
          <ul className="mt-8 grid gap-4 leading-7 text-slate-700">
            {pricingItems.map((item) => (
              <li key={item} className="border-b border-brand-line pb-4">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm leading-6 text-slate-600">
            You control your own ad spend separately, paid directly to Meta.
            Most clients start with €10-15 per day.
          </p>
          <a className="button mt-8" href="/#contact">
            Get Started — It&apos;s Free To Talk
          </a>
        </article>
      </div>
    </section>
  );
}

function ServiceIcon({ path }: { path: string }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d={path}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </span>
  );
}

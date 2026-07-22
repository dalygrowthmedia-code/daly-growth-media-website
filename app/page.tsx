import type { Metadata } from "next";
import { AchievementsAccordion } from "./components/AchievementsAccordion";
import { AnimatedNumber } from "./components/AnimatedNumber";
import { ContactForm } from "./components/ContactForm";
import { LogoBoomIntro } from "./components/LogoBoomIntro";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Meta Ads for Irish E-Commerce | Daly Growth Media" },
  description:
    "Trackable Facebook and Instagram ad campaigns for Irish e-commerce stores. See exactly what every euro returns in actual sales.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Meta Ads for Irish E-Commerce | Daly Growth Media",
    description:
      "Trackable Facebook and Instagram ad campaigns for Irish e-commerce stores. See exactly what every euro returns in actual sales.",
    url: "/"
  }
};

const achievements = [
  {
    label: "Patch x OpenAI Young Builders Week",
    detail:
      "Selected for the invite-only Patch x OpenAI Young Builders Week at Dogpatch Labs, Dublin — five days building AI-powered projects alongside ambitious teenagers from across Ireland.",
    image: "/assets/achievement-patch.webp",
    alt: "Sean Daly speaking at Patch x OpenAI Young Builders Week"
  },
  {
    label: "National Student Enterprise — Sales & Marketing Award",
    detail:
      "Won the Sales and Marketing Award at the National Student Enterprise Programme, competing against businesses from across Ireland.",
    image: "/assets/achievement-all-ireland.webp",
    alt: "Sean Daly at the National Student Enterprise Programme"
  },
  {
    label: "Clare Minor Hurling Panel",
    detail:
      "Selected for the Clare Minor Hurling panel while running a business full-time at 16.",
    image: "/assets/achievement-hurling.webp",
    alt: "Sean Daly playing hurling"
  }
];

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const stats: StatItem[] = [
  {
    value: 20,
    suffix: "+",
    label: "Businesses worked with across JSU Marketing"
  },
  {
    value: 9,
    suffix: " months",
    label: "Running marketing businesses since age 15"
  }
];

const caseStudyStats: StatItem[] = [
  { value: 230.64, prefix: "€", decimals: 2, label: "Total ad spend" },
  { value: 25, label: "Purchases" },
  { value: 4.69, decimals: 2, label: "ROAS" },
  { value: 9.23, prefix: "€", decimals: 2, label: "Cost per purchase" }
];

export default function Home() {
  return (
    <main id="top">
      <LogoBoomIntro />
      <SiteHeader />
      <HomeHero />
      <HomeResults />
      <HomeContact />
      <SiteFooter />
    </main>
  );
}

function HomeHero() {
  return (
    <section className="hero-section section-shell pb-16 pt-8 sm:pt-10 lg:pb-24 lg:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="hero-copy reveal max-w-3xl">
          <p className="eyebrow">Sean Daly | Meta ads specialist</p>
          <h1 className="hero-heading">
            <span>Meta Ads That Pay</span>
            <span className="hero-heading-soft">For Themselves</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            I run trackable Facebook and Instagram campaigns for Irish
            e-commerce stores — so you can see exactly what every euro returns
            in actual sales. No guesswork. No vanity metrics.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button" href="#contact">
              Book a call
            </a>
            <a className="button button-secondary" href="/services">
              See services
            </a>
          </div>
        </div>

        <aside className="reveal panel-offset" aria-label="Daly Growth Media photo">
          <div className="hero-logo" aria-hidden="true" />
        </aside>
      </div>
    </section>
  );
}

function HomeResults() {
  return (
    <section id="results" className="section-shell">
      <div className="reveal max-w-3xl">
        <p className="eyebrow">Achievements / results</p>
        <h2 className="section-title">
          Proof points from the journey so far.
        </h2>
      </div>
      <AchievementsAccordion achievements={achievements} />

      <div className="mt-12 grid gap-6 border-y border-brand-line py-8 sm:grid-cols-2 sm:gap-0">
        {stats.map((stat) => (
          <div
            className="px-0 sm:border-r sm:border-brand-line sm:px-8 sm:last:border-r-0"
            key={stat.label}
          >
            <p className="text-4xl font-semibold leading-tight text-brand-ink">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <article className="stat-card reveal mt-12">
        <div className="achievement-copy">
          <p className="eyebrow">Case study</p>
          <p className="mt-2 text-2xl font-semibold text-brand-ink">
            GA Sports — All Ireland Final Sale Campaign
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            A two-week Meta ads campaign timed around the All Ireland Final,
            turning €230.64 in ad spend into €1,081.31 of purchases across
            92,967 impressions — settling at a 4.69–4.80 ROAS once the full
            two weeks of data confirmed.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {caseStudyStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-brand-ink">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function HomeContact() {
  return (
    <section id="contact" className="section-band">
      <div className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="reveal">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Ready to talk through the account?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Send a note with where the brand is at, what you sell and what
              you want Meta ads to do next.
            </p>
            <div className="mt-9 space-y-5 text-base text-slate-700">
              <p>
                <span className="contact-label">Email</span>
                <a className="contact-link" href="mailto:sean@dalygrowthmedia.com">
                  sean@dalygrowthmedia.com
                </a>
              </p>
              <p>
                <span className="contact-label">Location</span>
                Co. Clare, Ireland
              </p>
            </div>
            <a
              className="button button-secondary mt-8"
              href="https://wa.me/353873792059?text=Hi%20Sean%2C%20I%27d%20like%20to%20talk%20about%20Meta%20ads%20for%20my%20store."
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

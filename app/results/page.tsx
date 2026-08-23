import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Lead Generation Results — Clare, Limerick & Galway | Daly Growth Media" },
  description:
    "Proof points from Sean Daly's marketing journey — awards, campaigns and real lead-gen results for trades and service businesses across Clare, Limerick, Galway and Munster.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: "Lead Generation Results — Clare, Limerick & Galway | Daly Growth Media",
    description:
      "Proof points from Sean Daly's marketing journey — awards, campaigns and real lead-gen results for trades and service businesses across Clare, Limerick, Galway and Munster.",
    url: "/results"
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
  { value: 71, label: "Total Leads" },
  { value: 757.79, prefix: "€", decimals: 2, label: "Total Spend" },
  { value: 50000, prefix: "€", suffix: "+", label: "Generated" }
];

export default function ResultsPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section id="results" className="section-shell">
        <Reveal as="div" className="max-w-3xl">
          <p className="eyebrow">Achievements / results</p>
          <h1 className="section-title">
            Proof points from the journey so far.
          </h1>
        </Reveal>

        <Reveal as="div" delay={80} className="max-w-3xl mt-16">
          <p className="eyebrow">Case Study</p>
          <h2 className="section-title">
            71 Leads. €757.79 Spend. Real Jobs Booked.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Home Improvement &amp; Roofing Services client
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 border-y border-brand-line py-8 sm:grid-cols-3 sm:gap-0">
          {caseStudyStats.map((stat, index) => (
            <Reveal
              as="div"
              delay={index * 80}
              className="px-0 sm:border-r sm:border-brand-line sm:px-8 sm:last:border-r-0"
              key={stat.label}
            >
              <p className="text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="article" delay={160} className="testimonial-card mt-10">
          <svg className="testimonial-quote-mark" viewBox="0 0 32 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M9.6 24c-2.7 0-4.8-.9-6.4-2.7C1.6 19.4.8 17 .8 14c0-3.2.9-6.1 2.7-8.7C5.3 2.7 7.9.9 11.2 0l1.6 3.2c-2.1.8-3.7 1.9-4.8 3.4-1.1 1.4-1.7 3-1.8 4.8.6-.3 1.3-.5 2.1-.5 1.8 0 3.3.6 4.5 1.8 1.2 1.2 1.8 2.7 1.8 4.5 0 1.9-.6 3.4-1.9 4.7-1.2 1.3-2.8 2.1-4.7 2.1zm18 0c-2.7 0-4.8-.9-6.4-2.7-1.6-1.9-2.4-4.3-2.4-7.3 0-3.2.9-6.1 2.7-8.7C23.3 2.7 25.9.9 29.2 0l1.6 3.2c-2.1.8-3.7 1.9-4.8 3.4-1.1 1.4-1.7 3-1.8 4.8.6-.3 1.3-.5 2.1-.5 1.8 0 3.3.6 4.5 1.8 1.2 1.2 1.8 2.7 1.8 4.5 0 1.9-.6 3.4-1.9 4.7-1.2 1.3-2.8 2.1-4.7 2.1z"
            />
          </svg>
          <p className="testimonial-quote">
            Since working with Daly Growth Media, the leads coming through
            their Meta ad campaigns have turned into real, completed jobs for
            us — over €50,000 worth of work generated directly from the ads.
            The process was simple, communication was clear throughout, and
            unlike other marketing we&apos;ve tried, we could actually see
            where the results were coming from.
          </p>
          <p className="testimonial-attribution">
            &mdash; Home Improvement &amp; Roofing Services Client
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Reveal
              as="article"
              delay={index * 80}
              className="stat-card"
              key={achievement.label}
            >
              <Image
                className="achievement-image"
                src={achievement.image}
                alt={achievement.alt}
                width={1200}
                height={900}
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="achievement-copy">
                <p className="text-3xl font-semibold text-brand-ink">
                  {achievement.label}
                </p>
                <p className="mt-5 leading-7 text-slate-700">
                  {achievement.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-y border-brand-line py-8 sm:grid-cols-2 sm:gap-0">
          {stats.map((stat) => (
            <div
              className="px-0 sm:border-r sm:border-brand-line sm:px-8 sm:last:border-r-0"
              key={stat.label}
            >
              <p className="text-4xl font-semibold leading-tight text-brand-ink">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-600">
          Also work with select ecommerce brands — a two-week Meta ads
          campaign for a sports retailer turned €230.64 in ad spend into
          €1,081.31 of purchases (4.69&ndash;4.80 ROAS).
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}

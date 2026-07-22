import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Results & Achievements | Daly Growth Media" },
  description:
    "Proof points from Sean Daly's marketing journey — awards, campaigns and real ad data.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: "Results & Achievements | Daly Growth Media",
    description:
      "Proof points from Sean Daly's marketing journey — awards, campaigns and real ad data.",
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
  { value: 230.64, prefix: "€", decimals: 2, label: "Total ad spend" },
  { value: 25, label: "Purchases" },
  { value: 4.69, decimals: 2, label: "ROAS" },
  { value: 9.23, prefix: "€", decimals: 2, label: "Cost per purchase" }
];

export default function ResultsPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section id="results" className="section-shell">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Achievements / results</p>
          <h1 className="section-title">
            Proof points from the journey so far.
          </h1>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {achievements.map((achievement) => (
            <article className="stat-card reveal" key={achievement.label}>
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
            </article>
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
      <SiteFooter />
    </main>
  );
}

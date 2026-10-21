import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { CaseStudySlider } from "../components/CaseStudies";
import { Reveal } from "../components/Reveal";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ogImages } from "../seo";

export const metadata: Metadata = {
  title: { absolute: "Lead Generation Results Across Ireland | Daly Growth Media" },
  description:
    "Real Meta ads results for Irish trades: 102 leads and €55,000 in job value in one month. See case studies, Google reviews and Sean Daly's achievements.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: "Lead Generation Results Across Ireland | Daly Growth Media",
    description:
      "Real Meta ads results for Irish trades: 102 leads and €55,000 in job value in one month. See case studies, Google reviews and Sean Daly's achievements.",
    url: "/results",
    images: ogImages
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
    value: 30,
    suffix: "+",
    label: "SMEs worked with across Ireland"
  },
  {
    value: 1,
    suffix: "+ year",
    label: "Of experience running marketing for businesses"
  }
];

export default function ResultsPage() {
  return (
    <main id="top">
      <SiteHeader />
      <Breadcrumbs name="Results" path="/results" />
      <section id="results" className="section-shell">
        <Reveal as="div" className="max-w-3xl">
          <p className="eyebrow">Achievements / results</p>
          <h1 className="section-title">
            Proof points from the journey so far.
          </h1>
        </Reveal>

        <div className="mt-16">
          <CaseStudySlider />
        </div>

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

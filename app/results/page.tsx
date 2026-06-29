import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Results & Achievements | Daly Growth Media" },
  description:
    "Proof points from Sean Daly's marketing journey — awards, campaigns and real ad data."
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

const stats = [
  {
    value: "20+",
    label: "Businesses worked with across JSU Marketing"
  },
  {
    value: "3.39%",
    label: "CTR on first Meta ads test (industry average: 1–2%)"
  },
  {
    value: "9 months",
    label: "Running marketing businesses since age 15"
  }
];

export default function ResultsPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section id="results" className="section-shell">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Achievements / results</p>
          <h2 className="section-title">
            Proof points from the journey so far.
          </h2>
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

        <div className="mt-12 grid gap-6 border-y border-brand-line py-8 md:grid-cols-3 md:gap-0">
          {stats.map((stat) => (
            <div
              className="px-0 md:border-r md:border-brand-line md:px-8 md:last:border-r-0"
              key={stat.value}
            >
              <p className="text-4xl font-semibold leading-tight text-brand-ink">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

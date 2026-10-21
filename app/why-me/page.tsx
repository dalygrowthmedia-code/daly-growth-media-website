import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ogImages } from "../seo";

export const metadata: Metadata = {
  title: { absolute: "Why Work With Me | Daly Growth Media" },
  description:
    "Creative-led Meta ads lead generation with full tracking for trades and service businesses across Ireland. One person, full accountability, no agency handoff.",
  alternates: { canonical: "/why-me" },
  openGraph: {
    title: "Why Work With Me | Daly Growth Media",
    description:
      "Creative-led Meta ads lead generation with full tracking for trades and service businesses across Ireland. One person, full accountability, no agency handoff.",
    url: "/why-me",
    images: ogImages
  }
};

const points = [
  {
    title: "You deal with me directly",
    detail:
      "No account managers, no handoffs, no junior staff touching your account. The person you speak to is the person running your campaigns."
  },
  {
    title: "Creative built from research, not templates",
    detail:
      "I study what's actually working in your niche — the hooks, the formats, the scroll-stoppers — and build from that. No generic ads. No recycled formats."
  },
  {
    title: "Every euro tracked back to booked jobs",
    detail:
      "Every campaign is built around one number — cost per qualified lead. You'll know exactly what your ads returned. Not estimated. Real leads, real jobs booked."
  }
];

export default function WhyMePage() {
  return (
    <main id="top">
      <SiteHeader />
      <section id="why" className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal as="div">
            <p className="eyebrow">Why work with me</p>
            <h1 className="section-title">
              Creative that stops the scroll. Tracking that proves the return.
            </h1>
            <figure className="why-me-photo">
              <Image
                src="/assets/sean-daly-innovation-clare.webp"
                alt="Sean Daly, founder of Daly Growth Media, speaking at Innovation Clare in Co. Clare"
                width={1200}
                height={1600}
                sizes="(min-width: 1024px) 28rem, 90vw"
              />
              <figcaption>Speaking at Innovation Clare</figcaption>
            </figure>
          </Reveal>
          <Reveal as="div" delay={100} className="trust-list">
            {points.map((point) => (
              <div className="why-me-point-fade" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

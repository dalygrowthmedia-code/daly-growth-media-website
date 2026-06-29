import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Why Work With Me | Daly Growth Media" },
  description:
    "Creative-led Meta ads with full tracking. One person, full accountability, no agency handoff."
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
    title: "Every euro tracked back to actual sales",
    detail:
      "Every campaign is built around one number — return on ad spend. You'll know exactly what your ads returned. Not estimated. Actual sales."
  }
];

export default function WhyMePage() {
  return (
    <main id="top">
      <SiteHeader />
      <section id="why" className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <p className="eyebrow">Why work with me</p>
            <h2 className="section-title">
              Creative that stops the scroll. Tracking that proves the return.
            </h2>
          </div>
          <div className="reveal trust-list">
            {points.map((point) => (
              <div className="why-me-point-fade" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

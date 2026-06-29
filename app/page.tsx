import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Meta Ads for Irish E-Commerce | Daly Growth Media" },
  description:
    "Trackable Facebook and Instagram ad campaigns for Irish e-commerce stores. See exactly what every euro returns in actual sales."
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

export default function Home() {
  return (
    <main id="top">
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
            <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
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
                <a className="contact-link" href="mailto:dalygrowthmedia@gmail.com">
                  dalygrowthmedia@gmail.com
                </a>
              </p>
              <p>
                <span className="contact-label">Location</span>
                Co. Clare, Ireland
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

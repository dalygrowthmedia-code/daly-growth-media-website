import type { Metadata } from "next";
import { CaseStudySlider } from "./components/CaseStudies";
import { GoogleMapSection, GoogleReviews } from "./components/GoogleReviews";
import { LogoBoomIntro } from "./components/LogoBoomIntro";
import { ProcessVideo } from "./components/ProcessVideo";
import { QualifyingForm } from "./components/QualifyingForm";
import { Reveal } from "./components/Reveal";
import { ServiceIcon } from "./components/ServiceIcon";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { ogImages } from "./seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Meta Ads Lead Generation for Trades in Ireland | Daly Growth Media"
  },
  description:
    "Meta ads that turn ad spend into booked jobs for trades and service businesses across Ireland. Plus Google Ads, SEO and websites. Start with a free plan.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Meta Ads Lead Generation for Trades in Ireland | Daly Growth Media",
    description:
      "Meta ads that turn ad spend into booked jobs for trades and service businesses across Ireland. Plus Google Ads, SEO and websites. Start with a free plan.",
    url: "/",
    images: ogImages
  }
};

const processSteps = [
  {
    title: "Strategy Call",
    detail: "We map your job value, service area and what a qualified lead looks like.",
    icon: "M21 11.5a8.5 8.5 0 01-8.5 8.5c-1.3 0-2.5-.3-3.6-.8L4 21l1.8-4.9A8.5 8.5 0 1121 11.5z"
  },
  {
    title: "Content Shoot",
    detail: "Creative built to stop the scroll — real jobs, real results.",
    icon: "M4 8h3l2-2h6l2 2h3v11H4V8z M12 12.5a3 3 0 100 6 3 3 0 000-6z"
  },
  {
    title: "Campaign Launch",
    detail: "Campaigns go live with tracking wired in from day one.",
    icon: "M12 2c2.5 2 4 5 4 8 0 1.9-.5 3.6-1.4 5L12 22l-2.6-7c-.9-1.4-1.4-3.1-1.4-5 0-3 1.5-6 4-8z M9 15l-3 2M15 15l3 2"
  },
  {
    title: "Tracked Results",
    detail: "A plain-English report — what spent, what came in, what it's worth.",
    icon: "M5 18h14M7 15v-4M12 15V6M17 15V9"
  }
];

export default function Home() {
  return (
    <main id="top">
      <LogoBoomIntro />
      <SiteHeader />
      <HomeHero />
      <CaseStudy />
      <HowItWorks />
      <GoogleReviews />
      <HomeContact />
      <GoogleMapSection />
      <SiteFooter />
    </main>
  );
}

function HomeHero() {
  return (
    <section className="hero-section section-shell pb-16 pt-8 sm:pt-10 lg:pb-24 lg:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <Reveal as="div" className="hero-copy max-w-3xl">
          <p className="eyebrow">
            Meta Ads for Trades &amp; Service Businesses Across Ireland
          </p>
          <h1 className="hero-heading">
            <span className="hero-heading-outline">
              We Turn Ad Spend Into Booked Jobs —{" "}
            </span>
            <span className="hero-heading-fill">See Exactly How Many</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Built for trades, home improvement and premium service
            businesses — with every lead tracked back to the ad that
            produced it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button" href="#contact">
              Book a Free Discovery Call Today
            </a>
            <a className="button button-secondary" href="/services">
              See services
            </a>
          </div>
        </Reveal>

        <Reveal as="aside" delay={120} className="panel-offset" aria-label="Daly Growth Media photo">
          <div className="hero-logo" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section id="case-study" className="section-shell">
      <CaseStudySlider />
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section-band">
      <div className="section-shell">
        <Reveal as="div" className="max-w-3xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-title">
            This <span className="highlight-pop">59 seconds</span> could
            change the direction of your business.
          </h2>
        </Reveal>

        <Reveal as="div" className="mx-auto mt-12 max-w-3xl">
          <ProcessVideo
            src="/assets/video/how-it-works.mp4"
            poster="/assets/video/how-it-works-poster.jpg"
            durationLabel="0:59"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal as="article" delay={index * 80} className="service-card" key={step.title}>
              <ServiceIcon path={step.icon} />
              <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-700">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  return (
    <section id="contact" className="section-band">
      <div className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal as="div">
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title">Let&apos;s see if we&apos;re a fit.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Tell us about your business — we&apos;ll be in touch to
              schedule your call.
            </p>
            <div className="mt-9 space-y-5 text-base text-slate-700">
              <p>
                <span className="contact-label">Email</span>
                <a className="contact-link" href="mailto:sean@dalygrowthmedia.com">
                  sean@dalygrowthmedia.com
                </a>
              </p>
              <p>
                <span className="contact-label">Phone</span>
                <a className="contact-link" href="tel:+353873792059">
                  087 379 2059
                </a>
              </p>
              <p>
                <span className="contact-label">Location</span>
                67 O&apos;Connell Street, Clonrad Beg, Ennis, Co. Clare, V95 KT26
              </p>
            </div>
            <a
              className="button button-secondary mt-8"
              href="https://wa.me/353873792059?text=Hi%20Sean%2C%20I%27d%20like%20to%20talk%20about%20Meta%20ads%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </Reveal>

          <Reveal as="div" delay={100}>
            <QualifyingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

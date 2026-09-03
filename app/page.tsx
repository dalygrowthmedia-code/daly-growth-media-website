import type { Metadata } from "next";
import { AnimatedNumber } from "./components/AnimatedNumber";
import { LogoBoomIntro } from "./components/LogoBoomIntro";
import { ProcessVideo } from "./components/ProcessVideo";
import { QualifyingForm } from "./components/QualifyingForm";
import { Reveal } from "./components/Reveal";
import { ServiceIcon } from "./components/ServiceIcon";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: {
    absolute:
      "Meta Ads Lead Generation for Trades in Clare, Limerick & Galway | Daly Growth Media"
  },
  description:
    "We turn ad spend into booked jobs — Meta ad campaigns built for trades, home improvement and premium service businesses across Clare, Limerick, Galway and Munster.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Meta Ads Lead Generation for Trades in Clare, Limerick & Galway | Daly Growth Media",
    description:
      "We turn ad spend into booked jobs — Meta ad campaigns built for trades, home improvement and premium service businesses across Clare, Limerick, Galway and Munster.",
    url: "/"
  }
};

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const caseStudyStats: StatItem[] = [
  { value: 71, label: "Total Leads" },
  { value: 757.79, prefix: "€", decimals: 2, label: "Total Spend" },
  { value: 50000, prefix: "€", suffix: "+", label: "Generated" }
];

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
      <HomeContact />
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
            Meta Ads for Trades &amp; Service Businesses in Clare, Limerick
            &amp; Galway
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
      <Reveal as="div" className="max-w-3xl">
        <p className="eyebrow">Case Study</p>
        <h2 className="section-title">
          71 Leads. €757.79 Spend. Real Jobs Booked.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Home Improvement &amp; Roofing Services client
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 border-y border-brand-line py-8 sm:grid-cols-3 sm:gap-0">
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

      <Reveal as="article" delay={160} className="testimonial-card mt-12">
        <svg className="testimonial-quote-mark" viewBox="0 0 32 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M9.6 24c-2.7 0-4.8-.9-6.4-2.7C1.6 19.4.8 17 .8 14c0-3.2.9-6.1 2.7-8.7C5.3 2.7 7.9.9 11.2 0l1.6 3.2c-2.1.8-3.7 1.9-4.8 3.4-1.1 1.4-1.7 3-1.8 4.8.6-.3 1.3-.5 2.1-.5 1.8 0 3.3.6 4.5 1.8 1.2 1.2 1.8 2.7 1.8 4.5 0 1.9-.6 3.4-1.9 4.7-1.2 1.3-2.8 2.1-4.7 2.1zm18 0c-2.7 0-4.8-.9-6.4-2.7-1.6-1.9-2.4-4.3-2.4-7.3 0-3.2.9-6.1 2.7-8.7C23.3 2.7 25.9.9 29.2 0l1.6 3.2c-2.1.8-3.7 1.9-4.8 3.4-1.1 1.4-1.7 3-1.8 4.8.6-.3 1.3-.5 2.1-.5 1.8 0 3.3.6 4.5 1.8 1.2 1.2 1.8 2.7 1.8 4.5 0 1.9-.6 3.4-1.9 4.7-1.2 1.3-2.8 2.1-4.7 2.1z"
          />
        </svg>
        <p className="testimonial-quote">
          Since working with Daly Growth Media, the leads coming through their
          Meta ad campaigns have turned into real, completed jobs for us —
          over €50,000 worth of work generated directly from the ads. The
          process was simple, communication was clear throughout, and unlike
          other marketing we&apos;ve tried, we could actually see where the
          results were coming from.
        </p>
        <p className="testimonial-attribution">
          &mdash; Home Improvement &amp; Roofing Services Client
        </p>
      </Reveal>
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
            This 59 seconds could change the direction of your business.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal as="div">
            <ProcessVideo
              src="/assets/video/how-it-works.mp4"
              poster="/assets/video/how-it-works-poster.jpg"
              durationLabel="0:59"
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
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
                <span className="contact-label">Location</span>
                Co. Clare, Ireland
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

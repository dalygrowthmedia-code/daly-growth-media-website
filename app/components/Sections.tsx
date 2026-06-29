import Image from "next/image";
import { ContactForm } from "./ContactForm";

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
    detail: "Made the Clare Minor Hurling panel in 2026.",
    image: "/assets/achievement-hurling.webp",
    alt: "Sean Daly playing hurling"
  }
];

const services = [
  {
    title: "Meta ads management",
    detail:
      "I run your Facebook and Instagram ad account end-to-end — campaign setup, audience targeting, budget management, and ongoing optimisation. One person, one account, full accountability.",
    icon: "M6 18V8l6-4 6 4v10M9 10h6M9 14h6"
  },
  {
    title: "Campaign strategy and setup",
    detail:
      "Before any spend goes live, I build the account structure correctly — pixel verified, tracking confirmed, custom conversions set, audiences built. No guesswork from day one.",
    icon: "M5 17l5-5 3 3 6-8M5 7h6M5 11h3"
  },
  {
    title: "Creative direction",
    detail:
      "I brief, review and iterate on ad creative based on what the data shows. Strong creative is the single biggest lever in Meta performance — it gets treated that way.",
    icon: "M7 7h10v10H7zM10 4v4M14 4v4M10 16v4M14 16v4"
  },
  {
    title: "Optimisation and reporting",
    detail:
      "Every month you get a plain-English report — what spent, what returned, what we're changing and why. No vanity metrics, no agency fluff.",
    icon: "M5 18h14M7 15v-4M12 15V6M17 15V9"
  }
];

export function Hero() {
  return (
    <section className="hero-section section-shell pb-16 pt-16 sm:pt-20 lg:pb-24 lg:pt-28">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
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

        <aside className="reveal panel-offset" aria-label="Daly Growth Media summary">
          <div className="hero-photo-grid" aria-hidden="true">
            <div className="hero-logo" />
            <div className="hero-logo hero-logo-secondary" />
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
            One person, accountable work
          </p>
          <p className="mt-4 text-2xl font-semibold leading-tight text-brand-ink">
            You deal with Sean directly from strategy through to reporting.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-brand-line pt-6 text-sm text-slate-700">
            <span>Paid social only</span>
            <span>Irish market focus</span>
            <span>E-commerce campaigns</span>
            <span>Plain-English calls</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="section-band">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal photo-stack" aria-label="Photos of Sean Daly">
            <figure>
              <div
                className="photo-slot photo-one"
                role="img"
                aria-label="Portrait photo of Sean Daly"
              />
              <figcaption>Sean Daly</figcaption>
            </figure>
            <figure className="photo-offset">
              <div
                className="photo-slot photo-two"
                role="img"
                aria-label="Working photo of Sean Daly"
              />
              <figcaption>In studio at Clare FM</figcaption>
            </figure>
          </div>

          <div className="reveal">
            <p className="eyebrow">About / my story</p>
            <h2 className="section-title">
              Local, direct and focused on the work that moves the account.
            </h2>
            <div className="story-placeholder mt-8">
              <p>
                I&apos;m Sean Daly, from Ennis, Co. Clare. I&apos;m 16 and
                I&apos;ve been running marketing businesses since I was 15.
              </p>
              <p>
                I co-founded JSU Marketing, where over nine months we worked
                with nearly 20 businesses across Clare and beyond on websites,
                social media, and content. JSU won the County Clare Student
                Enterprise Competition and took the Sales and Marketing Award at
                the National Student Enterprise Programme, competing against
                businesses from all over Ireland. The business was also featured
                on Clare FM.
              </p>
              <p>
                Earlier this year I was selected for the Patch x OpenAI Young
                Builders Week — a five-day invite-only programme at Dogpatch
                Labs in Dublin for ambitious teenagers from across Ireland
                building with AI tools.
              </p>
              <p>I also made the Clare Minor Hurling panel this year.</p>
              <p>
                I&apos;m now focused entirely on one thing: running trackable
                Meta ads for Irish e-commerce stores. One offer, one focus,
                results you can actually see.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Results() {
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
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section-band">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="reveal">
            <p className="eyebrow">Services</p>
            <h2 className="section-title">
              Paid social support without pretending to do everything.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              The work stays centred on Meta ads: strategy, build-out, creative
              learning, optimisation and reporting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <ServiceIcon path={service.icon} />
                <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-700">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const items = [
    "One Meta ads campaign managed monthly",
    "One new ad creative produced each month",
    "Monthly performance report — spend vs return",
    "Quarterly content shoot every three months",
    "Full tracking setup on your store"
  ];

  return (
    <section id="pricing" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="reveal">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">One Simple Plan</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            No confusing packages. One focused offer.
          </p>
          <Image
            className="mt-8 block w-full rounded-lg border border-brand-line object-cover shadow-soft"
            src="/assets/second-headshot.webp"
            alt="Sean Daly"
            width={900}
            height={1200}
            loading="lazy"
            sizes="(min-width: 1024px) 34vw, 100vw"
          />
        </div>

        <article className="service-card reveal">
          <p className="eyebrow">Starter</p>
          <p className="mt-4 text-5xl font-semibold leading-none text-brand-ink">
            €300/month
          </p>
          <ul className="mt-8 grid gap-4 leading-7 text-slate-700">
            {items.map((item) => (
              <li key={item} className="border-b border-brand-line pb-4">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm leading-6 text-slate-600">
            You control your own ad spend separately, paid directly to Meta.
            Most clients start with €10-15 per day.
          </p>
          <a className="button mt-8" href="/#contact">
            Get Started — It&apos;s Free To Talk
          </a>
        </article>
      </div>
    </section>
  );
}

function ServiceIcon({ path }: { path: string }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d={path}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </span>
  );
}

export function WhyWorkWithMe() {
  return (
    <section id="why" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal">
          <p className="eyebrow">Why work with me</p>
          <h2 className="section-title">
            A senior pair of hands, not an agency handoff.
          </h2>
        </div>
        <div className="reveal trust-list">
          <div>
            <h3>You deal with me directly</h3>
            <p>
              No account-manager runaround. The person on the call is the
              person inside the ad account.
            </p>
          </div>
          <div>
            <h3>Built for Irish e-commerce</h3>
            <p>
              Campaign decisions are grounded in how Irish brands actually
              sell, fulfil and talk to customers.
            </p>
          </div>
          <div>
            <h3>Clear, practical communication</h3>
            <p>
              You get straight answers on what is working, what is not, and
              what should happen next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
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

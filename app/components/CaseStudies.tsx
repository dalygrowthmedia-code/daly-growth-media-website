"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";
import { Reveal } from "./Reveal";

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  stats: StatItem[];
  points?: string[];
  quote?: string;
  attribution?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "tar-and-chip",
    title: "102 Leads. €807.08 Spend. €55,000 in Job Value.",
    client: "Tar & chip driveway contractor — first month working together",
    stats: [
      { value: 102, label: "Leads in month one" },
      { value: 7.91, prefix: "€", decimals: 2, label: "Cost per lead" },
      { value: 55000, prefix: "€", label: "Job value generated" }
    ],
    points: [
      "A Facebook and Instagram lead-form campaign built around one service: tar & chip driveways.",
      "€807.08 of ad spend on a €30 daily budget produced 102 leads at €7.91 each.",
      "€55,000 in job value generated for the client inside the first month."
    ]
  },
  {
    id: "roofing",
    title: "71 Leads. €757.79 Spend. Real Jobs Booked.",
    client: "Home Improvement & Roofing Services client",
    stats: [
      { value: 71, label: "Total Leads" },
      { value: 757.79, prefix: "€", decimals: 2, label: "Total Spend" },
      { value: 50000, prefix: "€", suffix: "+", label: "Generated" }
    ],
    quote:
      "Since working with Daly Growth Media, the leads coming through their Meta ad campaigns have turned into real, completed jobs for us — over €50,000 worth of work generated directly from the ads. The process was simple, communication was clear throughout, and unlike other marketing we've tried, we could actually see where the results were coming from.",
    attribution: "Home Improvement & Roofing Services Client"
  }
];

export function CaseStudySlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      const left = track.scrollLeft + track.offsetLeft;
      let nearest = 0;
      slides.forEach((slide, index) => {
        if (
          Math.abs(slide.offsetLeft - left) <
          Math.abs(slides[nearest].offsetLeft - left)
        ) {
          nearest = index;
        }
      });
      setActive(nearest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const last = caseStudies.length - 1;

  return (
    <Reveal as="div" className="case-slider">
      <div className="case-slider-head">
        <div>
          <p className="eyebrow">Case studies</p>
          <h2 className="case-slider-title">Real campaigns. Real jobs.</h2>
        </div>
        <div className="case-nav" role="group" aria-label="Case study navigation">
          <button
            type="button"
            className="case-nav-button"
            aria-label="Previous case study"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <div className="case-dots">
            {caseStudies.map((study, index) => (
              <button
                type="button"
                key={study.id}
                data-sound="tick"
                className={`case-dot ${index === active ? "case-dot-active" : ""}`}
                aria-label={`Show case study ${index + 1} of ${caseStudies.length}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="case-nav-button"
            aria-label="Next case study"
            disabled={active === last}
            onClick={() => goTo(active + 1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="case-track" ref={trackRef} tabIndex={0} aria-label="Case studies">
        {caseStudies.map((study, index) => (
          <article
            className="case-slide"
            key={study.id}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${caseStudies.length}`}
          >
            <h3 className="case-slide-title">{study.title}</h3>
            <p className="case-slide-client">{study.client}</p>

            <div className="case-stats">
              {study.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="case-stat-value">
                    <AnimatedNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="case-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            {study.points ? (
              <ul className="case-points">
                {study.points.map((point) => (
                  <li key={point}>
                    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                      <circle cx="12" cy="12" r="11" fill="rgba(73,185,252,0.18)" />
                      <path
                        d="M7 12.5l3.2 3.2L17 8.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {study.quote ? (
              <figure className="case-quote">
                <blockquote>{study.quote}</blockquote>
                <figcaption>&mdash; {study.attribution}</figcaption>
              </figure>
            ) : null}
          </article>
        ))}
      </div>
    </Reveal>
  );
}

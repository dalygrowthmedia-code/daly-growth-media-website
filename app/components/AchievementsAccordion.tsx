"use client";

import Image from "next/image";
import { useState } from "react";

interface Achievement {
  label: string;
  detail: string;
  image: string;
  alt: string;
}

export function AchievementsAccordion({
  achievements
}: {
  achievements: Achievement[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-12">
      <div className="grid gap-4 md:grid-cols-3">
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
              <div
                className={`achievement-detail-wrap ${
                  isExpanded ? "achievement-detail-wrap-open" : ""
                }`}
              >
                <div className="achievement-detail-inner">
                  <p className="mt-5 leading-7 text-slate-700">
                    {achievement.detail}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="achievements-toggle"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((current) => !current)}
      >
        {isExpanded ? "Show less" : "Read the full story"}
        <svg
          className={`achievements-toggle-icon ${
            isExpanded ? "achievements-toggle-icon-open" : ""
          }`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}

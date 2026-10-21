"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { haptic, playSound } from "./sound";
import type { GoogleReview } from "../config/google-business";
import { ReviewStars } from "./ReviewStars";

const avatarColours = ["#e8472b", "#5c6bc0", "#1b8a6b", "#a0522d"];

export function ReviewsSlider({
  reviews,
  profileUrl
}: {
  reviews: GoogleReview[];
  profileUrl: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const hasMounted = useRef(false);

  // A soft tick (and buzz on phones) each time a swipe lands on a new slide.
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    playSound("tick", { onlyIfRunning: true });
    haptic(6);
  }, [active]);
  const [atEnd, setAtEnd] = useState(false);

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
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="reviews-slider">
      <div className="case-nav reviews-nav" role="group" aria-label="Review navigation">
        <button
          type="button"
          className="case-nav-button"
          aria-label="Previous review"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <div className="case-dots">
          {reviews.map((review, index) => (
            <button
              type="button"
              key={`${review.author}-${index}`}
              data-sound="tick"
              className={`case-dot ${index === active ? "case-dot-active" : ""}`}
              aria-label={`Show review ${index + 1} of ${reviews.length}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="case-nav-button"
          aria-label="Next review"
          disabled={atEnd}
          onClick={() => goTo(Math.min(active + 1, reviews.length - 1))}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="review-track" ref={trackRef} tabIndex={0} aria-label="Google reviews">
        {reviews.map((review, index) => (
          <figure className="review-card review-slide" key={`${review.author}-${index}`}>
            <div className="review-card-head">
              <span
                className="review-avatar"
                style={{ background: avatarColours[index % avatarColours.length] }}
                aria-hidden="true"
              >
                {review.author.charAt(0).toUpperCase()}
              </span>
              <div>
                <strong>{review.author}</strong>
                <ReviewStars rating={review.rating} size={16} />
              </div>
              <span className="review-source">Google</span>
            </div>
            <blockquote>{review.text}</blockquote>
            {review.truncated ? (
              <a
                className="review-more"
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full review on Google
              </a>
            ) : null}
            {review.reply ? (
              <div className="review-reply">
                <p className="review-reply-label">Response from the owner</p>
                <p>{review.reply}</p>
              </div>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

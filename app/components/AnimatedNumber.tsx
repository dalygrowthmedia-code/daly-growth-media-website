"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1200
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let reported = false;
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        reported = true;
        if (!entry.isIntersecting || hasAnimated) return;
        hasAnimated = true;

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) {
            frame = requestAnimationFrame(step);
          } else {
            setDisplay(value);
          }
        };
        frame = requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    // If the observer never reports (hidden or paused previews), show the
    // real number instead of leaving it at 0.
    const failsafe = window.setTimeout(() => {
      if (!reported) {
        setDisplay(value);
        observer.disconnect();
      }
    }, 1500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IE");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

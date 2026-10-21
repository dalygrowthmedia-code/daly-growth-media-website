"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isForced, setIsForced] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setIsVisible(true);
      return;
    }

    let reported = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        reported = true;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    // Hidden or paused previews never run the observer — show the content
    // rather than leaving the page blank.
    const failsafe = window.setTimeout(() => {
      if (!reported) {
        setIsForced(true);
        setIsVisible(true);
        observer.disconnect();
      }
    }, 1200);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={["reveal-fade", isVisible ? "reveal-fade-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={
        isForced
          ? { opacity: 1, transform: "none", transition: "none" }
          : { transitionDelay: isVisible ? `${delay}ms` : "0ms" }
      }
    >
      {children}
    </Tag>
  );
}

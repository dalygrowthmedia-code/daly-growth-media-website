"use client";

import { useEffect, useState } from "react";

export function LogoBoomIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    setIsPlaying(true);
    const timer = setTimeout(() => setIsPlaying(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  if (!isPlaying) {
    return null;
  }

  return (
    <div className="logo-boom" aria-hidden="true">
      <span className="logo-boom-bubble" />
      <span className="logo-boom-mark" />
    </div>
  );
}

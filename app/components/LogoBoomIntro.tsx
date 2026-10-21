"use client";

import { useEffect, useState } from "react";
import { playSound, unlockAudio } from "./sound";

// Bubble inflates for 320ms, then bursts — the pop lands on the burst.
const POP_AT_MS = 320;
const TOTAL_MS = 2300;

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

    let popped = false;
    const gestureEvents = ["touchend", "pointerup", "click", "keydown"] as const;

    // Browsers may block audio before any interaction. If so, the pop plays
    // on the visitor's first tap/keypress while the intro is still on screen.
    const onGesture = () => {
      void unlockAudio().then((running) => {
        if (running && !popped) {
          popped = true;
          playSound("pop");
          removeGestureListeners();
        }
      });
    };

    function removeGestureListeners() {
      gestureEvents.forEach((name) =>
        window.removeEventListener(name, onGesture, true)
      );
    }

    const popTimer = setTimeout(() => {
      popped = playSound("pop", { onlyIfRunning: true });
      if (!popped) {
        gestureEvents.forEach((name) =>
          window.addEventListener(name, onGesture, true)
        );
      }
    }, POP_AT_MS);

    const endTimer = setTimeout(() => {
      removeGestureListeners();
      setIsPlaying(false);
    }, TOTAL_MS);

    return () => {
      clearTimeout(popTimer);
      clearTimeout(endTimer);
      removeGestureListeners();
    };
  }, []);

  if (!isPlaying) {
    return null;
  }

  return (
    <div className="logo-boom" aria-hidden="true">
      <span className="logo-boom-glow" />
      <span className="logo-boom-bubble" />
      <span className="logo-boom-ring" />
      <span className="logo-boom-ring logo-boom-ring-late" />
      <span className="logo-boom-mark" />
    </div>
  );
}

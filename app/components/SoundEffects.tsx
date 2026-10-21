"use client";

import { useEffect } from "react";
import { playSound, unlockAudio, type SoundName } from "./sound";

const INTERACTIVE =
  'a[href], button, summary, select, [role="button"], input[type="submit"], input[type="checkbox"], input[type="radio"]';

function isDisabled(el: Element) {
  return (
    (el as HTMLButtonElement).disabled === true ||
    el.getAttribute("aria-disabled") === "true"
  );
}

function soundFor(el: Element): SoundName | null {
  const custom = el.getAttribute("data-sound");
  if (custom === "none") return null;
  if (custom) return custom as SoundName;

  if (el.matches("summary, [aria-expanded]")) {
    // State flips after the press, so the current value is the "before".
    const expanded =
      el.getAttribute("aria-expanded") === "true" ||
      el.parentElement?.hasAttribute("open");
    return expanded ? "toggle-off" : "toggle-on";
  }
  if (el.matches(".button-secondary")) return "click";
  if (el.matches(".button, .process-video-poster")) return "press";
  if (el.matches(".nav-link, select, input")) return "tick";
  return "click";
}

function ripple(el: HTMLElement, event: PointerEvent) {
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--rx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--ry", `${event.clientY - rect.top}px`);
  el.classList.remove("is-rippling");
  // Force a reflow so the animation restarts on rapid clicks.
  void el.offsetWidth;
  el.classList.add("is-rippling");
}

export function SoundEffects() {
  useEffect(() => {
    let lastPointerDown = -Infinity;

    const onPointerDown = (event: PointerEvent) => {
      unlockAudio();
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const el = (event.target as Element | null)?.closest(INTERACTIVE);
      if (!el || isDisabled(el)) return;

      lastPointerDown = event.timeStamp;
      const sound = soundFor(el);
      if (sound) playSound(sound);
      if (el.classList.contains("button")) ripple(el as HTMLElement, event);
    };

    // Keyboard activation (Enter / Space) arrives as a click with detail 0.
    const onClick = (event: MouseEvent) => {
      if (event.detail !== 0 || event.timeStamp - lastPointerDown < 400) return;
      unlockAudio();
      const el = (event.target as Element | null)?.closest(INTERACTIVE);
      if (!el || isDisabled(el)) return;
      const sound = soundFor(el);
      if (sound) playSound(sound);
    };

    // A barely-there tick when a mouse glides over a button.
    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const el = (event.target as Element | null)?.closest(".button");
      if (!el || isDisabled(el)) return;
      if (event.relatedTarget && el.contains(event.relatedTarget as Node)) return;
      playSound("hover", { onlyIfRunning: true });
    };

    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName === "button-ripple") {
        (event.target as HTMLElement).classList.remove("is-rippling");
      }
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true, passive: true });
    document.addEventListener("click", onClick, { capture: true, passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("animationend", onAnimationEnd, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, { capture: true });
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  return null;
}

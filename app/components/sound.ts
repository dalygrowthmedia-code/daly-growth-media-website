// Synthesised UI sounds (Web Audio) — no audio files to download.
// Browsers keep audio locked until the first user gesture, so playback is
// always "best effort" and fails silently.

export type SoundName =
  | "pop"
  | "click"
  | "press"
  | "tick"
  | "hover"
  | "toggle-on"
  | "toggle-off"
  | "success"
  | "error";

const STORAGE_KEY = "dgm-sound-muted";

type WebkitWindow = Window & { webkitAudioContext?: typeof AudioContext };

let ctx: AudioContext | null = null;
let output: AudioNode | null = null;
let noiseBuffer: AudioBuffer | null = null;
let muted = false;
let mutedLoaded = false;
const listeners = new Set<() => void>();
const lastPlayed = new Map<SoundName, number>();

function loadMuted() {
  if (mutedLoaded || typeof window === "undefined") return;
  mutedLoaded = true;
  try {
    muted = window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    muted = false;
  }
}

export function isMuted(): boolean {
  loadMuted();
  return muted;
}

export function setMuted(next: boolean) {
  loadMuted();
  muted = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
  } catch {
    // storage unavailable — the choice just won't persist
  }
  listeners.forEach((listener) => listener());
}

export function subscribeMuted(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (ctx) return ctx;
  const Ctor = window.AudioContext || (window as WebkitWindow).webkitAudioContext;
  if (!Ctor) return null;
  try {
    // iOS Safari 16.4+: play as media so the ring/silent switch doesn't mute UI sounds.
    const session = (navigator as Navigator & { audioSession?: { type: string } }).audioSession;
    if (session) session.type = "playback";
  } catch {
    // unsupported — fine
  }
  try {
    ctx = new Ctor({ latencyHint: "interactive" });
  } catch {
    return null;
  }
  const master = ctx.createGain();
  master.gain.value = 1;
  const limiter = ctx.createDynamicsCompressor();
  limiter.threshold.value = -14;
  limiter.knee.value = 12;
  limiter.ratio.value = 6;
  master.connect(limiter);
  limiter.connect(ctx.destination);
  output = master;
  return ctx;
}

/**
 * Call from inside a user gesture so the browser lets audio start. iOS only
 * counts a finished tap (touchend / click), so this is called on those too.
 * Resolves true once audio is actually running.
 */
export function unlockAudio(): Promise<boolean> {
  const context = getContext();
  if (!context) return Promise.resolve(false);

  // A one-sample silent buffer inside the gesture is what finally unlocks iOS.
  try {
    const silent = context.createBuffer(1, 1, 22050);
    const source = context.createBufferSource();
    source.buffer = silent;
    source.connect(context.destination);
    source.start(0);
  } catch {
    // ignore
  }

  if (context.state === "running") return Promise.resolve(true);
  return context
    .resume()
    .then(() => context.state === "running")
    .catch(() => false);
}

/** Short tap buzz on phones that support it (Android); silently ignored elsewhere. */
export function haptic(ms: number) {
  try {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(ms);
    }
  } catch {
    // ignore
  }
}

export function audioIsRunning(): boolean {
  return Boolean(ctx && ctx.state === "running");
}

function tone(
  c: BaseAudioContext,
  dest: AudioNode,
  t0: number,
  {
    type = "sine",
    from,
    to,
    dur,
    gain,
    attack = 0.004
  }: {
    type?: OscillatorType;
    from: number;
    to?: number;
    dur: number;
    gain: number;
    attack?: number;
  }
) {
  const osc = c.createOscillator();
  const amp = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, t0);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t0 + dur);
  amp.gain.setValueAtTime(0.0001, t0);
  amp.gain.exponentialRampToValueAtTime(gain, t0 + attack);
  amp.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(amp);
  amp.connect(dest);
  osc.start(t0);
  osc.stop(t0 + dur + 0.03);
}

function noiseBurst(
  c: BaseAudioContext,
  dest: AudioNode,
  t0: number,
  {
    freq,
    q = 0.9,
    dur,
    gain,
    filter = "bandpass"
  }: { freq: number; q?: number; dur: number; gain: number; filter?: BiquadFilterType }
) {
  if (!noiseBuffer || noiseBuffer.sampleRate !== c.sampleRate) {
    const length = Math.floor(c.sampleRate * 0.25);
    noiseBuffer = c.createBuffer(1, length, c.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
  }
  const src = c.createBufferSource();
  src.buffer = noiseBuffer;
  const biquad = c.createBiquadFilter();
  biquad.type = filter;
  biquad.frequency.value = freq;
  biquad.Q.value = q;
  const amp = c.createGain();
  amp.gain.setValueAtTime(0.0001, t0);
  amp.gain.exponentialRampToValueAtTime(gain, t0 + 0.002);
  amp.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(biquad);
  biquad.connect(amp);
  amp.connect(dest);
  src.start(t0);
  src.stop(t0 + dur + 0.02);
}

/** Pure synthesis so it can also run against an OfflineAudioContext. */
export function synthesize(
  name: SoundName,
  c: BaseAudioContext,
  dest: AudioNode,
  t0: number
) {
  // Slight random pitch drift keeps repeated clicks from sounding robotic.
  const drift = 0.96 + Math.random() * 0.08;

  switch (name) {
    case "pop":
      // Bubble burst: deep thump + snap + rising sparkle for the logo reveal.
      tone(c, dest, t0, { from: 260, to: 55, dur: 0.22, gain: 1.0 });
      tone(c, dest, t0, { type: "triangle", from: 1400, to: 380, dur: 0.1, gain: 0.55 });
      noiseBurst(c, dest, t0, { freq: 2400, q: 0.6, dur: 0.07, gain: 0.7, filter: "highpass" });
      tone(c, dest, t0 + 0.05, { from: 1318.5, dur: 0.5, gain: 0.2, attack: 0.01 });
      tone(c, dest, t0 + 0.1, { from: 1760, dur: 0.55, gain: 0.18, attack: 0.01 });
      tone(c, dest, t0 + 0.16, { from: 2637, dur: 0.6, gain: 0.12, attack: 0.01 });
      break;
    case "press":
      // Primary buttons: weighty "thock" with a glassy ping on top.
      tone(c, dest, t0, { from: 190 * drift, to: 70, dur: 0.16, gain: 1.0 });
      tone(c, dest, t0, { type: "triangle", from: 760 * drift, to: 340, dur: 0.1, gain: 0.5 });
      tone(c, dest, t0 + 0.02, { from: 1568 * drift, dur: 0.3, gain: 0.22, attack: 0.006 });
      tone(c, dest, t0 + 0.05, { from: 2093 * drift, dur: 0.34, gain: 0.14, attack: 0.006 });
      noiseBurst(c, dest, t0, { freq: 3800, q: 0.7, dur: 0.03, gain: 0.35 });
      break;
    case "click":
      // Secondary buttons and links: crisp, bubbly tap.
      tone(c, dest, t0, { from: 520 * drift, to: 240, dur: 0.1, gain: 0.8 });
      tone(c, dest, t0, { type: "triangle", from: 1900 * drift, to: 900, dur: 0.05, gain: 0.4 });
      tone(c, dest, t0 + 0.015, { from: 1320 * drift, dur: 0.14, gain: 0.14, attack: 0.004 });
      noiseBurst(c, dest, t0, { freq: 4800, q: 0.7, dur: 0.02, gain: 0.3 });
      break;
    case "tick":
      tone(c, dest, t0, { from: 1250 * drift, to: 760, dur: 0.06, gain: 0.6 });
      tone(c, dest, t0, { type: "triangle", from: 2400 * drift, to: 1500, dur: 0.035, gain: 0.2 });
      noiseBurst(c, dest, t0, { freq: 6000, q: 0.7, dur: 0.012, gain: 0.18 });
      break;
    case "hover":
      tone(c, dest, t0, { from: 1900 * drift, to: 1500, dur: 0.045, gain: 0.12 });
      break;
    case "toggle-on":
      tone(c, dest, t0, { from: 660, dur: 0.14, gain: 0.55 });
      tone(c, dest, t0 + 0.07, { from: 990, dur: 0.2, gain: 0.55 });
      break;
    case "toggle-off":
      tone(c, dest, t0, { from: 990, dur: 0.14, gain: 0.55 });
      tone(c, dest, t0 + 0.07, { from: 660, dur: 0.2, gain: 0.55 });
      break;
    case "success":
      // C5 – E5 – G5 – C6 arpeggio.
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const start = t0 + i * 0.09;
        tone(c, dest, start, { from: freq, dur: 0.6, gain: 0.5, attack: 0.008 });
        tone(c, dest, start, { type: "triangle", from: freq * 2, dur: 0.4, gain: 0.12, attack: 0.008 });
      });
      break;
    case "error":
      tone(c, dest, t0, { type: "triangle", from: 200, to: 150, dur: 0.16, gain: 0.6 });
      tone(c, dest, t0 + 0.16, { type: "triangle", from: 175, to: 125, dur: 0.22, gain: 0.6 });
      break;
  }
}

/**
 * Plays a sound if audio is allowed right now. Returns whether it played.
 * `onlyIfRunning` skips queueing behind a still-locked context so a stale
 * sound never fires late.
 */
export function playSound(
  name: SoundName,
  { onlyIfRunning = false }: { onlyIfRunning?: boolean } = {}
): boolean {
  if (typeof window === "undefined" || isMuted()) return false;

  const now = performance.now();
  const last = lastPlayed.get(name) ?? -Infinity;
  if (now - last < (name === "hover" ? 90 : 30)) return false;

  const context = getContext();
  if (!context || !output) return false;
  const dest = output;

  const run = () => {
    lastPlayed.set(name, performance.now());
    synthesize(name, context, dest, context.currentTime + 0.005);
  };

  if (context.state === "running") {
    run();
    return true;
  }
  if (onlyIfRunning) return false;

  // Audio is still locked (first tap on iOS): queue it and play when the
  // finished tap unlocks audio — but never play a stale sound late.
  const requestedAt = performance.now();
  context
    .resume()
    .then(() => {
      if (context.state === "running" && performance.now() - requestedAt < 800) run();
    })
    .catch(() => {});
  return false;
}

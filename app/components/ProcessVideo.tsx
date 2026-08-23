"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ProcessVideoProps {
  src: string;
  poster: string;
  durationLabel: string;
}

export function ProcessVideo({ src, poster, durationLabel }: ProcessVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setIsPlaying(true);
    videoRef.current?.play().catch(() => {});
  }

  return (
    <div className="process-video-wrap">
      <video
        ref={videoRef}
        className="process-video"
        controls={isPlaying}
        playsInline
        preload="none"
        poster={poster}
        style={{ display: isPlaying ? "block" : "none" }}
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" srcLang="en" label="English" default />
      </video>

      {!isPlaying ? (
        <button
          type="button"
          className="process-video-poster"
          onClick={handlePlay}
          aria-label={`Play process video (${durationLabel})`}
        >
          <Image
            src={poster}
            alt="How Daly Growth Media's Meta ads process works, from strategy call to tracked results"
            fill
            className="process-video-poster-image"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <span className="process-video-play-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
              <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" />
            </svg>
          </span>
          <span className="process-video-duration">{durationLabel}</span>
        </button>
      ) : null}
    </div>
  );
}

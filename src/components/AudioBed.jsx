import React, { useEffect, useRef } from 'react';

const FADE_MS = 400;
const FADE_STEPS = 12;

export default function AudioBed({ src, muted }) {
  const audioRef = useRef(null);
  const lastSrcRef = useRef(null);
  const fadeIdRef = useRef(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.muted = muted;
  }, [muted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (src === lastSrcRef.current) return;

    const fadeId = ++fadeIdRef.current;

    const fadeTo = (target, done) => {
      const start = audio.volume;
      const interval = FADE_MS / FADE_STEPS;
      const t0 = Date.now();
      const tick = () => {
        if (fadeId !== fadeIdRef.current) return;
        const elapsed = Date.now() - t0;
        const t = Math.min(1, elapsed / FADE_MS);
        audio.volume = start + (target - start) * t;
        if (t < 1) setTimeout(tick, interval);
        else if (done) done();
      };
      tick();
    };

    const swap = () => {
      lastSrcRef.current = src;
      if (!src) {
        audio.pause();
        audio.removeAttribute('src');
        audio.load();
        return;
      }
      audio.src = src;
      audio.volume = 0;
      audio.play().then(() => fadeTo(1)).catch(() => {});
    };

    if (lastSrcRef.current && !audio.paused) {
      fadeTo(0, swap);
    } else {
      swap();
    }
  }, [src]);

  return <audio ref={audioRef} loop preload="auto" />;
}

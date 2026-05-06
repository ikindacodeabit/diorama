import React, { useEffect, useRef } from 'react';

const DOT_SIZE = 8;
const RING_SIZE = 32;
const LERP = 0.18;
const HOVER_SELECTOR = 'a, button, .beat-dot, [data-cursor-hover]';

export default function CursorFollow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let visible = false;
    let rafId;

    const animate = () => {
      rx += (mx - rx) * LERP;
      ry += (my - ry) * LERP;
      ring.style.transform = `translate(${rx - RING_SIZE / 2}px, ${ry - RING_SIZE / 2}px)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const handleMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - DOT_SIZE / 2}px, ${my - DOT_SIZE / 2}px)`;
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const handleOver = (e) => {
      const interactive = e.target.closest(HOVER_SELECTOR);
      ring.classList.toggle('cursor-ring--hover', !!interactive);
    };

    const handleLeave = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

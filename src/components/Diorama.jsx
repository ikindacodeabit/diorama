import React, { useEffect, useRef } from 'react';
import FrameOverlay from './FrameOverlay.jsx';
import HoverTargets from './HoverTargets.jsx';

const LAYER_ORDER = ['sky', 'landscape', 'environment', 'characters', 'foreground'];

const LAYER_DEPTH = {
  sky: -200,
  landscape: -150,
  environment: -100,
  characters: -50,
  foreground: 0,
};

export default function Diorama({ scene }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const fx = (e.clientX - rect.left) / rect.width - 0.5;
      const fy = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = fx * 12;
      const rotX = -fy * 8;
      inner.style.transition = 'transform 0.08s linear';
      inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    const handleLeave = () => {
      inner.style.transition = 'transform 0.8s ease-out';
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    wrapper.addEventListener('mousemove', handleMove);
    wrapper.addEventListener('mouseleave', handleLeave);
    return () => {
      wrapper.removeEventListener('mousemove', handleMove);
      wrapper.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="diorama-wrapper" ref={wrapperRef}>
      <div className="diorama-inner" ref={innerRef}>
        {LAYER_ORDER.map((name) => (
          <div
            key={name}
            className="diorama-layer"
            style={{ transform: `translateZ(${LAYER_DEPTH[name]}px)` }}
            dangerouslySetInnerHTML={{ __html: scene.layers[name] }}
          />
        ))}
      </div>
      <HoverTargets scene={scene} />
      <FrameOverlay />
    </div>
  );
}

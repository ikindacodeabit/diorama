import React, { useEffect, useState } from 'react';

const VB_W = 800;
const VB_H = 450;

export default function HoverTargets({ scene }) {
  const [hovered, setHovered] = useState(null);
  const targets = scene.hoverTargets || [];

  useEffect(() => {
    setHovered(null);
  }, [scene.id]);

  return (
    <>
      {targets.map((t, i) => (
        <div
          key={`${scene.id}-${i}`}
          className="hover-target"
          style={{
            left: `${(t.x / VB_W) * 100}%`,
            top: `${(t.y / VB_H) * 100}%`,
            width: `${(t.w / VB_W) * 100}%`,
            height: `${(t.h / VB_H) * 100}%`,
          }}
          onMouseEnter={() => setHovered(t)}
          onMouseLeave={() => setHovered((h) => (h === t ? null : h))}
          data-cursor-hover
        />
      ))}
      {hovered && (
        <div
          className="character-tooltip"
          style={{
            left: `${((hovered.x + hovered.w / 2) / VB_W) * 100}%`,
            bottom: `${((VB_H - hovered.y) / VB_H) * 100}%`,
          }}
        >
          <div className="character-tooltip-name">{hovered.name}</div>
          <div className="character-tooltip-desc">{hovered.description}</div>
        </div>
      )}
    </>
  );
}

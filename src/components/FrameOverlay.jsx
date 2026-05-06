import React from 'react';

export default function FrameOverlay() {
  return (
    <svg
      className="frame-overlay"
      viewBox="0 0 800 450"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* top-left */}
      <rect x="0" y="0" width="60" height="6" fill="#C4921A" />
      <rect x="0" y="0" width="6" height="60" fill="#C4921A" />
      <polyline points="60,6 6,6 6,60" fill="none" stroke="#8B6410" strokeWidth="1" />
      <circle cx="6" cy="6" r="3" fill="#F0C040" />

      {/* top-right */}
      <rect x="740" y="0" width="60" height="6" fill="#C4921A" />
      <rect x="794" y="0" width="6" height="60" fill="#C4921A" />
      <polyline points="740,6 794,6 794,60" fill="none" stroke="#8B6410" strokeWidth="1" />
      <circle cx="794" cy="6" r="3" fill="#F0C040" />

      {/* bottom-left */}
      <rect x="0" y="444" width="60" height="6" fill="#C4921A" />
      <rect x="0" y="390" width="6" height="60" fill="#C4921A" />
      <polyline points="60,444 6,444 6,390" fill="none" stroke="#8B6410" strokeWidth="1" />
      <circle cx="6" cy="444" r="3" fill="#F0C040" />

      {/* bottom-right */}
      <rect x="740" y="444" width="60" height="6" fill="#C4921A" />
      <rect x="794" y="390" width="6" height="60" fill="#C4921A" />
      <polyline points="740,444 794,444 794,390" fill="none" stroke="#8B6410" strokeWidth="1" />
      <circle cx="794" cy="444" r="3" fill="#F0C040" />
    </svg>
  );
}

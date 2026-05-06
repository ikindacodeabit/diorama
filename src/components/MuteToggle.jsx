import React from 'react';

export default function MuteToggle({ muted, onToggle }) {
  return (
    <button
      className="mute-toggle"
      type="button"
      onClick={onToggle}
      aria-pressed={!muted}
    >
      {muted ? '♪ off' : '♪ on'}
    </button>
  );
}

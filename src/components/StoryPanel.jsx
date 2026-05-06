import React, { useEffect } from 'react';

export default function StoryPanel({
  scene,
  sceneIndex,
  beatIndex,
  onAdvance,
  onBack,
  isLast,
}) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        onAdvance();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onBack();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onAdvance, onBack]);

  const beat = scene.beats[beatIndex];
  const beatKey = `${sceneIndex}-${beatIndex}`;

  return (
    <section className="story-panel">
      <p className="story-beat" key={beatKey}>
        {beat.text}
      </p>
      <div className="story-footer">
        <div className="story-meta">
          <span className="scene-title">{scene.title}</span>
          <span className="beat-index">
            {beatIndex + 1} / {scene.beats.length}
          </span>
        </div>
        <div className="story-controls">
          <button className="back-button" type="button" onClick={onBack}>
            ← Back
          </button>
          <div className="beat-dots">
            {scene.beats.map((_, i) => (
              <span
                key={i}
                className={`beat-dot${i === beatIndex ? ' active' : ''}`}
              />
            ))}
          </div>
          <button className="next-button" type="button" onClick={onAdvance}>
            {isLast ? 'Again ↺' : 'Next →'}
          </button>
        </div>
      </div>
    </section>
  );
}

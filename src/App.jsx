import React, { useCallback, useState } from 'react';
import { stories } from './data/stories.js';
import Diorama from './components/Diorama.jsx';
import StoryPanel from './components/StoryPanel.jsx';
import AudioBed from './components/AudioBed.jsx';
import MuteToggle from './components/MuteToggle.jsx';
import HoverGif from './components/HoverGif.jsx';
import CursorFollow from './components/CursorFollow.jsx';

export default function App() {
  const story = stories[0];
  const [sceneIndex, setSceneIndex] = useState(0);
  const [beatIndex, setBeatIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  const scene = story.scenes[sceneIndex];
  const isLast =
    sceneIndex === story.scenes.length - 1 &&
    beatIndex === scene.beats.length - 1;

  const advance = useCallback(() => {
    if (beatIndex < scene.beats.length - 1) {
      setBeatIndex(beatIndex + 1);
      return;
    }
    if (sceneIndex < story.scenes.length - 1) {
      setSceneIndex(sceneIndex + 1);
      setBeatIndex(0);
      return;
    }
    setSceneIndex(0);
    setBeatIndex(0);
  }, [beatIndex, scene.beats.length, sceneIndex, story.scenes.length]);

  const back = useCallback(() => {
    if (beatIndex > 0) {
      setBeatIndex(beatIndex - 1);
      return;
    }
    if (sceneIndex > 0) {
      const prev = sceneIndex - 1;
      setSceneIndex(prev);
      setBeatIndex(story.scenes[prev].beats.length - 1);
    }
  }, [beatIndex, sceneIndex, story.scenes]);

  return (
    <main className="page">
      <div className="page-brand">
        <HoverGif />
        <a href="https://en.wikipedia.org/wiki/Diorama" target="_blank" rel="noopener noreferrer" className="brand-title">Diorama</a>
      </div>
      <header className="story-header">
        <div className="story-header-text">
          <h1 className="story-title">{story.title}</h1>
          <p className="story-subtitle">{story.subtitle}</p>
        </div>
        <MuteToggle muted={muted} onToggle={() => setMuted((m) => !m)} />
      </header>
      <Diorama scene={scene} />
      <StoryPanel
        scene={scene}
        sceneIndex={sceneIndex}
        beatIndex={beatIndex}
        onAdvance={advance}
        onBack={back}
        isLast={isLast}
      />
      <AudioBed src={scene.audio} muted={muted} />
      <CursorFollow />
      <footer className="page-footer">
        <p className="made-by">Made by Gautam Mahale</p>
        <div className="music-credits">
          <p className="music-credits-title">Music</p>
          <ul className="music-credits-list">
            <li><strong>Anoushka Shankar</strong> — New Dawn (Live)</li>
            <li><strong>Niladri Kumar & Pandit Subhankar Banerjee</strong> — Raag Bhairavi (Sitar & Tabla)</li>
            <li><strong>AuralSaga</strong> — Innercalm 30min Flute Tanpura</li>
            <li><strong>Ravi Shankar</strong> — Pahari Dhun (Digitally Remastered)</li>
            <li><strong>Ram Narayan</strong> — Rag Lalit</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

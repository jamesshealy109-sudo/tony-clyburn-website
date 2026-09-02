'use client';

import { useRef, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function AudioIntro() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [state, setState] = useState<'idle' | 'playing' | 'paused' | 'ended'>('idle');

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      if (state === 'ended') audio.currentTime = 0;
      try {
        await audio.play();
        setState('playing');
      } catch {
        setState('paused');
      }
    } else {
      audio.pause();
      setState('paused');
    }
  }

  const label = state === 'playing' ? 'Pause Intro' : state === 'ended' ? 'Replay Intro' : 'Play Intro';

  return (
    <div className="audio-intro">
      <audio ref={audioRef} src={`${basePath}/audio/tony-at-my-job.mp3`} preload="metadata" onEnded={() => setState('ended')} />
      <button type="button" onClick={toggle} aria-label={`${label} by Tony Clyburn`}>
        <span className={`audio-icon ${state === 'playing' ? 'is-playing' : ''}`} aria-hidden="true"><i /><i /><i /><i /></span>
        <span><small>Hear it in Tony&apos;s voice</small><strong>{label}</strong></span>
      </button>
      <span className="audio-rule" aria-hidden="true" />
    </div>
  );
}

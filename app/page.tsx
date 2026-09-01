'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const voiceQualities = [
  { number: '01', title: 'Soft & cuddly', note: 'Close, reassuring, familiar.' },
  { number: '02', title: 'Warm & compassionate', note: 'Human, generous, sincerely felt.' },
  { number: '03', title: 'A summer sea breeze', note: 'Easy, open, quietly refreshing.' },
  { number: '04', title: 'A prairie fox', note: 'Resilient against the windswept plains.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [audioState, setAudioState] = useState<'starting' | 'playing' | 'paused' | 'blocked' | 'ended'>('starting');
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.78;
    const playback = audio.play();
    if (playback) {
      playback
        .then(() => setAudioState('playing'))
        .catch(() => setAudioState('blocked'));
    }
  }, []);

  async function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setAudioState('playing');
      } catch {
        setAudioState('blocked');
      }
    } else {
      audio.pause();
      setAudioState('paused');
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="site-grain" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tony Clyburn home">
          <strong>TONY CLYBURN</strong>
          <span>AT MY JOB AND LOVING IT™</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>Menu</span><i /><i />
        </button>
        <nav id="primary-nav" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          <a href="#voice" onClick={() => setMenuOpen(false)}>Find your voice</a>
          <a href="#archive" onClick={() => setMenuOpen(false)}>From the archive</a>
          <a href="#pledge" onClick={() => setMenuOpen(false)}>Our pledge</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s get started <span>↗</span></a>
        </nav>
      </header>

      <audio
        ref={audioRef}
        src={`${basePath}/audio/tony-at-my-job.mp3`}
        preload="auto"
        autoPlay
        onPlay={() => setAudioState('playing')}
        onPause={() => setAudioState((current) => current === 'ended' ? current : 'paused')}
        onEnded={() => setAudioState('ended')}
      />
      <button
        className={`audio-control ${audioState}`}
        type="button"
        onClick={toggleAudio}
        aria-label={audioState === 'playing' ? 'Pause Tony Clyburn introduction' : 'Play Tony Clyburn introduction'}
      >
        <span className="audio-bars" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="audio-label">
          <small>{audioState === 'blocked' ? 'Sound is ready' : audioState === 'playing' ? 'Now playing' : 'Tony Clyburn audio'}</small>
          <strong>{audioState === 'playing' ? 'Pause intro' : audioState === 'ended' ? 'Replay intro' : 'Play intro'}</strong>
        </span>
      </button>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-rule" aria-hidden="true"><span /><span /><span /><span /><span /></div>
          <div className="hero-frequency" aria-hidden="true">
            <span>VOICE PROFILE</span><b>01 — 04</b><i />
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A voice that cares as much as you</p>
              <h1><span>CRISP.</span><span>CLEAR.</span><em>MIDWESTERN<br />RESONANCE.</em></h1>
              <p className="hero-lede">When everything you care about is out there, you want a voice that cares as much as you.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Start a conversation <span>↗</span></a>
                <a className="text-link" href="#voice">Hear what matters <span>↓</span></a>
              </div>
              <div className="graffiti-mark graffiti-hero">
                <Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="At My Job and Loving It, trademark" width={1774} height={887} sizes="(max-width: 600px) 80vw, 390px" />
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-backdrop" aria-hidden="true">TC</div>
              <div className="portrait-frame">
                <Image src={`${basePath}/images/tony-client-portrait.jpg`} alt="Tony Clyburn standing in front of a brick wall" fill priority sizes="(max-width: 860px) 100vw, 43vw" />
              </div>
              <div className="portrait-caption"><strong>TONY CLYBURN</strong><span>COLUMBIA · SOUTH CAROLINA</span></div>
              <div className="voice-mark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </section>

        <div className="resonance-bar" aria-label="Tony Clyburn voice qualities">
          <span className="resonance-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></span><b>●</b><span>SINCERE</span><b>●</b><span>COLLABORATIVE</span><b>●</b><span>RESILIENT</span><b>●</b><span>HUMAN</span><b>●</b><span className="resonance-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></span>
        </div>

        <section className="voice-section" id="voice">
          <div className="section-shell voice-intro">
            <p className="section-label">01 / Find your voice</p>
            <div>
              <h2>HOW DO YOU<br /><em>SEE <span>(HEAR)</span></em><br />YOURSELF?</h2>
              <p className="voice-lede">The sincerity of everything you care about is in those syllables. The right voice makes them feel true.</p>
            </div>
          </div>
          <div className="section-shell quality-grid">
            {voiceQualities.map((quality) => (
              <article className="quality-card" key={quality.number} data-number={quality.number}>
                <span>{quality.number}</span>
                <h3>{quality.title}</h3>
                <p>{quality.note}</p>
              </article>
            ))}
          </div>
          <div className="section-shell brag-line">
            <div><span className="brag-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></span><p>We brag about our partners every day.</p></div>
            <a href="#contact">Interested in joining us? Let&apos;s get started. <span>↗</span></a>
          </div>
        </section>

        <section className="archive-section" id="archive">
          <div className="archive-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></div>
          <div className="section-shell archive-heading">
            <p className="section-label">02 / From the archive</p>
            <div>
              <h2>THE STORIES<br />BEHIND <em>THE SIGNAL.</em></h2>
              <p>Every voice carries a history. These are a few frames from Tony&apos;s.</p>
            </div>
          </div>
          <div className="section-shell archive-grid">
            <figure className="archive-card archive-color">
              <div><Image src={`${basePath}/images/tony-color-archive.jpg`} alt="Early color portrait of Tony Clyburn smiling against a blue studio background" fill sizes="(max-width: 760px) 100vw, 36vw" /></div>
              <figcaption><span>01</span><strong>Portrait</strong></figcaption>
            </figure>
            <figure className="archive-card archive-headphones">
              <div><Image src={`${basePath}/images/tony-headphones-archive.jpg`} alt="Tony Clyburn wearing headphones in a black-and-white archive photograph" fill sizes="(max-width: 760px) 100vw, 25vw" /></div>
              <figcaption><span>02</span><strong>On air</strong></figcaption>
            </figure>
            <figure className="archive-card archive-who">
              <div><Image src={`${basePath}/images/the-who-archive.jpg`} alt="Colorful collage of The Who photographs, posters, and music-industry memorabilia" fill sizes="(max-width: 760px) 100vw, 34vw" /></div>
              <figcaption><span>03</span><strong>The archive</strong></figcaption>
            </figure>
          </div>
          <div className="archive-register" aria-hidden="true"><span>TC / ARCHIVE</span><i /><b>03 FRAMES</b></div>
        </section>

        <section className="civic-section" aria-label="Columbia, South Carolina landmarks">
          <div className="civic-image civic-main">
            <Image src={`${basePath}/images/adluh-flour-columbia.jpg`} alt="Historic Adluh Flour mill beneath a deep blue Columbia sky" fill sizes="(max-width: 760px) 100vw, 72vw" />
          </div>
          <div className="civic-image civic-side">
            <Image src={`${basePath}/images/south-carolina-state-house.jpg`} alt="South Carolina State House beneath a clear blue sky" fill sizes="(max-width: 760px) 100vw, 28vw" />
          </div>
          <div className="civic-overlay">
            <p>ROOTED HERE.<br />READY FOR<br /><em>WHAT&apos;S NEXT.</em></p>
          </div>
          <div className="civic-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></div>
          <div className="civic-labels" aria-hidden="true"><span>COLUMBIA / SOUTH CAROLINA</span><span>AT MY JOB AND LOVING IT™</span></div>
          <blockquote>“Whatever your project, we can do good together.”</blockquote>
        </section>

        <section className="pledge-section" id="pledge">
          <div className="pledge-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="pledge-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></div>
          <div className="section-shell pledge-grid">
            <div className="pledge-title">
              <p className="section-label">03 / A pledge to our partners</p>
              <h2>WE SPEAK<br />THE TRUTH,<br /><em>ON YOUR BEHALF.</em></h2>
            </div>
            <div className="pledge-copy">
              <p className="pledge-opening">We partner with organizations that do good and strive to be better.</p>
              <div className="pledge-list">
                <article><span>01</span><p>We are collaborative. When decision time arrives, we&apos;ll help you recognize it.</p></article>
                <article><span>02</span><p>If your decision is based on price alone, we are not for you.</p></article>
                <article><span>03</span><p>Whatever your project, we can do good together.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="section-label">04 / Start here</p>
              <h2>HOW CAN<br /><em>WE HELP?</em></h2>
              <p>Tell us what you care about, who needs to hear it, and what a good outcome looks like.</p>
              <div className="contact-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></div>
              <div className="direct-contact">
                <a href="tel:+18032919844">803.291.9844</a>
                <span>West Columbia, South Carolina</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><strong>LET&apos;S GET STARTED</strong><span>↗</span></div>
              <div className="form-row">
                <label>Your name<input name="name" autoComplete="name" required /></label>
                <label>Organization<input name="organization" autoComplete="organization" /></label>
              </div>
              <label>Email<input type="email" name="email" autoComplete="email" required /></label>
              <label>What do you care about?<textarea name="message" rows={6} placeholder="Tell us about the project, the audience, and what matters most." required /></label>
              <button className="button form-submit" type="submit">Send the signal <span>↗</span></button>
              <p className={submitted ? 'form-note success' : 'form-note'} aria-live="polite">
                {submitted ? 'Thank you. This preview form is ready to be connected to Tony’s inbox.' : 'Preview form—delivery will be connected before launch.'}
              </p>
            </form>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-main">
          <a className="wordmark" href="#top"><strong>TONY CLYBURN</strong><span>AT MY JOB AND LOVING IT™</span></a>
          <div className="footer-tagline"><span className="footer-graffiti" aria-hidden="true"><Image src={`${basePath}/images/tony-graffiti-slogan.png`} alt="" width={1774} height={887} /></span><span>Crisp. Clear. Midwestern resonance.</span></div>
          <div className="socials">
            <a href="https://facebook.com/TonyClyburnSC" target="_blank" rel="noreferrer">Facebook ↗</a>
            <a href="https://twitter.com/myjobandlovinit" target="_blank" rel="noreferrer">X / Twitter ↗</a>
            <a className="footer-easter-egg" href="https://f3midlands.com/" target="_blank" rel="noreferrer" aria-label="Visit F3 Midlands" title="F3 Midlands">
              <Image src="https://f3midlands.com/assets/f3-logo.png" alt="" width={40} height={40} unoptimized />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tony Clyburn</span>
          <span>AT MY JOB AND LOVING IT™</span>
          <a href="https://strataworks.tech" target="_blank" rel="noreferrer">Website by StrataWorks ↗</a>
        </div>
      </footer>
    </main>
  );
}

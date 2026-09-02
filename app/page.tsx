'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const storyMoments = [
  { number: '01', era: 'The beginning', title: 'Working people', note: 'That is how Tony describes where he comes from. He knew he could write and perform before he knew where those abilities belonged.' },
  { number: '02', era: 'Junior high', title: 'School announcements', note: 'Before radio, Tony was already speaking to people he knew—doing the announcements and learning what it meant to be heard.' },
  { number: '03', era: 'Friday nights', title: 'Carry the equipment', note: 'When Tony wanted into broadcasting, he carried equipment from place to place for football broadcasts, sometimes missing his own games.' },
  { number: '04', era: 'The real work', title: 'No glamour required', note: 'He wanted it badly enough to do the unglamorous part before anyone knew his name. Radio was where writing and performance finally met.' },
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
          <a href="#voice" onClick={() => setMenuOpen(false)}>Tony&apos;s story</a>
          <a href="#archive" onClick={() => setMenuOpen(false)}>The phrase</a>
          <a href="#pledge" onClick={() => setMenuOpen(false)}>Showing up</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Bring Tony <span>↗</span></a>
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
            <span>PUBLIC SERVICE</span><b>ONE LISTENER AT A TIME</b><i />
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Broadcaster · Storyteller · Public servant</p>
              <h1><span>CRISP.</span><span>CLEAR.</span><em>MIDWESTERN<br />RESONANCE.</em></h1>
              <p className="hero-lede">When someone gives you part of their day, you show up. Tony Clyburn has spent decades listening, asking questions, and helping people hear one another.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Bring Tony to your audience <span>↗</span></a>
                <a className="text-link" href="#voice">Start the story <span>↓</span></a>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-backdrop" aria-hidden="true">TC</div>
              <div className="portrait-frame">
                <Image src={`${basePath}/images/tony-client-portrait.jpg`} alt="Tony Clyburn standing in front of a brick wall" fill priority sizes="(max-width: 860px) 100vw, 43vw" />
              </div>
              <div className="slogan-stamp portrait-signature">AT MY JOB AND LOVING IT™</div>
              <div className="portrait-caption"><strong>TONY CLYBURN</strong><span>COLUMBIA · SOUTH CAROLINA</span></div>
              <div className="voice-mark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </section>

        <div className="resonance-bar" aria-label="Tony Clyburn voice qualities">
          <strong className="slogan-stamp resonance-signature">AT MY JOB AND LOVING IT™</strong><b>●</b><span>SERVICE</span><b>●</b><span>TRUST</span><b>●</b><span>CURIOSITY</span><b>●</b><span>CONNECTION</span><b>●</b><span>COMMUNITY</span>
        </div>

        <section className="voice-section" id="voice">
          <div className="section-shell voice-intro">
            <p className="section-label">01 / Where the story starts</p>
            <div>
              <h2>FROM<br /><em>WORKING<br />PEOPLE</em><br />TO THE MIC.</h2>
              <p className="voice-lede">Tony knew he could write. He knew he could perform. Radio was where those two things finally found each other.</p>
            </div>
          </div>
          <div className="section-shell story-grid">
            {storyMoments.map((moment) => (
              <article className="story-card" key={moment.number} data-number={moment.number}>
                <span>{moment.number}</span>
                <small>{moment.era}</small>
                <h3>{moment.title}</h3>
                <p>{moment.note}</p>
              </article>
            ))}
          </div>
          <div className="section-shell brag-line">
            <div><span className="slogan-stamp brag-kicker">THE WORK BEHIND THE VOICE</span><p>Good broadcasting means understanding people, products, situations, and how things work—then explaining them without talking down to anyone.</p></div>
            <a href="#archive">Keep listening <span>↓</span></a>
          </div>
        </section>

        <section className="archive-section" id="archive">
          <div className="section-shell archive-heading">
            <p className="section-label">02 / The phrase</p>
            <div>
              <h2>HE SAID IT<br />BEFORE <em>COLUMBIA.</em></h2>
              <p>Tony remembers saying “At My Job and Loving It” as a teenager—before he moved to Columbia in 1987. It was never invented for a campaign. It came with him.</p>
            </div>
          </div>
          <div className="section-shell archive-grid">
            <figure className="archive-card archive-color">
              <div><Image src={`${basePath}/images/tony-color-archive.jpg`} alt="Early color portrait of Tony Clyburn smiling against a blue studio background" fill sizes="(max-width: 760px) 100vw, 36vw" /></div>
              <figcaption><span>01</span><strong>The broadcaster</strong></figcaption>
            </figure>
            <figure className="archive-card archive-headphones">
              <div><Image src={`${basePath}/images/tony-headphones-archive.jpg`} alt="Tony Clyburn wearing headphones in a black-and-white archive photograph" fill sizes="(max-width: 760px) 100vw, 25vw" /></div>
              <figcaption><span>02</span><strong>On air</strong></figcaption>
            </figure>
            <figure className="archive-card archive-who">
              <div><Image src={`${basePath}/images/the-who-archive.jpg`} alt="Colorful collage of The Who photographs, posters, and music-industry memorabilia" fill sizes="(max-width: 760px) 100vw, 34vw" /></div>
              <figcaption><span>03</span><strong>Stories everywhere</strong></figcaption>
            </figure>
          </div>
          <div className="archive-register" aria-hidden="true"><span>TC / ARCHIVE</span><i /><b>03 FRAMES</b></div>
          <div className="section-shell phrase-story">
            <p>COLUMBIA — AFTER 1987</p>
            <blockquote>“AT MY JOB AND LOVING IT.”</blockquote>
            <div><p>Listeners began saying the phrase back to Tony.</p><p>And then they would tell him what their job was. Their work became their story. Those stories taught Tony about people, lives, and communities far beyond the studio.</p></div>
          </div>
        </section>

        <section className="civic-section" aria-label="Radio connecting Tony Clyburn with Columbia listeners">
          <div className="civic-image civic-main">
            <Image src={`${basePath}/images/tony-columbia-street-classic-car.jpg`} alt="Classic car parked beneath a broad tree on a Columbia street" fill sizes="(max-width: 760px) 100vw, 72vw" />
          </div>
          <div className="civic-image civic-side">
            <Image src={`${basePath}/images/tony-vintage-radio.jpg`} alt="Close view of a vintage radio dial and controls" fill sizes="(max-width: 760px) 100vw, 28vw" />
          </div>
          <div className="civic-overlay">
            <p>THE PHRASE<br />CAME BACK.<br /><em>WITH A STORY.</em></p>
          </div>
          <div className="slogan-stamp civic-signature">AT MY JOB AND LOVING IT™</div>
          <div className="civic-labels" aria-hidden="true"><span>COLUMBIA / AFTER 1987</span></div>
          <blockquote>“And then they&apos;d tell Tony what their job was.”</blockquote>
        </section>

        <section className="pledge-section" id="pledge">
          <div className="pledge-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="section-shell pledge-grid">
            <div className="pledge-title">
              <p className="section-label">03 / Showing up</p>
              <h2>THE JOB IS<br />TO <em>SHOW UP.</em></h2>
            </div>
            <div className="pledge-copy">
              <p className="pledge-opening">For Tony, broadcasting is public service. Every listener has chosen to give him part of their day. That means something.</p>
              <div className="pledge-list">
                <article><span>01</span><p>Over decades on the air, listeners have heard Tony through ordinary days and hard ones—fires, hurricanes, September 11, and wars.</p></article>
                <article><span>02</span><p>That consistency builds trust. Tony describes the relationship simply: you become “part of the family.”</p></article>
                <article><span>03</span><p>He has learned that when people actually talk with each other, they can accomplish more than they often realize.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <p className="section-label">04 / Bring Tony to your audience</p>
              <h2>YOUR STORY<br /><em>COMES FIRST.</em></h2>
              <p>Tony has spent a career telling stories. The first thing he wants to know is yours. He asks what you do, how it works, and why it matters—then builds the conversation around the people in the room.</p>
              <span className="slogan-stamp contact-signature">AT MY JOB AND LOVING IT™</span>
              <div className="direct-contact">
                <a href="tel:+18032919844">803.291.9844</a>
                <span>West Columbia, South Carolina</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><strong>TELL ME WHY YOU LOVE THE WORK</strong><span>↗</span></div>
              <p className="form-intro">Every audience and every situation is different. Tell Tony what makes your work worth showing up for.</p>
              <div className="form-row">
                <label>Your name<input name="name" autoComplete="name" required /></label>
                <label>Organization<input name="organization" autoComplete="organization" /></label>
              </div>
              <label>Email<input type="email" name="email" autoComplete="email" required /></label>
              <label>What do you love about what you do?<textarea name="message" rows={6} placeholder="Tell Tony what makes the work matter to you, who it helps, and why it deserves to be heard." required /></label>
              <button className="button form-submit" type="submit">Bring Tony to the room <span>↗</span></button>
              <p className={submitted ? 'form-note success' : 'form-note'} aria-live="polite">
                {submitted ? 'Thank you for sharing what drives you. This preview form is ready to be connected to Tony’s inbox.' : 'Preview form—delivery will be connected before launch.'}
              </p>
            </form>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-main">
          <a className="wordmark" href="#top"><strong>TONY CLYBURN</strong><span>AT MY JOB AND LOVING IT™</span></a>
          <div className="footer-tagline"><span className="slogan-stamp footer-signature">AT MY JOB AND LOVING IT™</span><span>Crisp. Clear. Midwestern resonance.</span></div>
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

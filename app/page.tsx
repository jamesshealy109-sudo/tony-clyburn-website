import Image from 'next/image';
import AudioIntro from './components/AudioIntro';
import InquiryForms from './components/InquiryForms';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const storySteps = [
  ['01', 'Working people', 'Tony knew he could write and perform before he knew where those abilities belonged.'],
  ['02', 'School announcements', 'In junior high, he began speaking to a community he already knew.'],
  ['03', 'Friday-night football', 'He carried equipment from broadcast to broadcast—sometimes missing his own games to be there.'],
  ['04', 'The work before the voice', 'Broadcasting may look glamorous. Tony learned it from the cables up.'],
];

const speakingThemes = [
  ['The work', 'Why the work people do matters—and what changes when people recognize it in one another.'],
  ['The people', 'What decades of conversations reveal about curiosity, trust, and connection.'],
  ['Showing up', 'What happens when consistency, service, and authenticity become more than slogans.'],
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tony Clyburn home">
          <strong>TONY CLYBURN</strong>
          <span>AT MY JOB AND LOVING IT™</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">Tony&apos;s story</a>
          <a href="#amjali">AMJALI</a>
          <a href="#speaking">Speaking</a>
          <a className="nav-cta" href="#booking">Book Tony <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">A phrase. A practice. A life&apos;s work.</p>
            <h1><span>AT MY JOB</span><span>AND LOVING IT™</span></h1>
            <p className="hero-name">Tony Clyburn</p>
            <p className="hero-role">Broadcaster. Storyteller. Speaker.</p>
            <p className="hero-lede">A career behind the microphone taught Tony something simple: the work people do matters—and every person has a story worth hearing.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#booking">Book Tony</a>
              <a className="button button-quiet" href="#story">Tony&apos;s story <span aria-hidden="true">↓</span></a>
            </div>
            <AudioIntro />
          </div>
          <div className="hero-image">
            <Image
              src={`${basePath}/images/story/tony-hero-columbia.webp`}
              alt="Tony Clyburn smiling in a suit with the Columbia skyline behind him"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <p><span>TONY CLYBURN</span><span>COLUMBIA, SOUTH CAROLINA</span></p>
          </div>
          <div className="hero-ticker" aria-hidden="true">WORK · SERVICE · TRUST · CURIOSITY · CONNECTION · COMMUNITY · SHOWING UP</div>
        </section>

        <section className="working section" id="story">
          <div className="section-kicker">01 / The beginning</div>
          <div className="working-heading">
            <h2>IT STARTED WITH<br /><em>WORKING PEOPLE.</em></h2>
            <p>Tony grew up around working people. Long before he knew where writing and performance would take him, he knew he wanted to communicate.</p>
          </div>
          <div className="working-layout">
            <figure className="archive-figure">
              <Image src={`${basePath}/images/story/y95-am-show-archive.webp`} alt="Archival Y95 morning show photograph with Tony Clyburn seated on a radio set" fill sizes="(max-width: 800px) 100vw, 46vw" />
              <figcaption>From the radio archive</figcaption>
            </figure>
            <div className="story-steps">
              {storySteps.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
              <p className="chapter-end">FIRST CAME THE WORK.</p>
            </div>
          </div>
        </section>

        <section className="radio-transition" aria-label="Tony's path into radio">
          <Image src={`${basePath}/images/story/vintage-radio.webp`} alt="Close view of a vintage radio dial and ivory push buttons" fill sizes="100vw" />
          <div className="radio-overlay">
            <p>BEFORE STREAMING.<br />BEFORE SOCIAL MEDIA.<br /><em>THERE WAS THE VOICE.</em></p>
            <span>Radio could connect people separated by miles—and make the distance feel smaller.</span>
          </div>
        </section>

        <section className="origin section" id="amjali">
          <div className="section-kicker">02 / The phrase</div>
          <div className="origin-intro">
            <h2>BEFORE IT WAS A BRAND,<br /><em>IT WAS JUST SOMETHING TONY SAID.</em></h2>
            <p>Tony remembers saying “At My Job And Loving It” as a teenager—before he moved to Columbia in 1987. It wasn&apos;t written for a campaign. It came with him.</p>
          </div>
          <div className="origin-turn">
            <p className="era">COLUMBIA · AFTER 1987</p>
            <blockquote>“AT MY JOB<br />AND LOVING IT.”</blockquote>
            <p className="origin-reply">Then people started saying it back.</p>
          </div>
          <div className="origin-story">
            <p className="large">And then they&apos;d tell Tony what their job was.</p>
            <p>Those conversations opened into how the work got done, why it mattered, and the details other people overlooked. The phrase connected Tony to people, their communities, and their stories.</p>
          </div>
        </section>

        <section className="brand-reveal">
          <div className="brand-artifact">
            <Image src={`${basePath}/images/story/amjali-logo.webp`} alt="AMJALI heart logo, an abbreviation for At My Job And Loving It" fill sizes="(max-width: 800px) 70vw, 32vw" />
          </div>
          <div>
            <p className="section-kicker">03 / The brand</p>
            <h2>THE PHRASE<br /><em>BECAME A BRAND.</em></h2>
            <p>AT MY JOB AND LOVING IT™ is Tony&apos;s invitation to notice the people behind the work—and to ask what their work means to them.</p>
            <div className="future-link"><span>SHOP AMJALI</span><small>Future collection</small></div>
          </div>
        </section>

        <section className="showing-up" id="showing-up">
          <div className="on-air-image">
            <Image src={`${basePath}/images/story/on-air-sign.webp`} alt="Red illuminated ON AIR sign" fill sizes="100vw" />
          </div>
          <div className="showing-content section">
            <p className="section-kicker">04 / Public service</p>
            <div>
              <h2>SHOWING UP.</h2>
              <p className="showing-lede">People choose to give Tony part of their day. He takes that trust seriously.</p>
            </div>
            <div className="showing-details">
              <p>For Tony, broadcasting is public service. Across decades on the air, listeners have heard him through fires, hurricanes, September 11, wars, and ordinary daily life.</p>
              <p>The point is not the event. It is the responsibility: be present, be useful, and become part of the family by showing up again tomorrow.</p>
            </div>
            <p className="showing-line">THAT TRUST IS EARNED BY SHOWING UP.</p>
          </div>
        </section>

        <section className="listen-first">
          <div className="listen-image">
            <Image src={`${basePath}/images/story/studio-microphone.webp`} alt="Close-up of a studio broadcast microphone" fill sizes="(max-width: 900px) 100vw, 54vw" />
          </div>
          <div className="listen-copy">
            <p className="section-kicker">05 / Curiosity</p>
            <h2>LISTEN<br /><em>FIRST.</em></h2>
            <p>Tony has spent a career asking granular questions: What do you do? How does it work? Why do you do it?</p>
            <p>The most interesting person in the room is not always the person holding the microphone.</p>
            <blockquote>“I WANT TO KNOW<br />YOUR STORY.”</blockquote>
          </div>
        </section>

        <section className="speaking section" id="speaking">
          <div className="speaking-heading">
            <p className="section-kicker">06 / Speaking</p>
            <h2>BRING TONY<br /><em>INTO THE ROOM.</em></h2>
            <p>Tony brings decades of interviewing, broadcasting, storytelling, and community-building into an engagement shaped around your people, your work, and your story.</p>
          </div>
          <div className="speaking-themes">
            {speakingThemes.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="custom-note">
            <p>No canned keynote. No borrowed slogans.</p>
            <p>Every audience is different. Tony wants people to leave able to explain what they saw, heard, and took part in—and to know it was made for their room.</p>
            <a className="button button-primary" href="#booking">Book Tony</a>
          </div>
        </section>

        <section className="credibility" aria-label="Tony Clyburn credentials">
          <p>ON THE AIR · IN THE COMMUNITY</p>
          <div><strong>Afternoon host</strong><span>93.1 The Lake</span></div>
          <div><strong>Radio Personality of the Year</strong><span>South Carolina Broadcasters Association · 2006</span></div>
        </section>

        <section className="conversation section">
          <div className="conversation-photo">
            <Image src={`${basePath}/images/story/tony-listening-archive.webp`} alt="Archival photograph of Tony Clyburn interviewing a young community member" fill sizes="(max-width: 900px) 100vw, 36vw" />
          </div>
          <div>
            <p className="section-kicker">Along the way</p>
            <h2>THE MICROPHONE<br /><em>WAS NEVER THE POINT.</em></h2>
            <p>Connection was. Tony believes that if people talk with one another a little more, they can accomplish a tremendous amount.</p>
          </div>
        </section>

        <InquiryForms />

        <section className="final-cta">
          <p>AT MY JOB AND LOVING IT™</p>
          <h2>TONY HAS SPENT A CAREER<br />ASKING PEOPLE ABOUT THEIR STORY.</h2>
          <blockquote>WHAT&apos;S YOURS?</blockquote>
          <div>
            <a className="button button-light" href="#booking">Bring Tony to your event</a>
            <a className="button button-outline" href="#your-story">Tell Tony your story</a>
          </div>
        </section>
      </div>

      <footer>
        <a className="wordmark" href="#top"><strong>TONY CLYBURN</strong><span>AT MY JOB AND LOVING IT™</span></a>
        <div className="footer-nav"><a href="#story">Story</a><a href="#speaking">Speaking</a><span>Media · coming later</span><span>Shop · coming later</span><a href="#booking">Contact</a></div>
        <div className="footer-contact"><a href="tel:+18032919844">803.291.9844</a><span>West Columbia, South Carolina</span></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Tony Clyburn</span><a href="https://facebook.com/TonyClyburnSC" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://twitter.com/myjobandlovinit" target="_blank" rel="noreferrer">X / Twitter ↗</a></div>
      </footer>
    </main>
  );
}

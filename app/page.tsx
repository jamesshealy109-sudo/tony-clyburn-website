import Image from 'next/image';
import type { Metadata } from 'next';
import AudioIntro from './components/AudioIntro';
import DymoLabel from './components/DymoLabel';
import InquiryForms from './components/InquiryForms';
import JsonLd from './components/JsonLd';
import ProjectSelector from './components/ProjectSelector';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { absoluteUrl, createPageMetadata, sitePath } from './lib/site';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const homeTitle = 'Tony Clyburn | Voiceover, Host & Speaker | AMJALI™';
const homeDescription = 'Work with Columbia broadcaster Tony Clyburn on voiceover, commercial audio, business messaging, emcee, speaking, moderated conversation and podcast projects.';

export const metadata: Metadata = createPageMetadata({ title: homeTitle, description: homeDescription });

const storySteps = [
  ['01', 'Working people', 'Show up early. Work hard. Expect the work to matter.'],
  ['02', 'A way into radio', 'Tony wrote, performed, and carried equipment—whatever put him closer to the broadcast.'],
  ['03', 'A life spent listening', 'The microphone opened the door. Curiosity kept the conversations going.'],
];

const projectPrinciples = [
  ['Listen to the brief', 'Tony starts by understanding the audience, the setting, and what you need to communicate.'],
  ['Find the real message', 'A conversation can uncover the point you meant to make before the performance begins.'],
  ['Read the room', 'A commercial, a live event, and a moderated conversation each ask for something different.'],
];

export default function Home() {
  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${absoluteUrl('/')}#webpage`,
        url: absoluteUrl('/'),
        name: homeTitle,
        description: homeDescription,
        isPartOf: { '@id': `${absoluteUrl('/')}#website` },
        about: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
        inLanguage: 'en-US',
      }} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">A phrase people made their own.</p>
            <DymoLabel as="h1" className="dymo-label-hero" />
            <p className="hero-name">Tony Clyburn</p>
            <p className="hero-role">Broadcaster. Voiceover. Host. Speaker.</p>
            <p className="hero-lede">For decades, Tony Clyburn has made a living talking with people. He learned the most important part of the job is listening.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={sitePath('/services/')}>Find the right service</a>
              <a className="button button-quiet" href={sitePath('/story/')}>Read Tony&apos;s story <span aria-hidden="true">→</span></a>
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

        <ProjectSelector />

        <section className="credibility" aria-label="Tony Clyburn credentials">
          <p>ON THE AIR · IN THE COMMUNITY</p>
          <div><strong>Afternoon host</strong><span>93.1 The Lake</span></div>
          <div><strong>Radio Personality of the Year</strong><span>South Carolina Broadcasters Association · 2006</span></div>
        </section>

        <section className="working section" id="story">
          <div className="section-kicker">01 / The short version</div>
          <div className="working-heading">
            <h2>THE WORK CAME FIRST.<br /><em>THEN CAME THE VOICE.</em></h2>
            <p>If you care enough to show up, get it right, and serve the people on the other side, Tony understands that instinct.</p>
          </div>
          <div className="working-layout">
            <figure className="archive-figure">
              <Image src={`${basePath}/images/story/tony-clyburn-y95-radio-archive-clean.webp`} alt="Archival Y95 morning show photograph with Tony Clyburn seated on a radio set" width={1408} height={1112} sizes="(max-width: 800px) 100vw, 46vw" />
              <figcaption>From the Radio Archive</figcaption>
            </figure>
            <div className="story-steps">
              {storySteps.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
              <p className="chapter-end">TALKING OPENED THE DOOR. LISTENING BUILT THE CAREER.</p>
            </div>
          </div>
          <a className="editorial-link" href={sitePath('/story/')}>Read Tony Clyburn&apos;s full story <span aria-hidden="true">→</span></a>
        </section>

        <section className="radio-transition" aria-label="Tony's path into radio">
          <Image src={`${basePath}/images/story/vintage-radio.webp`} alt="Close view of a vintage radio dial and ivory push buttons" fill sizes="100vw" />
          <div className="radio-overlay">
            <p>BEFORE STREAMING.<br />BEFORE SOCIAL MEDIA.<br /><em>THERE WAS THE VOICE.</em></p>
            <span>A voice can become part of somebody&apos;s morning, workday, or drive home. Tony never forgets there is a real person on the other side.</span>
          </div>
        </section>

        <section className="origin section" id="amjali">
          <div className="section-kicker">02 / The phrase</div>
          <div className="origin-intro">
            <h2>IT STARTED WITH TONY.<br /><em>IT BELONGS TO EVERYBODY.</em></h2>
            <p>Tony was saying “At My Job And Loving It” as a teenager. After he moved to Columbia in 1987, people began saying it back—and adding their own stories.</p>
          </div>
          <div className="origin-turn">
            <p className="era">COLUMBIA · AFTER 1987</p>
            <blockquote>PEOPLE STARTED<br />SAYING IT BACK.</blockquote>
            <p className="origin-reply">They&apos;d say, “At my job and loving it.” And then they&apos;d tell Tony what their job was.</p>
          </div>
          <div className="origin-story">
            <p className="large">A PHRASE BECAME A CONVERSATION.</p>
            <p>Maybe you know the feeling. You have work worth doing, people who count on you, and a reason you keep showing up.</p>
            <a className="editorial-link" href={sitePath('/amjali/')}>Explore At My Job And Loving It <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="brand-reveal">
          <div className="brand-artifact">
            <Image src={`${basePath}/images/story/amjali-logo.webp`} alt="AMJALI heart logo, an abbreviation for At My Job And Loving It" fill sizes="(max-width: 800px) 70vw, 32vw" />
          </div>
          <div>
            <p className="section-kicker">03 / The brand</p>
            <h2>THE PHRASE<br /><em>BECAME A BRAND.</em></h2>
            <p>Other people made the phrase their own. It is an invitation to say what you do, why it matters, and what keeps you at it.</p>
            <DymoLabel className="dymo-label-brand" />
            <a className="future-link" href={sitePath('/amjali/#collection')}><span>EXPLORE AMJALI</span><small>The conversation and collection</small></a>
          </div>
        </section>

        <section className="showing-up" id="showing-up">
          <div className="on-air-image">
            <Image src={`${basePath}/images/story/on-air-sign.webp`} alt="Red illuminated ON AIR sign" fill sizes="100vw" />
          </div>
          <div className="showing-content section">
            <p className="section-kicker">04 / Public service</p>
            <div>
              <h2>THE JOB IS<br />TO SHOW UP.</h2>
              <p className="showing-lede">People don&apos;t owe Tony their time.</p>
            </div>
            <div className="showing-details">
              <p>Every morning commute. Every afternoon at work. Every drive home. If somebody chooses to spend part of that time with him, Tony believes he owes them something in return.</p>
              <p>That same responsibility carries into a voiceover, an event, a speech, or an interview: respect the audience and be useful in the moment.</p>
            </div>
            <p className="showing-line">HIS JOB IS TO SHOW UP.</p>
          </div>
        </section>

        <section className="listen-first">
          <div className="listen-image">
            <Image src={`${basePath}/images/story/studio-microphone.webp`} alt="Close-up of a studio broadcast microphone" fill sizes="(max-width: 900px) 100vw, 54vw" />
          </div>
          <div className="listen-copy">
            <p className="section-kicker">05 / Curiosity</p>
            <h2>LISTEN<br /><em>FIRST.</em></h2>
            <p>You can talk with Tony about what you mean, who needs to hear it, and how it should feel.</p>
            <p>Then the performance is shaped around the message you actually intended—not a generic version of it.</p>
            <blockquote>THE RIGHT VOICE<br />STARTS WITH LISTENING.</blockquote>
          </div>
        </section>

        <section className="speaking section" id="speaking">
          <div className="speaking-heading">
            <p className="section-kicker">06 / Working together</p>
            <h2>YOUR PROJECT<br /><em>COMES FIRST.</em></h2>
            <p>Voiceover, live hosting, speaking, moderation, and podcast work are different formats. They share the same starting point: understand the people and the purpose.</p>
          </div>
          <p className="speaker-answer">A REAL CONVERSATION BEFORE THE MICROPHONE GOES ON.</p>
          <div className="speaking-themes">
            {projectPrinciples.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="custom-note">
            <p>No two projects need exactly the same voice.</p>
            <p>Tell Tony what you are working on. He will ask questions, help clarify the message, and meet the format where it is.</p>
            <a className="button button-primary" href={sitePath('/services/')}>Explore services</a>
          </div>
        </section>

        <section className="conversation section">
          <div className="conversation-photo">
            <Image src={`${basePath}/images/story/tony-listening-archive.webp`} alt="Archival photograph of Tony Clyburn interviewing a young community member" width={756} height={600} sizes="(max-width: 900px) 100vw, 36vw" />
          </div>
          <div>
            <p className="section-kicker">The invitation</p>
            <h2>WHAT DO YOU DO?<br /><em>WHY DOES IT MATTER?</em></h2>
            <p>That is where the best conversations begin. Tony wants the details other people overlook—and the part of the work that makes you say, “That&apos;s exactly how I feel.”</p>
          </div>
        </section>

        <InquiryForms />

        <section className="final-cta">
          <p>AT MY JOB AND LOVING IT™</p>
          <h2>YOU KNOW WHAT YOU WANT PEOPLE TO HEAR.<br />LET&apos;S FIND THE RIGHT WAY TO SAY IT.</h2>
          <blockquote>WHAT ARE YOU<br />WORKING ON?</blockquote>
          <div>
            <a className="button button-light" href={sitePath('/contact/#booking')}>Tell Tony about your project</a>
            <a className="button button-outline" href={sitePath('/contact/#your-story')}>Tell Tony your story</a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}

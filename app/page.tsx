import Image from 'next/image';
import type { Metadata } from 'next';
import AudioIntro from './components/AudioIntro';
import InquiryForms from './components/InquiryForms';
import JsonLd from './components/JsonLd';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { absoluteUrl, createPageMetadata, sitePath } from './lib/site';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const homeTitle = 'Tony Clyburn | Speaker & Broadcaster | At My Job And Loving It™';
const homeDescription = 'Tony Clyburn is a Columbia, South Carolina broadcaster, storyteller and speaker behind At My Job And Loving It™. Bring his curiosity to your audience.';

export const metadata: Metadata = createPageMetadata({ title: homeTitle, description: homeDescription });

const storySteps = [
  ['01', 'Working people', 'That is where Tony comes from.'],
  ['02', 'School announcements', 'He knew he could write. He knew he could perform. In junior high, he did the school announcements.'],
  ['03', 'Friday-night football', 'When there was a chance to carry equipment for the broadcasts, he carried it. Sometimes he missed his own games.'],
  ['04', 'A way in', 'It wasn’t glamorous. He wanted to be around the broadcast.'],
];

const speakingPrinciples = [
  ['Ask better questions', 'Do not assume you understand somebody’s work. Ask.'],
  ['Pay attention', 'The details people overlook are often the details that matter.'],
  ['Start with the room', 'Every organization has its own people, its own work, and its own story.'],
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
            <p className="eyebrow">A phrase. A practice. A life&apos;s work.</p>
            <h1><span>AT MY JOB</span><span>AND LOVING IT™</span></h1>
            <p className="hero-name">Tony Clyburn</p>
            <p className="hero-role">Broadcaster. Storyteller. Speaker.</p>
            <p className="hero-lede">For decades, Tony Clyburn has made a living talking with people. Somewhere along the way, he learned the most important part of the job was listening.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={sitePath('/contact/#booking')}>Bring Tony to your audience</a>
              <a className="button button-quiet" href={sitePath('/story/')}>Hear Tony&apos;s story <span aria-hidden="true">→</span></a>
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
            <p>Tony knew he could write. He knew he could perform. He just didn&apos;t know yet what to do with either one.</p>
          </div>
          <div className="working-layout">
            <figure className="archive-figure">
              <a className="archive-photo-link" href="https://931thelakefm.com/" target="_blank" rel="noreferrer" aria-label="Visit the 93.1 The Lake website">
                <Image src={`${basePath}/images/story/tony-clyburn-y95-radio-archive-clean.webp`} alt="Archival Y95 morning show photograph with Tony Clyburn seated on a radio set" width={1408} height={1112} sizes="(max-width: 800px) 100vw, 46vw" />
              </a>
              <figcaption className="archive-links"><a href="https://931thelakefm.com/" target="_blank" rel="noreferrer">93.1 The Lake ↗</a><a href="https://www.facebook.com/931thelake/" target="_blank" rel="noreferrer">Facebook ↗</a></figcaption>
            </figure>
            <div className="story-steps">
              {storySteps.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
              <p className="chapter-end">HE WANTED TO BE IN RADIO BADLY ENOUGH TO DO THE PART NOBODY SAW.</p>
            </div>
          </div>
          <a className="editorial-link" href={sitePath('/story/')}>Read Tony Clyburn&apos;s full story <span aria-hidden="true">→</span></a>
        </section>

        <section className="radio-transition" aria-label="Tony's path into radio">
          <Image src={`${basePath}/images/story/vintage-radio.webp`} alt="Close view of a vintage radio dial and ivory push buttons" fill sizes="100vw" />
          <div className="radio-overlay">
            <p>BEFORE STREAMING.<br />BEFORE SOCIAL MEDIA.<br /><em>THERE WAS THE VOICE.</em></p>
            <span>Tony loved what radio could do. One person could sit behind a microphone and become part of thousands of different days—at home, in the car, at work, on the way somewhere. People who might never meet could still share the same moment.</span>
          </div>
        </section>

        <section className="origin section" id="amjali">
          <div className="section-kicker">02 / The phrase</div>
          <div className="origin-intro">
            <h2>BEFORE IT WAS A BRAND,<br /><em>IT WAS JUST SOMETHING TONY SAID.</em></h2>
            <p>Tony was saying “At My Job And Loving It” before he ever came to Columbia. He remembers saying it as a teenager. But after he moved here in 1987, something happened he hadn&apos;t planned on.</p>
          </div>
          <div className="origin-turn">
            <p className="era">COLUMBIA · AFTER 1987</p>
            <blockquote>PEOPLE STARTED<br />SAYING IT BACK.</blockquote>
            <p className="origin-reply">They&apos;d say, “At my job and loving it.” And then they&apos;d tell Tony what their job was.</p>
          </div>
          <div className="origin-story">
            <p className="large">A PHRASE BECAME A CONVERSATION.</p>
            <p>People told Tony what they did. Those conversations led to relationships. People shared what they knew. Tony learned about their work, their businesses, and their lives.</p>
          </div>
        </section>

        <section className="brand-reveal">
          <div className="brand-artifact">
            <Image src={`${basePath}/images/story/amjali-logo.webp`} alt="AMJALI heart logo, an abbreviation for At My Job And Loving It" fill sizes="(max-width: 800px) 70vw, 32vw" />
          </div>
          <div>
            <p className="section-kicker">03 / The brand</p>
            <h2>THE PHRASE<br /><em>BECAME A BRAND.</em></h2>
            <p>Other people made the phrase their own. It gave them a way to tell Tony something about themselves.</p>
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
              <h2>THE JOB IS<br />TO SHOW UP.</h2>
              <p className="showing-lede">People don&apos;t owe Tony their time.</p>
            </div>
            <div className="showing-details">
              <p>Every morning commute. Every afternoon at work. Every drive home. If somebody chooses to spend part of that time with him, Tony believes he owes them something in return.</p>
              <p>He has shown up through ordinary days, hurricanes, fires, September 11, wars, and moments nobody expected. Eventually, a voice on the radio can become something more familiar. Tony calls it becoming part of the family.</p>
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
            <p>Tony has spent a career asking questions.</p>
            <p>The most interesting person in the room is not always the person holding the microphone.</p>
            <blockquote>I WANT TO KNOW<br />YOUR STORY.</blockquote>
          </div>
        </section>

        <section className="speaking section" id="speaking">
          <div className="speaking-heading">
            <p className="section-kicker">06 / Speaking</p>
            <h2>YOUR STORY<br /><em>COMES FIRST.</em></h2>
            <p>Ask Tony what he wants someone to remember after hearing him speak. He won&apos;t tell you he hopes they remember his story.</p>
          </div>
          <p className="speaker-answer">HE HOPES THEY REMEMBER THAT HE WAS INTERESTED IN THEIRS.</p>
          <div className="speaking-themes">
            {speakingPrinciples.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="custom-note">
            <p>Tony doesn&apos;t believe every room needs the same speech.</p>
            <p>Every organization has its own people. Its own work. Its own story. That&apos;s where he starts.</p>
            <a className="button button-primary" href={sitePath('/speaking/')}>Explore speaking engagements</a>
          </div>
        </section>

        <section className="credibility" aria-label="Tony Clyburn credentials">
          <p>ON THE AIR · IN THE COMMUNITY</p>
          <div><strong>Afternoon host</strong><span>93.1 The Lake</span></div>
          <div><strong>Radio Personality of the Year</strong><span>South Carolina Broadcasters Association · 2006</span></div>
        </section>

        <section className="conversation section">
          <div className="conversation-photo">
            <Image src={`${basePath}/images/story/tony-listening-archive.webp`} alt="Archival photograph of Tony Clyburn interviewing a young community member" width={756} height={600} sizes="(max-width: 900px) 100vw, 36vw" />
          </div>
          <div>
            <p className="section-kicker">Along the way</p>
            <h2>TONY KEPT<br /><em>ASKING QUESTIONS.</em></h2>
            <p>What do you do? How does it work? Why does it work that way? Why do you care about it? Tony wants the details other people overlook.</p>
          </div>
        </section>

        <InquiryForms />

        <section className="final-cta">
          <p>AT MY JOB AND LOVING IT™</p>
          <h2>TONY HAS SPENT A CAREER<br />ASKING PEOPLE ABOUT THEIR STORY.</h2>
          <blockquote>WHAT&apos;S YOURS?</blockquote>
          <div>
            <a className="button button-light" href="#booking">Bring Tony to your audience</a>
            <a className="button button-outline" href={sitePath('/contact/#your-story')}>Tell Tony your story</a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}

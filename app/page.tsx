import Image from 'next/image';
import type { Metadata } from 'next';
import AudioIntro from './components/AudioIntro';
import DymoLabel from './components/DymoLabel';
import JsonLd from './components/JsonLd';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import { absoluteUrl, basePath, createPageMetadata, sitePath } from './lib/site';

const homeTitle = 'At My Job And Loving It™ | Stories About Work';
const homeDescription = 'At My Job And Loving It™ asks one simple question: what do you do, and why do you love it? Share your story and follow the podcast hosted by Tony Clyburn.';

export const metadata: Metadata = createPageMetadata({ title: homeTitle, description: homeDescription });

const conversationSteps = [
  ['01', 'What do you do?', 'Start with the work—the craft, calling, shift, business, or role that is yours.'],
  ['02', 'Why do you love it?', 'Tell us about the people, purpose, challenge, or moment that keeps you showing up.'],
  ['03', 'What can others learn?', 'The details of one person’s work can change how somebody else sees the world.'],
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
        about: { '@id': `${absoluteUrl('/')}#amjali-brand` },
        inLanguage: 'en-US',
      }} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Stories about the work people love</p>
            <DymoLabel as="h1" className="dymo-label-hero" />
            <p className="home-hero-question">DO YOU LOVE<br />WHAT YOU DO?</p>
            <p className="hero-lede">Tell us what you do, why it matters, and what the work has taught you. Selected stories may become part of the At My Job And Loving It™ podcast and conversation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={sitePath('/contact/#your-story')}>Tell Us Your Story</a>
              <a className="button button-quiet" href={sitePath('/podcast/')}>Explore the Podcast <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src={`${basePath}/images/story/studio-microphone.webp`}
              alt="Close-up of a studio broadcast microphone"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <p><span>THE QUESTION STARTS IT</span><span>YOUR STORY MAKES IT YOURS</span></p>
          </div>
          <div className="hero-ticker" aria-hidden="true">WHAT DO YOU DO? · WHY DO YOU LOVE IT? · WHAT HAS THE WORK TAUGHT YOU?</div>
        </section>

        <section className="working section" id="conversation-concept">
          <div className="section-kicker">01 / The conversation</div>
          <div className="working-heading">
            <h2>EVERY JOB HAS<br /><em>A STORY INSIDE IT.</em></h2>
            <p>The phrase is an invitation, not a claim that every day is easy. It opens the door to the work people choose, the work they grew into, and the reasons they keep at it.</p>
          </div>
          <div className="speaking-themes">
            {conversationSteps.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <a className="editorial-link" href={sitePath('/contact/#your-story')}>Add your story to the conversation <span aria-hidden="true">→</span></a>
        </section>

        <section className="listen-first" id="podcast-preview">
          <div className="listen-image">
            <Image src={`${basePath}/images/story/vintage-radio.webp`} alt="Close view of a vintage radio dial and ivory push buttons" fill sizes="(max-width: 900px) 100vw, 54vw" />
          </div>
          <div className="listen-copy">
            <p className="section-kicker">02 / The podcast</p>
            <h2>REAL WORK.<br /><em>REAL VOICES.</em></h2>
            <p>At My Job And Loving It™ is becoming a podcast about people, purpose, and the stories hiding in plain sight at work.</p>
            <p className="podcast-coming-soon">Episodes are coming soon.</p>
            <a className="editorial-link" href={sitePath('/podcast/')}>Explore the podcast <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="working section" id="host">
          <div className="section-kicker">03 / Meet the host</div>
          <div className="working-heading">
            <h2>TONY CLYBURN.<br /><em>LISTENING FIRST.</em></h2>
            <div>
              <p className="hero-role">Broadcaster. Interviewer. Storyteller.</p>
              <p>For decades, Tony has made a living talking with people. He learned that the most important part of the job is listening.</p>
            </div>
          </div>
          <div className="working-layout host-layout">
            <figure className="archive-figure">
              <Image src={`${basePath}/images/story/tony-hero-columbia.webp`} alt="Tony Clyburn smiling in a suit with the Columbia skyline behind him" width={1600} height={2000} sizes="(max-width: 800px) 100vw, 46vw" />
              <figcaption>Tony Clyburn · Columbia, South Carolina</figcaption>
            </figure>
            <div className="host-copy">
              <p>Tony is the afternoon host at 93.1 The Lake and was named Radio Personality of the Year by the South Carolina Broadcasters Association in 2006.</p>
              <p>His curiosity connects broadcasting, community, and this new conversation about the work people love.</p>
              <AudioIntro />
              <a className="editorial-link" href={sitePath('/story/')}>Read Tony’s story <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="speaking section" id="tony-services">
          <div className="speaking-heading">
            <p className="section-kicker">04 / Tony’s professional work</p>
            <h2>A VOICE FOR<br /><em>THE RIGHT MOMENT.</em></h2>
            <p>Alongside the AMJALI conversation, Tony works in voiceover, live hosting, speaking, moderation, and podcast collaboration.</p>
          </div>
          <p className="speaker-answer">THE FORMAT CHANGES. LISTENING STILL COMES FIRST.</p>
          <div className="custom-note">
            <p>Planning a recording, event, or conversation?</p>
            <p>Explore the professional services, or learn more about Tony’s speaking approach.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={sitePath('/services/')}>Explore Tony’s services</a>
              <a className="button button-quiet" href={sitePath('/speaking/')}>Speaking and moderation <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="brand-reveal" id="collection-preview">
          <div className="brand-artifact">
            <Image src={`${basePath}/images/story/amjali-logo.webp`} alt="AMJALI heart logo, an abbreviation for At My Job And Loving It" fill sizes="(max-width: 800px) 70vw, 32vw" />
          </div>
          <div>
            <p className="section-kicker">05 / Collection · Coming Soon</p>
            <h2>WEAR THE PHRASE.<br /><em>MAKE IT YOURS.</em></h2>
            <p>The At My Job And Loving It™ collection is taking shape. No products, prices, or release dates are being announced yet.</p>
            <DymoLabel className="dymo-label-brand" />
            <a className="future-link" href={sitePath('/amjali/#collection')}><span>EXPLORE THE COLLECTION</span><small>See what is coming together</small></a>
          </div>
        </section>

        <section className="final-cta">
          <p>AT MY JOB AND LOVING IT™</p>
          <h2>THE NEXT STORY COULD BE YOURS.</h2>
          <blockquote>WHAT DO<br />YOU DO?</blockquote>
          <div>
            <a className="button button-light" href={sitePath('/contact/#your-story')}>Tell Us Your Story</a>
            <a className="button button-outline" href={sitePath('/podcast/')}>Explore the Podcast</a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}

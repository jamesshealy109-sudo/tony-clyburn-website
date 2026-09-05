import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import { absoluteUrl, basePath, createPageMetadata, sitePath } from '@/app/lib/site';

const title = 'At My Job And Loving It™ Podcast | Coming Soon';
const description = 'The At My Job And Loving It™ podcast will share real stories about work, purpose, and the people who keep showing up. Hosted by Tony Clyburn.';

export const metadata: Metadata = createPageMetadata({ title, description, path: '/podcast/' });

export default function PodcastPage() {
  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${absoluteUrl('/podcast/')}#webpage`,
        url: absoluteUrl('/podcast/'),
        name: title,
        description,
        isPartOf: { '@id': `${absoluteUrl('/')}#website` },
        about: { '@id': `${absoluteUrl('/')}#amjali-brand` },
        inLanguage: 'en-US',
      }} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />

      <div id="content">
        <section className="subpage-hero podcast-page-hero">
          <div className="subpage-hero-copy">
            <p className="eyebrow">At My Job And Loving It™ · The podcast</p>
            <h1>REAL WORK.<br /><em>REAL VOICES.</em></h1>
            <p className="subpage-lede">A podcast about what people do, why they love it, and what the rest of us can learn from listening.</p>
            <a className="button button-primary" href={sitePath('/contact/#your-story')}>Tell Us Your Story</a>
          </div>
          <div className="subpage-hero-image">
            <Image src={`${basePath}/images/story/studio-microphone.webp`} alt="Close-up of a studio broadcast microphone" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </section>

        <section className="subpage-section section">
          <p className="section-kicker">The idea</p>
          <div className="subpage-intro-grid">
            <h2>ONE QUESTION<br /><em>OPENS THE DOOR.</em></h2>
            <div className="prose-stack">
              <p>What do you do—and why do you love it?</p>
              <p>Every answer reveals something about craft, purpose, community, or the road somebody took to get there. Those are the stories this podcast is being built to hold.</p>
              <p className="large-line">The work is specific. The lessons travel.</p>
            </div>
          </div>
        </section>

        <section className="listen-first podcast-host">
          <div className="listen-image">
            <Image src={`${basePath}/images/story/tony-listening-archive.webp`} alt="Tony Clyburn listening during a community interview" fill sizes="(max-width: 900px) 100vw, 54vw" />
          </div>
          <div className="listen-copy">
            <p className="section-kicker">Meet the host</p>
            <h2>TONY CLYBURN.<br /><em>LISTENING FIRST.</em></h2>
            <p>Broadcaster, interviewer, and storyteller Tony Clyburn has spent decades asking people about what they know and why it matters.</p>
            <p>The microphone starts the conversation. Curiosity is what carries it.</p>
            <a className="editorial-link" href={sitePath('/story/')}>Read Tony’s story <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="subpage-band podcast-empty-state">
          <div className="section">
            <p className="section-kicker">The feed</p>
            <h2>EPISODES ARE<br /><em>COMING SOON.</em></h2>
            <p>Episodes are coming soon. No guests, release date, or listening platforms are being announced yet.</p>
            <a className="button button-light" href={sitePath('/contact/#your-story')}>Share a Story for Consideration</a>
          </div>
        </section>

        <section className="final-cta">
          <p>AT MY JOB AND LOVING IT™</p>
          <h2>THE BEST CONVERSATIONS START WITH SOMETHING REAL.</h2>
          <blockquote>WHAT&apos;S<br />YOURS?</blockquote>
          <div>
            <a className="button button-light" href={sitePath('/contact/#your-story')}>Tell Us Your Story</a>
            <a className="button button-outline" href={sitePath('/amjali/')}>About AMJALI</a>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

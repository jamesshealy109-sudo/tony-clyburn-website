import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import { absoluteUrl, basePath, createPageMetadata, sitePath } from '@/app/lib/site';

const title = "Tony Clyburn's Story | At My Job And Loving It™";
const description = 'Follow Tony Clyburn from school announcements and early radio work to Columbia, 93.1 The Lake and the story behind At My Job And Loving It™.';

export const metadata: Metadata = createPageMetadata({ title, description, path: '/story/' });

export default function StoryPage() {
  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${absoluteUrl('/story/')}#profile`,
        url: absoluteUrl('/story/'),
        name: title,
        description,
        mainEntity: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
        isPartOf: { '@id': `${absoluteUrl('/')}#website` },
        inLanguage: 'en-US',
      }} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />
      <div id="content">
        <section className="subpage-hero story-page-hero">
          <div className="subpage-hero-copy">
            <p className="eyebrow">The story behind the voice</p>
            <h1>TONY CLYBURN&apos;S<br /><em>STORY.</em></h1>
            <p className="subpage-lede">Before At My Job And Loving It™ became a brand, before Columbia started saying it back, Tony Clyburn was a kid looking for a way into radio.</p>
          </div>
          <div className="subpage-hero-image archive-hero-image">
            <Image src={`${basePath}/images/story/tony-clyburn-y95-radio-archive-clean.webp`} alt="Archival photograph of Tony Clyburn seated on a Y95 radio set" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </section>

        <section className="subpage-section section">
          <p className="section-kicker">The beginning</p>
          <div className="subpage-intro-grid">
            <h2>IT STARTED WITH<br /><em>WORKING PEOPLE.</em></h2>
            <div className="prose-stack">
              <p>Tony knew he could write. He knew he could perform. In junior high, school announcements gave those instincts somewhere to go.</p>
              <p>Later, when he had a chance to carry equipment for Friday-night football broadcasts, he carried it—even when that meant missing his own games. The work was not glamorous. It was a way to be near the broadcast and learn how it happened.</p>
              <p>He wanted to be in radio badly enough to do the part nobody saw.</p>
            </div>
          </div>
        </section>

        <section className="story-image-band">
          <Image src={`${basePath}/images/story/vintage-radio.webp`} alt="Close view of a vintage radio dial and ivory push buttons" fill sizes="100vw" />
          <div><p>ONE VOICE COULD BECOME PART OF THOUSANDS OF DIFFERENT DAYS.</p></div>
        </section>

        <section className="subpage-section section">
          <p className="section-kicker">Columbia · 1987</p>
          <div className="story-chapter">
            <h2>PEOPLE STARTED<br /><em>SAYING IT BACK.</em></h2>
            <div className="prose-stack">
              <p>Tony remembers saying “At My Job And Loving It” as a teenager, long before he came to Columbia. After moving here in 1987, the phrase began to live beyond him.</p>
              <p>Listeners would say it back—and then tell Tony what their job was. A phrase became a conversation. Those conversations became relationships. People shared what they knew, and Tony learned about their work, their businesses and their lives.</p>
              <p>The phrase did not become meaningful because Tony repeated it. It became meaningful because other people made it their own.</p>
            </div>
          </div>
        </section>

        <section className="subpage-band">
          <div className="section story-service-grid">
            <div><p className="section-kicker">Radio as service</p><h2>THE JOB IS<br /><em>TO SHOW UP.</em></h2></div>
            <div className="prose-stack">
              <p>People do not owe a broadcaster their time. If somebody chooses to spend part of a commute, a workday or a drive home listening, Tony believes the voice on the other side owes them something in return.</p>
              <p>He has shown up through ordinary days and the days nobody expected—through storms, fires, September 11, wars and moments that changed the conversation. Over time, a voice on the radio can become familiar. Tony calls it becoming part of the family.</p>
              <p>Today, Tony Clyburn is the afternoon host at 93.1 The Lake. In 2006, the South Carolina Broadcasters Association named him Radio Personality of the Year.</p>
            </div>
          </div>
        </section>

        <section className="subpage-section section">
          <div className="subpage-two-column">
            <div className="story-portrait"><Image src={`${basePath}/images/story/tony-listening-archive.webp`} alt="Tony Clyburn interviewing a young community member" width={756} height={600} sizes="(max-width: 900px) 100vw, 42vw" /></div>
            <div className="prose-stack"><p className="section-kicker">Curiosity and community</p><h2>LISTEN<br /><em>FIRST.</em></h2><p>Tony has spent a career asking questions. What do you do? How does it work? Why do you care about it? The most interesting person in the room is not always the person holding the microphone.</p><p>That belief connects his broadcasting, his community work and his approach to speaking. He starts with the people in front of him.</p><a className="editorial-link" href={sitePath('/speaking/')}>Explore Tony Clyburn&apos;s speaking approach <span aria-hidden="true">→</span></a></div>
          </div>
        </section>

        <section className="final-cta"><p>AT MY JOB AND LOVING IT™</p><h2>THE NEXT CONVERSATION STARTS WITH A QUESTION.</h2><blockquote>WHAT&apos;S YOURS?</blockquote><div><a className="button button-light" href={sitePath('/contact/#your-story')}>Tell Tony your story</a><a className="button button-outline" href={sitePath('/speaking/')}>Bring Tony to your audience</a></div></section>
      </div>
      <SiteFooter />
    </main>
  );
}

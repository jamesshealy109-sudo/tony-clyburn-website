import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import { absoluteUrl, basePath, createPageMetadata, sitePath } from '@/app/lib/site';

const title = 'Book Tony Clyburn | Speaker, Broadcaster & Storyteller';
const description = 'Bring Tony Clyburn’s broadcast-honed curiosity to your event. Explore customized speaking engagements for companies, conferences and communities.';

export const metadata: Metadata = createPageMetadata({ title, description, path: '/speaking/' });

const themes = [
  ['Work, purpose and pride', 'A grounded conversation about the work people do, the people it serves and the meaning that can be found in showing up well.'],
  ['Communication that begins with listening', 'What decades behind a microphone taught Tony about attention, trust and asking the question that opens a real conversation.'],
  ['Storytelling and human connection', 'How personal stories create recognition across teams, organizations and communities.'],
  ['Community and service', 'Why a public voice carries a responsibility to be present, useful and connected to the people it reaches.'],
];

const audiences = ['Corporate and workplace events', 'Leadership and employee gatherings', 'Associations and conferences', 'Community and civic organizations', 'Moderated conversations and custom programs'];

const faqs = [
  ['What kinds of events does Tony Clyburn speak at?', 'Tony’s approach can fit corporate events, associations, conferences, workplace and leadership gatherings, and community organizations. Share the purpose of your event so the right format can be discussed.'],
  ['Does Tony customize his speaking engagements?', 'Yes. Tony starts by learning about the people in the room, their work and what the organization wants the audience to carry forward. He does not begin with a canned keynote.'],
  ['Where is Tony Clyburn based?', 'Tony Clyburn is based in West Columbia, South Carolina, in the Columbia area.'],
  ['Does Tony travel for speaking engagements?', 'Include the event location in your inquiry. Travel and availability are confirmed for each engagement rather than assumed.'],
  ['How do I book Tony Clyburn?', 'Send a booking inquiry with your date, location, audience and goals. Tony’s team can then follow up about fit, availability and next steps.'],
  ['What does “At My Job And Loving It” mean?', 'It began as something Tony said. People started saying it back and telling him what they did. The phrase became an invitation to talk about work, pride, purpose and the stories behind a job.'],
];

export default function SpeakingPage() {
  return (
    <main>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${absoluteUrl('/speaking/')}#webpage`,
          url: absoluteUrl('/speaking/'),
          name: title,
          description,
          isPartOf: { '@id': `${absoluteUrl('/')}#website` },
          about: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
          inLanguage: 'en-US',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absoluteUrl('/speaking/')}#speaking-service`,
          name: 'Tony Clyburn speaking engagements',
          description: 'Customized speaking engagements centered on storytelling, communication, work, service and human connection.',
          provider: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
          url: absoluteUrl('/speaking/'),
        },
      ]} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />

      <div id="content">
        <section className="subpage-hero subpage-hero-split">
          <div className="subpage-hero-copy">
            <p className="eyebrow">Tony Clyburn · Speaking</p>
            <h1>BRING TONY<br /><em>INTO THE ROOM.</em></h1>
            <p className="subpage-lede">A broadcaster learns quickly: the room changes everything. Tony Clyburn brings decades of conversation, curiosity and connection to audiences in South Carolina and beyond.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={sitePath('/contact/#booking')}>Start a booking inquiry</a>
              <a className="button button-quiet" href="#approach">See Tony&apos;s approach</a>
            </div>
          </div>
          <div className="subpage-hero-image">
            <Image src={`${basePath}/images/story/tony-hero-columbia.webp`} alt="Tony Clyburn smiling in a suit with the Columbia skyline behind him" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </section>

        <section className="subpage-section section" id="approach">
          <p className="section-kicker">The approach</p>
          <div className="subpage-intro-grid">
            <h2>NO CANNED KEYNOTE.<br /><em>EVERY AUDIENCE IS DIFFERENT.</em></h2>
            <div className="prose-stack">
              <p>Tony does not arrive assuming he already understands your people. He asks about the room first: who will be there, what work they do, what they are carrying and what you hope they remember.</p>
              <p>That preparation shapes the conversation. The result is an engagement rooted in Tony&apos;s own experience, but built to recognize the audience in front of him.</p>
              <a className="editorial-link" href={sitePath('/story/')}>Read the story behind Tony&apos;s approach <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="subpage-band">
          <div className="section">
            <p className="section-kicker">Themes</p>
            <h2>WHAT TONY<br /><em>CAN OPEN UP.</em></h2>
            <div className="content-list">
              {themes.map(([heading, copy], index) => <article key={heading}><span>0{index + 1}</span><h3>{heading}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="subpage-section section">
          <div className="subpage-two-column">
            <div>
              <p className="section-kicker">The audience</p>
              <h2>BUILT FOR<br /><em>REAL ROOMS.</em></h2>
            </div>
            <div className="prose-stack">
              <p>From radio audiences across the Midlands to people gathered around a shared purpose, Tony&apos;s work begins with attention. Based in West Columbia, South Carolina, he welcomes inquiries from organizations both within and beyond the Columbia area.</p>
              <ul className="plain-list">{audiences.map((audience) => <li key={audience}>{audience}</li>)}</ul>
              <p>Formats and scope are discussed around the event. No rates are published because the conversation begins with what the audience needs.</p>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section">
            <p className="section-kicker">Booking process</p>
            <h2>START WITH<br /><em>THE ROOM.</em></h2>
            <ol className="process-grid">
              <li><span>01</span><h3>Share the context</h3><p>Send the date, location, audience, event format and the experience you want to create.</p></li>
              <li><span>02</span><h3>Talk about fit</h3><p>Tony&apos;s team follows up about availability, goals and the shape of the engagement.</p></li>
              <li><span>03</span><h3>Build the conversation</h3><p>Tony learns about the people in the room and prepares around what matters to them.</p></li>
            </ol>
          </div>
        </section>

        <section className="faq-section section" aria-labelledby="faq-title">
          <p className="section-kicker">Questions people ask</p>
          <h2 id="faq-title">SPEAKING<br /><em>FAQ.</em></h2>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="final-cta">
          <p>TONY CLYBURN · BROADCASTER · STORYTELLER · SPEAKER</p>
          <h2>TELL TONY ABOUT THE ROOM.</h2>
          <blockquote>LET&apos;S TALK.</blockquote>
          <div><a className="button button-light" href={sitePath('/contact/#booking')}>Book Tony Clyburn</a></div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from 'next';
import InquiryForms from '@/app/components/InquiryForms';
import JsonLd from '@/app/components/JsonLd';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import { absoluteUrl, createPageMetadata, sitePath } from '@/app/lib/site';

const title = 'Contact Tony Clyburn | Speaking & Story Inquiries';
const description = 'Contact Tony Clyburn for speaking and booking inquiries, general questions, or to share an At My Job And Loving It™ story.';

export const metadata: Metadata = createPageMetadata({ title, description, path: '/contact/' });

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${absoluteUrl('/contact/')}#webpage`,
        url: absoluteUrl('/contact/'),
        name: title,
        description,
        isPartOf: { '@id': `${absoluteUrl('/')}#website` },
        about: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
        inLanguage: 'en-US',
      }} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />
      <div id="content">
        <section className="contact-hero">
          <p className="eyebrow">Tony Clyburn · West Columbia, South Carolina</p>
          <h1>START A<br /><em>CONVERSATION.</em></h1>
          <p>Booking Tony, asking a general question and sharing your own story are different conversations. Choose the path that fits.</p>
        </section>

        <section className="contact-paths section" aria-label="Ways to contact Tony Clyburn">
          <article><span>01</span><h2>Booking Tony</h2><p>Planning a corporate event, conference, association gathering or community program? Tell Tony&apos;s team about the room.</p><a href="#booking">Start a booking inquiry →</a></article>
          <article><span>02</span><h2>General contact</h2><p>For a direct general inquiry, call Tony Clyburn in West Columbia, South Carolina.</p><a href="tel:+18032919844">803.291.9844 →</a></article>
          <article><span>03</span><h2>Share your story</h2><p>What do you do—and why do you love it? Add your voice to the At My Job And Loving It™ conversation.</p><a href="#your-story">Tell Tony your story →</a></article>
        </section>

        <InquiryForms />

        <section className="contact-note section">
          <p className="section-kicker">Before you send</p>
          <h2>HELP TONY<br /><em>UNDERSTAND THE ROOM.</em></h2>
          <p>For speaking inquiries, include your date, location, audience size, event type and what you want people to experience. Travel and availability are confirmed for each engagement.</p>
          <a className="editorial-link" href={sitePath('/speaking/')}>Learn about Tony&apos;s speaking engagements <span aria-hidden="true">→</span></a>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}


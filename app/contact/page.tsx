import type { Metadata } from 'next';
import InquiryForms from '@/app/components/InquiryForms';
import JsonLd from '@/app/components/JsonLd';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import { absoluteUrl, createPageMetadata, sitePath } from '@/app/lib/site';

const title = 'Tell Your Story or Contact Tony | At My Job And Loving It™';
const description = 'Share the story of work you love with At My Job And Loving It™, or contact Tony Clyburn about a professional project.';

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
        about: { '@id': `${absoluteUrl('/')}#amjali-brand` },
        inLanguage: 'en-US',
      }} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />
      <div id="content">
        <section className="contact-hero">
          <p className="eyebrow">At My Job And Loving It™</p>
          <h1>TELL US<br /><em>YOUR STORY.</em></h1>
          <p>Share the work you love with the AMJALI conversation, or contact Tony about a professional project. Choose the path that fits.</p>
        </section>

        <section className="contact-paths section" aria-label="Story and professional contact options">
          <article><span>01</span><h2>Share your story</h2><p>What do you do—and why do you love it? Add your voice to the At My Job And Loving It™ conversation.</p><a href="#your-story">Tell us your story →</a></article>
          <article><span>02</span><h2>Start a project</h2><p>Voiceover, commercial or business audio, emcee work, speaking, moderation and podcast collaboration start here.</p><a href="#booking">Start a project inquiry →</a></article>
          <article><span>03</span><h2>General contact</h2><p>For a direct general inquiry, call Tony Clyburn in West Columbia, South Carolina.</p><a href="tel:+18032919844">803.291.9844 →</a></article>
        </section>

        <InquiryForms />

        <section className="contact-note section">
          <p className="section-kicker">Before you send</p>
          <h2>HELP TONY<br /><em>UNDERSTAND THE ROOM.</em></h2>
          <p>Share the audience, timing, setting, and what you want people to hear, feel, or understand. Tony can help clarify the rest with you.</p>
          <a className="editorial-link" href={sitePath('/services/')}>Review Tony&apos;s services <span aria-hidden="true">→</span></a>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

import Image from 'next/image';
import type { Metadata } from 'next';
import DymoLabel from '@/app/components/DymoLabel';
import JsonLd from '@/app/components/JsonLd';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import { absoluteUrl, basePath, createPageMetadata, sitePath } from '@/app/lib/site';

const title = 'At My Job And Loving It™ | What Do You Do?';
const description = 'At My Job And Loving It™ is an invitation to share what you do, why it matters, and what makes the work yours.';

export const metadata: Metadata = createPageMetadata({ title, description, path: '/amjali/' });

const collectionCategories = ['T-shirts', 'Hoodies', 'Hats', 'Stickers'];

export default function AmjaliPage() {
  return (
    <main>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${absoluteUrl('/amjali/')}#webpage`,
          url: absoluteUrl('/amjali/'),
          name: title,
          description,
          isPartOf: { '@id': `${absoluteUrl('/')}#website` },
          about: { '@id': `${absoluteUrl('/amjali/')}#brand` },
          inLanguage: 'en-US',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Brand',
          '@id': `${absoluteUrl('/amjali/')}#brand`,
          name: 'At My Job And Loving It',
          alternateName: 'AMJALI',
          description,
          founder: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
        },
      ]} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />

      <div id="content">
        <section className="amjali-hero">
          <p className="eyebrow">A phrase for the work that is yours</p>
          <DymoLabel as="h1" className="dymo-label-hero" />
          <p className="amjali-question">WHAT DO YOU DO?</p>
          <p className="subpage-lede">Say the phrase. Then tell the story that makes it true for you.</p>
          <a className="button button-primary" href={sitePath('/contact/#your-story')}>Tell Tony your story</a>
        </section>

        <section className="subpage-section section">
          <p className="section-kicker">The origin</p>
          <div className="subpage-intro-grid">
            <h2>TONY STARTED<br /><em>SAYING IT.</em></h2>
            <div className="prose-stack">
              <p>Tony used “At My Job And Loving It” for years. Then people began saying it back.</p>
              <p>They did not stop at the phrase. They told Tony what their job was, who counted on them, and why the work mattered.</p>
              <p className="large-line">Other people made it theirs.</p>
            </div>
          </div>
        </section>

        <section className="amjali-conversation">
          <div className="amjali-mark">
            <Image src={`${basePath}/images/story/amjali-logo.webp`} alt="AMJALI heart mark for At My Job And Loving It" fill sizes="(max-width: 800px) 70vw, 34vw" />
          </div>
          <div>
            <p className="section-kicker">The conversation</p>
            <h2>THE BEST PART IS<br /><em>WHAT COMES NEXT.</em></h2>
            <blockquote>WHAT DO YOU DO—<br />AND WHY DO YOU LOVE IT?</blockquote>
            <p>The phrase is not limited to Tony&apos;s job. It belongs to the person saying it and the story they choose to tell.</p>
            <a className="editorial-link" href={sitePath('/contact/#your-story')}>Tell Tony your story <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="subpage-band amjali-status">
          <div className="section">
            <p className="section-kicker">Where the idea stands</p>
            <div className="status-grid">
              <article><span>LIVE NOW</span><h2>The conversation</h2><p>Share what you do and why you love it. Tony remains the person listening, asking questions, and keeping the conversation moving.</p></article>
              <article><span>IN DEVELOPMENT</span><h2>What it could become</h2><p>A collection, audio ideas, listener stories, and broader community possibilities are being explored. None are being presented as launched programs.</p></article>
            </div>
          </div>
        </section>

        <section className="collection-preview section" id="collection" aria-labelledby="collection-title">
          <div className="collection-heading">
            <p className="section-kicker">Collection preview</p>
            <h2 id="collection-title">THE COLLECTION IS<br /><em>COMING TOGETHER.</em></h2>
            <p>At My Job And Loving It™ stays front and center. What the phrase means is up to the person wearing it.</p>
          </div>
          <div className="collection-card">
            <DymoLabel className="dymo-label-brand" />
            <ul>{collectionCategories.map((category) => <li key={category}>{category}</li>)}</ul>
            <small>THE TONY CLYBURN COLLECTION</small>
            <p>No products, prices, or release dates are being announced yet.</p>
          </div>
        </section>

        <section className="final-cta">
          <p>AT MY JOB AND LOVING IT™</p>
          <h2>THE PHRASE IS YOURS. THE STORY IS YOURS.</h2>
          <blockquote>WHAT DO<br />YOU DO?</blockquote>
          <div>
            <a className="button button-light" href={sitePath('/contact/#your-story')}>Tell Tony your story</a>
            <a className="button button-outline" href={sitePath('/story/')}>Meet Tony</a>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

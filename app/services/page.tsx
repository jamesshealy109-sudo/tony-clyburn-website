import type { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import SiteFooter from '@/app/components/SiteFooter';
import SiteHeader from '@/app/components/SiteHeader';
import { projectInquiryPath, projectServices } from '@/app/lib/projectServices';
import { absoluteUrl, basePath, createPageMetadata, sitePath } from '@/app/lib/site';

const title = 'Tony Clyburn Services | Voiceover, Hosting, Audio & Speaking';
const description = 'Work with Tony Clyburn on voiceover, commercial voice, business audio, emcee and hosting, speaking, moderating, and podcast or audio projects.';

export const metadata: Metadata = createPageMetadata({ title, description, path: '/services/' });

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${absoluteUrl('/services/')}#webpage`,
          url: absoluteUrl('/services/'),
          name: title,
          description,
          isPartOf: { '@id': `${absoluteUrl('/')}#website` },
          about: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
          inLanguage: 'en-US',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          '@id': `${absoluteUrl('/services/')}#services`,
          name: 'Tony Clyburn professional services',
          itemListElement: projectServices.map(({ label, detail }, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: label,
              description: detail,
              provider: { '@id': `${absoluteUrl('/')}#tony-clyburn` },
            },
          })),
        },
      ]} />
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />

      <div id="content">
        <section className="contact-hero services-hero">
          <p className="eyebrow">Work with Tony</p>
          <h1>START WITH<br /><em>THE PROJECT.</em></h1>
          <p>Tell Tony what you are trying to accomplish. He will listen, ask questions, and help find the right voice, format, or role.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={sitePath('/contact/#booking')}>Start a project</a>
            <a className="button button-quiet" href="#services-list">Find the right service <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="subpage-section section" id="services-list" aria-labelledby="services-title">
          <div className="subpage-intro-grid">
            <div>
              <p className="section-kicker">Services</p>
              <h2 id="services-title">WHAT ARE YOU<br /><em>WORKING ON?</em></h2>
            </div>
            <p className="subpage-lede">These are starting points, not rigid products. The common thread is a real conversation before the microphone goes on.</p>
          </div>
          <div className="services-list">
            {projectServices.map(({ slug, label, detail }, index) => (
              <article key={slug}>
                <span className="project-number">0{index + 1}</span>
                <div>
                  <h3>{label}</h3>
                  <p>{detail}</p>
                </div>
                <a className="editorial-link" href={projectInquiryPath(basePath, slug)}>Tell Tony about it <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="listen-first services-listen">
          <div className="listen-copy">
            <p className="section-kicker">The common thread</p>
            <h2>LISTEN<br /><em>FIRST.</em></h2>
            <p>You know the audience, the goal, and the problem you are trying to solve. Tony brings experience, judgment, and a willingness to hear the whole brief before recommending the next step.</p>
            <blockquote>THE RIGHT PERFORMANCE<br />STARTS WITH THE RIGHT QUESTION.</blockquote>
          </div>
        </section>

        <section className="final-cta">
          <p>VOICE · HOSTING · AUDIO · SPEAKING</p>
          <h2>YOU DO NOT HAVE TO FIT THE PROJECT INTO A BOX.</h2>
          <blockquote>TELL TONY WHAT<br />YOU NEED TO DO.</blockquote>
          <div>
            <a className="button button-light" href={sitePath('/contact/#booking')}>Start a project</a>
            <a className="button button-outline" href={sitePath('/speaking/')}>Explore speaking</a>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

import { sitePath } from '@/app/lib/site';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href={sitePath('/')} aria-label="Tony Clyburn home">
        <strong>TONY CLYBURN</strong>
        <span>AT MY JOB AND LOVING IT™</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href={sitePath('/#project-fit')}>Services</a>
        <a href={sitePath('/story/')}>Tony&apos;s story</a>
        <a href={sitePath('/speaking/')}>Speaking</a>
        <a href={sitePath('/contact/')}>Contact</a>
        <a className="nav-cta" href={sitePath('/contact/#booking')}>Start a project <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

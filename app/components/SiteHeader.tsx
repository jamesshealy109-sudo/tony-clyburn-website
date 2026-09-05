import { sitePath } from '@/app/lib/site';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href={sitePath('/')} aria-label="At My Job And Loving It home">
        <strong>AT MY JOB AND LOVING IT™</strong>
        <span>AMJALI · STORIES ABOUT WORK</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href={sitePath('/')}>Home</a>
        <a href={sitePath('/podcast/')}>Podcast</a>
        <a className="nav-cta" href={sitePath('/contact/#your-story')}>Tell Your Story</a>
        <a href={sitePath('/amjali/')}>About</a>
        <a href={sitePath('/story/')}>Tony</a>
        <a href={sitePath('/amjali/#collection')}>Collection · Coming Soon</a>
      </nav>
    </header>
  );
}

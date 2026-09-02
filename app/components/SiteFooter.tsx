import Image from 'next/image';
import { basePath, sitePath } from '@/app/lib/site';

export default function SiteFooter() {
  return (
    <footer>
      <a className="wordmark" href={sitePath('/')}><strong>TONY CLYBURN</strong><span>AT MY JOB AND LOVING IT™</span></a>
      <div className="footer-nav">
        <a href={sitePath('/story/')}>Story</a>
        <a href={sitePath('/speaking/')}>Speaking</a>
        <a href={sitePath('/contact/')}>Contact</a>
        <span>Media · coming later</span>
        <span>Shop · coming later</span>
      </div>
      <div className="footer-contact">
        <a href="tel:+18032919844">803.291.9844</a>
        <span>Tony Clyburn · West Columbia, South Carolina</span>
        <a className="strataworks-mark" href="https://strataworks.tech" target="_blank" rel="noreferrer" aria-label="Visit StrataWorks">
          <span>Site by</span>
          <Image src={`${basePath}/images/marks/strataworks-logo.png`} alt="StrataWorks — Precision. Performance. Partnership." width={170} height={117} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tony Clyburn</span>
        <div className="footer-socials">
          <a href="https://facebook.com/TonyClyburnSC" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://twitter.com/myjobandlovinit" target="_blank" rel="noreferrer">X / Twitter ↗</a>
          <a className="f3-social" href="https://f3midlands.com/" target="_blank" rel="noreferrer" aria-label="Visit F3 Midlands">
            <Image src={`${basePath}/images/marks/f3-midlands-logo.png`} alt="F3 Midlands" width={30} height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}


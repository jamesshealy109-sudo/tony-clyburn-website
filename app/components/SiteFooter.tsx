import Image from 'next/image';
import { basePath, sitePath } from '@/app/lib/site';

export default function SiteFooter() {
  return (
    <footer>
      <a className="wordmark" href={sitePath('/')}><strong>AT MY JOB AND LOVING IT™</strong><span>AMJALI · STORIES ABOUT WORK</span></a>
      <div className="footer-nav">
        <a href={sitePath('/podcast/')}>Podcast</a>
        <a href={sitePath('/contact/#your-story')}>Tell Your Story</a>
        <a href={sitePath('/amjali/')}>About AMJALI</a>
        <a href={sitePath('/story/')}>Meet Tony</a>
        <a href={sitePath('/services/')}>Tony&apos;s Services</a>
        <a href={sitePath('/speaking/')}>Speaking</a>
        <a href={sitePath('/contact/#booking')}>Professional Inquiries</a>
        <a href={sitePath('/amjali/#collection')}>Collection · Coming Soon</a>
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
        <span>© {new Date().getFullYear()} At My Job And Loving It™</span>
        <div className="footer-socials">
          <a href="https://facebook.com/TonyClyburnSC" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://twitter.com/myjobandlovinit" target="_blank" rel="noreferrer">X / Twitter ↗</a>
          <a href="https://931thelakefm.com/" target="_blank" rel="noreferrer">93.1 The Lake ↗</a>
          <a href="https://www.facebook.com/931thelake/" target="_blank" rel="noreferrer">93.1 Facebook ↗</a>
          <a className="f3-social" href="https://f3midlands.com/" target="_blank" rel="noreferrer" aria-label="Visit F3 Midlands">
            <Image src={`${basePath}/images/marks/f3-midlands-logo.png`} alt="F3 Midlands" width={30} height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}


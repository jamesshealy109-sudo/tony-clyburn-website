import { basePath } from '@/app/lib/site';
import { sitePath } from '@/app/lib/site';
import { projectInquiryPath, projectServices } from '@/app/lib/projectServices';

export default function ProjectSelector() {
  return (
    <section className="project-selector" id="project-fit" aria-labelledby="project-fit-title">
      <div className="section project-selector-inner">
        <div className="project-selector-heading">
          <p className="section-kicker">Start with the work</p>
          <h2 id="project-fit-title">WHAT ARE YOU<br /><em>WORKING ON?</em></h2>
          <p>Choose the closest fit. Tony will listen, ask the right questions, and help shape the message or moment you actually need.</p>
          <a className="editorial-link" href={sitePath('/services/')}>Explore all services <span aria-hidden="true">→</span></a>
        </div>
        <div className="project-grid">
          {projectServices.map(({ slug, title, copy }, index) => (
            <a key={slug} href={projectInquiryPath(basePath, slug)}>
              <span className="project-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

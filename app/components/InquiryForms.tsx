'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { normalizeProjectType, projectServices } from '@/app/lib/projectServices';

function usePreviewForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return { sent, submit };
}

export default function InquiryForms() {
  const booking = usePreviewForm();
  const story = usePreviewForm();
  const projectTypeRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const projectType = normalizeProjectType(new URLSearchParams(window.location.search).get('project'));
    if (projectTypeRef.current && projectType) projectTypeRef.current.value = projectType;
  }, []);

  return (
    <section className="inquiries section" aria-labelledby="inquiries-title">
      <div className="inquiry-heading">
        <p className="section-kicker">07 / Start a conversation</p>
        <h2 id="inquiries-title">TWO WAYS<br /><em>TO BEGIN.</em></h2>
        <p>Bring Tony a project, or tell him about the work you love. Either way, the conversation starts with listening.</p>
      </div>

      <form className="booking-form" id="booking" onSubmit={booking.submit}>
        <div className="form-title"><span>01</span><div><h3>Project inquiry</h3><p>Tell Tony what you are making, planning, or trying to communicate.</p></div></div>
        <div className="field-grid">
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Organization<input name="organization" autoComplete="organization" /></label>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
          <label className="full">Project type<select ref={projectTypeRef} name="projectType" defaultValue="" required><option value="" disabled>Choose the closest fit</option>{projectServices.map(({ slug, title }) => <option key={slug} value={slug}>{title}</option>)}</select></label>
          <label>Project timing<input name="projectTiming" placeholder="Date or general timeframe" /></label>
          <label>Where will it be heard or experienced?<input name="projectSetting" placeholder="Radio, event, phone system, podcast…" /></label>
          <label className="full">What are you working on?<textarea name="projectSummary" rows={5} required /></label>
          <label className="full">What should people hear, feel, or understand?<textarea name="projectGoal" rows={4} /></label>
          <label className="full">Budget or production parameters (optional)<input name="budgetParameters" /></label>
        </div>
        <button className="button button-primary" type="submit">Send project inquiry</button>
        <p className={`form-status ${booking.sent ? 'success' : ''}`} aria-live="polite">{booking.sent ? 'Thanks—this inquiry is ready to send once Tony’s email connection is added.' : 'Preview form · email delivery connection still to come.'}</p>
      </form>

      <form className="story-form" id="your-story" onSubmit={story.submit}>
        <div className="form-title"><span>02</span><div><h3>Tell Tony your story</h3><p>What do you do—and why do you love it?</p></div></div>
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Job / profession<input name="profession" required /></label>
        <label>Your story<textarea name="story" rows={7} required placeholder="Tell Tony about the work, the people it serves, and why it matters to you." /></label>
        <button className="button button-dark" type="submit">Tell Tony your story</button>
        <p className={`form-status ${story.sent ? 'success' : ''}`} aria-live="polite">{story.sent ? 'Thank you for sharing it. This story is ready to send once Tony’s email connection is added.' : 'This is a community conversation—not a sales form.'}</p>
      </form>
    </section>
  );
}

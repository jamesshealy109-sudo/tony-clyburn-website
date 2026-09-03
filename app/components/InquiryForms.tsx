'use client';

import { FormEvent, useState, useSyncExternalStore } from 'react';
import ProjectInquiryFields from '@/app/components/ProjectInquiryFields';
import { normalizeProjectType, projectServices, type ProjectType } from '@/app/lib/projectServices';

function usePreviewForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return { sent, submit };
}

function subscribeToLocation() {
  return () => {};
}

function getProjectFromLocation() {
  return normalizeProjectType(new URLSearchParams(window.location.search).get('project'));
}

function getServerProject(): ProjectType | '' {
  return '';
}

export default function InquiryForms() {
  const booking = usePreviewForm();
  const story = usePreviewForm();
  const queryProjectType = useSyncExternalStore(subscribeToLocation, getProjectFromLocation, getServerProject);
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType | ''>('');
  const projectType = selectedProjectType || queryProjectType;

  return (
    <section className="inquiries section" aria-labelledby="inquiries-title">
      <div className="inquiry-heading">
        <p className="section-kicker">07 / Start a conversation</p>
        <h2 id="inquiries-title">TWO WAYS<br /><em>TO BEGIN.</em></h2>
        <p>Bring Tony a project, or tell him about the work you love. Either way, the conversation starts with listening.</p>
      </div>

      <form className="booking-form" id="booking" onSubmit={booking.submit}>
        <div className="form-title"><span>01</span><div><h3>Project inquiry</h3><p>What are you working on?</p></div></div>
        <div className="field-grid">
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Organization<input name="organization" autoComplete="organization" /></label>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
          <label className="full">What are you working on?
            <select name="projectType" value={projectType} onChange={(event) => setSelectedProjectType(normalizeProjectType(event.target.value))} required>
              <option value="" disabled>Choose the closest fit</option>
              {projectServices.map(({ slug, label }) => <option key={slug} value={slug}>{label}</option>)}
            </select>
          </label>
          <ProjectInquiryFields projectType={projectType} />
          <label className="full">Project description<textarea name="projectDescription" rows={6} required placeholder="Tell Tony what you are trying to accomplish, who it is for, and what people should hear, feel, or understand." /></label>
          <label>Desired date / deadline<input name="desiredTiming" placeholder="Date or general timeframe" /></label>
          <label>Budget (optional)<input name="budget" inputMode="decimal" /></label>
          <label className="full">Preferred contact method
            <select name="preferredContact" defaultValue="email">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="either">Either</option>
            </select>
          </label>
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

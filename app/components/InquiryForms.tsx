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
        <p className="section-kicker">Choose your path</p>
        <h2 id="inquiries-title">TWO WAYS<br /><em>TO BEGIN.</em></h2>
        <p>Share a story for the AMJALI conversation, or contact Tony about professional work. Each path has its own form.</p>
      </div>

      <form className="story-form" id="your-story" onSubmit={story.submit}>
        <div className="form-title"><span>01</span><div><h3>Tell us your story</h3><p>What do you do—and why do you love it?</p></div></div>
        <label>Name<input name="storyName" autoComplete="name" required /></label>
        <label>Email<input type="email" name="storyEmail" autoComplete="email" required /></label>
        <label>Phone<input type="tel" name="storyPhone" autoComplete="tel" /></label>
        <label>City and state<input name="cityState" autoComplete="address-level2" required /></label>
        <label>Organization or employer (optional)<input name="storyOrganization" autoComplete="organization" /></label>
        <label>Job / profession<input name="profession" required /></label>
        <label>What do you do?<textarea name="whatDoYouDo" rows={4} required placeholder="Describe the work in your own words." /></label>
        <label>Why do you love it?<textarea name="whyLoveIt" rows={5} required placeholder="Tell us about the people, purpose, craft, or moment that keeps you showing up." /></label>
        <label>What do you wish more people understood about your work?<textarea name="workUnderstanding" rows={4} required /></label>
        <label>Link to your work (optional)<input type="url" name="storyLink" inputMode="url" placeholder="https://" /></label>
        <label className="story-consent"><input type="checkbox" name="interviewAcknowledgement" required /><span>I understand that submitting a story does not guarantee an interview or publication.</span></label>
        <button className="button button-dark" type="submit">Submit Your Story</button>
        <p className={`form-status ${story.sent ? 'success' : ''}`} aria-live="polite">{story.sent ? 'Thank you for sharing it. This story is ready to send once the email connection is added.' : 'This is a community conversation—not a sales form.'}</p>
      </form>

      <form className="booking-form" id="booking" onSubmit={booking.submit}>
        <div className="form-title"><span>02</span><div><h3>Project inquiry</h3><p>What are you working on?</p></div></div>
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
    </section>
  );
}

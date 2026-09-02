'use client';

import { FormEvent, useState } from 'react';

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

  return (
    <section className="inquiries section" aria-labelledby="inquiries-title">
      <div className="inquiry-heading">
        <p className="section-kicker">07 / Start a conversation</p>
        <h2 id="inquiries-title">TWO REASONS<br /><em>TO REACH OUT.</em></h2>
        <p>Planning an event and sharing your own story are different conversations. Choose the one that fits.</p>
      </div>

      <form className="booking-form" id="booking" onSubmit={booking.submit}>
        <div className="form-title"><span>01</span><div><h3>Speaking / booking inquiry</h3><p>Tell us about the room Tony would be walking into.</p></div></div>
        <div className="field-grid">
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Organization<input name="organization" autoComplete="organization" /></label>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
          <label>Event date<input type="date" name="eventDate" /></label>
          <label>Event location<input name="eventLocation" autoComplete="address-level2" /></label>
          <label>Type of event<input name="eventType" /></label>
          <label>Approximate audience size<input type="number" name="audienceSize" min="1" /></label>
          <label className="full">What do you want your audience to experience?<textarea name="audienceExperience" rows={5} required /></label>
          <label className="full">Estimated speaker budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under $2,500</option><option>$2,500–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option><option>Let&apos;s discuss</option></select></label>
        </div>
        <button className="button button-primary" type="submit">Send booking inquiry</button>
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

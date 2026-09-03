import { projectFieldGroup, type ProjectType } from '@/app/lib/projectServices';

export default function ProjectInquiryFields({ projectType }: { projectType: ProjectType | '' }) {
  const group = projectFieldGroup(projectType);

  if (group === 'voice') {
    return (
      <fieldset className="conditional-fields full">
        <legend>Voice project details</legend>
        <label>Approximate script length<input name="scriptLength" placeholder="Words, pages, or estimated runtime" /></label>
        <label>Intended use<input name="intendedUse" placeholder="Commercial, training, web, phone system…" /></label>
        <label className="full">Geographic market / usage, if known<input name="geographicMarket" placeholder="Local, regional, national, internal…" /></label>
      </fieldset>
    );
  }

  if (group === 'event') {
    return (
      <fieldset className="conditional-fields full">
        <legend>Event details</legend>
        <label>Event date<input type="date" name="eventDate" /></label>
        <label>Location<input name="eventLocation" /></label>
        <label>Approximate duration<input name="eventDuration" placeholder="Program or on-stage time" /></label>
        <label>Event / audience type<input name="audienceType" /></label>
        <label className="full">Will the venue or organizer provide the PA and microphone?
          <select name="organizerProvidesSound" defaultValue="">
            <option value="">Choose if known</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unknown">Not sure yet</option>
          </select>
        </label>
      </fieldset>
    );
  }

  if (group === 'podcast') {
    return (
      <fieldset className="conditional-fields full">
        <legend>Podcast / audio details</legend>
        <label>Project format<input name="audioFormat" placeholder="Interview, series, narration, roundtable…" /></label>
        <label>Tony&apos;s expected role<input name="tonyRole" placeholder="Guest, host, contributor, voice…" /></label>
        <label className="full">Recording / publishing timeline<input name="audioTimeline" /></label>
      </fieldset>
    );
  }

  return null;
}

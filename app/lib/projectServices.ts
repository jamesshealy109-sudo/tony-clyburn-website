export const projectServices = [
  {
    slug: 'voiceover',
    label: 'Voiceover',
    title: 'I need a voiceover',
    copy: 'A clear, credible read shaped around your audience and message.',
    detail: 'Professional recorded voice for projects where tone, pacing, delivery, and judgment matter.',
  },
  {
    slug: 'commercial-voiceover',
    label: 'Commercial voiceover',
    title: 'I need a commercial recorded',
    copy: 'A professional performance, with a real conversation before the record button.',
    detail: 'Advertising and commercial voice work shaped around the brief. Usage, market, and scope shape the engagement.',
  },
  {
    slug: 'business-audio',
    label: 'Message-on-hold / business audio',
    title: 'I need business / on-hold audio',
    copy: 'Recorded messaging that sounds human, useful, and unmistakably yours.',
    detail: 'Message-on-hold, phone-system, and other recorded business communication that respects the listener.',
  },
  {
    slug: 'emcee-host',
    label: 'Emcee / event host',
    title: 'I need an emcee or host',
    copy: 'An experienced voice to keep the room moving and people connected.',
    detail: 'Tony can guide the room, connect the program, and keep an event moving. Event production, PA, and microphone arrangements are discussed with the organizer.',
  },
  {
    slug: 'speaker-moderator',
    label: 'Speaking / moderating',
    title: 'I need a speaker or moderator',
    copy: 'A prepared, curious presence for stages and moderated conversations.',
    detail: 'Customized speaking engagements, moderated conversations, and public programs built around the audience and purpose.',
  },
  {
    slug: 'podcast-audio',
    label: 'Podcast / audio project',
    title: 'I have a podcast or audio project',
    copy: 'A thoughtful voice, guest, host, or contributor for an audio idea.',
    detail: 'Tony can participate in or contribute to podcast and audio communication projects. Format, role, and timeline begin with a conversation.',
  },
  {
    slug: 'other-project',
    label: 'Something else',
    title: 'I have another project',
    copy: 'An unusual communication challenge that does not fit a standard category.',
    detail: 'Tell Tony what you are trying to accomplish. He will listen first and help determine whether his experience fits the work.',
  },
] as const;

export type ProjectType = (typeof projectServices)[number]['slug'];
export type ProjectFieldGroup = 'voice' | 'event' | 'podcast' | 'none';

const projectTypeSet = new Set<string>(projectServices.map(({ slug }) => slug));

export function normalizeProjectType(value: string | null): ProjectType | '' {
  return value && projectTypeSet.has(value) ? value as ProjectType : '';
}

export function projectInquiryPath(basePath: string, project: ProjectType) {
  const cleanBasePath = basePath.replace(/\/$/, '');
  return `${cleanBasePath}/contact/?project=${encodeURIComponent(project)}#booking`;
}

export function projectFieldGroup(project: ProjectType | ''): ProjectFieldGroup {
  if (project === 'voiceover' || project === 'commercial-voiceover') return 'voice';
  if (project === 'emcee-host' || project === 'speaker-moderator') return 'event';
  if (project === 'podcast-audio') return 'podcast';
  return 'none';
}

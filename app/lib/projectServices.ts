export const projectServices = [
  {
    slug: 'voiceover',
    title: 'I need a voiceover',
    copy: 'A clear, credible read shaped around your audience and message.',
  },
  {
    slug: 'commercial-voiceover',
    title: 'I need a commercial recorded',
    copy: 'A professional performance, with a real conversation before the record button.',
  },
  {
    slug: 'business-audio',
    title: 'I need business / on-hold audio',
    copy: 'Recorded messaging that sounds human, useful, and unmistakably yours.',
  },
  {
    slug: 'emcee-host',
    title: 'I need an emcee or host',
    copy: 'An experienced voice to keep the room moving and people connected.',
  },
  {
    slug: 'speaker-moderator',
    title: 'I need a speaker or moderator',
    copy: 'A prepared, curious presence for stages and moderated conversations.',
  },
  {
    slug: 'other-audio',
    title: 'I have another audio project',
    copy: 'Podcasts, interviews, and other ideas that need an experienced communicator.',
  },
] as const;

export type ProjectType = (typeof projectServices)[number]['slug'];

const projectTypeSet = new Set<string>(projectServices.map(({ slug }) => slug));

export function normalizeProjectType(value: string | null): ProjectType | '' {
  return value && projectTypeSet.has(value) ? value as ProjectType : '';
}

export function projectInquiryPath(basePath: string, project: ProjectType) {
  const cleanBasePath = basePath.replace(/\/$/, '');
  return `${cleanBasePath}/contact/?project=${encodeURIComponent(project)}#booking`;
}

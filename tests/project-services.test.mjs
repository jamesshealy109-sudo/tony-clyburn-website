import assert from 'node:assert/strict';
import test from 'node:test';

let services;

try {
  services = await import('../app/lib/projectServices.ts');
} catch {
  services = null;
}

test('offers each approved commercial project path exactly once', () => {
  assert.ok(services, 'the project service model must exist');

  const slugs = services.projectServices.map(({ slug }) => slug);

  assert.deepEqual(slugs, [
    'voiceover',
    'commercial-voiceover',
    'business-audio',
    'emcee-host',
    'speaker-moderator',
    'podcast-audio',
    'other-project',
  ]);
  assert.equal(new Set(slugs).size, slugs.length);
});

test('builds a base-path-safe inquiry URL for a selected project', () => {
  assert.ok(services, 'the project service model must exist');

  assert.equal(
    services.projectInquiryPath('/tony-clyburn-website', 'commercial-voiceover'),
    '/tony-clyburn-website/contact/?project=commercial-voiceover#booking',
  );
});

test('accepts only a supported project value from the URL', () => {
  assert.ok(services, 'the project service model must exist');

  assert.equal(services.normalizeProjectType('voiceover'), 'voiceover');
  assert.equal(services.normalizeProjectType('not-a-real-service'), '');
  assert.equal(services.normalizeProjectType(null), '');
});

test('maps project choices to the right supplemental inquiry group', () => {
  assert.equal(services.projectFieldGroup('voiceover'), 'voice');
  assert.equal(services.projectFieldGroup('commercial-voiceover'), 'voice');
  assert.equal(services.projectFieldGroup('emcee-host'), 'event');
  assert.equal(services.projectFieldGroup('speaker-moderator'), 'event');
  assert.equal(services.projectFieldGroup('podcast-audio'), 'podcast');
  assert.equal(services.projectFieldGroup('business-audio'), 'none');
  assert.equal(services.projectFieldGroup('other-project'), 'none');
  assert.equal(services.projectFieldGroup(''), 'none');
});

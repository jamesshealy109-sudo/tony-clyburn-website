import assert from 'node:assert/strict';
import test from 'node:test';

const baseUrl = process.env.TEST_BASE_URL ?? 'http://localhost:4178';

async function load(path) {
  const response = await fetch(`${baseUrl}${path}`);
  assert.equal(response.status, 200, `${path} should render successfully`);
  const html = await response.text();
  return html.replace(/<script[\s\S]*?<\/script>/g, '');
}

test('services route offers every project path without publishing rates', async () => {
  const html = await load('/services/');
  const projectSlugs = [
    'voiceover',
    'commercial-voiceover',
    'business-audio',
    'emcee-host',
    'speaker-moderator',
    'podcast-audio',
    'other-project',
  ];

  for (const slug of projectSlugs) {
    assert.match(html, new RegExp(`href="/contact/\\?project=${slug}#booking"`));
  }

  assert.match(html, /Usage, market, and scope shape the engagement/i);
  assert.match(html, /production, PA, and microphone arrangements are discussed with the organizer/i);
  assert.doesNotMatch(html, /\$[0-9]/);
});

test('project inquiry collects common project details and stays separate from story submission', async () => {
  const html = await load('/contact/');

  assert.match(html, /WHAT ARE YOU WORKING ON\?/i);
  assert.match(html, /name="projectDescription"/);
  assert.match(html, /name="desiredTiming"/);
  assert.match(html, /name="budget"/);
  assert.match(html, /name="preferredContact"/);
  assert.match(html, /id="your-story"/);
  assert.match(html, /This is a community conversation—not a sales form/);
  assert.doesNotMatch(html, /Under \$2,500|\$2,500.{0,20}\$5,000|\$10,000\+/s);
});

test('AMJALI route makes the audience-owned phrase primary and labels future ideas honestly', async () => {
  const html = await load('/amjali/');

  assert.match(html, /<h1[^>]*class="dymo-label/);
  assert.match(html, /WHAT DO YOU DO\?/);
  assert.match(html, /TONY STARTED[\s\S]{0,20}SAYING IT/i);
  assert.match(html, /Other people made it theirs/i);
  assert.match(html, /href="\/contact\/#your-story"/);
  assert.match(html, /THE COLLECTION IS[\s\S]{0,30}COMING TOGETHER\./);
  assert.match(html, /THE TONY CLYBURN COLLECTION/);
  assert.match(html, /LIVE NOW/);
  assert.match(html, /IN DEVELOPMENT/);
  assert.doesNotMatch(html, /Add to cart|Buy now|In stock|\$[0-9]/i);
});

test('primary navigation separates services, Tony story, AMJALI, and contact', async () => {
  for (const path of ['/', '/services/', '/story/', '/amjali/', '/contact/']) {
    const html = await load(path);

    assert.match(html, /href="\/services\/">Services<\/a>/);
    assert.match(html, /href="\/story\/">Tony&#x27;s story<\/a>/);
    assert.match(html, /href="\/amjali\/">At My Job And Loving It<\/a>/);
    assert.match(html, /href="\/contact\/">Contact<\/a>/);
    assert.match(html, /href="\/contact\/#booking">Start a project/);
  }
});

test('sitemap publishes exactly the approved route-led pages', async () => {
  const xml = await load('/sitemap.xml');
  const expected = ['/', '/services/', '/speaking/', '/story/', '/amjali/', '/contact/'];

  for (const path of expected) {
    const suffix = path === '/' ? '/' : path;
    assert.match(xml, new RegExp(`<loc>https://www\\.tonyclyburn\\.com${suffix}</loc>`));
  }

  assert.equal((xml.match(/<url>/g) ?? []).length, expected.length);
});

test('generic commercial routes avoid event-only booking language', async () => {
  for (const path of ['/', '/services/', '/amjali/', '/contact/']) {
    const html = await load(path);
    assert.doesNotMatch(html, /Book Tony/i);
  }
});

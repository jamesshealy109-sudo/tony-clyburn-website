import assert from 'node:assert/strict';
import test from 'node:test';

const baseUrl = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:4178';

async function load(path = '/') {
  const response = await fetch(`${baseUrl}${path}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  return html.replace(/<script[\s\S]*?<\/script>/g, '');
}

test('puts the project-selection experience directly after the hero', async () => {
  const html = await load();
  const heroEnd = html.indexOf('</section>');
  const projectSelector = html.indexOf('id="project-fit"');
  const story = html.indexOf('id="story"');

  assert.ok(heroEnd >= 0, 'the homepage should render its hero');
  assert.ok(projectSelector > heroEnd, 'project selection should follow the hero');
  assert.ok(story > projectSelector, 'project selection should precede the story');
  assert.match(html, /href="#project-fit"/);
});

test('renders one inquiry route for every approved project category', async () => {
  const html = await load();
  const projectSlugs = [
    'voiceover',
    'commercial-voiceover',
    'business-audio',
    'emcee-host',
    'speaker-moderator',
    'other-audio',
  ];

  for (const slug of projectSlugs) {
    assert.match(html, new RegExp(`href="/contact/\\?project=${slug}#booking"`));
  }
});

test('presents AMJALI as the hero brand accent and avoids publishing rates', async () => {
  const html = await load();

  assert.match(html, /<h1[^>]*class="dymo-label dymo-label-hero"/);
  assert.match(html, /aria-label="At My Job And Loving It"/);
  assert.doesNotMatch(html, /\$[0-9]/);
});

test('offers a project-oriented inquiry form', async () => {
  const html = await load('/contact/?project=voiceover');

  assert.match(html, /Project inquiry/);
  assert.match(html, /name="projectType"/);
  assert.doesNotMatch(html, /Estimated speaker budget/);
});

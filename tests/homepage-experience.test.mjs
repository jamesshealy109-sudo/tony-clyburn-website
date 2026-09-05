import assert from 'node:assert/strict';
import test from 'node:test';

const baseUrl = process.env.TEST_BASE_URL ?? 'http://localhost:4178';

async function load(path = '/') {
  const response = await fetch(`${baseUrl}${path}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  return html.replace(/<script[\s\S]*?<\/script>/g, '');
}

test('homepage leads with AMJALI and an audience story invitation', async () => {
  const html = await load();
  const heroStart = html.indexOf('<section class="hero"');
  const hero = html.slice(heroStart, html.indexOf('</section>', heroStart));

  assert.match(html, /<title>At My Job And Loving It™/);
  assert.match(hero, /aria-label="At My Job And Loving It"/);
  assert.match(hero, /DO YOU LOVE[\s\S]{0,20}WHAT YOU DO\?/);
  assert.match(hero, /href="\/contact\/#your-story">Tell Us Your Story/);
  assert.match(hero, /href="\/podcast\/">Explore the (?:Podcast|Conversation)/i);
  assert.doesNotMatch(hero, /TONY CLYBURN/);
});

test('homepage orders the conversation before podcast, host, services, and collection', async () => {
  const html = await load();
  const markers = [
    'id="conversation-concept"',
    'id="podcast-preview"',
    'id="host"',
    'id="tony-services"',
    'id="collection-preview"',
  ].map((marker) => html.indexOf(marker));

  assert.ok(markers.every((index) => index >= 0), 'every homepage section should render');
  assert.deepEqual([...markers].sort((a, b) => a - b), markers);
});

test('homepage keeps the DYMO identity and avoids publishing rates', async () => {
  const html = await load();

  assert.match(html, /<h1[^>]*class="dymo-label dymo-label-hero"/);
  assert.doesNotMatch(html, /\$[0-9]/);
});

test('story submission is approachable and distinct from project inquiry', async () => {
  const html = await load('/contact/');

  assert.match(html, /id="your-story"/);
  assert.match(html, /name="storyPhone"/);
  assert.match(html, /name="cityState"/);
  assert.match(html, /name="storyOrganization"/);
  assert.match(html, /name="whatDoYouDo"/);
  assert.match(html, /name="whyLoveIt"/);
  assert.match(html, /name="workUnderstanding"/);
  assert.match(html, /name="storyLink"/);
  assert.match(html, /name="interviewAcknowledgement"/);
  assert.match(html, /id="booking"/);
  assert.match(html, /Project inquiry/);
});

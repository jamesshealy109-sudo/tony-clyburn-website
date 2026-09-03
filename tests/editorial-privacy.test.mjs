import assert from 'node:assert/strict';
import test from 'node:test';

const baseUrl = process.env.TEST_BASE_URL ?? 'http://localhost:4178';
const publicRoutes = ['/', '/services/', '/speaking/', '/story/', '/amjali/', '/contact/'];

async function loadPublicCopy() {
  const pages = [];
  for (const route of publicRoutes) {
    const response = await fetch(`${baseUrl}${route}`);
    assert.equal(response.status, 200, `${route} should render successfully`);
    pages.push((await response.text()).replace(/<script[\s\S]*?<\/script>/g, ''));
  }
  return pages.join('\n');
}

test('public pages exclude private call topics and off-topic personal history', async () => {
  const html = await loadPublicCopy();
  const privateTopics = [
    /Tony(?:'|&#x27;)s grandfather/i,
    /James Clyburn/i,
    /genealog/i,
    /law enforcement/i,
    /military/i,
    /marriage details/i,
    /wars and moments/i,
  ];

  for (const topic of privateTopics) assert.doesNotMatch(html, topic);
});

test('public pages do not represent unlaunched products or systems as operational', async () => {
  const html = await loadPublicCopy();

  assert.doesNotMatch(html, /\$[0-9]/);
  assert.doesNotMatch(html, /Add to cart|Buy now|In stock|Ships? (?:today|in)/i);
  assert.doesNotMatch(html, /new episode|weekly podcast|join the membership|become a sponsor/i);
  assert.doesNotMatch(html, /Tony(?:'|&#x27;)s team/i);
});

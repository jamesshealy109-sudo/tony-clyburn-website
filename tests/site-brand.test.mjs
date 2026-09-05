import assert from 'node:assert/strict';
import test from 'node:test';

const site = await import('../app/lib/site.ts');

test('AMJALI is the default site identity and canonical domain', () => {
  assert.equal(site.siteName, 'At My Job And Loving It™');
  assert.equal(site.siteUrl, 'https://atmyjobandlovingit.com');
  assert.equal(site.absoluteUrl('/podcast/'), 'https://atmyjobandlovingit.com/podcast/');
});

test('public routes retain Tony professional pages and add only podcast', () => {
  assert.deepEqual([...site.publicRoutes], [
    '/',
    '/podcast/',
    '/amjali/',
    '/story/',
    '/services/',
    '/speaking/',
    '/contact/',
  ]);
});

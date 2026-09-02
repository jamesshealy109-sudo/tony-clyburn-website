# SEO and domain migration preparation

This file records migration work that should happen only when `tonyclyburn.com` is ready to move. It is not a cutover plan and makes no DNS or hosting changes.

## Current canonical configuration

`NEXT_PUBLIC_SITE_URL` is the single canonical origin. GitHub Pages builds use `https://jamesshealy109-sudo.github.io/tony-clyburn-website`. At cutover, change it to `https://www.tonyclyburn.com` and clear `NEXT_PUBLIC_BASE_PATH`. Canonical tags, Open Graph URLs, JSON-LD, the sitemap and robots sitemap reference will change together.

## Legacy URL inventory

The following public WordPress URLs were found on September 2, 2026:

- `/` — current voiceover-focused homepage; future destination `/`
- `/contact/` — current public contact page; destination `/contact/`
- `/meet/` — current biography page; recommended destination `/story/`
- `/services/` — current mixed services page; recommended destination `/speaking/` after confirming no other service content must be preserved
- `/subscribe/` — current newsletter page; destination remains undecided until newsletter plans are confirmed
- `/category/journal/` and `/category/journal/page/2/` — current journal archive; preserve until individual posts have a content migration plan
- `/you-dont-have-to-run-or-hide/`
- `/the-cold-truth-about-age/`
- `/most-wonderful-time-of-the-year-started-9-months-ago/`
- `/grocer-wars-for-your-driveway/`

The journal contains additional individual articles that must be exported and inventoried before WordPress is retired. Do not redirect every article to the homepage. Preserve valuable articles at equivalent URLs or map each one to a genuinely relevant replacement.

GitHub Pages does not provide configurable origin-level HTTP 301 redirect rules. JavaScript or client-side redirects are not equivalent. At cutover, use the existing WordPress server, Cloudflare, or another proxy/host with redirect-rule support to issue true 301 redirects.

## Future content architecture

Do not publish empty archives. When real material is ready, use:

- `/stories/` for individual At My Job And Loving It™ stories
- `/interviews/` for selected conversations
- `/media/` for substantive radio, audio and video appearances
- `/shop/` only when products, fulfillment and customer policies are ready

## Search Console

1. Add both the current GitHub Pages URL-prefix property and, when DNS access is available, a Domain property for `tonyclyburn.com`.
2. For URL-prefix verification, paste Google’s meta verification token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy. For a Domain property, add Google’s DNS TXT record with the DNS provider.
3. Submit `/sitemap.xml` after deployment.
4. Inspect `/`, `/speaking/`, `/story/` and `/contact/`, then request indexing after the final domain cutover.
5. Monitor indexing, canonical selection, Core Web Vitals and crawl errors during the migration.

## Analytics

The site loads no analytics by default. After an approved GA4 property exists, add its `G-...` Measurement ID as `NEXT_PUBLIC_GA_MEASUREMENT_ID` and redeploy. Confirm the organization’s privacy notice and consent requirements before enabling tracking. Preserve any future measurement history across the domain cutover by keeping the same GA4 property.


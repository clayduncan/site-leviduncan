# Launch Audit

Prepared: May 2, 2026

## Current Public Page Set

The Astro build currently outputs 12 HTML files:

- `/`
- `/404.html`
- `/about/`
- `/blog/`
- `/contact/`
- `/events/`
- `/huntsville/complex-mortgage-guidance/`
- `/huntsville/jumbo-loans/`
- `/huntsville/va-loans/`
- `/join-us/`
- `/realtor-ai-training/`
- `/reviews/`

## Sitemap Status

The generated sitemap includes only launch-indexable pages:

- `/`
- `/about/`
- `/contact/`
- `/events/`
- `/huntsville/complex-mortgage-guidance/`
- `/huntsville/jumbo-loans/`
- `/huntsville/va-loans/`
- `/join-us/`
- `/realtor-ai-training/`
- `/reviews/`

`/blog/` is intentionally excluded from the sitemap until the first real post is published.

## Noindex Status

The only pages with `noindex` are:

- `/blog/`
- `/404.html`

Reason: the blog hub exists, but the first public article is not live yet.
The 404 route is intentionally noindex because it is not a search landing page.

Remove `noindex` from `/blog/` after the first real post is published.
Keep `/404.html` noindex.

## Legacy URL Cleanup Status

Development-only URL cleanup:

- `/loan-officer-recruiting/` is not a source route.
- `/loan-officer-recruiting/` is not in the sitemap.
- `/loan-officer-recruiting/` is not present in built HTML.
- `/loan-officer-recruiting/` is not preserved as a Netlify redirect because it was never a public Wix URL.

Wix URL handling:

- Current Wix URLs and search-discovered legacy URLs are documented in `docs/launch/redirect-map.md`.
- Implemented Wix redirects are configured in `netlify.toml`.
- Redirects take effect only after `clayduncan.com` points to Netlify.

## Robots Status

`public/robots.txt` allows normal crawling and points crawlers to:

- `https://clayduncan.com/sitemap-index.xml`

Blocked paths:

- `/apply/`
- `/admin/`
- `/api/`

Do not block old Wix URLs in robots.txt. Crawlers need to reach the old URLs after cutover so they can see the `301` redirects.

## Verification Commands

Run before launch:

```sh
npm run format:check
npm run build
npm run audit:launch
```

Expected current result:

- Formatting passes.
- Build passes.
- Build outputs 12 HTML files.
- Sitemap excludes `/blog/` until the first post is live.
- Internal link crawl reports no missing local links.
- `/404.html` exists and is `noindex, follow`.

## Post-Cutover Search Cleanup

After DNS points to Netlify:

1. Submit `https://clayduncan.com/sitemap-index.xml` in Google Search Console.
2. Inspect old Wix URLs and confirm Google sees `301` redirects.
3. Use Google Search Console removals only for urgent stale search results.
4. Monitor old Wix URLs until they move out of indexed results.

## Staging Deploy

Latest validated Netlify staging deploy:

- Site: `clayduncan-staging`
- URL: `https://clayduncan-staging.netlify.app`
- Deploy ID: `69f72997bd2b2074c0d4ee19`
- Deploy status: ready

Validated on staging:

- `/` returns `200`.
- `/` includes the SEO/AEO homepage title, homepage path content, review stars, updated YouTube profile link, no header CTA button, and FAQ schema.
- `/about/` returns `200`.
- `/about/` includes the hero `Call Clay` telephone CTA.
- `/join-us/` returns `200`.
- `/join-us/` includes the hero `Call Clay` telephone CTA and strategy alignment language.
- `/reviews/` returns `200`.
- `/reviews/` includes gold review-star styling.
- `/blog/` returns `200` with `noindex, follow`.
- `/404.html` returns `200` with `noindex, follow`.
- `/about-me` returns `301` to `/about/`.
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-7` returns `301` to `/events/`.
- `/loan-officer-recruiting/` returns the branded `404` page and is not redirected.
- The header no longer includes the sitewide `Chat with Clay` CTA button.
- Built HTML does not contain `loan-officer-recruiting`.

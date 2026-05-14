# Levi Duncan Launch Audit

Prepared: May 14, 2026

## Production Status

`leviduncan.com` is live in production.

- Primary domain: `https://www.leviduncan.com/`
- Apex behavior: `https://leviduncan.com/` redirects to `https://www.leviduncan.com/`
- HTTPS: forced
- SSL: provisioned through Netlify and auto-renewing
- Hosting: Netlify deploys from GitHub `main`
- Repository: `clayduncan/site-leviduncan`

## Current Public Page Set

The live sitemap contains 19 indexable pages:

- `/`
- `/about/`
- `/events/`
- `/huntsville/mortgage-guidance/`
- `/huntsville/mortgage-guidance/down-payment-assistance/`
- `/huntsville/mortgage-guidance/down-payment-assistance/first-step-eligibility-alabama/`
- `/huntsville/mortgage-guidance/fha-loans/`
- `/huntsville/mortgage-guidance/fha-loans/fha-credit-score-guidance-first-time-buyers/`
- `/huntsville/mortgage-guidance/fha-loans/fha-loan-requirements-alabama/`
- `/huntsville/mortgage-guidance/fha-loans/fha-vs-usda-loans-north-alabama/`
- `/huntsville/mortgage-guidance/first-time-home-buyer/`
- `/huntsville/mortgage-guidance/first-time-home-buyer/first-time-homebuyer-checklist-north-alabama/`
- `/huntsville/mortgage-guidance/first-time-home-buyer/first-time-homebuyer-mistakes-north-alabama/`
- `/huntsville/mortgage-guidance/investment-property/`
- `/huntsville/mortgage-guidance/investment-property/dscr-loan-requirements-alabama/`
- `/huntsville/mortgage-guidance/usda-loans/`
- `/huntsville/mortgage-guidance/usda-loans/usda-eligible-areas-north-alabama/`
- `/huntsville/mortgage-guidance/usda-loans/usda-income-limits-north-alabama/`
- `/reviews/`

`/404.html` exists and is intentionally not included in the sitemap.

## Search and Analytics

- Google Search Console property: verified for `leviduncan.com`.
- Sitemap submitted in Google Search Console.
- Bing Webmaster Tools: imported from Google Search Console, sitemap submitted and processing.
- GA4 property: Levi Duncan.
- GA4 measurement ID: `G-3ZWEQF27L7`.
- Clay's previous scaffold GA4 tag `G-1BR97EBZEN` was removed in commit `c7173c9`.

## Schema and AEO Validation

Schema validation passed across key page types:

- Homepage
- About
- Mortgage guidance hub
- Events
- Program pages
- Focused support pages

Program pages include the intended combination of Service, FAQPage where applicable, and BreadcrumbList schema. Address-free ProfessionalService schema is intentional.

## Post-Launch Crawl Result

Production audit completed May 14, 2026:

- Sitemap index returned `200`.
- Sitemap contained 19 pages.
- All sitemap pages returned `200`.
- No broken internal links found.
- Every sitemap page had one H1.
- Every sitemap page had a canonical URL.
- Every sitemap page had a title under 60 characters.
- Every sitemap page had a meta description.
- Every sitemap page included schema.
- Every sitemap page had exactly one Google tag script for Levi's GA4 property.
- Clay's GA4 measurement ID appeared zero times.
- `robots.txt` returned `200`, referenced `leviduncan.com`, and included the sitemap.
- `llms.txt` returned `200`, referenced Levi Duncan, and did not reference `clayduncan.com`.

## Open Non-Blocking Items

- Google Business Profile: Levi to create and verify.
- GBP URL: add to `src/data/site.ts` after the profile is live.
- Reviews: populate after verified reviews exist.
- Knowledge Graph ID: add post-indexing if Google creates a stable entity ID.

## Retired Build Plan

The original Phase 2 page-by-page build sequence is retired. The Levi foundation branch became the complete v1 launch branch and was merged after deploy-preview review.

Future work should be scoped as:

- post-launch optimization,
- GBP/reviews integration,
- analytics/search-console follow-up,
- or new differentiated support content.

For future personal-site launches, use `docs/launch/personal-site-launch-playbook.md` instead of the retired Levi Phase 2 sequence.

## Verification Commands

Run before future launch-affecting changes:

```sh
npm run format:check
npm run build
npm run audit:launch
```

# Cutover Checklist

Prepared: May 3, 2026

Purpose: move `clayduncan.com` from Wix to the Astro/Netlify rebuild without losing crawlability, redirects, or launch visibility.

## Current State

- `clayduncan.com` is still pointed at Wix.
- DNS currently resolves through Wix targets:
  - Apex A record: `185.230.63.107`
  - `www` CNAME: `pointing.wixdns.net`
- The current rebuild is deployed to Netlify staging:
  - Project: `clayduncan-staging`
  - Site ID: `a28a832b-11d2-452d-9f7e-7ccbeef5f70a`
  - URL: `https://clayduncan-staging.netlify.app`
  - Latest validated deploy: `69f6b30a8dd57d8b1eb53ab2`
- A separate production Netlify project for `clayduncan.com` has not been identified.
- `connect.clayduncan.com` is already on a separate Netlify project and should not be disturbed.

## Decision Needed Before DNS Cutover

Choose one Netlify production approach:

1. Use the existing `clayduncan-staging` project as the production site and attach `clayduncan.com` to it.
   - Recommended if this is the only rebuild project and the staging URL has become the launch candidate.
   - Optional cleanup: rename the Netlify project from `clayduncan-staging` to `clayduncan`.

2. Create a separate production Netlify project from the GitHub repo and keep `clayduncan-staging` only for previews.
   - More formal environment separation.
   - Requires another Netlify project setup and validation pass.

## Pre-Cutover Checks

Run locally:

```sh
npm run format:check
npm run build
npm run audit:launch
```

Confirm:

- Build passes.
- Launch audit passes.
- Staging homepage has the approved header without the sitewide `Chat with Clay` button.
- `/blog/` remains `noindex, follow` until the first real post is published.
- `/404.html` remains `noindex, follow`.
- Sitemap excludes `/blog/` and `/404.html`.
- Redirect rules are present in `netlify.toml`.

## Netlify Setup

Before changing DNS:

1. Attach `clayduncan.com` and `www.clayduncan.com` to the selected Netlify project.
2. Confirm Netlify provides the required DNS targets for:
   - Apex/root domain: `clayduncan.com`
   - `www.clayduncan.com`
3. Enable HTTPS certificate provisioning in Netlify.
4. Keep `connect.clayduncan.com` unchanged.

## GoDaddy DNS Cutover

In GoDaddy DNS:

1. Replace Wix apex/root records with Netlify's required apex target.
2. Replace the `www` CNAME from `pointing.wixdns.net` to Netlify's required `www` target.
3. Do not delete unrelated DNS records.
4. Do not cancel Wix immediately after DNS cutover.

## Immediate Post-Cutover Checks

After DNS begins resolving to Netlify:

```sh
dig +short clayduncan.com A
dig +short www.clayduncan.com CNAME
```

Then test:

- `https://clayduncan.com/`
- `https://www.clayduncan.com/`
- `https://clayduncan.com/about/`
- `https://clayduncan.com/reviews/`
- `https://clayduncan.com/events/`
- `https://clayduncan.com/realtor-ai-training/`
- `https://clayduncan.com/join-us/`
- `https://clayduncan.com/huntsville/va-loans/`
- `https://clayduncan.com/huntsville/jumbo-loans/`
- `https://clayduncan.com/huntsville/complex-mortgage-guidance/`
- `https://clayduncan.com/blog/` should return `200` with `noindex, follow`.
- `https://clayduncan.com/404.html` should return `200` with `noindex, follow`.

## Legacy Redirect Checks

Confirm these return `301` on the live domain:

- `/about-me` -> `/about/`
- `/join-us` -> `/join-us/`
- `/supporting` -> `/`
- `/blog/categories/ai-for-realtors` -> `/realtor-ai-training/`
- `/blog/categories/ai-for-homebuyers` -> `/events/`
- `/blog/categories/huntsville-market-intel` -> `/blog/`
- `/blog/categories/mortgage-insights` -> `/huntsville/complex-mortgage-guidance/`
- `/post/mortgage-rates-2025-homeowner-divide` -> `/blog/`
- `/post/your-guide-to-ai-mortgages-and-the-real-estate-market-we-re-living-in` -> `/blog/`
- `/event-details-registration/*` -> `/events/`

Confirm this remains a `404`:

- `/loan-officer-recruiting/`

## Search Cleanup

After the live domain is on Netlify:

1. Submit `https://clayduncan.com/sitemap-index.xml` in Google Search Console.
2. Inspect old Wix URLs and confirm Google sees `301` redirects.
3. Use Google Search Console removals only for urgent stale search results.
4. Monitor indexed pages until old Wix URLs move out of results.

## Wix Handling

- Do not cancel Wix before the Netlify site is live and redirects are verified.
- After the new site has stabilized, Wix can be removed or downgraded according to account needs.
- If old Wix pages still appear in Google, handle through redirects and Search Console first, not by blocking crawlers in `robots.txt`.

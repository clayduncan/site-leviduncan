# Levi Duncan AEO Crawler Audit

Date: 2026-05-16

## Scope

Pass 3 audit for leviduncan.com covering crawler access, `llms.txt` hygiene, ecosystem strategy documentation, and formatting carryover from Pass 2.

## robots.txt Result

Status: Green.

`public/robots.txt` is AEO-permissive. The file uses:

- `User-agent: *`
- `Allow: /`
- targeted blocks only for private or operational paths: `/apply/`, `/admin/`, and `/api/`

No crawler-specific blocks were found for the requested AI crawlers.

Verified accessible by policy:

- GPTBot
- ClaudeBot
- PerplexityBot
- Google-Extended
- CCBot
- Applebot-Extended
- Bingbot

Notes:

- GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Bingbot also have explicit allow rules where present.
- CCBot and Applebot-Extended are permitted by the default `User-agent: *` rule.

Fixes applied: none.

## llms.txt Result

Status: Green.

`public/llms.txt` is present and aligned with Levi's launch positioning.

Confirmed:

- All site URLs point to `https://www.leviduncan.com/`.
- No `clayduncan.com`, Netlify staging, or Duncan Mortgage Group site URLs were found.
- The file frames leviduncan.com as Levi Duncan's canonical personal mortgage guidance site.
- The file identifies Levi as a Mortgage Loan Originator.
- The file focuses on first-time homebuyer guidance, FHA loans, USDA loans, down payment assistance, investment property guidance, and Homebuyer Master Class education.
- Duncan Mortgage Group is described only as umbrella marketing brand context, not as the primary authority entity.
- No Clay-specific positioning was found.

Fixes applied: none.

## Strategy Documentation

Status: Updated.

`docs/strategy/aeo-seo-strategy.md` now documents the current Duncan-related site performance pattern:

- self-hosted subset WOFF2 fonts under `public/fonts/`
- `@font-face` declarations in `global.css`
- font preloads in `<head>`
- no external Google Fonts links
- GA4 defer pattern using a 3-second timeout plus first-interaction listeners
- critical CSS inlined through Astro's `global.css?inline` import pattern
- open crawler policy and per-site `llms.txt` expectations

The note includes Clay implementation references and Levi implementation references:

- Levi Pass 1: `4c3327f`
- Levi Pass 2: `1b5e0e5`
- Clay Pass 1: `88bd899`
- Clay Pass 2: `e0ea90a`

## Formatting Carryover

Status: Green.

`npm run format:check` passed before any Pass 3 edits. No Pass 2 formatting carryover was found.

## Other Observations

Bing Webmaster Tools registration remains a manual Clay task and is not changed by this PR. If TXT verification is required, the TXT record should be added in Netlify DNS, not GoDaddy, because Netlify nameservers serve `leviduncan.com`.

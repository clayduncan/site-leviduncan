# Personal Site Launch Playbook

## Purpose

Use this playbook when launching another Duncan Mortgage Group personal authority site from the proven Clay/Levi Astro and Netlify pattern.

The Levi launch showed that the cleanest path is not a long Phase 2 sequence of separate page PRs once the full site can be reviewed in one deploy preview. Build the complete v1 on a launch branch, keep it deployable, review the live preview, merge once, then move to production cutover and post-launch optimization.

## Launch Model

1. Start from the current approved personal-site scaffold.
2. Preserve architecture, layout patterns, schema helpers, styles, performance standards, and brand tokens unless a specific design change is approved.
3. Replace person-specific data, page content, topical ownership, CTAs, images, social links, NMLS details, analytics, and launch-domain references.
4. Build a complete v1 behind one reviewed launch PR.
5. Merge only after the deploy preview is visually reviewed and the launch audit passes.
6. Treat anything after production cutover as post-launch optimization, not continuation of the original build sequence.

## Required Inputs

Collect these before implementation:

- Full name and regulated title.
- Individual NMLS ID and NMLS Consumer Access URL.
- Brokerage/company affiliation and company NMLS ID.
- Phone, email, booking link, application link, and any intent-specific booking links.
- Social profile URLs.
- Primary market, city list, county list, and broader service-area wording.
- Headshot or approved hero image.
- Topical ownership: what this person should be known for, and what should remain owned by Clay, Levi, or the team site.
- Unique proof signal: events, education series, reviews, local partnerships, media, or specialty content.
- Google Analytics measurement ID.
- Domain and Netlify production site target.

## Branch and PR Pattern

- Work from a `codex/` branch.
- Keep `main` deployable throughout the build.
- Use one launch PR for the complete v1 when the work is moving as a unified site launch.
- Do not follow the retired Levi Phase 2 page-by-page sequence unless a future launch is intentionally slowed for separate stakeholder review.
- If a page is intentionally incomplete, keep it non-indexable or make the placeholder status explicit and useful.

## Content and AEO Requirements

Every indexable page should have:

- Unique title and meta description.
- One H1.
- Clear answer-first opening copy.
- Clean heading hierarchy.
- Internal links to relevant hub, program, about, event, review, and CTA pages.
- Schema appropriate to the page type.
- FAQ schema where FAQ content exists.
- Regulated terminology: use "Mortgage Loan Originator" for licensed individuals.
- Explicit entity relationships: person, NMLS, Princeton Mortgage, service area, and topical ownership.
- Local context where it helps the search intent.

Avoid duplicate pages across personal sites. If a topic belongs to one person, the other site should route to the canonical owner rather than rewrite the same guide.

## Technical Requirements

Before merge:

```sh
npm run format:check
npm run build
npm run audit:launch
```

Also verify:

- Sitemap contains only the final indexable page set.
- `robots.txt` points to the production domain sitemap.
- `llms.txt` is rewritten for the person and production domain.
- No scaffold analytics, URLs, names, NMLS IDs, or social links remain.
- Exactly one analytics tag appears per rendered page.
- Canonicals point to the intended production domain.
- Internal links do not 404.
- Key pages validate in Schema Markup Validator and Google Rich Results Test where applicable.

## Launch Cutover

After merge:

1. Confirm Netlify production deploy from `main`.
2. Verify the production Netlify URL.
3. Cut DNS to Netlify.
4. Confirm apex-to-www behavior, HTTPS, SSL, and canonical URLs.
5. Submit sitemap in Google Search Console and Bing Webmaster Tools.
6. Confirm GA4 tag detection.
7. Run a production crawl for status codes, internal links, GA tags, sitemap, robots, canonicals, titles, meta descriptions, H1 count, schema presence, and `llms.txt`.

## Post-Launch Work

Typical post-launch items:

- Add Google Business Profile URL once verified.
- Populate reviews when verified reviews exist.
- Add Knowledge Graph ID after indexing.
- Create or update Wikidata/off-site entity profiles where appropriate.
- Review Search Console query and indexing data after enough impressions accrue.
- Build new support pages only when they answer a distinct question and do not duplicate existing pages.

## Levi Launch Lesson

The original Levi plan separated Phase 1 foundation from eleven Phase 2 page PRs. In practice, stakeholder review happened faster and better when the complete v1 was built and reviewed on the deploy preview. That approach should be the default for future personal-site launches unless there is a clear reason to gate each page independently.

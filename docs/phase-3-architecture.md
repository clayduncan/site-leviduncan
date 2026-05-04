# Phase Three Architecture

## Decisions

- Phase Three work runs on `codex/phase-3-aeo-architecture`.
- MDX and sitemap were installed during the scaffold. They are accepted as early Phase Three groundwork and become active as blog and content pages ship.
- The public brand is `Clay Duncan` because the domain is `clayduncan.com`.
- Levi Duncan should not receive a page in this phase. The likely future structure is separate personal sites connected through a Team Duncan property.
- Wix cutover and redirect mapping are deferred until a dedicated cutover task.

## Content System Priorities

1. AEO homepage.
2. Core page/schema helpers.
3. High-priority Huntsville pages for down payment assistance, VA loans, USDA loans, FHA loans, and closing costs.
4. Blog/category structure for AI education, Huntsville market intel, and mortgage insights.
5. Calculators after the page architecture is stable.

## Image Conventions

Use structured public image folders:

- `public/images/people/`
- `public/images/pages/`
- `public/images/events/`
- `public/images/social/`

Name files descriptively with lowercase words and hyphens, including the subject and year when useful:

- `clay-duncan-headshot-2026.jpg`
- `ai-for-realtors-workshop-huntsville-2026.jpg`

Alt text should identify the person, place, or event in plain language. Prefer useful context over keyword stuffing.

## Schema Conventions

Schema lives in `src/data/schema.ts` and should be composed from canonical site data in `src/data/site.ts` and compliance data in `src/data/compliance.ts`.

Use page-level JSON-LD for:

- Person
- LocalBusiness
- WebSite
- BreadcrumbList
- FAQPage
- Article, once blog templates exist
- LoanOrCredit or Service on product and service pages where appropriate

Every AEO page should clearly answer who Clay helps, what the page covers, where the service applies, and the next step.

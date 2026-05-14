# Inherited Phase 3+ Architecture

## Purpose

This document records the architecture inherited from Clay Duncan's Phase 3+ Astro build and how it applies to Levi Duncan's live site.

The original Clay scaffold contained Phase 3 notes that predated Levi's separate site. Levi's site is now live at `leviduncan.com`, so those original "future Levi" assumptions are retired.

## Current Decisions

- `leviduncan.com` is a live personal authority site for Levi Duncan.
- The site deploys from GitHub `main` to Netlify.
- The public brand/entity is Levi Duncan, Mortgage Loan Originator, NMLS #2721357.
- Princeton Mortgage remains the brokerage/company affiliation, NMLS #113856.
- Duncan Mortgage Group is a visual/team brand signal only on this site. Do not create a separate Duncan Mortgage Group schema entity here unless the team-site architecture is ready.
- The site uses the same Astro architecture, layout patterns, schema helpers, style system, and brand tokens proven on Clay's site.
- Future personal-site launches should follow `docs/launch/personal-site-launch-playbook.md`.

## Static Site Priorities

1. Keep the site static, fast, and content-first.
2. Preserve Astro and TypeScript patterns already in the repo.
3. Keep page data, compliance data, schema helpers, and site identity centralized under `src/data/`.
4. Use the shared `BaseLayout.astro` for sitewide head, metadata, analytics, header, footer, and schema placement.
5. Avoid unnecessary client-side JavaScript.

## Current Content System

The live site centers on:

- Homepage and Person/entity clarity.
- About page and credentials.
- Mortgage guidance hub.
- Five primary program pages: first-time homebuyer guidance, FHA loans, USDA loans, down payment assistance, and investment property.
- Focused support guides under the relevant program pages.
- Homebuyer Master Class events.
- Reviews placeholder pending Levi's Google Business Profile.

## Image Conventions

Use structured public image folders only when needed. Levi v1 intentionally uses the headshot as the primary image asset.

Alt text should identify the person, place, or event in plain language. Prefer useful context over keyword stuffing.

## Schema Conventions

Schema lives in `src/data/schema.ts` and should be composed from canonical site data in `src/data/site.ts` and compliance data in `src/data/compliance.ts`.

Use page-level JSON-LD for:

- `Person`
- `Organization`
- `ProfessionalService`
- `WebSite`
- `ProfilePage`
- `CollectionPage`
- `Service`
- `Event`
- `LearningResource`
- `BreadcrumbList`
- `FAQPage` where FAQ content exists

Every AEO page should clearly answer who Levi helps, what the page covers, where the service applies, and the next step.

## Retired Assumptions

- Levi is no longer a future site or future phase.
- The original Phase 2 page-by-page sequence is retired for Levi.
- Blog/contact/Clay program routes from the scaffold are intentionally removed from Levi's v1.

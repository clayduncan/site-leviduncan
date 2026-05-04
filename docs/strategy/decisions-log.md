# Decisions Log

## Purpose

This file records durable project decisions so future chats can quickly understand what has already been decided.

## 2026-05-02

- Created `docs/strategy/` as the project strategy memory folder.
- Adopted lowercase kebab-case filenames for strategy documents.
- Strategy memory should be updated from approved user notes, not invented from assumptions.
- clayduncan.com should continue to balance three pillars: AEO, SEO-rich content, and superior UI experience.
- Landing pages are part of the main website, not separate mini-sites.
- `/huntsville/va-loans/` is the first SEO/AEO landing-page baseline.
- Confirmed the strategic ecosystem direction: `clayduncan.com` first, `leviaduncan.com` second, and a future shared Team Duncan property third.
- clayduncan.com is Clay Duncan's personal authority site, not the full Team Duncan site.
- leviduncan.com should eventually use the same static Astro/Netlify playbook but carry distinct positioning rather than duplicate Clay's content.
- The future team property should act as a routing and credibility hub, not a duplicate content warehouse.
- Clay should primarily own experience-led and higher-complexity paths: VA, Redstone Arsenal and military buyers, jumbo, complex purchase strategy, REALTOR® AI education, and leadership credibility.
- Levi should primarily own beginner and accessibility paths: first-time homebuyers, down payment assistance, USDA, FHA, buyer readiness, budgeting, and early mortgage education.
- The three sites should share AEO, SEO, UI, schema, and content-quality standards while maintaining distinct primary entities.
- Consumer-facing architecture should start with the buyer's situation before the loan product.
- `Team Duncan` remains an open brand/domain decision. `Duncan Mortgage Team` is the current strategic favorite because it is clearer and more searchable than `The Team Duncan`.
- Generic `teamduncan.com` appears to be used by another real estate/property-management business, so avoid assuming that exact domain is available or strategically clean.
- Approved the richer landing-page UI direction: editorial hero, strong proof strip, direct-answer section, local context, process/readiness section, FAQ, official source panel, and final CTA.
- Approved `/huntsville/va-loans/` as the first visual baseline for premium service landing pages.
- UI strategy memory should stay focused on visual direction, page experience, layout, components, mobile behavior, and things to avoid; broader positioning belongs in other strategy files.
- Approved the Clay banner/background visual direction as the personal-site north star. At minimum, preserve the hero image treatment with Clay in front of the warm modern interior background.
- The Clay site should be personal-brand first and Princeton-compatible, not a Princeton Mortgage clone site. Princeton colors should serve as affiliation and trust accents rather than the full palette.
- Selected `Concept A · Warm Modern Authority` from `/concepts/va-a/` as the winning UI direction for service landing pages and the VA Loans page.
- Refined the UI palette so cognac/warm wood is the main premium accent, sage/olive is the quiet secondary accent, bright blue is primarily for actions, and Princeton lime is rare.
- Adopted Source Serif 4 for editorial headings and Inter for body/UI text.
- Approved deep navy as the default filled CTA color for the warm authority system, with dark cognac as the hover/accent state.
- Removed the separate `/huntsville/military-homebuyers/` page because it overlapped too heavily with `/huntsville/va-loans/`. The VA page should own Redstone Arsenal and military-homebuyer intent unless a future broader relocation guide becomes clearly differentiated.

## 2026-05-04

- Started the Levi Duncan personal-site rebuild from the Clay Duncan Phase 3+ scaffold.
- Preserved Clay's Astro architecture, layouts, component patterns, schema composition approach, styles, and brand tokens for Levi's v1.
- Set Levi Duncan as the primary site entity: Mortgage Loan Originator, NMLS #2721357, Huntsville, Alabama, Princeton Mortgage, NMLS #113856.
- Confirmed Levi-owned topical depth: first-time homebuyer guidance, FHA loans, USDA loans, down payment assistance, buyer readiness, budgeting, credit preparation, and investment property guidance.
- Removed Clay-specific v1 routes from Levi's scaffold: contact, blog, REALTOR AI training, why-join, VA, jumbo, medical professional mortgage, and complex mortgage guidance.
- Added Homebuyer Master Class as Levi's unique events signal and retained past events as local authority proof.
- Kept reviews as an empty placeholder until Levi's Google Business Profile and verified review source are available.
- Resolved Levi's short CTA links for reference: `https://bit.ly/BookLevi` points to `https://calendly.com/lduncan-princetonmortgage/30min`, and `https://bit.ly/AppWithLevi` points to `https://princeton.tidalwave.ai/signup/levi.duncan/D2OUK3FT86H9KK708470`.
- Foundation/data PRs may make minimal page-template edits required to keep `main` deployable after data shape changes and page deletions. Scope: "make it compile," not "build the final page." Full page builds happen in their dedicated PRs.
- Phase 2 page PRs fully replace the Phase 1 lightweight scaffolds rather than building on them incrementally. Each Phase 2 page is built clean against its own AEO/SEO checklist. Scaffolds existed only to keep `main` deployable through Phase 1.

## Future Decisions

Add new decisions here with dates, short rationale, and any affected files or pages.

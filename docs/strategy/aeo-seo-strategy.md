# AEO-Dominant Personal Authority Websites for Duncan Mortgage Group, Powered by Princeton Mortgage

**Anchored to Mortgage Origination, Real Estate Agent AI Training, and Homebuyer Education in Huntsville, Alabama**
**Compiled: 05-05-2026 | Last Verified: 05-06-2026**

---

## A. EXECUTIVE SUMMARY

Answer Engine Optimization (AEO) is the practice of structuring a website so that AI engines (ChatGPT, Perplexity, Claude, Gemini, Copilot, Meta AI) select it as a cited source when generating answers. For Clay Duncan, Levi Duncan, and Duncan Mortgage Group in Huntsville, Alabama, AEO is the highest-leverage marketing investment available in 2026 because (1) mortgage is a Your Money or Your Life (YMYL) category where E-E-A-T signals are amplified, (2) AI engines disproportionately cite entities with verifiable credentials such as NMLS registration, and (3) AI search referral conversion rates run roughly 3 to 4 times higher than traditional organic per HubSpot and Amsive case data (Strongly Supported).

**Strategic frame: personal authority over brand authority.** The investment is concentrated on two personal authority sites, clayduncan.com and leviduncan.com, with duncanmortgagegroup.com serving as a relay that feeds authority signals into the personal sites rather than competing for citations of its own. Duncan Mortgage Group is a marketing brand operating under Princeton Mortgage's NMLS company license. Clay and Levi hold individual NMLS credentials. Princeton Mortgage's NMLS appears in the footer of every site. The team brand never carries its own NMLS identifier in schema or copy.

**Core findings:**

1. **AI engines do not behave like Googlebot.** GPTBot, ClaudeBot, and PerplexityBot do not execute JavaScript (Confirmed via Vercel and Prerender.io analyses). Server-Side Rendering (SSR) or Static Site Generation (SSG) is non-negotiable. Google-Extended is the exception: it shares Google's Web Rendering Service and does render JS (Confirmed by Martin Splitt, Google).

2. **Citation selection is driven by entity recognition, not backlinks alone.** AirOps analysis of 548,534 pages found ChatGPT cites only ~15% of pages it retrieves; the differentiator at the selection stage is content-answer fit, structural clarity, and entity verification (Strongly Supported).

3. **The Princeton GEO study (Aggarwal et al., KDD 2024) is the single Tier 2 anchor for content tactics.** Adding statistics improves citation visibility ~37%, authoritative quotations ~40%, and inline citations ~30% (Confirmed). Keyword stuffing reduces visibility ~9% (Confirmed).

4. **For mortgage specifically, NMLS Consumer Access is the single highest-value off-site entity anchor.** Every Clay Duncan and Levi Duncan property must link to their NMLS profile via `sameAs`, display the NMLS ID prominently, and ensure NAP consistency between NMLS, the website, Google Business Profile, and LinkedIn (Strongly Supported).

5. **FAQPage rich-result schema was deprecated in 2023 for non-government/non-health sites, but the schema itself still helps AI parsers.** Keep the markup; do not expect Google rich results from it (Confirmed via Google Search Central, 08-08-2023).

6. **Three-site architecture is sound when role-separated correctly.** Personal sites carry canonical Person definitions and compete for name-based, specialty, and deep-topic queries. The roll-up references the personal sites by `@id`, hosts team-level branded queries only, and routes traffic outward via deliberate hotlinks. Risk: if the roll-up duplicates personal-site content, AI engines may collapse the ecosystem and pick canonical sources unpredictably.

**Highest-impact recommendations (priority order):**

1. Implement SSR or SSG across all three sites; verify raw-HTML rendering with `curl -A "GPTBot"`.
2. Deploy canonical Person schemas on clayduncan.com and leviduncan.com, with the roll-up referencing them by `@id`.
3. Configure robots.txt to allow retrieval crawlers (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User, Google-Extended, Bingbot); decide consciously on training crawlers.
4. Build answer-first content: 40-60 word direct answers under question-formatted H2s on every personal-site page.
5. Publish llms.txt at root of each site. Adoption is contested but cost is near zero.
6. Establish Wikidata entries for Clay Duncan and Levi Duncan as individual entities, with Duncan Mortgage Group as a related entity, citing independent local media (Huntsville Business Journal, AL.com).
7. Concentrate first 90 days on 25-50 pillar pages targeting Huntsville/Madison/Athens/Decatur mortgage queries on the personal sites; keep the roll-up lean.

**Volatility outlook:** robots.txt directives, schema graph patterns, and SSR requirements are Stable (12+ months). llms.txt adoption, AI Overview citation patterns, and Perplexity stealth-crawler behavior are Evolving. Agentic AI fetchers (Google-Agent, ChatGPT Atlas, Perplexity Comet) are Experimental.

---

## B. HOW TO USE THIS DOCUMENT

- **Developers:** Start at Section D9 (technical performance), D2 (machine-readable files), and Section I (deliverable templates). The JSON-LD graphs in I.3 are production-ready for both personal sites and the roll-up.
- **Content strategists:** Start at D6 (FAQ strategy), D8 (topical authority), D14 (query intent), and D15 (citation engineering).
- **AI coding agents:** Cite Section I templates verbatim. Cite Section J glossary for term definitions. Treat confidence labels as machine-readable trust signals.
- **Clay and Levi Duncan personally:** Read A, C, E, F, G, and L. The 30-60-90 roadmap (G) is the operational document. Section D4.1 explains the three-site relay model in plain language.

---

## C. COMMON MISCONCEPTIONS

| Myth                                                                       | Reality                                                                                                                                                                                                                                                                   | Confidence                | Source                                            |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------- |
| "Block all AI crawlers to protect content."                                | Blocking training crawlers (GPTBot, ClaudeBot, CCBot) is defensible. Blocking retrieval crawlers (OAI-SearchBot, PerplexityBot, Claude-SearchBot, Google-Extended) removes you from AI citations. BuzzStream found 71% of news sites accidentally blocked retrieval bots. | Confirmed                 | Anthropic, OpenAI, BuzzStream                     |
| "FAQ schema gets you rich snippets."                                       | False since 08-2023. Rich results restricted to government/health domains. Schema still helps AI parsing.                                                                                                                                                                 | Confirmed                 | Google Search Central                             |
| "Google AI Overviews use Google-Extended."                                 | False. AI Overviews use Googlebot. Google-Extended controls Gemini training only.                                                                                                                                                                                         | Confirmed                 | Google Developers                                 |
| "Submit your site to ChatGPT for citations."                               | No submission mechanism exists. Anyone selling this is fraudulent.                                                                                                                                                                                                        | Confirmed                 | OpenAI documentation                              |
| "More backlinks = more AI citations."                                      | Domain authority gates entry to retrieval pool but does not drive selection within it. Mid-DA pages (40-80) cite at rates comparable to higher DA.                                                                                                                        | Strongly Supported        | AirOps March 2026                                 |
| "AI engines render JavaScript like Google."                                | Only Google-Extended and Bingbot render JS. GPTBot, ClaudeBot, PerplexityBot do not.                                                                                                                                                                                      | Confirmed                 | Vercel, Prerender.io, Google                      |
| "Long content wins citations."                                             | Structure beats length. 800-word structured pages routinely outcite 3,000-word unstructured guides.                                                                                                                                                                       | Strongly Supported        | Norg, Sellm 400K-page study                       |
| "llms.txt is officially supported."                                        | No major LLM vendor has confirmed support. John Mueller (Google) explicitly denied. Profound observed Microsoft and OpenAI fetching the file. Treat as low-cost speculative bet.                                                                                          | Plausible but Unconfirmed | John Mueller, Profound, Mintlify                  |
| "A team brand site builds personal authority faster than a personal site." | False for AEO. AI engines treat Person and Organization as distinct entity types. Personal authority compounds on personal-name domains; team brand sites compete for branded and team-level queries only.                                                                | Strongly Supported        | Practitioner consensus, Schema.org type semantics |

---

## D. THE 18 RESEARCH DIMENSIONS

### D1. HOW AI ENGINES ACTUALLY READ AND RANK WEBSITES

#### OpenAI (ChatGPT, ChatGPT Search, SearchGPT)

**Three documented crawlers** (Confirmed, OpenAI platform docs):

- **GPTBot** – Training. UA: `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.1; +https://openai.com/gptbot)`
- **OAI-SearchBot** – Search index for ChatGPT Search.
- **ChatGPT-User** – User-initiated fetches; OpenAI notes robots.txt may not strictly govern this agent.

IP ranges published as JSON at `openai.com/gptbot.json`, `openai.com/searchbot.json`, `openai.com/chatgpt-user.json`.

**Retrieval method:** Hybrid. Default mode generates from training data (~570 GB, ~60% Common Crawl). Browsing mode queries Bing's index, evaluates, and synthesizes. ChatGPT cites ~3.4 sources per response on average (Strongly Supported, Profound 2025).

**JavaScript:** Does not execute. Reads raw HTML only (Confirmed via Onely, Vercel analysis of 500M+ GPTBot fetches).
**PDFs:** Yes, parses.
**Tables:** Yes, parses HTML tables better than image-rendered tables.
**OCR:** Limited; image content typically requires alt text or surrounding text.

**Citation UI:** Inline numbered citations in browsing-enabled responses; default mode produces no citations.

**Known preferences (Strongly Supported):** Wikipedia (47.9% of cited sources), Reddit (11.3%), Forbes (6.8%) per Profound. Pages with FAQ schema and inline citations weighted ~40% higher (Authoritas, 2025). Articles with 19+ statistics average 5.4 citations.

**Mortgage example:** A page on clayduncan.com titled "What Are FHA Loan Requirements in Madison County, Alabama?" with H2 "What is the minimum FHA credit score in Alabama?" followed by a 50-word direct answer citing HUD and the Alabama Housing Finance Authority will outperform a 3,000-word generic FHA guide on a team brand domain.

**Volatility:** Stable for crawler architecture. Evolving for citation source mix.

**Evidence and Test:** Run `curl -A "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.1; +https://openai.com/gptbot)" https://clayduncan.com/` and verify all key content is in the response body. Confidence: Confirmed.

#### Perplexity

**Two documented crawlers:**

- **PerplexityBot** – Indexing for Perplexity AI.
- **Perplexity-User** – User-initiated fetch (robots.txt may not apply).

IP ranges: `perplexity.com/perplexitybot.json`, `perplexity.com/perplexity-user.json`.

**Conflict notice:** In August 2024, Cloudflare published evidence that Perplexity uses undeclared user agents and rotates IPs/ASNs to bypass `Disallow` directives. Perplexity disputed parts of this. Treat Perplexity as the AI engine with the weakest commitment to crawler norms (Strongly Supported, Tier 1 Cloudflare).

**Retrieval:** Live RAG. Cites ~17.7 sources per response on average (Profound). Reddit dominates citation share (46.7%).

**Preferences:** Direct answers in first 2 sentences; citation-rich content (outbound links to authority); semantic HTML.

**Volatility:** Evolving (stealth-crawler dispute, ongoing legal pressure).

**Evidence and Test:** Submit a query like "best mortgage broker in Huntsville Alabama for first-time homebuyers" to Perplexity. Note which sources cite. If clayduncan.com or leviduncan.com absent, identify the structural difference between cited pages and your own.

#### Anthropic Claude

**Three documented crawlers** (Confirmed, Anthropic Help Center):

- **ClaudeBot** – Training. Legacy strings `Claude-Web` and `Anthropic-AI` are deprecated.
- **Claude-SearchBot** – Search indexing.
- **Claude-User** – User-initiated fetches; Anthropic states robots.txt is honored (differs from OpenAI/Perplexity stance).

**JavaScript:** Does not render JS for most fetches.
**Citation UI:** Inline citations available in Claude with web access.

**Volatility:** Stable. Anthropic's three-bot framework documented in 2025.

#### Google (Gemini, AI Overviews, AI Mode)

**Two distinct systems:**

- **Googlebot** – Standard search crawler. Powers AI Overviews and AI Mode (Confirmed: AI Overviews source from Googlebot index, NOT Google-Extended).
- **Google-Extended** – Controls whether content trains Gemini and Vertex AI. Does NOT affect Search ranking (Confirmed).

**Newer agent:** **Google-Agent** – User-Triggered Fetcher for Project Mariner. Ignores robots.txt by design (Confirmed, Google docs, US-only as of 04-2026).

**JavaScript:** Both Googlebot and Google-Extended use Web Rendering Service (WRS) and render JS (Confirmed by Martin Splitt). This makes Google Gemini the most forgiving AI engine for JS-heavy sites.

**Citation UI:** AI Overviews cite 3-5 sources with direct links. ~92% correlation between top-10 organic ranks and AI Overview citations (Strongly Supported, Surmado citing multiple studies).

**Mortgage implication:** For Google AI Overviews, traditional SEO is the prerequisite. Optimize for top-10 organic ranking on mortgage queries; the AI citation follows.

#### Microsoft Copilot

**Single crawler:** Bingbot serves both Bing Search and Microsoft Copilot answers. Cannot separate AI ingestion from search indexing (Confirmed).

**Renders JS:** Yes.
**Citation UI:** Numbered source links beneath synthesized answers.

**Strategic note:** Both ChatGPT (browsing) and Microsoft Copilot rely on Bing's index. Optimizing for Bing Webmaster Tools indexing is high-leverage because it serves two AI engines from one effort.

#### Meta AI

Limited public documentation. Crawler: **Meta-ExternalAgent**. Retrieval mostly from training data plus first-party content from Facebook/Instagram. Not a primary citation surface for mortgage queries in 2026; deprioritize.

#### You.com

Smaller scale. Sources via its own crawler plus Bing partnership. Treat as ancillary.

#### Cross-Engine Topics

**DOM source order vs visual order:** AI engines parse the source HTML, not the visually-rendered output. **Mortgage example:** put "Clay Duncan, NMLS #[ID], Huntsville Alabama mortgage loan originator at Princeton Mortgage" in the first 200 bytes of `<body>` in DOM order on clayduncan.com, regardless of where it visually appears.

**Semantic HTML weighting:** `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<footer>` give parsers structural cues. Wrap each FAQ in `<section itemscope itemtype="https://schema.org/Question">`.

**Vector embeddings and chunking:** AI engines split pages into chunks (typically 200-800 tokens) and embed each chunk as a vector. Retrieval matches query vectors to chunk vectors. **Clean chunk = single topic, self-contained, paragraph length 40-100 words, consistent terminology.** **Bad mortgage example:** a single 2000-word paragraph mixing FHA, VA, and conventional loans. **Good mortgage example:** three separate H2 sections, each with a 50-word answer block, each standalone.

**Visual hierarchy:** AI engines mostly ignore font size and color. They infer hierarchy from heading levels, list elements, and tables.

**Citation selection:** Per AirOps and Sellm: content-answer fit (~55% weight), authority signals (~25%), structural clarity (~20%). Pages that mirror how the AI itself would write the answer get cited most.

---

### D2. MACHINE-READABLE PERMISSIONS AND CONTEXT FILES

#### robots.txt for AI bots

**Recommended directive set for Duncan Mortgage Group ecosystem (allow retrieval, allow training):** See Section I.1 for full template.

**Rationale for allowing training crawlers in mortgage YMYL context:** Mortgage terminology and individual expertise (Clay's, Levi's) being baked into model weights creates compounding citation potential as new model versions release. The downside (uncompensated training use) is real but minor for personal-brand sites where the goal is recognition.

**Volatility:** Stable. **Cost:** Free. **Reversibility:** Immediate via robots.txt edit. **Risk:** Low.

**Evidence and Test:** After deploying, monitor server logs for User-Agent strings containing GPTBot, ClaudeBot, PerplexityBot. Confirm bot visits within 14 days. Confidence: Confirmed.

#### llms.txt

**Status:** Proposed by Jeremy Howard (Answer.AI), 09-2024. No major LLM vendor has officially adopted it. John Mueller (Google) denied use. Profound (paid GEO tracking) reports Microsoft and OpenAI bots fetching the file. **Confidence: Plausible but Unconfirmed.**

**Recommendation:** Deploy at low cost on all three sites: clayduncan.com/llms.txt, leviduncan.com/llms.txt, duncanmortgagegroup.com/llms.txt. (See Section I.2 for templates.)

#### Other meta directives

- `<meta name="robots" content="noindex">` removes from search but ALSO blocks retrieval crawlers. Use only on private pages.
- `noai` and `noimageai` meta tags – proposed, not widely honored.
- `X-Robots-Tag: noai` HTTP header – same status.

#### Strategic open question

**Does blocking training crawlers reduce future citation potential?** For Duncan Mortgage Group ecosystem, **allow training** is the preferred default given the goal is entity recognition for personal brands competing against well-established lenders.

---

### D3. DOMAIN AND URL ARCHITECTURE

**Domain choices for Duncan Mortgage Group ecosystem:**

- `clayduncan.com` – Personal authority for Clay Duncan; specialty AI training for real estate agents.
- `leviduncan.com` – Personal authority for Levi Duncan; specialty Homebuyer Masterclass.
- `duncanmortgagegroup.com` – Roll-up team site, designed to scale beyond Clay and Levi if additional team members join.

**Avoid exact-match keyword domains.** Personal-name domains anchor the entity.

**Subdomain vs subdirectory:** For topical authority, **subdirectory** wins. `clayduncan.com/agent-ai-training/` consolidates authority on the root domain. `training.clayduncan.com` fragments it.

**URL slug construction:** Lowercase, hyphenated, no more than 5 words, reflect content topic, avoid stop words and dates if content is evergreen.

**Good:** `clayduncan.com/first-time-homebuyer-huntsville/`
**Bad:** `clayduncan.com/blog/2024/03/15/the-ultimate-comprehensive-guide-to-buying-your-first-home-in-huntsville-alabama-this-year/`

**Canonical URLs:** Force HTTPS, force www OR non-www (pick one), normalize trailing slash, set canonical link element on every page. Entity fragmentation from inconsistent URLs is the #1 silent SEO killer.

**Multi-site duplication risk:** clayduncan.com is the canonical home for Clay's full bio. leviduncan.com is the canonical home for Levi's. duncanmortgagegroup.com presents Clay and Levi briefly (3-4 sentences each) with explicit "Read full bio on clayduncan.com" links pointing back to canonical sources.

**Multilingual:** Not relevant for North Alabama market unless serving Spanish-speaking borrowers.

**Volatility:** Stable. **Cost:** Domain $10-15/year each. **Reversibility:** Domain changes are painful (301 redirects required). Decide once.

**Evidence and Test:** Use `curl -I https://clayduncan.com` to confirm canonical headers. Confidence: Confirmed.

---

### D4. SITE-LEVEL ARCHITECTURE

#### D4.1 The Three-Site Relay Model (strategic frame)

Duncan Mortgage Group ecosystem operates on a relay model where the roll-up site exists to feed authority signals into the personal sites, not to compete for citations of its own. This is a deliberate design decision driven by the goal of building personal authority over brand authority.

**Roles:**

- **clayduncan.com:** Canonical home for Clay's Person entity, Clay's specialty (AI training for real estate agents), and Clay's mortgage origination authority. Wins name-based queries ("Clay Duncan mortgage Huntsville"), specialty queries ("AI training real estate agents Huntsville"), and topic-deep queries on mortgage products Clay focuses on.
- **leviduncan.com:** Canonical home for Levi's Person entity, Levi's specialty (Homebuyer Masterclass), and Levi's mortgage origination authority. Wins name-based queries for Levi, specialty queries on first-time homebuyer education, and topic-deep mortgage queries Levi focuses on.
- **duncanmortgagegroup.com:** Relay site. Wins team-level branded queries ("Duncan Mortgage Group Huntsville reviews"), serves as a hub for prospects who arrive at the team brand and need routing to the right specialty, and aggregates lightweight summaries of the personal-site content with hotlinks back to canonical sources.

**What the roll-up does NOT do:**

- Host canonical Person definitions for Clay or Levi (those live on personal sites)
- Carry its own NMLS identifier (it's not a registered branch; Princeton Mortgage's NMLS appears in the footer for company-level licensing context)
- Duplicate full FAQ answers from the personal sites
- Compete for citations on queries where Clay's or Levi's personal authority should answer

**Hotlink topology:** Every "Next AI Training" link routes to clayduncan.com. Every "Next Homebuyer Masterclass" link routes to leviduncan.com. These links function as topical association votes: AI engines learn that Clay owns AI training, Levi owns Homebuyer Masterclass.

**Roll-up content rule:** With personal authority as the primary goal, accepting the roll-up will earn fewer citations on its own is the right tradeoff; the personal sites benefit from the linked authority. If you ever decide the roll-up should also win citations, that requires substantive original team-level content (origin story, distinct team services, geographic scope) that exists nowhere else.

#### D4.2 Pillar-and-cluster pattern (recommended for personal sites)

```
                 PERSONAL SITE HOMEPAGE
                         |
        +----------------+----------------+
        |                |                |
    PILLAR 1         PILLAR 2         PILLAR 3
   First-Time      Refinancing       Specialty
   Homebuyer         Guide          (AI training
                                    or Masterclass)
        |                |                |
    +---+---+        +---+---+        +---+---+
   FAQ FAQ FAQ      FAQ FAQ FAQ      FAQ FAQ FAQ
```

Each pillar is a comprehensive 2,500-3,500 word guide. Each cluster page is 800-1,500 words answering one specific question, linking up to its pillar and laterally to siblings.

**Internal linking:** Use descriptive anchor text. Avoid "click here." Link from FAQ answers back to the pillar with anchor like "See our complete FHA loan guide for Madison County."

**Top nav:** No more than 7 items. Footer can be denser. Both should expose entity reinforcement (NMLS ID in footer with Princeton Mortgage attribution, individual's name and credential).

**Breadcrumbs:** Implement BreadcrumbList schema. Reinforces entity hierarchy.

**Sitemap strategy:** XML sitemap submitted to Google Search Console, Bing Webmaster Tools, and IndexNow. Update `lastmod` only when content materially changes.

**noindex strategy:** Tag pages, author archives, paginated listings often add noise. Use `noindex` on these to focus crawler attention on canonical pages.

**Page count thresholds:** Each personal site can dominate with 30-50 well-built pages. The roll-up should stay leaner (10-20 pages). Programmatic scaling beyond 200 pages introduces thin-content risk in YMYL.

---

### D5. HOMEPAGE SPECIFICALLY

#### Personal site homepage (clayduncan.com, leviduncan.com)

**Must-haves for Clay Duncan personal site homepage:**

- H1: "Clay Duncan, Mortgage Loan Originator and AI Trainer in Huntsville, Alabama" (full entity definition)
- Subhead naming Princeton Mortgage and NMLS ID
- 2-3 paragraph intro establishing experience, geography, and specialties
- 3-5 Q&A blocks answering top homepage queries
- Trust signals: NMLS verification link, BBB rating if applicable, professional photo with descriptive alt text
- Schema.org Person + ProfessionalService graph in `<head>`, with Person as the canonical definition
- CTA above the fold: phone, calendar booking, contact form
- Below fold: testimonials with names and dates, links to pillar guides

**Anti-patterns:**

- Carousel hero with no static text (AI engines see only the first slide's text)
- Marketing slogans without entity grounding
- Too many unrelated topics

**First viewport (~first 1000px):** Vision-capable AI engines weight this region. Ensure name, credential, geography, and primary service appear here in DOM order.

**Word count:** 800-1,500 words for the personal site homepage strikes balance between depth and clarity.

**Mortgage example good vs bad:**

**Bad H1:** "Welcome to Clay's Mortgage Site!"
**Good H1:** "Clay Duncan, Mortgage Loan Originator and AI Trainer at Princeton Mortgage in Huntsville, Alabama"

#### Roll-up homepage (duncanmortgagegroup.com)

**Different role, different rules.** The roll-up homepage is a routing page, not a personal authority page.

**Must-haves:**

- H1: "Duncan Mortgage Group, Powered by Princeton Mortgage" (the "powered by" appears subtly)
- Brief team intro (2-3 paragraphs) describing the team as a unit
- Two team member modules, each with photo, role, NMLS ID, specialty headline, and "Read full bio" link to the personal site
- "Next AI Training" CTA hotlinking to clayduncan.com
- "Next Homebuyer Masterclass" CTA hotlinking to leviduncan.com
- Service overview at team level (loan programs offered)
- Princeton Mortgage NMLS in footer

**Anti-patterns specific to the roll-up:**

- Verbatim bio text duplicated from personal sites (causes canonical confusion)
- Standalone Person schema for Clay or Levi (those should reference personal-site `@id` only)
- Independent claim of NMLS authority for the team brand
- Trying to win specialty queries the personal sites should win

**Word count:** 600-1,000 words is enough. The roll-up homepage is a hub, not a destination.

---

### D6. FAQ AND QUESTION-DRIVEN CONTENT STRATEGY

**Why FAQs dominate AEO citations:** AI engines extract chunks, and a Q&A pair is naturally chunked. The H2 question is the retrieval anchor; the 40-60 word answer is the extracted citation.

**Mining real questions:**

- Google Search Console "Queries" report
- AnswerThePublic, AlsoAsked free tiers
- Live chat transcripts and CRM notes
- Voice-of-customer on real estate agent referral calls
- Reddit r/FirstTimeHomeBuyer, r/RealEstate threads filtered to Alabama

**Optimal FAQ structure per page:**

- H2 phrased as the user's actual question
- Direct answer in 40-60 words immediately under H2
- 1-2 paragraphs of expansion (150-300 words)
- Optional: bulleted list, table, or example
- Internal link to related FAQ or pillar

**Mortgage example (good):**

```
H2: What credit score do I need for an FHA loan in Alabama?

The minimum credit score for an FHA loan in Alabama is 580 with a 3.5%
down payment, or 500-579 with a 10% down payment, per HUD Handbook 4000.1.
Most Alabama lenders, including Princeton Mortgage in Huntsville, set
overlay minimums between 600 and 640 to reduce default risk.

[expansion paragraphs follow]
```

**Mortgage example (bad):**

```
H2: FHA Loans

FHA loans are great for first-time buyers! With low down payments and
flexible credit requirements, an FHA loan from Duncan Mortgage Group
could be your path to homeownership in beautiful Huntsville. Contact
us today!
```

**Definitive voice:** "The minimum credit score is 580" not "It can vary, but generally most lenders require around 580."

**FAQPage JSON-LD schema:** Still implement despite Google's rich-result restriction, because AI parsers use it. Common error: schema content not matching visible page text.

**FAQ placement strategy across the three sites:**

- **Personal sites (canonical home):** Every FAQ has its full home on either clayduncan.com or leviduncan.com depending on topic and specialty owner. Full answer, full schema, full expansion. Each personal site hosts 50-100 FAQs across its pillar pages.
- **Roll-up site:** Excerpt-and-link pattern. Show the question and the first 1-2 sentences of the answer, then link "Read the full answer on clayduncan.com" or "Read the full answer on leviduncan.com" to the canonical source. This preserves a single canonical home for each FAQ, lets AI engines follow the link to deeper personal-site context when citing, and avoids duplication risk.

**Inline FAQs vs dedicated FAQ page on personal sites:** Inline wins for AEO. Each pillar page should host 5-10 FAQs relevant to its topic.

**Optimal FAQ count:** 5-15 per pillar page on personal sites. Site-wide on each personal site, 50-100 well-targeted FAQs covers the long-tail mortgage and specialty question space for North Alabama.

**Volatility:** Stable. **Evidence and Test:** Submit 20 mortgage queries to ChatGPT Search; track which FAQ phrasings get cited and refine.

---

### D7. SCHEMA MARKUP STRATEGY

#### Most valuable types for the Duncan Mortgage Group ecosystem

- `Person` (Clay Duncan, Levi Duncan) – canonical on respective personal sites
- `Organization` (Duncan Mortgage Group as marketing brand; Princeton Mortgage as licensed parent)
- `ProfessionalService` (Duncan Mortgage Group's services at the team level, no NMLS identifier)
- `LocalBusiness` properties (address, geo, areaServed) on the roll-up where applicable, but without claiming NMLS-licensed-entity status
- `Service` (loan products on personal sites, agent training on Clay's site, Homebuyer Masterclass on Levi's)
- `Article` and `FAQPage` (content pages)
- `Course` or `LearningResource` (Levi's Homebuyer Masterclass; Clay's AI training program)
- `BreadcrumbList`, `WebPage`, `WebSite`, `QAPage`

#### The canonical-Person rule

This is the single most important schema decision in the ecosystem.

**Clay's Person schema is canonically defined on clayduncan.com.** Every other site (leviduncan.com if Clay is mentioned, duncanmortgagegroup.com always) references that canonical Person by `@id` rather than redefining it. Same rule for Levi's Person schema, canonically defined on leviduncan.com.

This concentrates entity authority where it should live (on the personal sites) and avoids fragmentation across the ecosystem. AI engines following any reference to Clay's Person ID land at clayduncan.com as the source of truth.

#### Graph-based modeling

Use `@graph` to nest related entities with stable `@id` references.

#### sameAs links for Clay Duncan must include

- NMLS Consumer Access profile URL (mortgage-specific Tier 1)
- LinkedIn
- Facebook business page
- Princeton Mortgage employer page
- Google Business Profile (CID URL)
- Crunchbase if listed
- Any podcast appearances or media mentions
- Wikidata Q-ID once created

Same pattern for Levi.

#### Common schema errors

```json
// BAD: schema asserts info contradicting visible page
{
  "@type": "Person",
  "name": "Clay Duncan",
  "jobTitle": "Real Estate Agent"
}

// GOOD: schema matches page
{
  "@type": "Person",
  "name": "Clay Duncan",
  "jobTitle": "Mortgage Loan Originator and AI Trainer",
  "worksFor": {
    "@type": "Organization",
    "name": "Princeton Mortgage"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Duncan Mortgage Group"
  },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "NMLS",
    "value": "[Clay's NMLS ID]"
  }
}
```

**Free validation tools (use these before paid):**

- Google Rich Results Test
- Schema.org Markup Validator
- View raw HTML to confirm `<script type="application/ld+json">` actually renders (SSR check)

**Visible content vs schema divergence:** Google explicitly downgrades pages where schema asserts content not visible to users. Keep schema and HTML aligned.

**Emerging schema:** `LearningResource` for Levi's Homebuyer Masterclass and Clay's AI training program. `MortgageLoan` for specific loan products. `EducationalOccupationalCredential` for licenses (NMLS).

---

### D8. CONTENT STRATEGY AND TOPICAL AUTHORITY

**How AI engines determine topical authority:**

- Density of related entity mentions across pages
- Internal linking patterns
- External corroboration (mentions on third-party sites)
- Author byline consistency
- Recency of last meaningful update

**Minimum content footprint for authority in Huntsville mortgage niche (per personal site):**

- Homepage + About + Contact (3 utility pages)
- 5-7 pillar guides (FHA, VA, conventional, refinance, first-time buyer, plus the individual's specialty)
- 30-50 cluster FAQ pages
- 10-15 location pages (Huntsville, Madison, Athens, Decatur, Madison County, neighborhoods)
- Author bio page with credentials and `Person` schema

**Information gain:** Original data wins citations. Examples:

- "Average days-on-market for Huntsville homes by ZIP code, 2025" with primary data
- "Pre-approval-to-close timeline for Madison County FHA loans" with internal pipeline data
- "What we learned training 200 Huntsville real estate agents on AI" (Clay's specialty content)
- "Homebuyer Masterclass outcomes from 2025 cohorts" (Levi's specialty content)

**E-E-A-T translation:**

- **Experience:** Clay's loan origination history, Levi's training cohorts. Show, don't claim.
- **Expertise:** NMLS license, continuing education, named teaching engagements.
- **Authoritativeness:** Citations in Huntsville Business Journal, Princeton Mortgage corporate page linking to Clay or Levi.
- **Trust:** NMLS Consumer Access link, BBB, Google Business Profile reviews, accurate contact info.

**Author bio pages:** Each personal site's bio page must be at least 300 words, include photo, credentials, NMLS, social profiles, contact. Implement `Person` schema. Link author bylines to bio page via `author` property in Article schema.

**Co-occurrence and predicate-object-subject:** AI engines learn that "Clay Duncan" co-occurs with "Princeton Mortgage," "Huntsville," "NMLS," "FHA loans," "AI training." Reinforce these triples consistently across the site.

#### Programmatic and scalable content generation

Acceptable for genuine variation (one page per Huntsville neighborhood with real local data). Crosses thin-content line when pages are templated with only city-name swapped. **Rule:** if a human cannot distinguish two location pages by reading them, they are too similar.

**AI-assisted scaling:** Acceptable when human-edited and grounded in original data. The line that triggers detection is content that is structurally generic.

#### Indexing acceleration and content distribution

- Submit URLs via Google Search Console URL Inspection
- Use IndexNow protocol for Bing/Microsoft Copilot
- Update `lastmod` in sitemap honestly when content materially changes
- Internal linking burst from homepage to new content
- Share to LinkedIn and Facebook for crawler discovery
- Cross-link from leviduncan.com to clayduncan.com pillars where relevant, and vice versa

**Content lifecycle:**

- Update major pillars quarterly (rates, regulations change)
- Rewrite when factually outdated
- noindex retired content rather than deleting (preserves URL history)
- Versioning: track edits for YMYL claims

---

### D9. TECHNICAL PERFORMANCE, ACCESSIBILITY, AND MULTIMODAL OPTIMIZATION

**Core Web Vitals:** LCP under 2.5s, INP under 200ms, CLS under 0.1.

**Page speed for AI ingestion:** Most AI crawlers timeout around 5-10 seconds.

**Rendering recommendation per engine:**

| Engine                                  | JS rendering   | Recommendation                   |
| --------------------------------------- | -------------- | -------------------------------- |
| GPTBot, ClaudeBot, PerplexityBot, CCBot | None           | SSR or SSG required              |
| OAI-SearchBot, ChatGPT-User             | None confirmed | SSR or SSG required              |
| Google-Extended                         | Yes            | SSR preferred but SPA acceptable |
| Bingbot                                 | Yes            | SSR preferred                    |

**For Duncan Mortgage Group ecosystem:** Use Astro, Next.js with full SSR, or a static WordPress + caching setup. The current Wix-based stack works for AEO when configured for static rendering; verify each site renders in raw HTML via `curl -A "GPTBot"`.

**Post-DMG performance standard for Duncan-related sites (adopted 05-16-2026):** Self-host subset WOFF2 fonts and preload them in the document `<head>`; do not load Google Fonts from the CDN. Use the GA4 defer pattern that loads after a 3-second timeout or first user interaction. Inline critical CSS in the `<head>` using the Astro `global.css?inline` pattern when the site is static and CSS size is controlled. Keep `robots.txt` open to AI retrieval and training crawlers by default, with only private operational paths such as `/admin/` and `/api/` blocked. Publish an `llms.txt` file for each canonical authority hub with production URLs, clear entity framing, and the current brand language. Clay implementation reference: Pass 1 commit `88bd899`; Pass 2 commit `e0ea90a`. Levi implementation reference: Pass 1 commit `4c3327f`; Pass 2 commit `1b5e0e5`.

**Levi production Lighthouse result (measured 05-16-2026):** Mobile Lighthouse Performance tested at 99 across the 9 launch-priority pages: homepage, About, Mortgage Guidance hub, First-Time Home Buyer, FHA Loans, USDA Loans, Down Payment Assistance, Investment Property, and Events. The measured range was 99-99 after the self-hosted font, font preload, deferred GA4, and inline critical CSS changes. No page missed the 95+ target.

**Image optimization:**

- Descriptive filenames: `clay-duncan-mortgage-originator-huntsville.jpg` not `IMG_4582.jpg`
- Alt text describing the visual specifically
- `ImageObject` schema for hero/profile images
- Modern formats (WebP) with fallbacks

**Video:** Host on YouTube for citation eligibility. Provide transcripts on the page. Use `VideoObject` schema with `transcript` property. Opus Clips workflow can produce short-form video for both YouTube and social.

**Tables:** Use HTML `<table>` for data. AI engines parse HTML tables far better than image-rendered tables.

**PDFs:** AI engines parse them; embed key resources (rate sheets, loan program comparisons) as PDFs but also as HTML.

**Accessibility:** WCAG AA compliance overlaps with AEO.

---

### D10. OFF-SITE SIGNALS AND ENTITY AUTHORITY INFRASTRUCTURE

**Backlinks in AEO:** Less direct than traditional SEO. But backlinks gate entry to retrieval pools.

**Mentions vs links:** Brand mentions (unlinked) build entity recognition. Links build traditional authority. Both matter.

**Wikipedia / Wikidata:**

- Wikipedia: requires notability. Clay and Duncan Mortgage Group likely do not yet meet threshold. Do not attempt premature article.
- **Wikidata:** No notability bar. Create entries with verifiable claims. **30-minute setup, indefinite persistence.** Highest-leverage off-site action available for free. Create one entry each for Clay Duncan, Levi Duncan, and Duncan Mortgage Group, with cross-references between them.

**Google Knowledge Graph:** Triggered by 3-5 independent authoritative sources + Wikidata entry + consistent NAP across web. Timeline 4-12 weeks once thresholds met.

**Mortgage-specific directories:**

- **NMLS Consumer Access** – critical, free, automatic for licensed originators
- Zillow lender profile
- Bankrate lender directory
- LendingTree partner profile
- Google Business Profile (with mortgage broker category)
- BBB
- Yelp
- Local Huntsville Chamber of Commerce
- Realtor association supplier directories

**Social profiles for entity reinforcement:**

- LinkedIn (highest weight)
- Facebook business page
- Instagram
- YouTube channel for video transcripts
- Threads or X for current activity

**NAP consistency:** Name, Address, Phone must match exactly across NMLS, Google Business Profile, websites, LinkedIn, BBB, Zillow. With three sites, audit NAP consistency across all three plus all directories.

**Off-site quantity vs quality:** 15-20 high-quality consistent listings beats 100 directory profiles.

**Inverted citation:** Outbound links from your sites to authoritative sources (CFPB, HUD, FHFA, AAR, Alabama Housing Finance Authority) signal AI engines that you are well-grounded.

**Monitoring:** Use Google Alerts for "Clay Duncan Princeton Mortgage," "Levi Duncan Princeton Mortgage," and "Duncan Mortgage Group Huntsville." Quarterly Wikidata audit.

---

### D11. MEASUREMENT, ITERATION, AND EVALUATION HARNESS

**AEO metrics:**

- **Citation share:** Percentage of AI responses citing your sites for target query set.
- **Source inclusion rate:** Of pages retrieved, percentage cited.
- **Mention frequency:** Brand mentions in AI responses.
- **Position within citation set:** First cited vs fifth.
- **Freshness lag:** Time from publish to first AI citation.
- **Query-class coverage:** Percentage of question types where you appear.

**Per-engine measurability:**

- **Perplexity, Copilot:** Citations visible in UI – directly trackable.
- **ChatGPT:** Browsing mode shows citations; default mode does not.
- **Google AI Overviews:** Citations shown but Search Console does not break out AI Overview impressions separately.

**Free tools first:**

- Manual prompt panel (run 100 queries weekly)
- Bing Webmaster Tools
- Google Search Console
- Server log analysis (`grep` for GPTBot, ClaudeBot UA)

**Paid options later:** Profound, AthenaHQ, HubSpot AEO tool, Meltwater GenAI Lens.

**Pre-launch evaluation:**

1. `curl -A "GPTBot/1.1" https://clayduncan.com/` then same for leviduncan.com and duncanmortgagegroup.com
2. Schema validator on every key page
3. robots.txt and llms.txt audit on all three sites
4. Test schema graph by removing JS – does Person/Organization still appear?
5. Run 100-prompt panel for baseline

**Isolating AEO from SEO movement:** Track engine-specific citation metrics independently from organic traffic. AI referral traffic in Google Analytics 4 is identifiable by source/medium tags.

**Timing expectations:**

- Schema implementation: results in 2-6 weeks
- New pillar content: 2-3 months for citation volume
- Wikidata entry trigger: 4-12 weeks
- Knowledge Graph panel: 3-12 months

---

### D12. ANTI-PATTERNS, RISKS, AND BRAND SAFETY

**Hurts citation eligibility:**

- Keyword stuffing (~9% visibility loss)
- Schema spam (mismatched schema and content)
- Thin content (templated pages with city-swap only)
- Excessive internal links from one page (more than 100)
- AI-generated content with no human review or original insight
- Paywalls and consent banners blocking content from initial HTML
- Heavy JS frameworks without SSR
- Cross-site duplication where the same answer appears verbatim on clayduncan.com, leviduncan.com, AND duncanmortgagegroup.com

**Recursive AI loop risk:** Sites built primarily by AI generation can get filtered as "low-effort scaled content."

**Citation vs trust optimization:** When in conflict, optimize for trust. A YMYL mortgage site that wins citations through clickbait phrasing risks brand damage and regulatory scrutiny.

**Black-hat AEO that fails:**

- Bot farms simulating queries
- Fake review services
- Sock-puppet Wikipedia editing
- "Submit your brand to ChatGPT" services (no submission mechanism exists)

**Prompt injection risk:** Indirect prompt injection via your own site is possible but flagged by major engines.

**Misattribution monitoring:** Quarterly check: ask AI engines about Clay Duncan, Levi Duncan, and Duncan Mortgage Group, and verify cited information accuracy.

**YMYL-specific risks:** Mortgage misinformation can trigger CFPB action. Always link to HUD/CFPB/FHFA primary sources.

---

### D13. COMPETITIVE DIFFERENTIATION AND REVERSE ENGINEERING

**Audit a competitor in Huntsville mortgage:**

1. Submit 10 representative queries to ChatGPT, Perplexity, Google AI Overviews. Note who cites.
2. View raw HTML of cited competitor pages with `curl`.
3. Note schema graphs they implement.
4. Audit their Wikidata, Wikipedia, Google Knowledge Graph presence.
5. Identify gaps: questions they don't answer, neighborhoods they don't cover.

**Niche specificity for personal authority:**

- Clay should own "Huntsville mortgage AI training for real estate agents" entity space.
- Levi should own "first-time homebuyer education in Huntsville" via the Homebuyer Masterclass.
- Duncan Mortgage Group should own the team-level branded query space.

**Defensible moat:**

- Hyper-local content with primary data
- Named author entities with NMLS verification
- Unique productized offerings (AI training program, Homebuyer Masterclass)
- Content depth that compounds (3 years of cumulative authority)

**Tracking share of answer visibility:** Maintain a 100-prompt panel and re-run quarterly.

---

### D14. QUERY INTENT AND ANSWER TARGETING FRAMEWORK

| Query Class           | Example                                         | Preferred Answer Format                                              |
| --------------------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| Navigational          | "Duncan Mortgage Group Huntsville"              | Branded homepage on duncanmortgagegroup.com with Organization schema |
| Informational         | "What is a conventional loan?"                  | 50-word definition + expansion on personal site                      |
| Transactional         | "Apply for FHA loan Huntsville"                 | Service page with CTA + Application schema                           |
| Comparative           | "FHA vs conventional in Alabama"                | Comparison table on personal site                                    |
| Definitional          | "What is PMI?"                                  | Definition list with `DefinedTerm` schema                            |
| How-to                | "How to get pre-approved in Madison County"     | Numbered steps + HowTo schema                                        |
| Local                 | "Mortgage broker near me Huntsville"            | LocalBusiness schema + GBP                                           |
| Current event         | "Mortgage rates today Alabama"                  | Article with dateModified, freshness                                 |
| Entity disambiguation | "Clay Duncan mortgage"                          | Person schema with sameAs to NMLS, canonical on clayduncan.com       |
| Specialty             | "AI training for real estate agents Huntsville" | Course or LearningResource schema on clayduncan.com                  |
| Specialty             | "Homebuyer Masterclass Huntsville"              | Course schema on leviduncan.com                                      |

**Reverse engineering approach:** Submit each target query to ChatGPT, Perplexity, Google AI Overviews. Note format of cited content. Match that format on your page.

---

### D15. CITATION ENGINEERING AND SNIPPET OPTIMIZATION

**Ideal answer block:**

1. **Direct answer** (40-60 words) – the citation hook
2. **Expansion** (1-2 paragraphs) – context and nuance
3. **Supporting detail** (list, table, or example) – verification
4. **Internal link** to related content – topical reinforcement

**Format selection by intent:**

- Definitions: paragraph
- Steps: numbered list
- Comparisons: table
- Lists of options: bullet list
- Statistical claims: with source citation inline

**Citation hooks AI engines extract preferentially:**

- Specific numbers ("3.5% down payment")
- Named entities ("Princeton Mortgage", "Madison County")
- Quoted authorities ("Per HUD Handbook 4000.1...")
- Dated facts ("As of 04-2026, Alabama median home price is $309,000")

**Featured snippets vs AI answer blocks:** Heavy overlap. Optimize for featured snippet format and AI citation tends to follow.

---

### D16. ENTITY AUTHORITY AND KNOWLEDGE GRAPH STRATEGY

**Primary entity strategy per site:**

- clayduncan.com → Clay Duncan, mortgage authority and AI trainer (Person canonical)
- leviduncan.com → Levi Duncan, mortgage authority and Homebuyer Masterclass instructor (Person canonical)
- duncanmortgagegroup.com → Duncan Mortgage Group, marketing-brand team unit operating under Princeton Mortgage's NMLS license (Organization, no own NMLS identifier)

**Personal authority as primary goal:** The investment is in Clay's and Levi's individual entity authority. The team brand exists to support and route, not to compete with the personal entities.

**Disambiguation imperative:** "Clay Duncan" and "Levi Duncan" are common names. Solutions:

- Always pair name with NMLS ID in primary copy
- `disambiguatingDescription` in Person schema
- `sameAs` to NMLS Consumer Access (canonical authority)
- Consistent photo across all profiles
- Wikidata Q-ID once established

**Person + Topic association:** Build pages where Clay's name appears alongside topic terms. Same pattern for Levi.

**Trust verification stack for mortgage:**

- NMLS license (Tier 1, mortgage-specific) – Clay's and Levi's individual IDs
- Princeton Mortgage employer verification
- BBB rating
- Years in industry, deals closed
- Third-party reviews (Google, Zillow, Bankrate)
- Continuing education credentials

---

### D17. LOCAL, VERTICAL, AND CONVERSION VARIANTS

**Mortgage (primary YMYL vertical for both personal sites):**

- Heaviest E-E-A-T scrutiny
- Individual NMLS verification mandatory; Princeton Mortgage company NMLS in footer
- Cite primary regulators (CFPB, HUD, FHFA, AHFA)
- Avoid rate-specific claims that age out
- Compliance review on all content (TILA, RESPA, ECOA)

**Local AEO patterns:**

- City + service: "first time homebuyer Huntsville Alabama"
- Neighborhood pages: Madison, Athens, Decatur, Hampton Cove, Jones Valley, Big Cove
- "Best/top" queries: "best mortgage lender in Huntsville"
- "Near me": handled via LocalBusiness schema and GBP proximity

**Google Business Profile optimization:**

- Primary category: Mortgage Lender or Mortgage Broker
- Secondary categories: Loan Agency, Financial Service
- Service areas: Huntsville, Madison, Athens, Decatur, Madison County
- Posts weekly (events, market updates, FAQs)
- Photos: office exterior, team, lobby, signage with NMLS
- Q&A: pre-populate common questions, answer publicly
- Each personal site should have its own GBP linked to its individual

**Clay's AI training (expert personal brand on clayduncan.com):**

- Less YMYL than mortgage but still benefits from credibility signals
- Position as "Clay Duncan, AI trainer for real estate agents"
- Course/program pages with `Course` or `LearningResource` schema
- Testimonials with named agents
- The NMLS credential on the same domain elevates trust on AI training pages

**Levi's Homebuyer Masterclass (expert personal brand on leviduncan.com):**

- Borderline YMYL because it's financial education, but Levi's NMLS credential provides trust grounding
- Course schema for the Masterclass program
- Cohort outcomes with dates and metrics where shareable
- Linkages to mortgage pillar content where appropriate

**Conversion architecture post-citation:**

- Every page has a primary CTA above the fold
- Phone, calendar, contact form, application start
- Email capture for "first-time buyer guide" lead magnet
- Brand recall: individual's photo, NMLS, signature on every page
- Owned channels: email list, SMS opt-in, social retargeting

---

### D18. FUTURE-PROOFING AND VOLATILITY

**Zero-click trends:** AI Overviews reduce position-1 CTR by 58%. Defensive plays:

- Build brand recall so users seek Clay or Levi by name
- Email list, SMS, owned channels
- First-party data via lead magnets
- Direct relationships with referring agents

**Agentic AI (Project Mariner, ChatGPT Atlas, Perplexity Comet):**

- Clean schema for service offerings
- Machine-readable booking endpoints
- Stable URLs (agents follow links)
- Honest pricing/rate disclosures (agents compare)

**Vertical evolution:** Mortgage is among earliest YMYL verticals seeing AI search adoption. Real estate agent training is earlier-stage – Clay has first-mover opportunity. Homebuyer education is earlier-stage – Levi has first-mover opportunity.

**Defensive plays:**

- Compounding entity authority (Wikidata, Knowledge Graph, NMLS)
- Original local data nobody else has
- Owned distribution (email, SMS, podcast, YouTube)
- Branded queries as the moat

---

## E. IMPLEMENTATION PRIORITY MATRIX

| #   | Action                                                                | AEO Impact | Effort  | Time to Results | Risk | Dependencies               | Volatility   | Cost     |
| --- | --------------------------------------------------------------------- | ---------- | ------- | --------------- | ---- | -------------------------- | ------------ | -------- |
| 1   | Implement SSR/SSG across all 3 sites                                  | High       | Days    | Weeks           | Low  | Dev resources              | Stable       | Low-Med  |
| 2   | Deploy canonical Person schemas on clayduncan.com and leviduncan.com  | High       | Days    | Weeks           | Low  | Schema knowledge           | Stable       | Free     |
| 3   | Add NMLS sameAs to all Person schema                                  | High       | Hours   | Weeks           | Low  | NMLS profile complete      | Stable       | Free     |
| 4   | robots.txt allowing retrieval crawlers                                | High       | Hours   | Weeks           | Low  | None                       | Stable       | Free     |
| 5   | Verify NAP consistency across NMLS, GBP, LinkedIn, all 3 sites        | High       | Days    | Months          | Low  | Audit existing             | Stable       | Free     |
| 6   | Create Wikidata entries for Clay, Levi, Duncan Mortgage Group         | High       | Days    | Months          | Low  | Independent media coverage | Evolving     | Free     |
| 7   | Author bio pages with Person schema on personal sites                 | High       | Days    | Weeks           | Low  | Photos, credentials        | Stable       | Free     |
| 8   | Build 5-7 pillar guides per personal site                             | High       | Weeks   | Months          | Low  | Writing capacity           | Stable       | Low      |
| 9   | Implement answer-first 40-60 word blocks under each H2                | High       | Weeks   | Weeks           | Low  | Editorial discipline       | Stable       | Free     |
| 10  | 30-50 cluster FAQ pages per personal site                             | High       | Weeks   | Months          | Low  | Question research          | Stable       | Low      |
| 11  | Roll-up site with excerpt-and-link FAQ pattern                        | Med        | Days    | Months          | Low  | Personal site FAQs exist   | Stable       | Free     |
| 12  | Google Business Profile full optimization                             | High       | Days    | Weeks           | Low  | Address, photos            | Stable       | Free     |
| 13  | Bing Webmaster Tools sitemap submission for all 3 sites               | High       | Hours   | Weeks           | Low  | Sitemaps exist             | Stable       | Free     |
| 14  | Location pages on personal sites                                      | High       | Weeks   | Months          | Med  | Local data                 | Stable       | Low      |
| 15  | Deploy llms.txt at root of each site                                  | Med        | Hours   | Quarters        | Low  | None                       | Experimental | Free     |
| 16  | Original Huntsville mortgage data report (annual)                     | High       | Weeks   | Quarters        | Low  | Data sources               | Stable       | Low      |
| 17  | YouTube channel with transcripts                                      | Med        | Weeks   | Quarters        | Low  | Recording setup            | Evolving     | Low      |
| 18  | LocalBusiness schema with full address, hours, geo on personal sites  | High       | Hours   | Weeks           | Low  | Address verified           | Stable       | Free     |
| 19  | BreadcrumbList schema sitewide                                        | Med        | Days    | Weeks           | Low  | IA finalized               | Stable       | Free     |
| 20  | dateModified honesty discipline                                       | Med        | Ongoing | Months          | Low  | Editorial                  | Stable       | Free     |
| 21  | Zillow, Bankrate, LendingTree lender profiles for Clay and Levi       | Med        | Days    | Months          | Low  | Profile complete           | Stable       | Free-Low |
| 22  | Quarterly 100-prompt citation panel                                   | High       | Days    | Quarters        | Low  | Tracking sheet             | Evolving     | Free     |
| 23  | Internal linking from FAQ to pillar within each personal site         | Med        | Days    | Weeks           | Low  | Content exists             | Stable       | Free     |
| 24  | Image optimization and ImageObject schema                             | Med        | Days    | Weeks           | Low  | Image files                | Stable       | Free     |
| 25  | Course schema for Clay's AI training and Levi's Homebuyer Masterclass | Med        | Days    | Months          | Low  | Program structure          | Evolving     | Free     |

---

## F. TWO-TIER BUILD BLUEPRINT

### F.1 Minimum Viable AEO Site (per personal site)

**Page count:** 12-15

- Homepage (Person + Organization graph, with Person canonical here)
- About (full bio, NMLS, credentials, photo)
- Contact (LocalBusiness schema, phone, calendar)
- 3 service pillars (FHA, conventional, VA)
- 1 first-time buyer pillar
- 1 specialty pillar (AI training for Clay; Homebuyer Masterclass for Levi)
- 4-6 FAQ cluster pages
- 1 location page (Huntsville)

**Content footprint:** ~15,000 words total

**Schema baseline:** Person (canonical), Organization, ProfessionalService, LocalBusiness, WebSite, WebPage, BreadcrumbList, FAQPage on FAQ pages, Article on pillar pages, Course or LearningResource on specialty pillar

**First 60 days per personal site:**

- Days 1-7: Domain, hosting, SSR setup, robots.txt, llms.txt
- Days 8-21: Homepage and About with full schema graph
- Days 22-35: Three pillar pages
- Days 36-50: 4-6 FAQ pages
- Days 51-60: Location page, GBP optimization, Bing submission, Wikidata entry

### F.2 Roll-up Site (lean specification)

**Page count:** 8-12

- Homepage (Organization schema, Princeton Mortgage as parentOrganization, Clay and Levi referenced by `@id` from personal sites)
- Team about page (origin story, what makes Duncan Mortgage Group distinct, NOT duplicated from personal sites)
- Two team member modules per page (or separate /team/clay/ and /team/levi/ pages with brief intros and "Read full bio" links to personal sites)
- 1 services overview at team level
- 1 contact page with team-level info
- 1 FAQ page with excerpts and links to canonical answers on personal sites
- 1 specialty hub page each routing to clayduncan.com (AI training) and leviduncan.com (Homebuyer Masterclass)

**Content footprint:** ~6,000-8,000 words

**Schema baseline:** Organization, ProfessionalService (without NMLS identifier), LocalBusiness properties (address, geo, areaServed), WebSite, WebPage, BreadcrumbList. Person references by `@id` to personal sites only.

### F.3 Advanced AEO Site (full personal site build)

**Page count:** 60-80 per personal site

**Quarterly milestones:**

- Q1: Foundation (architecture, core pillars, schema graph, NMLS verification, GBP, Wikidata)
- Q2: Cluster expansion (30+ FAQ pages, location pages)
- Q3: Original data and specialty content (annual report, course or class outcomes)
- Q4: Off-site authority (media outreach, podcast appearances, Knowledge Graph trigger)

---

## G. 30-60-90 DAY ROADMAP

### Solo Operator (Clay alone)

**Days 1-30 (Foundation):**

- Audit existing presence: NMLS profiles, LinkedIn, any existing sites
- Configure DNS for clayduncan.com, leviduncan.com, duncanmortgagegroup.com on SSR-capable hosting
- Implement homepage and About on clayduncan.com with full canonical Person/Organization schema
- Implement homepage and About on leviduncan.com with full canonical Person/Organization schema
- Implement homepage on duncanmortgagegroup.com with Organization schema referencing both Persons by `@id`
- Deploy robots.txt and llms.txt on all 3 sites
- Verify Google Business Profile and Bing Places (per personal site)
- Submit sitemaps to Google Search Console and Bing Webmaster Tools

**Days 31-60 (Content):**

- Build 3-5 pillar guides per personal site
- 6-10 FAQ cluster pages per personal site
- Author bios complete with photos and credentials
- Roll-up FAQ page with excerpt-and-link to personal sites
- Create Wikidata entries (Clay first, then Levi, then Duncan Mortgage Group)
- Begin weekly 25-prompt panel tracking

**Days 61-90 (Authority):**

- Add 5-10 location pages on each personal site
- Original Huntsville mortgage data piece
- Outreach to Huntsville Business Journal, AL.com
- 5 video walkthroughs on YouTube with transcripts
- Quarterly 100-prompt panel baseline

### Small Team (Clay + Levi + 1 contractor or developer)

Same milestones, parallelized:

- Days 1-30: All foundation done across all 3 sites in parallel; Clay drives clayduncan.com, Levi drives leviduncan.com, contractor handles roll-up and shared infrastructure
- Days 31-60: Each personal site has full pillar coverage and 30+ FAQ pages
- Days 61-90: Off-site authority, original data, video, knowledge graph trigger work

---

## H. AEO TESTING PROTOCOL

### Pre-launch checklist

- `curl -A "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.1; +https://openai.com/gptbot)" https://clayduncan.com/` returns full HTML with all critical content (repeat for leviduncan.com and duncanmortgagegroup.com)
- Schema validates in Google Rich Results Test and Schema.org validator on all 3 sites
- robots.txt accessible at /robots.txt on all 3 sites
- llms.txt accessible at /llms.txt on all 3 sites
- Sitemap.xml accessible and submitted on all 3 sites
- Person schema canonical on clayduncan.com and leviduncan.com; roll-up references by `@id` only
- All Person schema includes NMLS identifier and sameAs to Consumer Access
- NAP matches across NMLS, GBP, sites, LinkedIn, BBB
- Princeton Mortgage NMLS visible in footer of all 3 sites

### 100-prompt sample panel (mortgage anchored)

Run quarterly across ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot. Track citations.

Sample prompts (representative):

- Best mortgage lender in Huntsville Alabama
- First time homebuyer programs Madison County
- FHA loan requirements in Alabama
- VA loan Huntsville Alabama
- Mortgage broker vs lender Huntsville
- How much down payment for a house in Huntsville
- Refinance mortgage rates Alabama
- Conventional loan Madison Alabama
- Mortgage pre-approval Huntsville
- Closing costs in Alabama
- Down payment assistance Alabama
- USDA loan Athens Alabama
- Jumbo loan Huntsville
- Best mortgage rates North Alabama
- How to choose a mortgage lender
- Mortgage credit score requirements Alabama
- Self-employed mortgage Alabama
- First-time homebuyer credit score
- Princeton Mortgage Huntsville reviews
- Clay Duncan mortgage Huntsville
- Levi Duncan mortgage Huntsville
- Duncan Mortgage Group reviews
- AI training for real estate agents Huntsville
- Homebuyer Masterclass Huntsville
- Best mortgage team in Madison County
- ... [75 more across loan types, locations, recruiting, agent training, comparisons, current events]

**Measurement:**

- Citation rate = pages cited / queries × engines
- Position score = inverse rank when cited
- Brand mention rate = name appearances / total queries

### Free crawler simulation

- `curl` with bot UAs
- Lynx text browser
- Chrome DevTools "Disable JavaScript"
- Screaming Frog SEO Spider in "Text Only" crawl mode (free up to 500 URLs)

Paid options later: Sitebulb, Profound, AthenaHQ.

---

## I. DELIVERABLE TEMPLATES

### I.1 Complete robots.txt (AEO-permissive, mortgage-anchored)

```
# Duncan Mortgage Group ecosystem - AEO-permissive robots.txt
# Use on clayduncan.com, leviduncan.com, duncanmortgagegroup.com
# Last updated: 05-06-2026

# Retrieval crawlers (powers AI citations)
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Bingbot
Allow: /

# Training crawlers (entity recognition into model weights)
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: CCBot
Allow: /
User-agent: Meta-ExternalAgent
Allow: /
User-agent: Applebot-Extended
Allow: /

# Default
User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /admin/
Disallow: /checkout/
Disallow: /thank-you/
Disallow: /search?

Sitemap: https://[domain].com/sitemap.xml
```

### I.2 llms.txt template (Clay Duncan personal site)

```
# Clay Duncan - Mortgage Loan Originator and AI Trainer

> Clay Duncan is a Mortgage Loan Originator at Princeton Mortgage and
> the founder of an AI training program for real estate agents.
> NMLS #[Clay's NMLS ID]. Based in Huntsville, Alabama, serving
> Madison County and North Alabama. Member of Duncan Mortgage Group,
> a marketing brand operating under Princeton Mortgage's NMLS license.

## Identity
- Name: Clay Duncan
- Role: Mortgage Loan Originator, AI Trainer for Real Estate Agents
- Employer: Princeton Mortgage (NMLS [Princeton's company NMLS])
- Team: Duncan Mortgage Group, powered by Princeton Mortgage
- Individual License: NMLS #[Clay's ID] - verify at https://www.nmlsconsumeraccess.org/
- Service Area: Huntsville, Madison, Athens, Decatur, Madison County, North Alabama

## Primary Resources
- [About Clay Duncan](https://clayduncan.com/about): Full bio, credentials, history
- [Loan Programs](https://clayduncan.com/loan-programs): FHA, VA, conventional, jumbo
- [First-Time Homebuyer Guide for Huntsville](https://clayduncan.com/first-time-homebuyer-huntsville)
- [AI Training for Real Estate Agents](https://clayduncan.com/agent-ai-training)
- [Connect with Levi Duncan (Homebuyer Masterclass)](https://leviduncan.com/)
- [Duncan Mortgage Group team site](https://duncanmortgagegroup.com/)

## Core Topics
- Mortgage origination in North Alabama
- FHA, VA, USDA, conventional, jumbo loans
- First-time homebuyer education
- Real estate agent referral development
- AI training for real estate professionals (Clay's specialty)

## Frequently Cited Pages
- [Huntsville Mortgage FAQ](https://clayduncan.com/huntsville-mortgage-faq)
- [Madison County Down Payment Assistance](https://clayduncan.com/madison-county-down-payment-assistance)
- [How to Get Pre-Approved in Huntsville](https://clayduncan.com/pre-approval-huntsville)
- [AI Training Program for Agents](https://clayduncan.com/agent-ai-training)

## Verification
- NMLS Consumer Access: https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/[ID]
- LinkedIn: https://www.linkedin.com/in/clay-duncan-05052b24/
- Google Business Profile: [URL]
- Princeton Mortgage employer page: [URL]

## Contact
- Phone: 256-203-4500
- Email: clay@clayduncan.com
- Office: [Huntsville address]

## Last Updated: 05-06-2026
```

A parallel file should exist at leviduncan.com/llms.txt for Levi, and duncanmortgagegroup.com/llms.txt should be a brief team-level routing file pointing to both personal sites as primary sources.

### I.3 Complete JSON-LD graph (Clay Duncan personal site, mortgage anchored)

This is the canonical Person definition for Clay. The roll-up references this `@id` rather than redefining.

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://clayduncan.com/#website",
        "url": "https://clayduncan.com/",
        "name": "Clay Duncan - Mortgage Loan Originator and AI Trainer",
        "description": "Mortgage origination, real estate agent AI training, and first-time homebuyer education in Huntsville, Alabama.",
        "publisher": { "@id": "https://clayduncan.com/#person" },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://clayduncan.com/#webpage",
        "url": "https://clayduncan.com/",
        "name": "Clay Duncan - Mortgage Loan Originator at Princeton Mortgage in Huntsville, AL",
        "isPartOf": { "@id": "https://clayduncan.com/#website" },
        "about": { "@id": "https://clayduncan.com/#person" },
        "primaryImageOfPage": "https://clayduncan.com/images/clay-duncan-mortgage-originator-huntsville.jpg",
        "datePublished": "2026-01-15",
        "dateModified": "2026-05-06"
      },
      {
        "@type": "Person",
        "@id": "https://clayduncan.com/#person",
        "name": "Clay Duncan",
        "givenName": "Clay",
        "familyName": "Duncan",
        "jobTitle": "Mortgage Loan Originator and AI Trainer",
        "description": "Mortgage Loan Originator at Princeton Mortgage and AI Trainer for real estate agents. Based in Huntsville, Alabama. Member of Duncan Mortgage Group.",
        "disambiguatingDescription": "Mortgage Loan Originator at Princeton Mortgage, Huntsville Alabama, NMLS #[Clay's ID]",
        "url": "https://clayduncan.com/",
        "image": "https://clayduncan.com/images/clay-duncan-mortgage-originator-huntsville.jpg",
        "telephone": "+1-256-203-4500",
        "email": "clay@clayduncan.com",
        "worksFor": { "@id": "https://clayduncan.com/#princeton-mortgage" },
        "memberOf": {
          "@id": "https://duncanmortgagegroup.com/#duncan-mortgage-group"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Mortgage Loan Originator",
          "occupationLocation": {
            "@type": "City",
            "name": "Huntsville, Alabama"
          }
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": "Mortgage Loan Originator License",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Nationwide Multistate Licensing System (NMLS)"
            }
          }
        ],
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "NMLS",
          "value": "[Clay's NMLS ID]"
        },
        "knowsAbout": [
          "Mortgage origination",
          "FHA loans",
          "VA loans",
          "Conventional loans",
          "First-time homebuyer programs",
          "AI training for real estate agents",
          "Huntsville Alabama real estate market"
        ],
        "areaServed": [
          { "@type": "City", "name": "Huntsville, Alabama" },
          { "@type": "City", "name": "Madison, Alabama" },
          { "@type": "City", "name": "Athens, Alabama" },
          { "@type": "City", "name": "Decatur, Alabama" },
          { "@type": "AdministrativeArea", "name": "Madison County, Alabama" }
        ],
        "sameAs": [
          "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/[Clay's ID]",
          "https://www.linkedin.com/in/clay-duncan-05052b24/",
          "https://www.facebook.com/clay.duncan.94",
          "https://www.instagram.com/theclayduncan",
          "https://x.com/TheClayDuncan",
          "https://duncanmortgagegroup.com/team/clay-duncan",
          "https://www.wikidata.org/wiki/[Q-ID once created]"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://clayduncan.com/#princeton-mortgage",
        "name": "Princeton Mortgage",
        "url": "https://www.princetonmortgage.com/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "439 Grand Avenue",
          "addressLocality": "Ewing",
          "addressRegion": "NJ",
          "postalCode": "08628",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/[Princeton's company NMLS]"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://clayduncan.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://clayduncan.com/"
          }
        ]
      }
    ]
  }
</script>
```

### I.3.b JSON-LD graph for the roll-up (duncanmortgagegroup.com)

The roll-up references the canonical Person definitions on the personal sites by `@id`. It does NOT redefine Clay or Levi. Note the absence of a NMLS identifier on the Organization, since Duncan Mortgage Group is a marketing brand operating under Princeton Mortgage's company license.

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://duncanmortgagegroup.com/#website",
        "url": "https://duncanmortgagegroup.com/",
        "name": "Duncan Mortgage Group, Powered by Princeton Mortgage",
        "description": "Mortgage origination team in Huntsville, Alabama, led by Clay Duncan and Levi Duncan, operating under Princeton Mortgage's NMLS license.",
        "publisher": {
          "@id": "https://duncanmortgagegroup.com/#duncan-mortgage-group"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://duncanmortgagegroup.com/#duncan-mortgage-group",
        "name": "Duncan Mortgage Group",
        "alternateName": "Duncan Mortgage Group, Powered by Princeton Mortgage",
        "description": "Marketing-brand mortgage team in Huntsville, Alabama, operating under Princeton Mortgage's NMLS company license. Led by Clay Duncan and Levi Duncan.",
        "url": "https://duncanmortgagegroup.com/",
        "telephone": "+1-256-203-4500",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Huntsville",
          "addressRegion": "AL",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 34.7304,
          "longitude": -86.5861
        },
        "areaServed": [
          { "@type": "City", "name": "Huntsville, Alabama" },
          { "@type": "City", "name": "Madison, Alabama" },
          { "@type": "City", "name": "Athens, Alabama" },
          { "@type": "City", "name": "Decatur, Alabama" },
          { "@type": "AdministrativeArea", "name": "Madison County, Alabama" }
        ],
        "parentOrganization": {
          "@type": "Organization",
          "name": "Princeton Mortgage",
          "url": "https://www.princetonmortgage.com/",
          "sameAs": "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/[Princeton's company NMLS]"
        },
        "member": [
          { "@id": "https://clayduncan.com/#person" },
          { "@id": "https://leviduncan.com/#person" }
        ],
        "sameAs": [
          "https://www.facebook.com/duncanmortgagegroup",
          "https://www.linkedin.com/company/duncanmortgagegroup",
          "https://g.page/r/[GBP CID if created]"
        ]
      }
    ]
  }
</script>
```

The roll-up's footer should display Princeton Mortgage's company NMLS as the licensing context for any consumer-facing mortgage offers, just as it does on each personal site.

### I.4 Sitemap.xml template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://clayduncan.com/</loc>
    <lastmod>2026-05-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://clayduncan.com/about/</loc>
    <lastmod>2026-05-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://clayduncan.com/loan-programs/fha/</loc>
    <lastmod>2026-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### I.5 One-page AEO audit checklist

- [ ] Site renders in raw HTML when JS disabled (curl test passes on all 3 sites)
- [ ] robots.txt allows OAI-SearchBot, PerplexityBot, Claude-SearchBot, Google-Extended, Bingbot
- [ ] llms.txt deployed at root of all 3 sites
- [ ] sitemap.xml submitted to Google Search Console and Bing Webmaster Tools for all 3 sites
- [ ] Clay's Person schema canonical on clayduncan.com only; roll-up references by `@id`
- [ ] Levi's Person schema canonical on leviduncan.com only; roll-up references by `@id`
- [ ] Person schema includes individual NMLS identifier and sameAs to Consumer Access
- [ ] Roll-up Organization schema does NOT claim its own NMLS
- [ ] Princeton Mortgage NMLS visible in footer of all 3 sites
- [ ] Roll-up references Princeton Mortgage as parentOrganization
- [ ] LocalBusiness properties on personal sites with full address and geo
- [ ] `@graph` connects entities via `@id`
- [ ] BreadcrumbList schema sitewide
- [ ] Author bio page exists with full credentials and photo on each personal site
- [ ] All FAQ blocks on personal sites: H2 question + 40-60 word direct answer + expansion
- [ ] Roll-up FAQ uses excerpt-and-link to canonical answers on personal sites
- [ ] H1 contains entity name and primary topic
- [ ] First viewport contains name, credential, geography, primary service
- [ ] Image alt text descriptive (no "image1.jpg")
- [ ] dateModified honest and current on updated content
- [ ] NAP identical across NMLS, GBP, all 3 sites, LinkedIn, BBB
- [ ] Wikidata entries exist for Clay, Levi, Duncan Mortgage Group, with citations
- [ ] GBP fully optimized (categories, services, photos, posts, Q&A)
- [ ] Internal links from FAQ to pillar guides within each personal site
- [ ] Hotlinks from roll-up to personal sites for specialty CTAs
- [ ] At least 3 outbound links to authority sources (CFPB, HUD, FHFA) per pillar
- [ ] No JavaScript-injected critical content
- [ ] No paywall or consent banner blocking initial HTML
- [ ] Quarterly 100-prompt citation panel run

---

## J. GLOSSARY

- **AEO (Answer Engine Optimization):** Practice of structuring content to be cited by AI engines rather than just ranked by traditional search.
- **Canonical URL:** The preferred URL for a piece of content when multiple URLs could serve it. Declared via `<link rel="canonical">`.
- **Chunk:** A sub-section of a webpage (typically 200-800 tokens) that an AI engine extracts and embeds as a vector for retrieval.
- **DOM source order:** The order of elements in the HTML document, regardless of CSS-driven visual position. AI parsers read source order, not visual order.
- **E-E-A-T:** Experience, Expertise, Authoritativeness, Trust. Google's framework for evaluating content quality.
- **Entity disambiguation:** Distinguishing one named thing (Clay Duncan the mortgage originator in Huntsville) from another with the same or similar name.
- **GEO (Generative Engine Optimization):** Often used interchangeably with AEO; emphasizes optimizing for generative AI outputs specifically.
- **JSON-LD:** JavaScript Object Notation for Linked Data. The recommended format for embedding schema.org structured data in HTML.
- **Knowledge Graph:** Google's database of entities and relationships used to populate Knowledge Panels and answer queries.
- **llms.txt:** Proposed file at site root providing AI-friendly summary and links. Adoption uncertain.
- **NMLS:** Nationwide Multistate Licensing System. Mandatory registry for US mortgage loan originators.
- **Pillar content:** Comprehensive guide on a core topic, supported by cluster pages on subtopics.
- **RAG (Retrieval-Augmented Generation):** AI architecture where a model retrieves documents from an index, then generates an answer grounded in those documents.
- **Relay model:** The architecture used in this ecosystem where the roll-up site (duncanmortgagegroup.com) feeds authority signals into the personal sites via hotlinks and `@id` references rather than competing for citations of its own.
- **Schema graph:** Multiple schema.org entities connected via `@id` references, modeling real-world relationships.
- **sameAs:** Schema.org property declaring that an entity is the same as another entity referenced by URL (Wikipedia, Wikidata, social profile, NMLS).
- **Semantic HTML:** HTML elements like `<header>`, `<main>`, `<article>` that convey structural meaning beyond visual layout.
- **SSR/SSG:** Server-Side Rendering / Static Site Generation. Approaches that produce complete HTML before delivery, ensuring AI crawlers can read content.
- **Topical authority:** Perceived expertise on a topic, signaled by content depth, internal linking density, entity mentions, and external corroboration.
- **Vector embedding:** Numerical representation of text capturing semantic meaning, used by AI engines for similarity-based retrieval.
- **Wikidata:** Open structured-data database feeding Google's Knowledge Graph. Lower notability bar than Wikipedia.
- **YMYL (Your Money or Your Life):** Google's category for topics where inaccurate content could harm users' health, finances, or safety. Mortgage falls here.

---

## K. SOURCE BIBLIOGRAPHY

### Tier 1 (Official platform documentation, standards bodies)

- OpenAI. Overview of OpenAI Crawlers. platform.openai.com/docs/bots
- Anthropic. Does Anthropic crawl data from the web. support.claude.com/en/articles/8896518
- Perplexity. Perplexity Crawlers. docs.perplexity.ai/docs/resources/perplexity-crawlers
- Google. Google-Extended documentation. developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
- Google. Creating Helpful, Reliable, People-First Content. developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google. Search Quality Rater Guidelines (09-11-2025 version). guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf
- Google. Changes to HowTo and FAQ rich results, 08-08-2023. developers.google.com/search/blog/2023/08/howto-faq-changes
- Microsoft. Use public websites to improve generative answers. learn.microsoft.com
- Microsoft. Introducing Copilot Search in Bing, 04-2025. blogs.bing.com
- Schema.org. Person, Organization, MortgageLoan, FinancialProduct types. schema.org
- NMLS Consumer Access. nmlsconsumeraccess.org

### Tier 2 (Peer-reviewed research)

- Aggarwal, P. et al. GEO: Generative Engine Optimization. KDD 2024. Princeton/Georgia Tech/IIT Delhi/AI2.
- arXiv 2510.13749. Assessing Web Search Credibility and Response Groundedness in Chat Assistants.
- arXiv 2604.25707. From Citation Selection to Citation Absorption: Measurement Framework for GEO.
- arXiv 2603.16138. Answer Bubbles: Information Exposure in AI-Mediated Search.
- arXiv 2504.19754. Reconstructing Context: Evaluating Advanced Chunking Strategies for RAG.

### Tier 3 (Documented practitioner experiments)

- AirOps. Analysis of 548,534 pages and 15,000 prompts on ChatGPT citation behavior, 03-2026.
- Sellm. ChatGPT Ranking Factors: Analysis of 400K Pages.
- Cloudflare. Perplexity stealth crawler analysis, 08-2024.
- Profound. AI Platform Citation Patterns: ChatGPT, AI Overviews, Perplexity.
- BuzzStream. Top news sites blocking AI crawlers analysis, 01-2025.
- SE Ranking. ChatGPT source selection research, 11-2025.
- Vercel. AI crawler JavaScript rendering analysis.
- Onely. Google rendering speed comparison.

### Tier 4 (Practitioner inference from credible sources)

- Search Engine Journal (multiple articles on AI crawlers and Google updates)
- Search Engine Land (FAQ schema, YMYL)
- Frase, HubSpot, Conductor, Amsive, ALM Corp, Project36, Stackmatix (AEO methodology)
- Schema App, Momentic (entity linking and graph patterns)

### Tier 5 (Opinion/speculation, flagged as such in body)

- ScaleMath, Bluehost, Yotpo, Mintlify (llms.txt commentary)

---

## L. ASSUMPTIONS, EVIDENCE, AND VALIDATION

**Key assumptions:**

- AI search adoption continues to grow in mortgage research behavior (Plausible)
- Major AI engines maintain robots.txt compliance for declared crawlers (Confirmed for OpenAI, Anthropic, Google; Disputed for Perplexity)
- NMLS Consumer Access remains the canonical mortgage-license entity (Confirmed)
- Wikidata continues to feed Google Knowledge Graph (Strongly Supported)
- Personal authority is the primary AEO investment goal; brand authority is secondary (per stated strategy)

**What new evidence would change conclusions:**

- Major engine deprecates current crawler architecture
- llms.txt becomes officially supported (would upgrade to High priority)
- Google AI Overviews source crawler shifts away from Googlebot
- New YMYL-specific AI ranking signals announced
- AI engines begin reliably collapsing related domains under one canonical entity (which would weaken the three-site model)

**Recommendation confidence breakdown:**

- **Confirmed:** SSR/SSG requirement; robots.txt directives; NMLS sameAs; schema graph patterns; FAQ schema deprecation
- **Strongly Supported:** Answer-first 40-60 word format; Princeton GEO findings; entity disambiguation; Wikidata leverage; canonical Person on personal sites for personal authority
- **Plausible but Unconfirmed:** llms.txt benefit; specific position-1 weighting changes
- **Speculative:** Specific citation rate uplifts from individual tactics

**Universal vs vertical-specific:**

- **Universal:** SSR, schema graph, entity sameAs, answer-first writing, Wikidata
- **Mortgage-specific:** NMLS as primary credential anchor; YMYL content review discipline; CFPB/HUD/FHFA outbound citations; the specific decision to keep marketing brand (Duncan Mortgage Group) without its own NMLS

**Five highest-leverage tests to run first:**

1. `curl -A "GPTBot/1.1"` on all three sites, verify content in raw HTML
2. Submit 25-prompt mortgage panel to ChatGPT, Perplexity, Google AI Overviews; baseline citation rate
3. NAP audit across NMLS, GBP, LinkedIn, all 3 sites (look for any inconsistency)
4. Schema validator pass on each personal site's homepage and one pillar, plus the roll-up homepage
5. Wikidata search for "Clay Duncan" and "Levi Duncan" to confirm absence (then create entries)

---

## M. QUESTIONS THIS RESEARCH DID NOT ANSWER

- Exact citation weight of NMLS sameAs vs other licensing registry sameAs (no public Tier 1 data)
- Whether AI engines weight YMYL credentials (NMLS) more heavily than non-YMYL credentials in citation selection
- Specific Bing index dwell time before ChatGPT browsing reflects content updates
- How agentic AI fetchers (Mariner, Atlas, Comet) will affect referral metrics by mid-2026
- Optimal frequency for refreshing dateModified without triggering "manipulative freshness" signals
- YMYL and non-YMYL content mixing on the same personal domain. Clay's site combines mortgage origination (YMYL) with AI training for agents (non-YMYL). Levi's site combines mortgage origination (YMYL) with Homebuyer Masterclass (borderline YMYL as financial education). Practitioner consensus is that NMLS-credentialed domains elevate trust on adjacent non-YMYL content rather than diluting it, but this is not Tier 1 confirmed. Worth monitoring whether AI engines apply different citation thresholds to different sections of the same domain based on YMYL classification.
- Princeton Mortgage architectural dependency. The schema graph treats Princeton Mortgage as the licensed parent organization throughout the ecosystem (worksFor, parentOrganization, footer NMLS). If a future change in employment occurs, the rebuild cost spans every Person schema, every footer, every llms.txt, and the canonical Organization references on the roll-up. Mitigation: keep a clean migration playbook that scopes the rebuild and avoid hardcoding Princeton-specific details outside of clearly identified blocks.

---

## N. AEO RESEARCH GAPS WORTH MONITORING (Revisit within 6 months)

- llms.txt official adoption announcements from OpenAI, Anthropic, Google
- Perplexity stealth crawler resolution and verified-bot reinstatement
- Google-Agent international rollout beyond US
- New schema types for AI training and personal-brand context
- Apple Intelligence search features and any associated crawler
- Meta AI citation surfaces beyond Facebook/Instagram
- ChatGPT Atlas and Perplexity Comet browser behavior
- Anthropic's introduction of additional Claude bots
- CFPB or state regulatory guidance on AI-cited mortgage content
- Whether AI engines develop the ability to collapse related domains under one canonical entity (would change three-site strategy materially)

---

_Document last verified: 05-06-2026. Re-audit recommended quarterly given evolving volatility ratings on multiple dimensions above._

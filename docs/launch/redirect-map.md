# Redirect Map

Prepared: May 2, 2026

Purpose: preserve useful search equity from the current Wix site while preventing old Wix URLs from remaining as active crawl targets after the Netlify cutover.

## Rules

- Use `301` redirects when an old URL has a reasonable replacement.
- Do not block old URLs in `robots.txt`; crawlers need to reach the redirect.
- Submit the new Netlify sitemap in Google Search Console after launch.
- Use Google Search Console removals only for urgent stale-result cleanup after the new site is live.

## Implemented Redirects

| Old Wix URL                                                                   | New Astro URL                            | Status | Reason                                                                                        |
| ----------------------------------------------------------------------------- | ---------------------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| `/about-me`                                                                   | `/about/`                                | 301    | Search-discovered legacy About URL not present in the Wix sitemap.                            |
| `/join-us`                                                                    | `/join-us/`                              | 301    | Old Wix URL now maps to the current why-join page.                                            |
| `/supporting`                                                                 | `/`                                      | 301    | Old support/challenge page has no current equivalent. Home is the safest branded destination. |
| `/blog/categories/ai-for-realtors`                                            | `/realtor-ai-training/`                  | 301    | Closest current authority page for REALTOR AI training.                                       |
| `/blog/categories/ai-for-homebuyers`                                          | `/events/`                               | 301    | No active AI homebuyer page; events is the closest current education hub.                     |
| `/blog/categories/huntsville-market-intel`                                    | `/blog/`                                 | 301    | Category removed. Future blog hub can absorb this topic if revived.                           |
| `/blog/categories/mortgage-insights`                                          | `/huntsville/complex-mortgage-guidance/` | 301    | Closest current mortgage strategy page.                                                       |
| `/post/mortgage-rates-2025-homeowner-divide`                                  | `/blog/`                                 | 301    | Old rate post is not being preserved as a standalone article.                                 |
| `/post/your-guide-to-ai-mortgages-and-the-real-estate-market-we-re-living-in` | `/blog/`                                 | 301    | Old AI post is not being preserved as-is; blog hub will hold future AI content.               |
| `/event-details-registration/*`                                               | `/events/`                               | 301    | Old Wix event detail pages consolidate into the new Events page.                              |

## Live Wix Sitemap Inventory

These URLs were found in the current Wix sitemap files:

- `/`
- `/about`
- `/blog`
- `/reviews`
- `/events`
- `/join-us`
- `/blog/categories/ai-for-realtors`
- `/blog/categories/ai-for-homebuyers`
- `/blog/categories/huntsville-market-intel`
- `/blog/categories/mortgage-insights`
- `/post/mortgage-rates-2025-homeowner-divide`
- `/post/your-guide-to-ai-mortgages-and-the-real-estate-market-we-re-living-in`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-2`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-3`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-4`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-5`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-6`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-7`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-8`
- `/event-details-registration/ai-for-realtors-r-101-introductory-course-9`
- `/event-details-registration/ai-homebuyer-workshop-huntsville`
- `/event-details-registration/ai-for-firsttime-homebuyers-intro-course-101-1`

## Search-Discovered Or Linked Legacy URLs

These URLs were not all present in the sitemap but were found through Google search snippets or live Wix page links:

- `/about-me`
- `/supporting`

## Post-Launch Checks

After DNS points to Netlify:

1. Test every implemented redirect on the live domain.
2. Submit `https://clayduncan.com/sitemap-index.xml` in Google Search Console.
3. Inspect old URLs in Google Search Console and confirm Google sees `301` redirects.
4. Use the Removals tool only for stale search results that need faster hiding.
5. Monitor the Page indexing report for old Wix URLs moving into redirected/not indexed states.

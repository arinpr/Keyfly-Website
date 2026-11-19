# Launching keyfly.si

Last updated: 2026-11-19

## How the site is hosted

- `next build` writes a static export to `out/` (`output: "export"` in `next.config.mjs`).
- Cloudflare Workers static assets serve it (`wrangler.jsonc`): clean URLs, `404.html` for misses, and the headers in `public/_headers` (an export ignores `next.config` headers).
- `.github/workflows/deploy.yml` builds and deploys on every push to `main`, every hour (so prices from `api.keyfly.si/v1/public/pricing` stay current), and by hand.
- The deploy build sets `REQUIRE_PRICING=1`: if the pricing API is down, the build fails and the live site keeps its last good deploy instead of shipping the pricing fallback.
- Local check of the exact production output: `pnpm build && pnpm exec wrangler dev` (port 8787).

## Go-live steps (owner)

1. **Cloudflare access.** The `keyfly.si` zone is not in the account the dev machine's wrangler login sees. In the account that holds the zone, create an API token with *Workers Scripts: Edit*, *Workers Routes: Edit* and *Zone: Read* on keyfly.si.
2. **GitHub secrets** on this repo: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
3. **Take over the apex.** `keyfly.si` serves a one-page placeholder today. Remove whatever serves it (Pages project, Worker route or DNS record), then run the workflow by hand. The `custom_domain` route in `wrangler.jsonc` creates the DNS record and certificate. `www.keyfly.si` already 301s to the apex; keep that rule.
4. **Search engines,** once live: verify the domain in Google Search Console and Bing Webmaster Tools (DNS TXT record, so nothing goes in the code), submit `https://keyfly.si/sitemap.xml`, and request indexing for `/`, `/product`, `/use-cases`, `/integrations`, `/pricing`.
5. **Smoke test:** `/`, `/pricing` (real prices), `/llms.txt`, `/robots.txt`, `/sitemap.xml`, a missing page (404), and a share preview of the homepage (opengraph.xyz or similar).

## Launch blockers (team decisions, not code)

- **Terms and Privacy are drafts.** 22 and 25 amber `{{…}}` marks in `src/content/legal.js` (company address, jurisdiction, payment and hosting providers, refunds, retention, minimum age, liability cap…). The app's sign-in links to both pages, so they must be resolved and approved, then set `draft: false`. Until then they show "Draft for review" and stay `noindex`.
- **Support address.** The app says support@keyfly.si for account deletion, the site says help@keyfly.si. Pick one.

## SEO and GEO: where the site stands

Done and checked in the build:

- Every public page: unique title and description, canonical, one H1, Open Graph and X cards, JSON-LD (Organization, WebSite, SoftwareApplication with live prices as offers, FAQPage, BreadcrumbList, Blog/BlogPosting, ItemList of templates).
- `sitemap.xml` with honest `lastmod` and an image sitemap for template stills; `robots.txt`; blog RSS.
- `/llms.txt` (added for launch), built from the same copy as the pages so answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews) get a clean summary, the guides and the FAQ.
- Security headers, long-lived caching for hashed assets, Next.js 16.4.5 (patches two advisories in 16.4.3).

Technical gaps still open, in order of value:

1. **One share image for every page** except blog posts. Give Product, Use cases, Integrations and Pricing their own `opengraph-image.jsx` (same layout, page title as the line) for better click-through when shared at launch.
2. **No `sameAs` on the Organization.** Add the official X, LinkedIn, YouTube and GitHub profiles to `homeJsonLd` once they exist; it ties the brand together for Google's knowledge panel and for AI answers.
3. **Blog posts are authored by the company,** not a named person. A real author with a short bio page is a strong E-E-A-T and AI-citation signal.

## Content gaps for organic growth

The site ranks only for what it has pages for: today that's five product pages and six guides. Searches people actually make before choosing an AI video editor have no landing page yet. In order of expected traffic for the effort:

1. **Feature pages** (one search intent each, ~600–900 words, a demo clip, an FAQ): AI caption generator; remove filler words and silences; text to video / prompt to video; AI voice-over; resize video for TikTok, Reels and Shorts; export to Final Cut / Resolve / Premiere (FCPXML, EDL, OTIO). All built from facts the Product page already states.
2. **Platform pages:** "AI video editor for Windows" and "for Mac". Few AI editors ship a real Windows app, so this is winnable early.
3. **Comparison pages:** KeyFly vs Descript, CapCut, VEED, Kapwing, Runway, and "best Descript alternatives". Highest buying intent. Competitor facts only from their public pages, dated and linked (clean-room rule).
4. **Use-case category pages** (`/use-cases/social-ads`, …): one per category with real copy (who it's for, what the templates make, an example prompt, FAQ). Not one page per template: a template is only a name, shape and length today, which would be thin content.
5. **Blog cadence:** two guides a month on how-to queries ("how to add captions to a video", "how to turn a podcast into clips", "how to edit video with Claude Code"). Each links to its feature page.

Rule for all of it: only claims the app or the team has confirmed (see `AGENTS.md`), no invented customers, metrics or reviews.

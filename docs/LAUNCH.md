# Launching keyfly.si

Last updated: 2026-11-19

## How the site is hosted

- `next build` writes a static export to `out/` (`output: "export"` in `next.config.mjs`).
- The `keyfly-site` Worker in the KeyFly Cloudflare account (`wrangler.jsonc`) serves it on the `keyfly.si/*` and `www.keyfly.si/*` routes; `worker/index.js` 301s www to the apex and hands everything else to the static assets. Headers are in `public/_headers` (an export ignores `next.config` headers).
- `.github/workflows/deploy.yml` builds on every push to `main`, hourly (so prices from `api.keyfly.si/v1/public/pricing` stay current) and by hand. It deploys only when the repository secret `CLOUDFLARE_API_TOKEN` exists (a scoped token: Workers Scripts Edit, Workers Routes Edit, Zone Read on keyfly.si). Never store the Global API Key there.
- The deploy build sets `REQUIRE_PRICING=1`: if the pricing API is down, the build fails and the live site keeps its last good deploy.
- Local check of the exact production output: `pnpm build && pnpm exec wrangler dev` (port 8787).

## After go-live (owner)

1. Verify keyfly.si in Google Search Console and Bing Webmaster Tools (google-site-verification TXT records already exist), submit `https://keyfly.si/sitemap.xml`, and request indexing for the pages and the five long guides.
2. Add the scoped `CLOUDFLARE_API_TOKEN` secret so pushes and hourly price refreshes deploy themselves.

## Legal pages (published 2026-11-19)

Terms and Privacy are live (`draft: false`), filled from the app's own code: Stripe billing and failed-payment flow, minute rollover and packs, seats, refunds, AI providers, AWS hosting, encryption, retention, telemetry. help@keyfly.si is the one support address, on the site and in the app.

Still worth a lawyer's pass, since the code can't settle them:

- **Company and law.** The pages name KeyFly at 8 The Green, STE R, Dover, Delaware 19901, US, and choose Delaware law and courts (inferred from the Delaware address). Confirm the exact legal entity name (e.g. "KeyFly Inc.") and that Delaware law is wanted.
- **EU/UK representative (GDPR Art. 27).** A non-EU company offering KeyFly to people in the EU or UK normally needs one. Not named yet.
- **App analytics consent.** The app's usage data is on by default (off with Do Not Track / Global Privacy Control, and switchable in Settings). In the EU, analytics stored on the device usually needs opt-in consent. Consider off-by-default for EU visitors.
- **Account deletion** is by email to help@keyfly.si; there's no in-app button yet.

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

## Long-form guides (published 2026-11-19)

Five guides of 4,300–4,750 words, each with images, an FAQ (FAQPage schema), its own share image and internal links: `/blog/keyfly-vs-cardboard`, `/blog/cardboard-alternatives`, `/blog/ai-video-editor-for-windows`, `/blog/edit-talking-head-video-with-ai`, `/blog/text-to-video-ai` (files in `src/content/posts/`). Competitor facts are dated 19 Nov 2026 with sources in each file's header; re-check them monthly.

## Content gaps for organic growth

The site ranks only for what it has pages for: today that's five product pages and six guides. Searches people actually make before choosing an AI video editor have no landing page yet. In order of expected traffic for the effort:

1. **Feature pages** (one search intent each, ~600–900 words, a demo clip, an FAQ): AI caption generator; remove filler words and silences; text to video / prompt to video; AI voice-over; resize video for TikTok, Reels and Shorts; export to Final Cut / Resolve / Premiere (FCPXML, EDL, OTIO). All built from facts the Product page already states.
2. **Platform pages:** "AI video editor for Windows" and "for Mac". Few AI editors ship a real Windows app, so this is winnable early.
3. **Comparison pages:** KeyFly vs Cardboard is live at `/blog/keyfly-vs-cardboard` (facts dated 19 Nov 2026; re-check Cardboard's pricing monthly, it changes often). Next: Descript, CapCut, VEED, Kapwing, Runway, and "best Cardboard alternatives". Highest buying intent. Competitor facts only from their public pages, dated and linked (clean-room rule).
4. **Use-case category pages** (`/use-cases/social-ads`, …): one per category with real copy (who it's for, what the templates make, an example prompt, FAQ). Not one page per template: a template is only a name, shape and length today, which would be thin content.
5. **Blog cadence:** two guides a month on how-to queries ("how to add captions to a video", "how to turn a podcast into clips", "how to edit video with Claude Code"). Each links to its feature page.

Rule for all of it: only claims the app or the team has confirmed (see `AGENTS.md`), no invented customers, metrics or reviews.

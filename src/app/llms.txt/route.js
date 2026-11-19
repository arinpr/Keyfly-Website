import { siteConfig } from "@/config/site";
import { homeMeta, faq } from "@/content/home";
import { productMeta } from "@/content/product";
import { useCasesMeta } from "@/content/use-cases";
import { integrationsMeta } from "@/content/integrations";
import { pricingMeta } from "@/content/pricing";
import { allPosts } from "@/content/blog";

// /llms.txt (llmstxt.org): a plain summary of KeyFly for AI assistants and
// answer engines, built from the same copy the pages use, so it never drifts.
export const dynamic = "force-static";

const url = (path) => `${siteConfig.url}${path === "/" ? "" : path}`;
const plain = (s) => s.replace(/\s+/g, " ").trim();

export function GET() {
  const pages = [
    ["Home", "/", homeMeta.description],
    ["Product", "/product", productMeta.description],
    ["Use cases and templates", "/use-cases", useCasesMeta.description],
    ["Integrations", "/integrations", integrationsMeta.description],
    ["Pricing", "/pricing", pricingMeta.description],
  ];

  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${plain(siteConfig.description)}`,
    "",
    `${siteConfig.name}, ${siteConfig.address.text}. Web app: ${siteConfig.appUrl}. Support: help@keyfly.si.`,
    "",
    "## Pages",
    "",
    ...pages.map(([name, path, d]) => `- [${name}](${url(path)}): ${plain(d)}`),
    "",
    "## Guides",
    "",
    ...allPosts.map((p) => `- [${p.title}](${url(p.path)}): ${plain(p.dek)}`),
    "",
    "## Common questions",
    "",
    ...faq.items.flatMap((i) => [`### ${i.q}`, "", plain(i.a), ""]),
  ].join("\n");

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

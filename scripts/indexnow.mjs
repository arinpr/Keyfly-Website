// Tell IndexNow search engines (Bing, Yandex, Seznam, Naver…) that every URL
// in the live sitemap changed. Run after a deploy: `node scripts/indexnow.mjs`.
// The key file public/<key>.txt proves keyfly.si owns the key.
import { readdirSync } from "node:fs";

const host = "keyfly.si";
const key = readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.slice(0, -4);
if (!key) throw new Error("No IndexNow key file in public/");

const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !/\.(webp|png|jpg)$/.test(u));

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
if (!res.ok && res.status !== 202) process.exit(1);

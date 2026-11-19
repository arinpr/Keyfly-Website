import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The share picture (Open Graph and X) for every page: the brand kit's own
// lockup (public/brand/lockup-dark.svg, unchanged) on Night, with the page's
// title and a line beneath it. Each route's opengraph-image.jsx calls this.
export const ogSize = { width: 1200, height: 630 };

async function lockup() {
  const svg = await readFile(join(process.cwd(), "public/brand/lockup-dark.svg"), "utf8");
  const box = svg.match(/viewBox="([\d.\s-]+)"/)?.[1].trim().split(/\s+/).map(Number) ?? [0, 0, 212, 64];
  return { src: `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`, ratio: box[2] / box[3] };
}

export async function ogImage({ title, line, kicker }) {
  const logo = await lockup();
  const height = kicker ? 64 : 132;
  // Long titles step down so they stay within two or three lines.
  const titleSize = title.length > 60 ? 50 : title.length > 36 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: kicker ? "flex-start" : "center",
          justifyContent: "center",
          padding: kicker ? "0 88px" : 0,
          background: "#0B0B0D",
          backgroundImage: "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(95,224,176,0.16), rgba(11,11,13,0) 70%)",
          color: "#F4F1EA",
          textAlign: kicker ? "left" : "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img only */}
        <img src={logo.src} width={Math.round(height * logo.ratio)} height={height} alt="" />
        {kicker ? (
          <div style={{ marginTop: 52, fontSize: 24, letterSpacing: "0.14em", textTransform: "uppercase", color: "#82E8C2" }}>
            {kicker}
          </div>
        ) : null}
        <div style={{ marginTop: kicker ? 16 : 56, fontSize: kicker ? titleSize : 52, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.08, maxWidth: 1024 }}>
          {title}
        </div>
        {line ? (
          <div style={{ marginTop: 22, fontSize: 28, color: "rgba(244,241,234,0.62)", maxWidth: 1024 }}>{line}</div>
        ) : null}
      </div>
    ),
    ogSize,
  );
}

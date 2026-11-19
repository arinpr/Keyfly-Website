import { ogImage, ogSize } from "@/lib/og";
import { integrationsMeta } from "@/content/integrations";

export const dynamic = "force-static";
export const alt = integrationsMeta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Integrations", title: integrationsMeta.title, line: "KeyFly · AI video editor for Mac, Windows and the web" });
}

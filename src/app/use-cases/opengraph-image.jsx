import { ogImage, ogSize } from "@/lib/og";
import { useCasesMeta } from "@/content/use-cases";

export const dynamic = "force-static";
export const alt = useCasesMeta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Use cases", title: useCasesMeta.title, line: "KeyFly · AI video editor for Mac, Windows and the web" });
}

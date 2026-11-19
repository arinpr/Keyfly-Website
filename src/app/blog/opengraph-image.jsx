import { ogImage, ogSize } from "@/lib/og";
import { blogPage } from "@/content/blog";

export const dynamic = "force-static";
export const alt = blogPage.meta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Blog", title: blogPage.meta.title, line: "KeyFly · AI video editor for Mac, Windows and the web" });
}

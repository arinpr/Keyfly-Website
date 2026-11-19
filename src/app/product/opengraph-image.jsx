import { ogImage, ogSize } from "@/lib/og";
import { productMeta } from "@/content/product";

export const dynamic = "force-static";
export const alt = productMeta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Product", title: productMeta.title, line: "KeyFly · AI video editor for Mac, Windows and the web" });
}

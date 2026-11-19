import { ogImage, ogSize } from "@/lib/og";

// Built once into the static export.
export const dynamic = "force-static";

// The site's share picture, used by every page without its own.
export const alt = "KeyFly, the AI video editor for Mac, Windows and the web";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ title: "The AI video editor, your way", line: "Describe the video. Take it anywhere. · Mac · Windows · Web" });
}

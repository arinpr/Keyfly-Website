import { ogImage, ogSize } from "@/lib/og";


export const dynamic = "force-static";
export const alt = "Start free. Pay for the AI's work, nothing else.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Pricing", title: "Start free. Pay for the AI's work, nothing else.", line: "KeyFly · AI video editor for Mac, Windows and the web" });
}

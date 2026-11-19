import { allPosts, getPost } from "@/content/blog";
import { ogImage, ogSize } from "@/lib/og";

// Each post's share picture: its topic and title.
export const dynamicParams = false;
export const size = ogSize;
export const contentType = "image/png";
export const alt = "A KeyFly guide";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogImage({ kicker: `KeyFly · ${post.topicLabel}`, title: post.title, line: `keyfly.si${post.path}` });
}

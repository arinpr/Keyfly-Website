/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // A static export (out/), served by Cloudflare Workers static assets (see
  // wrangler.jsonc). Security headers live in public/_headers, since an export
  // ignores next.config headers. Pricing is fetched at build; the deploy
  // workflow rebuilds hourly so prices stay current.
  output: "export",
};

export default nextConfig;

import type { LoaderFunctionArgs } from "@remix-run/node";

// This route returns robots.txt dynamically with the correct domain
export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = new URL(request.url).origin;
  const indexNowKey = process.env.INDEXNOW_KEY || "your-indexnow-key-here";

  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# IndexNow
IndexNow-key: ${indexNowKey}

# Crawl-delay
Crawl-delay: 0

# Common best practices
Allow: /*.css
Allow: /*.js
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.png
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

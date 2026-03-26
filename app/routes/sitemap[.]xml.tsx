import type { LoaderFunctionArgs } from "@remix-run/node";
import { generateSitemap } from "@nasa-gcn/remix-seo";

export async function loader({ request }: LoaderFunctionArgs) {
  const { routes } = await import("@remix-run/dev/server-build");
  
  return generateSitemap(request, routes, {
    siteUrl: process.env.PUBLIC_URL || "https://aerol.ai",
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}

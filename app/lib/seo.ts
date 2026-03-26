import type { MetaDescriptor } from "@remix-run/node";

export interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
  siteName?: string;
  keywords?: string;
  robots?: string;
}

export function getSeoMeta(config: SEOConfig): MetaDescriptor[] {
  const {
    title,
    description,
    url,
    image = "/og-image.jpg",
    type = "website",
    siteName = "Aerol",
    keywords,
    robots = "index, follow",
  } = config;

  const siteUrl = (typeof process !== "undefined" && process.env ? process.env.PUBLIC_URL : undefined) || "https://aerol.ai";
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const meta: MetaDescriptor[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: robots },
  ];

  if (keywords) {
    meta.push({ name: "keywords", content: keywords });
  }

  // OpenGraph
  meta.push(
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:site_name", content: siteName },
    { property: "og:image", content: fullImageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title }
  );

  if (url) {
    meta.push({ property: "og:url", content: url });
    meta.push({ name: "twitter:url", content: url });
    
    try {
      const urlObj = new URL(url);
      meta.push({ name: "twitter:domain", content: urlObj.hostname });
    } catch (e) {
      // Ignore invalid URLs
    }
  }

  // Twitter
  meta.push(
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullImageUrl }
  );

  return meta;
}

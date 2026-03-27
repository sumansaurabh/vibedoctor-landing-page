import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";
import { UseCaseAISRE } from "~/components/framer/UseCaseAISRE";

export const meta: MetaFunction = () => {
  const siteUrl =
    (typeof process !== "undefined" && process.env ? process.env.PUBLIC_URL : undefined) ||
    "https://aerol.ai";

  return getSeoMeta({
    title: "AI SRE - Aerol",
    description:
      "AI agents that automate alert investigations, orchestrate incident response, and compound institutional knowledge - purpose-built for enterprise SRE teams.",
    url: `${siteUrl}/use-cases/ai-sre`,
    keywords:
      "AI SRE, site reliability engineering, incident response automation, alert management, root cause analysis, AI agents, DevOps automation",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/use-cases/ai-sre",
      priority: 0.8,
      changefreq: "weekly",
    },
  ],
};

export default function AISRERoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main>
        <UseCaseAISRE />
      </main>
      <FramerFooter />
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";
import { FramerIntegrationsPage } from "~/components/framer/FramerIntegrationsPage";

export const meta: MetaFunction = () => {
  const siteUrl =
    (typeof process !== "undefined" && process.env
      ? process.env.PUBLIC_URL
      : undefined) || "https://aerol.ai";

  return getSeoMeta({
    title: "Integrations - Aerol",
    description:
      "Aerol integrates with 42+ tools across infrastructure, observability, code repositories, CI/CD, chat, documentation, and more - all in one place.",
    url: `${siteUrl}/integrations`,
    keywords:
      "integrations, AWS, Datadog, Kubernetes, Slack, PagerDuty, GitHub, observability, infrastructure, DevOps, incident management",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/integrations",
      priority: 0.9,
      changefreq: "weekly",
    },
  ],
};

export default function IntegrationsRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main>
        <FramerIntegrationsPage />
      </main>
      <FramerFooter />
    </div>
  );
}

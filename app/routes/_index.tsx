import { getSeoMeta } from "~/lib/seo";
import type { MetaFunction } from "@remix-run/node";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerHero } from "~/components/framer/FramerHero";
import { FramerFounder } from "~/components/framer/FramerFounder";
import { FramerBenefits } from "~/components/framer/FramerBenefits";
import { FramerServices } from "~/components/framer/FramerServices";
import { FramerProcess } from "~/components/framer/FramerProcess";
import { FramerSuccess } from "~/components/framer/FramerSuccess";
import { FramerIntegrations } from "~/components/framer/FramerIntegrations";
import { FramerPricing } from "~/components/framer/FramerPricing";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  const siteUrl = process.env.PUBLIC_URL || "http://localhost:5173";
  
  return getSeoMeta({
    title: "VibeDoctor - Ship AI Apps to Customer-Owned Cloud",
    description:
      "VibeDoctor helps teams ship AI-built apps to customer-owned cloud faster and safer. Deploy with confidence using our enterprise-grade platform.",
    url: siteUrl,
    keywords: "AI deployment, cloud deployment, customer cloud, BYOC, bring your own cloud, enterprise AI, cloud migration",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/",
      priority: 1.0,
      changefreq: "daily",
    },
  ],
};

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <FramerHero />
      <FramerFounder />
      <FramerBenefits />
      <FramerServices />
      {/* <FramerProcess /> */}
      {/* <FramerSuccess /> */}
      <FramerIntegrations />
      <FramerPricing />
      <FramerFooter />
    </div>
  );
}

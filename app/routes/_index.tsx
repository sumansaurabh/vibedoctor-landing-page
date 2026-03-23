import { getSeoMeta } from "~/lib/seo";
import type { MetaFunction } from "@remix-run/node";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerHero } from "~/components/framer/FramerHero";
import { FramerFounder } from "~/components/framer/FramerFounder";
import { FramerBenefits } from "~/components/framer/FramerBenefits";
import { FramerServices } from "~/components/framer/FramerServices";
import { FramerSuccess } from "~/components/framer/FramerSuccess";
import { FramerFooter } from "~/components/framer/FramerFooter";
import { FramerProductShowcase } from "~/components/framer/FramerProductShowcase";

export const meta: MetaFunction = () => {
  const siteUrl = (typeof process !== "undefined" && process.env ? process.env.PUBLIC_URL : undefined) || "https://aerol.dev";
  
  return getSeoMeta({
    title: "Aerol - Ship AI Apps to Customer-Owned Cloud",
    description:
      "Aerol helps teams ship AI-built apps to customer-owned cloud faster and safer. Deploy with confidence using our enterprise-grade platform.",
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
      <FramerProductShowcase />
      <FramerFounder />
      <FramerBenefits />
      {/*This service is only suitable if we go global provision*/}
      <FramerServices />
      <FramerSuccess />
      <FramerFooter />
    </div>
  );
}

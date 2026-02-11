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
  return [
    { title: "VibeDoctor" },
    {
      name: "description",
      content:
        "VibeDoctor helps teams ship AI-built apps to customer-owned cloud faster and safer.",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <FramerHero />
      <FramerFounder />
      <FramerBenefits />
      <FramerServices />
      <FramerProcess />
      <FramerSuccess />
      <FramerIntegrations />
      <FramerPricing />
      <FramerFooter />
    </div>
  );
}

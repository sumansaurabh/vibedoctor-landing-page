import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerFooter } from "~/components/framer/FramerFooter";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerTeam } from "~/components/framer/FramerTeam";

export const meta: MetaFunction = () => {
  return getSeoMeta({
    title: "Team - VibeDoctor",
    description: "Meet the VibeDoctor founding team behind AI-native shipping to customer-owned cloud environments.",
    url: `${process.env.PUBLIC_URL || "http://localhost:5173"}/team`,
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/team",
      priority: 0.7,
      changefreq: "monthly",
    },
  ],
};

export default function TeamRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px]">
        <FramerTeam />
      </main>
      <FramerFooter />
    </div>
  );
}

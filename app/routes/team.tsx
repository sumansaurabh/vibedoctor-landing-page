import type { MetaFunction } from "@remix-run/node";
import { FramerFooter } from "~/components/framer/FramerFooter";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerTeam } from "~/components/framer/FramerTeam";

export const meta: MetaFunction = () => {
  return [
    { title: "Team | VibeDoctor" },
    {
      name: "description",
      content:
        "Meet the VibeDoctor founding team behind AI-native shipping to customer-owned cloud environments.",
    },
  ];
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

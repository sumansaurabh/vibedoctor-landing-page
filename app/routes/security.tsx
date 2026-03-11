import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  return getSeoMeta({
    title: "Security & Vulnerability Disclosure - VibeDoctor",
    description: "Security & Vulnerability Disclosure for VibeDoctor",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/security",
      priority: 0.5,
      changefreq: "yearly",
    },
  ],
};

export default function SecurityRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px] px-6 sm:px-8 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert lg:prose-lg space-y-6 leading-relaxed">
          <h1>Security &amp; Vulnerability Disclosure</h1>

          <p>
            VibeDoctor takes security seriously. If you believe you have discovered a security vulnerability in the VibeDoctor platform, please report it to us so we can investigate and resolve the issue.
          </p>

          <h2>Reporting a Vulnerability</h2>
          
          <p>Please send details of the vulnerability to:</p>
          <p>
            <a href="mailto:security@vibedoctor.dev" className="text-white/70 hover:text-white underline">security@vibedoctor.dev</a>
          </p>

          <p>When reporting an issue, please include:</p>
          <ul>
            <li>Description of the vulnerability</li>
            <li>Steps to reproduce the issue</li>
            <li>Potential impact</li>
            <li>Any supporting screenshots or logs</li>
          </ul>

          <p>
            We will acknowledge receipt of the report and work to address verified issues promptly.
          </p>
        </div>
      </main>
      <FramerFooter />
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  return getSeoMeta({
    title: "GDPR Compliance - VibeDoctor",
    description: "GDPR Compliance information for VibeDoctor",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/gdpr",
      priority: 0.5,
      changefreq: "yearly",
    },
  ],
};

export default function GDPRRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px] px-6 sm:px-8 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert lg:prose-lg space-y-6 leading-relaxed">
          <h1>GDPR Compliance</h1>

          <p>
            VibeDoctor is committed to protecting user privacy and handling personal data in accordance with applicable data protection laws including GDPR. Users may request access, correction, or deletion of their stored data by contacting support.
          </p>

          <h2>Contact Support</h2>
          <p>
            To exercise any of your rights under the GDPR, or if you have questions about our data practices, please contact our support team at:
            <br />
            <strong>Email:</strong>{' '}
            <a href="mailto:support@vibedoctor.dev">support@vibedoctor.dev</a>
          </p>
        </div>
      </main>
      <FramerFooter />
    </div>
  );
}

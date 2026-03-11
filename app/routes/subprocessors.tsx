import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  return getSeoMeta({
    title: "Sub-processors - VibeDoctor",
    description: "List of third-party sub-processors used by VibeDoctor",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/subprocessors",
      priority: 0.5,
      changefreq: "yearly",
    },
  ],
};

export default function SubprocessorsRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px] px-6 sm:px-8 lg:px-20 py-12">
        <div className="max-w-4xl mx-auto prose prose-invert lg:prose-lg space-y-6 leading-relaxed">
          <h1>VibeDoctor Sub-processors</h1>

          <p>
            VibeDoctor uses trusted third-party service providers to operate the platform and deliver functionality. These providers may process limited customer data on our behalf.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 font-semibold text-white">Sub-processor</th>
                  <th className="py-3 px-4 font-semibold text-white">Purpose</th>
                  <th className="py-3 px-4 font-semibold text-white">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                {/* AI Models */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">OpenAI</td>
                  <td className="py-3 px-4">AI model processing for user requests</td>
                  <td className="py-3 px-4">United States</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Claude (Anthropic)</td>
                  <td className="py-3 px-4">AI model processing for user requests</td>
                  <td className="py-3 px-4">United States</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Gemini (Google)</td>
                  <td className="py-3 px-4">AI model processing for user requests</td>
                  <td className="py-3 px-4">United States</td>
                </tr>
                
                {/* Repositories & Issue Trackers */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">GitHub</td>
                  <td className="py-3 px-4">Repository management and automation workflows</td>
                  <td className="py-3 px-4">United States</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">GitHub Issues</td>
                  <td className="py-3 px-4">Issue tracking and project management</td>
                  <td className="py-3 px-4">United States</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Jira</td>
                  <td className="py-3 px-4">Issue tracking and project management</td>
                  <td className="py-3 px-4">Global</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Linear</td>
                  <td className="py-3 px-4">Issue tracking and project management</td>
                  <td className="py-3 px-4">United States</td>
                </tr>

                {/* Databases and Backends */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Convex</td>
                  <td className="py-3 px-4">Real-time database and backend services</td>
                  <td className="py-3 px-4">United States</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Supabase</td>
                  <td className="py-3 px-4">Database and backend functionality</td>
                  <td className="py-3 px-4">Global</td>
                </tr>

                {/* Design */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Figma</td>
                  <td className="py-3 px-4">Design and prototyping collaboration</td>
                  <td className="py-3 px-4">United States</td>
                </tr>

                {/* Cloud Providers */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Google Cloud Platform (GCP)</td>
                  <td className="py-3 px-4">Cloud infrastructure and data hosting</td>
                  <td className="py-3 px-4">Multiple regions</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Amazon Web Services (AWS)</td>
                  <td className="py-3 px-4">Cloud infrastructure and data hosting</td>
                  <td className="py-3 px-4">Multiple regions</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Cloudflare</td>
                  <td className="py-3 px-4">CDN, DNS, edge computing, and security</td>
                  <td className="py-3 px-4">Global</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">Microsoft Azure</td>
                  <td className="py-3 px-4">Cloud infrastructure and data hosting</td>
                  <td className="py-3 px-4">Multiple regions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            VibeDoctor only shares the minimum data necessary with these providers to perform requested functionality.
          </p>

          <p className="text-sm text-white/60 mt-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </main>
      <FramerFooter />
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  return getSeoMeta({
    title: "GDPR Compliance - Aerol",
    description:
      "How Aerol complies with the General Data Protection Regulation (GDPR). Data subject rights, processing basis, and data protection measures.",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/gdpr",
      priority: 0.6,
      changefreq: "yearly",
    },
  ],
};

export default function GDPRRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px] px-6 sm:px-8 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert lg:prose-lg space-y-8 leading-relaxed">
          <h1>GDPR Compliance</h1>

          <p>
            Penify Technologies LLC (dba Aerol) is committed to protecting
            user privacy and handling personal data in accordance with the
            General Data Protection Regulation (GDPR) and other applicable data
            protection laws.
          </p>

          <h2>Lawful Basis for Processing</h2>
          <p>
            We process personal data based on the following legal grounds:
            contractual necessity (to provide our services), legitimate interests
            (to improve our platform and prevent fraud), and consent (for
            optional analytics and marketing communications). You may withdraw
            consent at any time without affecting the lawfulness of processing
            based on consent before its withdrawal.
          </p>

          <h2>Your Rights Under GDPR</h2>
          <p>
            As a data subject, you have the following rights regarding your
            personal data:
          </p>
          <ul>
            <li>
              <strong>Right of Access</strong> &mdash; Request a copy of the
              personal data we hold about you
            </li>
            <li>
              <strong>Right to Rectification</strong> &mdash; Request correction
              of inaccurate or incomplete data
            </li>
            <li>
              <strong>Right to Erasure</strong> &mdash; Request deletion of your
              personal data when no longer necessary
            </li>
            <li>
              <strong>Right to Restrict Processing</strong> &mdash; Request that
              we limit how we use your data
            </li>
            <li>
              <strong>Right to Data Portability</strong> &mdash; Receive your
              data in a structured, machine-readable format
            </li>
            <li>
              <strong>Right to Object</strong> &mdash; Object to processing
              based on legitimate interests or direct marketing
            </li>
          </ul>

          <h2>Data We Collect</h2>
          <p>
            Aerol collects and processes the following categories of
            personal data: account information (name, email address, profile
            data from OAuth providers), usage data (feature usage, interaction
            logs), and source code data (temporarily processed for analysis, not
            retained). We do not collect sensitive personal data such as health
            information, biometric data, or financial account numbers.
          </p>

          <h2>Data Protection Measures</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect personal data, including AES-256-GCM encryption at rest, TLS
            encryption in transit, access controls with multi-factor
            authentication, regular security assessments, and employee security
            awareness training.
          </p>

          <h2>Sub-processors</h2>
          <p>
            We use carefully vetted third-party sub-processors to help deliver
            our services. A full list is available on our{" "}
            <a href="/subprocessors" className="text-blue-400 hover:text-blue-300">
              Sub-processors page
            </a>
            . We ensure all sub-processors maintain appropriate data protection
            standards through contractual agreements.
          </p>

          <h2>Data Transfers</h2>
          <p>
            When personal data is transferred outside the European Economic
            Area, we ensure appropriate safeguards are in place, such as
            Standard Contractual Clauses (SCCs) approved by the European
            Commission, or reliance on adequacy decisions where applicable.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected or as required by law. Source
            code submitted for analysis is processed in ephemeral environments
            and is not retained after the analysis is complete. Account data is
            retained for the duration of your account and deleted upon request or
            account closure.
          </p>

          <h2>Data Protection Officer</h2>
          <p>
            For GDPR inquiries or to exercise any of your rights, please contact
            our Privacy Officer:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:privacy@aerol.dev"
              className="text-blue-400 hover:text-blue-300"
            >
              privacy@aerol.dev
            </a>
            <br />
            <strong>Address:</strong> Penify Technologies LLC, 30 N Gould St,
            Ste R, Sheridan, WY 82801
          </p>
          <p className="text-white/40 text-sm">
            We will respond to all data subject requests within 30 days. If you
            are unsatisfied with our response, you have the right to lodge a
            complaint with your local data protection supervisory authority.
          </p>

          <p className="text-white/30 text-xs mt-12">
            Last updated: March 2026
          </p>
        </div>
      </main>
      <FramerFooter />
    </div>
  );
}

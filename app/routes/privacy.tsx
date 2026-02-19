import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  return getSeoMeta({
    title: "Privacy Policy - VibeDoctor",
    description: "Privacy Policy for VibeDoctor",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/privacy",
      priority: 0.5,
      changefreq: "yearly",
    },
  ],
};

export default function PrivacyRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px] px-6 sm:px-8 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert lg:prose-lg space-y-6 leading-relaxed">
          <h1>Privacy Policy</h1>

          <p><strong>Effective Date:</strong> June 24, 2025</p>
          <p><strong>Last Updated:</strong> June 24, 2025</p>

          <h2>1. Introduction</h2>

          <p>
            Penify Technologies LLC ("we," "our," or "us") operates BareUptime,
            a website monitoring service. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our website monitoring Service and website located at{' '}
            <a href="https://vibedoctor.dev" className="text-white/70 hover:text-white underline">https://vibedoctor.dev</a>.
          </p>

          <h2>2. Company Information</h2>

          <p><strong>Company:</strong> Penify Technologies LLC</p>
          <p><strong>Registered Address:</strong> 30 N Gould St Ste N, Sheridan, WY 82801</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@vibedoctor.dev">support@vibedoctor.dev</a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a href="https://vibedoctor.dev" className="text-white/70 hover:text-white underline">https://vibedoctor.dev</a>
          </p>

          <h2>3. Information We Collect</h2>

          <h3>3.1 Personal Information</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> Email address, name, and
              password when you create an account
            </li>
            <li>
              <strong>Contact Information:</strong> Email addresses for
              notifications and communications
            </li>
            <li>
              <strong>Payment Information:</strong> Billing address and payment
              method details (processed securely through third-party payment
              processors)
            </li>
          </ul>

          <h3>3.2 Technical Information</h3>
          <ul>
            <li>
              <strong>Website URLs:</strong> URLs of websites you choose to
              monitor
            </li>
            <li>
              <strong>Monitoring Data:</strong> Response times, status codes,
              and availability metrics of monitored websites
            </li>
            <li>
              <strong>Usage Data:</strong> How you interact with our Service,
              including features used and frequency of access
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type,
              operating system, and device identifiers
            </li>
          </ul>

          <h3>3.3 Communication Data</h3>
          <ul>
            <li>
              <strong>Support Communications:</strong> Records of your
              communications with our support team
            </li>
            <li>
              <strong>Newsletter Subscriptions:</strong> Email address if you
              subscribe to our newsletter
            </li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, operate, and maintain our monitoring Service</li>
            <li>Send monitoring alerts and notifications about your websites</li>
            <li>Process payments and manage your account</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about Service updates, security alerts, and
            support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2>5. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information. We may share
          information in the following circumstances:</p>

          <h3>5.1 Service Providers</h3>
          <p>
            We work with trusted third-party service providers who assist us in
            operating our Service, including:
          </p>
          <ul>
            <li>Payment processors (Stripe, PayPal)</li>
            <li>Cloud hosting providers (AWS, Google Cloud)</li>
            <li>Email service providers</li>
            <li>Analytics services</li>
          </ul>

          <h3>5.2 Legal Requirements</h3>
          <p>
            We may disclose information when required by law, legal process, or
            to protect our rights and the safety of others.
          </p>

          <h3>5.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your
            information may be transferred as part of the transaction.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your information, including:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Secure authentication mechanisms</li>
            <li>Regular security assessments</li>
            <li>Access controls and employee training</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul>
            <li>Access: Request access to your personal information</li>
            <li>Correction: Request correction of inaccurate information</li>
            <li>Deletion: Request deletion of your information</li>
            <li>Portability: Request a copy of your information in a portable
            format</li>
            <li>Opt-out: Unsubscribe from marketing communications</li>
          </ul>
          <p>To exercise these rights, contact us at{' '}
            <a href="mailto:support@vibedoctor.dev">support@vibedoctor.dev</a>.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@vibedoctor.dev">support@vibedoctor.dev</a>
            <br />
            <strong>Address:</strong> Penify Technologies LLC, 30 N Gould St
            Ste N, Sheridan, WY 82801
            <br />
            <strong>Phone:</strong> Available through our website support system
          </p>
        </div>
      </main>
      <FramerFooter />
    </div>
  );
}

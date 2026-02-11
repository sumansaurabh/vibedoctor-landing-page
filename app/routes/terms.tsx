import type { MetaFunction } from "@remix-run/node";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms of Service | VibeDoctor" },
    {
      name: "description",
      content: "Terms of Service for VibeDoctor",
    },
  ];
};

export default function TermsRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px] px-6 sm:px-8 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert lg:prose-lg space-y-6 leading-relaxed">
          <h1>Terms of Service</h1>

          <p><strong>Effective Date:</strong> June 24, 2025</p>
          <p><strong>Last Updated:</strong> June 24, 2025</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using BareUptime ("Service"), you agree to be bound
            by these Terms of Service ("Terms"). If you disagree with any part
            of these Terms, you may not access the Service.
          </p>

          <h2>2. Company Information</h2>
          <p><strong>Service Provider:</strong> Penify Technologies LLC</p>
          <p><strong>Registered Address:</strong> 30 N Gould St Ste N, Sheridan, WY 82801</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@vibedoctor.dev">support@vibedoctor.dev</a>
            <br />
            <strong>Website:</strong>{' '}
            <a href="https://vibedoctor.dev" className="text-white/70 hover:text-white underline">https://vibedoctor.dev</a>
          </p>

          <h2>3. Description of Service</h2>
          <ul>
            <li>Monitors website availability and performance</li>
            <li>Sends alerts when websites go down or experience issues</li>
            <li>Provides uptime statistics and reporting</li>
            <li>Offers SSL certificate monitoring</li>
            <li>Delivers notifications through various channels (email, mobile apps, webhooks, etc.)</li>
          </ul>

          <h2>4. Account Registration</h2>
          <h3>4.1 Account Creation</h3>
          <ul>
            <li>You must provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must be at least 13 years old to use the Service</li>
            <li>One account per person or organization</li>
          </ul>

          <h3>4.2 Account Security</h3>
          <ul>
            <li>You are responsible for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>We reserve the right to suspend accounts that appear to be compromised</li>
          </ul>

          <h2>5. Acceptable Use Policy</h2>
          <h3>5.1 Permitted Uses</h3>
          <ul>
            <li>Monitor websites that you own or have permission to monitor</li>
            <li>Use the Service for legitimate business purposes</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h3>5.2 Prohibited Uses</h3>
          <p>You may not:</p>
          <ul>
            <li>Monitor websites without proper authorization</li>
            <li>Use the Service to harass, abuse, or harm others</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Violate any laws or regulations</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Use the Service for illegal activities or to monitor illegal content</li>
            <li>Resell or redistribute the Service without permission</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Create multiple accounts to circumvent service limits</li>
          </ul>

          <h2>6. Subscription Plans and Pricing</h2>
          <h3>6.1 Service Plans</h3>
          <ul>
            <li>Free Plan: Up to 50 monitors with basic features</li>
            <li>Premium Plans: Additional features and monitors available</li>
            <li>Plan details available at{' '}
              <a href="https://vibedoctor.dev" className="text-white/70 hover:text-white underline">https://vibedoctor.dev</a>
            </li>
          </ul>

          <h3>6.2 Payment Terms</h3>
          <ul>
            <li>Annual subscriptions are billed in advance</li>
            <li>All fees are non-refundable except as required by law</li>
            <li>Prices may change with 30 days' notice to existing subscribers</li>
            <li>Failed payments may result in service suspension</li>
          </ul>

          <h2>7. Service Availability and Performance</h2>
          <h3>7.1 Service Level</h3>
          <p>
            We strive to provide reliable monitoring with high uptime. Service
            availability is not guaranteed and may be affected by maintenance,
            outages, or technical issues. We do not guarantee 100% accuracy of
            monitoring results.
          </p>

          <h3>7.2 Monitoring Frequency</h3>
          <ul>
            <li>Free plans: Monitoring every 5 minutes</li>
            <li>Paid plans: Monitoring every 1-3 minutes (depending on plan)</li>
            <li>We reserve the right to adjust monitoring frequency based on service load</li>
          </ul>

          <h2>8. Disclaimers and Limitation of Liability</h2>
          <h3>8.1 Service Disclaimers</h3>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
            OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>

          <h3>8.2 Limitation of Liability</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, PENIFY TECHNOLOGIES LLC SHALL
            NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA,
            OR BUSINESS INTERRUPTION.
          </p>

          <h2>9. Termination</h2>
          <h3>9.1 Termination by You</h3>
          <p>
            You may terminate your account at any time through your account
            settings. Termination does not relieve you of payment obligations for
            services already provided.
          </p>

          <h3>9.2 Termination by Us</h3>
          <p>
            We may terminate or suspend your account immediately if you: violate
            these Terms, engage in fraudulent activity, fail to pay required
            fees, or use the Service in a way that could harm us or other users.
          </p>

          <h2>10. Governing Law and Disputes</h2>
          <p>
            These Terms are governed by the laws of the State of Wyoming,
            United States, without regard to conflict of law principles. Any
            disputes will be resolved through binding arbitration in Wyoming.
            You waive the right to participate in class action lawsuits. Wyoming
            state courts have exclusive jurisdiction for any matters not subject
            to arbitration.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For questions about these Terms of Service, contact us:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:legal@vibedoctor.dev">legal@vibedoctor.dev</a>
            <br />
            <strong>Support:</strong>{' '}
            <a href="mailto:support@vibedoctor.dev">support@vibedoctor.dev</a>
            <br />
            <strong>Address:</strong> Penify Technologies LLC, 30 N Gould St Ste N, Sheridan, WY 82801
          </p>

          <p>
            By using BareUptime, you acknowledge that you have read, understood,
            and agree to be bound by these Terms of Service.
          </p>
        </div>
      </main>
      <FramerFooter />
    </div>
  );
}

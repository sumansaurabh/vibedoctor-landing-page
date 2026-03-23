import type { MetaFunction } from "@remix-run/node";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  return getSeoMeta({
    title: "Security & Compliance - Aerol",
    description:
      "Aerol security practices, compliance frameworks, and vulnerability disclosure policy. GDPR compliant, NIST-aligned, SOC 2 ready.",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/security",
      priority: 0.7,
      changefreq: "monthly",
    },
  ],
};

const policies = [
  {
    title: "Access Control",
    description:
      "Role-based access control, multi-factor authentication, single sign-on via OAuth providers, and regular access reviews.",
  },
  {
    title: "Data Protection",
    description:
      "AES-256-GCM encryption at rest, TLS 1.2+ in transit, encryption key management, and data classification model.",
  },
  {
    title: "Secure SDLC",
    description:
      "Secure software development lifecycle with code reviews, dependency scanning, static analysis, and penetration testing.",
  },
  {
    title: "Incident Response",
    description:
      "Defined incident response team, escalation procedures, playbooks for common scenarios, and post-incident reviews.",
  },
  {
    title: "Business Continuity",
    description:
      "Disaster recovery procedures, data backup and recovery, application service recovery, and regular BCDR testing.",
  },
  {
    title: "Vulnerability Management",
    description:
      "Regular vulnerability scanning, defined remediation SLAs, and coordinated disclosure process.",
  },
  {
    title: "Vendor Risk Management",
    description:
      "Third-party security assessments, contractual security requirements, and ongoing vendor monitoring.",
  },
  {
    title: "Risk Management",
    description:
      "Annual risk assessments, risk registry, mitigation tracking, and continuous monitoring of residual risks.",
  },
  {
    title: "HR & Personnel Security",
    description:
      "Background screening, security awareness training, acceptable use policies, and secure offboarding procedures.",
  },
  {
    title: "Configuration Management",
    description:
      "Infrastructure as code, change management processes, patch management, and production deploy controls.",
  },
  {
    title: "Privacy & Consent",
    description:
      "Published privacy policy, GDPR data processing agreements, data subject rights procedures, and cookie policy.",
  },
  {
    title: "System Auditing",
    description:
      "Security event logging, audit trail integrity, internal audits, and monitoring of system activities.",
  },
];

const frameworks = [
  {
    name: "NIST Cybersecurity Framework",
    status: "Aligned" as const,
    description:
      "Our security controls are mapped to the NIST Cybersecurity Framework, covering Identify, Protect, Detect, Respond, and Recover functions.",
  },
  {
    name: "GDPR",
    status: "Compliant" as const,
    description:
      "We comply with GDPR requirements for data protection, privacy by design, data subject rights, and cross-border data transfers.",
  },
  {
    name: "SOC 2 Type I",
    status: "Ready" as const,
    description:
      "Our policies and procedures are designed to meet SOC 2 Trust Service Criteria. Formal audit planned for growth stage.",
  },
];

const statusColors: Record<string, string> = {
  Compliant: "bg-green-500/20 text-green-400",
  Aligned: "bg-blue-500/20 text-blue-400",
  Ready: "bg-yellow-500/20 text-yellow-400",
};

export default function SecurityRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px] px-6 sm:px-8 lg:px-20 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Security &amp; Compliance
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Aerol is built with security at its core. We maintain
              comprehensive security policies aligned with industry standards to
              protect your code and data.
            </p>
          </div>

          {/* Compliance Frameworks */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Compliance Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {frameworks.map((fw) => (
                <div
                  key={fw.name}
                  className="border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{fw.name}</h3>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[fw.status]}`}
                    >
                      {fw.status}
                    </span>
                  </div>
                  <p className="text-sm text-white/50">{fw.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Security */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Technical Security Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="font-semibold mb-2">Encryption</h3>
                <ul className="text-sm text-white/60 space-y-1.5 list-disc list-inside">
                  <li>AES-256-GCM encryption for data at rest</li>
                  <li>TLS 1.2+ for all data in transit</li>
                  <li>JWE-encrypted session tokens</li>
                  <li>OAuth tokens encrypted before storage</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="font-semibold mb-2">Authentication</h3>
                <ul className="text-sm text-white/60 space-y-1.5 list-disc list-inside">
                  <li>OAuth 2.0 via GitHub, GitLab, Google, Bitbucket</li>
                  <li>Multi-factor authentication supported</li>
                  <li>Personal access tokens with SHA-256 hashing</li>
                  <li>Session management with secure cookies</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <ul className="text-sm text-white/60 space-y-1.5 list-disc list-inside">
                  <li>Cloud-native deployment on GCP / Vercel</li>
                  <li>Kubernetes orchestration with rolling updates</li>
                  <li>Non-root Docker containers</li>
                  <li>Comprehensive SSRF protection</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="font-semibold mb-2">Code Security</h3>
                <ul className="text-sm text-white/60 space-y-1.5 list-disc list-inside">
                  <li>TypeScript strict mode across all codebases</li>
                  <li>Zod schema validation on all API inputs</li>
                  <li>Drizzle ORM preventing SQL injection</li>
                  <li>GitHub Actions CI/CD with automated checks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Policies */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Adopted Security Policies
            </h2>
            <p className="text-white/50">
              We maintain 25+ security policies covering all critical domains.
              All policies are reviewed annually and updated as needed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {policies.map((policy) => (
                <div
                  key={policy.title}
                  className="border border-white/10 rounded-lg p-4 bg-white/[0.02]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-sm">{policy.title}</h3>
                    <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                      Adopted
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mt-1.5">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Vulnerability Disclosure */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Vulnerability Disclosure</h2>
            <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] space-y-4">
              <p className="text-white/60">
                Aerol takes security seriously. If you believe you have
                discovered a security vulnerability, please report it
                responsibly.
              </p>
              <div>
                <h3 className="font-semibold mb-2">Report a Vulnerability</h3>
                <p className="text-white/60">
                  Email:{" "}
                  <a
                    href="mailto:security@aerol.dev"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    security@aerol.dev
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  What to Include in Your Report
                </h3>
                <ul className="text-sm text-white/60 space-y-1 list-disc list-inside">
                  <li>Description of the vulnerability</li>
                  <li>Steps to reproduce the issue</li>
                  <li>Potential impact assessment</li>
                  <li>Any supporting screenshots or logs</li>
                </ul>
              </div>
              <p className="text-sm text-white/40">
                We will acknowledge receipt within 48 hours and work to address
                verified issues promptly. We ask that you allow us reasonable
                time to resolve the issue before public disclosure.
              </p>
            </div>
          </section>

          {/* Data Handling */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Data Handling</h2>
            <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] space-y-4">
              <p className="text-white/60">
                Aerol processes developer source code and repository
                metadata to provide AI-powered code analysis and documentation.
                We follow strict data handling procedures:
              </p>
              <ul className="text-sm text-white/60 space-y-2 list-disc list-inside">
                <li>
                  Code is processed in isolated, ephemeral environments and not
                  retained beyond the analysis session
                </li>
                <li>Your code is never used to train AI models</li>
                <li>
                  All data is classified according to our four-tier model:
                  Critical, Confidential, Internal, and Public
                </li>
                <li>
                  Data deletion requests are honored promptly per our data
                  retention policy
                </li>
              </ul>
            </div>
          </section>

          {/* Related Pages */}
          <section className="space-y-4 pb-8">
            <h2 className="text-2xl font-semibold">Related Policies</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "GDPR Compliance", href: "/gdpr" },
                { label: "Sub-processors", href: "/subprocessors" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 border border-white/10 rounded-lg text-sm text-white/60 hover:text-white hover:border-white/20 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FramerFooter />
    </div>
  );
}

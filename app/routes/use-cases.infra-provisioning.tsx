import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

export const meta: MetaFunction = () => {
  const siteUrl =
    (typeof process !== "undefined" && process.env ? process.env.PUBLIC_URL : undefined) ||
    "https://aerol.ai";

  return getSeoMeta({
    title: "Automatic Infra Provisioning - Aerol",
    description:
      "Aerol automatically provisions and configures cloud infrastructure using AI — zero manual setup, zero config drift.",
    url: `${siteUrl}/use-cases/infra-provisioning`,
    keywords:
      "automatic infrastructure provisioning, AI infra, cloud provisioning, DevOps automation, zero-config deployment, Terraform, Kubernetes",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/use-cases/infra-provisioning",
      priority: 0.8,
      changefreq: "weekly",
    },
  ],
};

const ibmPlex = '"IBM Plex Sans Condensed", sans-serif';
const inter = '"Inter", sans-serif';

const CAPABILITIES = [
  {
    label: "DISCOVERY",
    title: "Automatically Maps Your Infrastructure Requirements",
    description:
      "Aerol reads your application code and configuration to understand exactly what infrastructure it needs — compute, networking, databases, queues — without any manual specification.",
    bullets: [
      "Analyzes application dependencies and runtime requirements",
      "Detects resource constraints and scaling patterns",
      "Generates infrastructure manifests from code intent",
    ],
  },
  {
    label: "PROVISIONER",
    title: "Deploys Cloud Resources in Minutes, Not Days",
    description:
      "Executes multi-cloud provisioning with idempotent, fully auditable infrastructure-as-code. Every resource is tagged, documented, and wired together correctly on the first attempt.",
    bullets: [
      "Supports AWS, GCP, and Azure out of the box",
      "Generates Terraform and Pulumi modules automatically",
      "Zero-drift validation through continuous reconciliation",
    ],
  },
  {
    label: "OPTIMIZER",
    title: "Right-sizes Resources for Cost and Performance",
    description:
      "Continuously monitors utilization and automatically adjusts instance types, storage classes, and scaling parameters — so you pay for what you use and nothing more.",
    bullets: [
      "Real-time cost anomaly detection and alerting",
      "Automated right-sizing recommendations with one-click apply",
      "FinOps reporting with team-level attribution",
    ],
  },
  {
    label: "GUARDIAN",
    title: "Enforces Security and Compliance at Provision Time",
    description:
      "Every resource is provisioned with your security baselines baked in. Aerol enforces encryption, least-privilege IAM, and compliance guardrails before anything reaches production.",
    bullets: [
      "Policy-as-code checks on every provisioning run",
      "Automated CIS benchmark and SOC 2 alignment",
      "Secrets management and rotation built-in",
    ],
  },
];

export default function InfraProvisioningRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, rgba(103,232,249,0.07) 0%, rgba(4,7,13,0) 100%)",
            }}
          />
          <div className="relative z-[2] mx-auto max-w-5xl px-6 text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{
                backgroundColor: "#04070d",
                border: "1px solid rgba(103,232,249,0.2)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span
                className="text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-300"
                style={{ fontFamily: inter }}
              >
                Use Case
              </span>
            </div>

            <h1
              className="text-[52px] font-medium leading-[1.0] tracking-[-0.02em] text-transparent sm:text-[68px] xl:text-[80px]"
              style={{
                fontFamily: ibmPlex,
                backgroundImage:
                  "radial-gradient(99% 86% at 50% 50%, rgb(213, 219, 230) 28%, rgb(4, 7, 13) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Automatic Infra Provisioning
            </h1>

            <p
              className="mx-auto mt-6 max-w-[680px] text-[17px] leading-[1.65] tracking-[-0.01em] text-white/55"
              style={{ fontFamily: inter }}
            >
              From code commit to fully provisioned cloud infrastructure in minutes. Aerol's AI
              reads your application intent and handles every resource, every time — with zero
              manual configuration.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/sumansaurabh-1/anek"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center rounded-lg px-6 py-3 text-[15px] font-medium text-white no-underline"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "radial-gradient(25% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                    filter: "blur(14px)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-[2px] rounded-lg bg-[#04070d] border border-white/20"
                />
                <span className="relative z-[1]">Book a Demo</span>
              </a>
              <a
                href="https://docs.aerol.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-[15px] font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                style={{ fontFamily: inter }}
              >
                Documentation
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Section title */}
        <section className="pb-4">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2
                className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-transparent sm:text-[44px]"
                style={{
                  fontFamily: inter,
                  backgroundImage:
                    "linear-gradient(161deg, rgb(213, 219, 230) 51%, rgb(4, 7, 13) 166%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Intent-Driven Infrastructure.{" "}
                <span className="font-normal italic" style={{ fontFamily: '"Instrument Serif", serif' }}>
                  Zero Toil.
                </span>
              </h2>
              <p
                className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.6] text-white/50"
                style={{ fontFamily: inter }}
              >
                Aerol's provisioning agents interpret what your application needs and
                automatically build the infrastructure to match — so your team stops managing
                cloud configs and starts shipping features.
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </section>

        {/* Capability cards */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.label}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(103,232,249,0.05)_0%,rgba(4,7,13,0)_100%)]" />
                  <div className="relative z-[1] flex flex-col gap-4">
                    <span
                      className="inline-flex w-fit rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-200"
                      style={{ fontFamily: inter }}
                    >
                      {cap.label}
                    </span>
                    <h3
                      className="text-[22px] font-medium leading-[1.2] tracking-[-0.01em] text-[#e4e9f2]"
                      style={{ fontFamily: ibmPlex }}
                    >
                      {cap.title}
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-white/50" style={{ fontFamily: inter }}>
                      {cap.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[14px] text-white/55" style={{ fontFamily: inter }}>
                          <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/70" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 border-t border-white/[0.06] mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px]"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 100%, rgba(103,232,249,0.06) 0%, rgba(4,7,13,0) 100%)",
            }}
          />
          <div className="relative z-[2] mx-auto max-w-3xl px-6 text-center">
            <h2
              className="text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-transparent sm:text-[48px]"
              style={{
                fontFamily: ibmPlex,
                backgroundImage:
                  "radial-gradient(99% 86% at 50% 50%, rgb(213, 219, 230) 28%, rgb(4, 7, 13) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Infrastructure that provisions itself.
            </h2>
            <p
              className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.65] text-white/50"
              style={{ fontFamily: inter }}
            >
              See how Aerol reads your application intent and builds production-ready
              infrastructure — automatically.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/sumansaurabh-1/anek"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-[15px] font-medium text-white no-underline"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "radial-gradient(25% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                    filter: "blur(14px)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-[2px] rounded-lg bg-[#04070d] border border-white/20"
                />
                <span className="relative z-[1]">Book a Demo</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3.5 text-[15px] font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                style={{ fontFamily: inter }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FramerFooter />
    </div>
  );
}

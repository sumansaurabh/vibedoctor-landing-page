import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getSeoMeta } from "~/lib/seo";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { FramerFooter } from "~/components/framer/FramerFooter";

const ibmPlex = '"IBM Plex Sans Condensed", sans-serif';
const inter = '"Inter", sans-serif';

const SECTIONS = [
  {
    label: "CURATOR",
    title: "Builds a Living Map of Your Product, Docs, and Customer History",
    description:
      "Continuously indexes product docs, KB articles, past resolutions, and customer account context into the Knowledge Context Graph (KCG). Unlike static KB articles, the KCG updates in real-time - grounding every agent with current knowledge.",
    bullets: [
      "Auto-indexes product docs, KB articles, and release notes",
      "Proactively seeks human input for knowledge gaps",
      "Retains resolution patterns from every past ticket",
    ],
    placeholder: "Knowledge Context Graph",
  },
  {
    label: "TRIAGER",
    title: "Categorizes and Prioritizes Every Ticket in Seconds",
    description:
      "First responder when a ticket arrives. Analyzes content, correlates against known issues and active escalations, and prioritizes by customer impact, account tier, and severity. No more manual sorting or mis-routed tickets.",
    bullets: [
      "Real-time ingestion from any helpdesk or ticketing system",
      "Deduplicates against known issues and active escalations",
      "Priority classification by customer tier and business impact",
    ],
    placeholder: "Ticket Triage Dashboard",
  },
  {
    label: "HYPOTHESIZER",
    title: "Diagnoses Customer Issues with Evidence-Backed Analysis",
    description:
      "Queries product logs, account data, configuration history, and your knowledge base - grounded by the KCG - to develop and rank root cause theories. Every finding is evidence-backed, with resolution steps drafted for human review.",
    bullets: [
      "Reasons across logs, account data, and configuration",
      "Correlates product changes and deploys with reported symptoms",
      "Draws on resolution patterns from similar past tickets",
    ],
    placeholder: "Root Cause Diagnosis View",
  },
  {
    label: "COORDINATOR",
    title: "Orchestrates Escalations Between Support and Engineering",
    description:
      "Bridges AI investigation and human decision-making. Packages full diagnostic context - repro steps, logs, and diagnosis - and routes to the right engineering team. No more ping-pong or lost context.",
    bullets: [
      "Native Slack, Microsoft Teams, and Zoom integration",
      "Auto-packaged escalations with full diagnostic context",
      "Routes to the right engineering team by product area",
    ],
    placeholder: "Escalation Coordination Panel",
  },
  {
    label: "ANALYZER",
    title: "Turns Every Resolved Ticket into Organizational Knowledge",
    description:
      "Captures the full resolution path after every ticket - root cause, steps taken, and customer outcome. Proposes KB articles, doc updates, and product improvement opportunities while surfacing recurring issue patterns.",
    bullets: [
      "Auto-drafted KB articles from resolved tickets",
      "Root cause classification and recurring issue detection",
      "Product improvement recommendations from ticket trends",
    ],
    placeholder: "Knowledge Base Auto-Draft",
  },
  {
    label: "VERIFIER",
    title: "Verification of Support Conclusions and Responses",
    description:
      "Your quality gate for customer interactions. Adversarially tests every diagnosis and response, ensuring nothing reaches the customer without supporting evidence. Eliminates hallucinated answers that erode trust.",
    bullets: [
      "Adversarial testing prevents hallucinated support answers",
      "Evidence-backed validation for every diagnosis",
      "Confidence scoring gates low-certainty responses",
    ],
    placeholder: "Response Verification Gate",
  },
  {
    label: "TRACER",
    title: "Audit Trails and Organizational Knowledge from Support Decisions",
    description:
      "Captures every resolution path, decision fork, and customer outcome as permanent traces. Unlike conversations buried in ticket archives, these traces are continuously referenced - so your next similar issue resolves faster.",
    bullets: [
      "Records every decision point and resolution outcome",
      "Agents reference historical patterns for faster resolution",
      "Reasoning documentation for audits and compliance",
    ],
    placeholder: "Decision Trace History",
  },
];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] aspect-[16/10] flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(103,232,249,0.06)_0%,rgba(4,7,13,0)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute top-3 left-3 h-5 w-5 border-t border-l border-white/20" />
      <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 border-t border-r border-white/20" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/20" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/20" />
      <div className="relative z-[1] flex flex-col items-center gap-3 text-center px-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
          <svg className="h-4 w-4 text-cyan-300/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
        <p style={{ fontFamily: inter }} className="text-[13px] font-medium text-white/25">
          {label}
        </p>
        <p style={{ fontFamily: inter }} className="text-[11px] text-white/15 tracking-wider uppercase">
          Image placeholder
        </p>
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  const siteUrl =
    (typeof process !== "undefined" && process.env ? process.env.PUBLIC_URL : undefined) ||
    "https://aerol.ai";

  return getSeoMeta({
    title: "AI Support Engineering - Aerol",
    description:
      "AI agents that triage customer tickets, investigate the root cause, coordinate escalations to engineering, and draft verified resolutions - all under human supervision.",
    url: `${siteUrl}/use-cases/ai-support`,
    keywords:
      "AI support engineering, automated support triage, customer issue diagnosis, support escalation, KB automation, support agents, engineering support",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/use-cases/ai-support",
      priority: 0.8,
      changefreq: "weekly",
    },
  ],
};

export default function AISupportRoute() {
  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main>
        {/* ── Hero ── */}
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
              AI Support Engineering
            </h1>

            <p
              className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[1.65] tracking-[-0.01em] text-white/55"
              style={{ fontFamily: inter }}
            >
              AI agents that triage customer tickets, investigate the root cause, coordinate
              escalations to engineering, and draft verified resolutions - all under human
              supervision.
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

        {/* ── Section intro ── */}
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
                Multiple Specialized Agents.{" "}
                <span className="font-normal italic" style={{ fontFamily: '"Instrument Serif", serif' }}>
                  Toil-free Support Engineering.
                </span>
              </h2>
              <p
                className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] text-white/50"
                style={{ fontFamily: inter }}
              >
                Aerol deploys a team of specialized agents that work together to triage,
                investigate, escalate, and learn from every customer ticket across your
                support organization.
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </section>

        {/* ── Agent sections ── */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {SECTIONS.map((section, i) => (
                <div
                  key={section.label}
                  className={`flex flex-col gap-12 py-20 lg:flex-row lg:items-center lg:gap-16 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-5">
                    <span
                      className="inline-flex w-fit items-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-200"
                      style={{ fontFamily: inter }}
                    >
                      {section.label}
                    </span>
                    <h3
                      className="text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-[#e4e9f2] sm:text-[30px]"
                      style={{ fontFamily: ibmPlex }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className="text-[16px] leading-[1.65] text-white/50"
                      style={{ fontFamily: inter }}
                    >
                      {section.description}
                    </p>
                    <ul className="mt-1 flex flex-col gap-2.5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[15px] text-white/60"
                          style={{ fontFamily: inter }}
                        >
                          <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/70" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image placeholder */}
                  <div className="flex-1 lg:max-w-[520px]">
                    <ImagePlaceholder label={section.placeholder} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Integrations callout ── */}
        <section className="py-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{
                backgroundColor: "#04070d",
                border: "1px solid rgba(216, 231, 242, 0.07)",
              }}
            >
              <svg
                className="h-[14px] w-[14px] text-white/50"
                viewBox="0 0 18 10.5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" />
              </svg>
              <span
                className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/50"
                style={{ fontFamily: inter }}
              >
                Integrations
              </span>
            </div>
            <h2
              className="text-[28px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[38px]"
              style={{
                fontFamily: inter,
                backgroundImage:
                  "linear-gradient(161deg, rgb(213, 219, 230) 51%, rgb(4, 7, 13) 166%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Connects to Your{" "}
              <span className="font-normal italic" style={{ fontFamily: '"Instrument Serif", serif' }}>
                Existing Stack
              </span>
            </h2>
            <p
              className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.6] text-white/50"
              style={{ fontFamily: inter }}
            >
              Aerol integrates with your helpdesk, ticketing systems, and communication
              platforms - no rip-and-replace required.
            </p>
            <a
              href="/integrations"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-[14px] font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
              style={{ fontFamily: inter }}
            >
              Explore All Integrations
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative overflow-hidden py-24 border-t border-white/[0.06]">
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
              Ready to transform your Production Engineering?
            </h2>
            <p
              className="mx-auto mt-5 max-w-[500px] text-[16px] leading-[1.65] text-white/50"
              style={{ fontFamily: inter }}
            >
              See Aerol's support engineering agents in action. Schedule a live demonstration
              and learn how to accelerate support resolution across your organization.
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

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
    title: "AI-Native Incident Management - Aerol",
    description:
      "AI SRE, on-call scheduling, and Slack/Teams-native incident response — unified in one agentic platform. Aerol investigates before you even open your laptop.",
    url: `${siteUrl}/use-cases/incident-management`,
    keywords:
      "agentic incident management, AI incident response, on-call scheduling, Slack incident management, automated triage, production incidents, MTTD MTTR reduction",
  });
};

export const handle = {
  getSitemapEntries: () => [
    {
      route: "/use-cases/incident-management",
      priority: 0.8,
      changefreq: "weekly",
    },
  ],
};

const ibmPlex = '"IBM Plex Sans Condensed", sans-serif';
const inter = '"Inter", sans-serif';

const SECTIONS = [
  {
    label: "AI ALERT TRIAGE",
    title: "Investigation Starts Before You Open Your Laptop",
    description:
      "When an alert fires, Aerol doesn't just page and wait. It immediately investigates — collecting telemetry, correlating against active incidents, and determining signal vs. noise. By the time you look, initial hypotheses are already ready.",
    bullets: [
      "Autonomous investigation within seconds of alert firing",
      "Deduplicates against active incidents — no duplicate pages",
      "Severity classification by blast radius and business impact",
    ],
    placeholder: "Alert Triage Console",
  },
  {
    label: "ON-CALL MANAGEMENT",
    title: "Intelligent On-Call Scheduling with AI-Aware Escalation",
    description:
      "Built-in on-call scheduling with rotations, overrides, and multi-tier escalation — no separate PagerDuty or OpsGenie required. Unlike legacy tools, escalation is AI-aware: it uses investigation context to determine who to page and what they need to know.",
    bullets: [
      "Flexible rotations with overrides and shift swaps",
      "Multi-tier escalation with configurable timeouts",
      "AI-aware paging — right responder based on investigation context",
    ],
    placeholder: "On-Call Schedule & Escalation",
  },
  {
    label: "SLACK & TEAMS NATIVE",
    title: "Declare, Coordinate, and Resolve — Without Leaving Slack or Teams",
    description:
      "Incidents are declared, managed, and resolved directly in Slack or Teams. Aerol creates dedicated channels, invites responders, posts AI findings, and updates stakeholders in real-time. Your team works where they already work.",
    bullets: [
      "One-click incident declaration from Slack or Teams",
      "Auto-created channels with full AI investigation context",
      "Slash commands for severity, roles, and status updates",
    ],
    placeholder: "Slack Incident Channel",
  },
  {
    label: "AI ROOT CAUSE HYPOTHESES",
    title: "Autonomous Investigation Runs in Parallel with Human Response",
    description:
      "While your team coordinates, Aerol investigates in the background — querying logs, metrics, traces, and codebase to develop root cause hypotheses. Findings post to the incident channel in real-time as a continuously updating brief.",
    bullets: [
      "Reasons across infrastructure and application layers",
      "Correlates code changes, deploys, and config diffs",
      "Adversarially verified — no hypothesis without evidence",
    ],
    placeholder: "Root Cause Hypothesis Feed",
  },
  {
    label: "AUTO-MITIGATION",
    title: "AI-Recommended Mitigation with Human-in-the-Loop Execution",
    description:
      "Aerol doesn't just identify what went wrong — it recommends how to fix it fast. The AI generates mitigating fixes with ready-to-execute code, scripts, and kubectl commands tailored to your environment. A human reviews and approves before execution.",
    bullets: [
      "AI-generated mitigation scripts, code patches, and rollback commands",
      "Human-in-the-loop review and approval before any execution — no autonomous changes to production",
      "Mitigation plans informed by root cause evidence and prior resolution patterns",
    ],
    placeholder: "Mitigation Approval Panel",
  },
  {
    label: "RUNBOOK AUTOMATION",
    title: "Runbooks That Execute and Evolve Automatically",
    description:
      "Static runbooks go stale the day they're written. Aerol automatically generates and updates agent runbooks based on actual incident resolutions and prior agent actions. When a known pattern is detected, agents execute the relevant runbook — and after every incident, runbooks are refined with what actually worked.",
    bullets: [
      "Auto-generated runbooks from real incident resolutions",
      "Automated execution for known failure patterns with human approval gates",
      "Continuous refinement — runbooks evolve after every incident",
    ],
    placeholder: "Runbook Library",
  },
  {
    label: "AUTOMATED POSTMORTEMS",
    title: "Institutional Memory Through Decision Traces",
    description:
      "No more hours writing up what happened. Aerol generates postmortems from actual investigation data and channel activity — with accurate timelines, confirmed root cause, and actionable preventive fixes.",
    bullets: [
      "Auto-generated timeline from investigation and channel activity",
      "5-why root cause analysis and contributing factor classification",
      "Preventive fix proposals — patches, monitoring improvements, arch changes",
    ],
    placeholder: "Postmortem Report",
  },
  {
    label: "INFRASTRUCTURE CONTEXT GRAPH",
    title: "Your System's Living Knowledge Base",
    description:
      "An always-current graph that continuously connects your infrastructure, code, tools, and team knowledge in real-time. The ICG self-learns from every human decision and successful agent action — so every incident makes the next one faster.",
    bullets: [
      "Decision traces that record 'why' for every decision fork and resolution",
      "Custom AI skills auto-generated for your specific stack and failure patterns",
      "Live service catalog with mapped ownership and dependency graph",
      "Tribal knowledge captured permanently — not trapped in chat logs or senior engineers' heads",
    ],
    placeholder: "Infrastructure Context Graph",
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

export default function IncidentManagementRoute() {
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
              AI-Native Incident Management
            </h1>

            <p
              className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[1.65] tracking-[-0.01em] text-white/55"
              style={{ fontFamily: inter }}
            >
              AI SRE, on-call scheduling, and Slack/Teams-native incident response — unified
              in one agentic platform. Aerol investigates before you even open your laptop,
              coordinates the right responders, and records decision traces so the next incident
              resolves faster.
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
                AI SRE + On-Call + Incident Response.{" "}
                <span className="font-normal italic" style={{ fontFamily: '"Instrument Serif", serif' }}>
                  One Platform.
                </span>
              </h2>
              <p
                className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] text-white/50"
                style={{ fontFamily: inter }}
              >
                Legacy tools page you, then step aside. Aerol investigates autonomously,
                coordinates response in Slack and Teams, and captures institutional knowledge
                from every incident — replacing the patchwork of PagerDuty, FireHydrant, and
                manual runbooks.
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
              Aerol integrates with the monitoring tools, alert managers, and communication
              platforms you already use — no rip-and-replace required.
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
              See Aerol's AI SRE and incident management platform in action. Schedule a live
              demonstration and learn how to cut MTTD and MTTR across your organization.
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

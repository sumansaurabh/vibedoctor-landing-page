const ibmPlex = '"IBM Plex Sans Condensed", sans-serif';
const inter = '"Inter", sans-serif';

const AGENTS = [
  {
    label: "CURATOR",
    title: "Builds a Living Map of Your Entire Infrastructure",
    description:
      "Continuously maps your cloud resources, application topology, and team knowledge into the Infrastructure Context Graph (ICG). Unlike static runbooks, the ICG updates in real-time - grounding every downstream agent with accurate, current context.",
    bullets: [
      "Auto-discovers cloud topology and service dependencies",
      "Proactively seeks human input to close knowledge gaps",
      "Retains decision traces from every past investigation",
    ],
    placeholder: "Infrastructure Context Graph",
    image: "/curator.png",
  },
  {
    label: "TRIAGER",
    title: "Separates Signal from Noise in Seconds",
    description:
      "First responder when an alert fires. Collects telemetry, correlates against active investigations, and determines whether this is a novel failure or a duplicate. No more alert fatigue - or waking engineers for nothing.",
    bullets: [
      "Real-time ingestion from any monitoring source",
      "Deduplicates against active and recent investigations",
      "Severity classification by blast radius and business impact",
    ],
    placeholder: "Alert Triage Dashboard",
    image: "/tiagger.png",
  },
  {
    label: "HYPOTHESIZER",
    title: "Develops Evidence-Backed Root Cause Hypotheses",
    description:
      "Queries logs, metrics, traces, deployment history, and cloud configs - all grounded by the ICG - to develop and rank root cause theories. Every hypothesis is backed by evidence, not guesswork, with mitigating fixes proposed for human review.",
    bullets: [
      "Reasons across infrastructure and application layers",
      "Correlates code changes, deploys, and config diffs",
      "Draws on decision traces from similar past incidents",
    ],
    placeholder: "Root Cause Analysis View",
    image: "/hypothesis.png",
  },
  {
    label: "COORDINATOR",
    title: "Orchestrates Incident Response Across Your Team",
    description:
      "Bridges AI investigation and human decision-making. Routes findings to the right on-call engineer via Slack or Teams with full context - so they act immediately instead of starting from scratch.",
    bullets: [
      "Native Slack and Microsoft Teams integration",
      "Automated incident declaration and severity assignment",
      "On-call aware - pages the right person, not everyone",
    ],
    placeholder: "Incident Coordination Panel",
    image: "/coordinator.png",
  },
  {
    label: "ANALYZER",
    title: "Turns Every Incident into a Preventive Fix",
    description:
      "Runs deep postmortems after resolution - capturing root cause, timeline, blast radius, and contributing factors. Proposes actionable preventive fixes so the same failure never repeats.",
    bullets: [
      "Auto-generated postmortems with accurate timelines",
      "Root cause and contributing factor classification",
      "Preventive fix proposals - patches, alert tuning, arch changes",
    ],
    placeholder: "Postmortem Report",
    image: "/analyzer.png",
  },
  {
    label: "VERIFIER",
    title: "Evidence-Backed Verification",
    description:
      "Your safety gate. Adversarially challenges every hypothesis and proposed action, demanding concrete evidence before anything reaches production. Eliminates hallucinated root causes through confidence scoring.",
    bullets: [
      "Adversarial testing eliminates AI hallucination risk",
      "Evidence-backed validation for every hypothesis and action",
      "Confidence scoring gates low-certainty recommendations",
    ],
    placeholder: "Verification Gate",
    image: "/verification.png",
  },
  {
    label: "TRACER",
    title: "Institutional Memory Through Decision Traces",
    description:
      "Captures every decision path, rejected hypothesis, and confirmed fix as permanent traces in the ICG. Unlike postmortems filed and forgotten, these traces are continuously queried by agents - so your next incident starts smarter.",
    bullets: [
      "Records every fork, decision, and outcome",
      "Agents draw on historical traces for faster resolution",
      "Reasoning documentation for engineers and auditors",
    ],
    placeholder: "Decision Trace History",
    image: "/runbook.png",
  },
];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] aspect-[16/10] flex items-center justify-center">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(103,232,249,0.06)_0%,rgba(4,7,13,0)_100%)]" />
      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Corner brackets */}
      <div className="pointer-events-none absolute top-3 left-3 h-5 w-5 border-t border-l border-white/20" />
      <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 border-t border-r border-white/20" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/20" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/20" />
      {/* Content */}
      <div className="relative z-[1] flex flex-col items-center gap-3 text-center px-8">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
          aria-hidden="true"
        >
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

export function UseCaseAISRE() {
  return (
    <div className="bg-[#04070d] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(103,232,249,0.07) 0%, rgba(4,7,13,0) 100%)",
          }}
        />

        <div className="relative z-[2] mx-auto max-w-5xl px-6 text-center">
          {/* Label */}
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

          {/* Headline */}
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
            AI SRE
          </h1>

          <p
            className="mx-auto mt-6 max-w-[680px] text-[17px] leading-[1.65] tracking-[-0.01em] text-white/55"
            style={{ fontFamily: inter }}
          >
            AI agents that automate alert investigations, orchestrate incident response, and
            compound institutional knowledge - purpose-built for enterprise infrastructure teams.
          </p>

          {/* CTAs */}
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
      <section className="relative pb-4">
        <div className="mx-auto max-w-7xl px-6">
          {/* Eyebrow */}
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
              <span
                className="font-normal italic"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                Toil-free SRE.
              </span>
            </h2>
            <p
              className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.6] text-white/50"
              style={{ fontFamily: inter }}
            >
              Aerol deploys a coordinated team of specialized agents that work together to
              investigate, reason, coordinate, and learn from every incident in your production
              environment.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* ── Agent sections ── */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col divide-y divide-white/[0.06]">
            {AGENTS.map((agent, i) => (
              <div
                key={agent.label}
                className={`flex flex-col gap-12 py-20 lg:flex-row lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 flex flex-col gap-5">
                  {/* Agent badge */}
                  <span
                    className="inline-flex w-fit items-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-200"
                    style={{ fontFamily: inter }}
                  >
                    {agent.label}
                  </span>

                  <h3
                    className="text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-[#e4e9f2] sm:text-[30px]"
                    style={{ fontFamily: ibmPlex }}
                  >
                    {agent.title}
                  </h3>

                  <p
                    className="text-[16px] leading-[1.65] text-white/50"
                    style={{ fontFamily: inter }}
                  >
                    {agent.description}
                  </p>

                  <ul className="mt-1 flex flex-col gap-2.5">
                    {agent.bullets.map((bullet) => (
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
                  {agent.image ? (
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
                      <img
                        src={agent.image}
                        alt={agent.placeholder}
                        className="w-full h-auto"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder label={agent.placeholder} />
                  )}
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
            <span
              className="font-normal italic"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Existing Stack
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.6] text-white/50"
            style={{ fontFamily: inter }}
          >
            Aerol AI integrates with the monitoring tools, alert managers, and communication
            platforms you already use - no rip-and-replace required.
          </p>

          <a
            href="/#integrations"
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
            See Aerol's AI SRE multi-agent system in action. Schedule a live demonstration and
            learn how to accelerate incident response in your organization.
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
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3.5 text-[15px] font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
              style={{ fontFamily: inter }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

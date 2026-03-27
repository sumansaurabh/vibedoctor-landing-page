import { useState, useRef, useEffect } from "react";
import { Link } from "@remix-run/react";

type Category =
  | "All"
  | "Infrastructure"
  | "Observability"
  | "Data Store"
  | "Code Repository"
  | "CI/CD"
  | "Chat"
  | "Documentation"
  | "Incident Management"
  | "Issue Tracking"
  | "Communication"
  | "Customer Support"
  | "ITSM"
  | "Security";

interface Integration {
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  iconUrl: string;
  iconBg?: boolean; // whether to use white bg for icon visibility
}

const INTEGRATIONS: Integration[] = [
  {
    name: "Amazon Web Services",
    category: "Infrastructure",
    description:
      "Query CloudWatch logs and metrics, inspect EC2 instances, ECS services, and EKS clusters during investigations. Secure OIDC federation - no static credentials.",
    iconUrl: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/aws.svg",
  },
  {
    name: "Azure DevOps",
    category: "CI/CD",
    description:
      "Review pipelines, repositories, and work items to trace CI/CD changes that may have caused an incident.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
  },
  {
    name: "Bitbucket",
    category: "Code Repository",
    description:
      "Review recent commits, pull requests, and pipelines to identify code changes behind an incident.",
    iconUrl: "https://cdn.simpleicons.org/bitbucket/0052CC",
  },
  {
    name: "ClickHouse",
    category: "Data Store",
    description:
      "Run analytical queries against ClickHouse during investigations to surface trends and anomalies.",
    iconUrl: "https://cdn.simpleicons.org/clickhouse/FFCC01",
  },
  {
    name: "Cloudflare",
    category: "Infrastructure",
    description:
      "Investigate DNS changes, review WAF events, and check edge performance metrics when diagnosing customer-facing issues.",
    iconUrl: "https://cdn.simpleicons.org/cloudflare/F38020",
  },
  {
    name: "Confluence",
    category: "Documentation",
    description:
      "Pull in existing runbooks and documentation so investigations have the right context from the start.",
    iconUrl: "https://cdn.simpleicons.org/confluence/0052CC",
  },
  {
    name: "Databricks",
    category: "Data Store",
    description:
      "Query SQL Warehouses, check ETL job health, and inspect cluster status to pinpoint data pipeline issues during incidents.",
    iconUrl: "https://cdn.simpleicons.org/databricks/FF3621",
  },
  {
    name: "Datadog",
    category: "Observability",
    description:
      "Search logs, query metrics, trace distributed requests, and review monitors to quickly pinpoint the root cause of incidents.",
    iconUrl: "https://cdn.simpleicons.org/datadog/632CA6",
  },
  {
    name: "Dynatrace",
    category: "Observability",
    description:
      "Leverage AI-powered root cause analysis and full-stack traces to accelerate incident diagnosis.",
    iconUrl: "https://cdn.simpleicons.org/dynatrace/1496FF",
  },
  {
    name: "Elasticsearch",
    category: "Data Store",
    description:
      "Search and analyze log data stored in Elasticsearch to find patterns and errors during investigations.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
  },
  {
    name: "Email (SMTP/IMAP)",
    category: "Communication",
    description:
      "Send and receive email notifications so investigations can trigger alerts and capture responses automatically.",
    iconUrl: "https://cdn.simpleicons.org/gmail/EA4335",
  },
  {
    name: "FireHydrant",
    category: "Incident Management",
    description:
      "Coordinate incident response, track status pages, and automate runbook steps during active incidents.",
    iconUrl: "https://firehydrant.com/favicon.svg",
    iconBg: true,
  },
  {
    name: "GCP GKE",
    category: "Infrastructure",
    description:
      "Inspect GKE cluster health, workload status, and container logs to troubleshoot Kubernetes issues on Google Cloud.",
    iconUrl: "https://cdn.simpleicons.org/googlecloud/4285F4",
  },
  {
    name: "GitHub",
    category: "Code Repository",
    description:
      "Review recent commits, pull requests, and CI/CD runs to identify code changes that may have caused an incident.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    iconBg: true,
  },
  {
    name: "GitLab",
    category: "Code Repository",
    description:
      "Review recent commits, merge requests, and pipeline runs to identify code changes that may have caused an incident.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "Grafana",
    category: "Observability",
    description:
      "Query Loki logs and Prometheus metrics through Grafana to correlate signals and visualize system behavior during incidents.",
    iconUrl: "https://cdn.simpleicons.org/grafana/F46800",
  },
  {
    name: "Grafana Loki",
    category: "Observability",
    description:
      "Search and aggregate logs across distributed systems to find the needle in the haystack during incidents.",
    iconUrl: "https://cdn.simpleicons.org/grafana/F46800",
  },
  {
    name: "Honeycomb",
    category: "Observability",
    description:
      "Trace requests across services and explore high-cardinality data to isolate the source of issues.",
    iconUrl: "https://www.honeycomb.io/favicon.ico",
    iconBg: true,
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    description:
      "Check build statuses, review pipeline logs, and trace deployments to pinpoint when a problem was introduced.",
    iconUrl: "https://cdn.simpleicons.org/jenkins/D24939",
  },
  {
    name: "Jira",
    category: "Issue Tracking",
    description:
      "Create and update tickets automatically as investigations progress, keeping your issue tracker in sync.",
    iconUrl: "https://cdn.simpleicons.org/jira/0052CC",
  },
  {
    name: "Kubernetes",
    category: "Infrastructure",
    description:
      "Inspect pod health, review events, and check resource utilization to diagnose infrastructure issues fast.",
    iconUrl: "https://cdn.simpleicons.org/kubernetes/326CE5",
  },
  {
    name: "Linear",
    category: "Issue Tracking",
    description:
      "Create and track engineering issues automatically as investigations uncover action items.",
    iconUrl: "https://cdn.simpleicons.org/linear/5E6AD2",
  },
  {
    name: "Microsoft Teams",
    category: "Chat",
    description:
      "Receive alerts and investigation updates directly in Microsoft Teams channels.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/microsoft-teams.svg",
  },
  {
    name: "MongoDB",
    category: "Data Store",
    description:
      "Query document collections and check database health to verify application state during investigations.",
    iconUrl: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "MS SQL Server",
    category: "Data Store",
    description:
      "Query operational data in SQL Server to check application state and surface anomalies during investigations.",
    iconUrl: "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",
  },
  {
    name: "Neo4j",
    category: "Data Store",
    description:
      "Traverse knowledge graphs to map service dependencies and understand blast radius during incidents.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
  },
  {
    name: "New Relic",
    category: "Observability",
    description:
      "Analyze APM traces, infrastructure metrics, and error rates to quickly narrow down the source of incidents.",
    iconUrl: "https://cdn.simpleicons.org/newrelic/008C99",
  },
  {
    name: "Notion",
    category: "Documentation",
    description:
      "Pull in team documentation and knowledge bases from Notion to enrich investigations with existing context.",
    iconUrl: "https://cdn.simpleicons.org/notion/ffffff",
  },
  {
    name: "Opsgenie",
    category: "Incident Management",
    description:
      "Manage alerts, check on-call schedules, and coordinate incident response from a single pane of glass.",
    iconUrl: "https://cdn.simpleicons.org/opsgenie/4A9FFF",
    iconBg: true,
  },
  {
    name: "PagerDuty",
    category: "Incident Management",
    description:
      "See who is on-call, review active incidents, and correlate alerts to understand the full picture during an investigation.",
    iconUrl: "https://cdn.simpleicons.org/pagerduty/06AC38",
  },
  {
    name: "PostgreSQL",
    category: "Data Store",
    description:
      "Query application databases to verify data state and surface anomalies during investigations.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
  },
  {
    name: "Prometheus",
    category: "Observability",
    description:
      "Query time-series metrics and review alert rules to correlate system behavior with incident timelines.",
    iconUrl: "https://cdn.simpleicons.org/prometheus/E6522C",
  },
  {
    name: "Pylon",
    category: "Customer Support",
    description:
      "Automatically investigate new customer support tickets and post findings back to your Pylon conversations.",
    iconUrl: "https://app.usepylon.com/favicon.svg",
    iconBg: true,
  },
  {
    name: "ReadMe.com Docs",
    category: "Documentation",
    description:
      "Search your ReadMe.com documentation - both public and password-protected - to find relevant context fast.",
    iconUrl: "https://cdn.simpleicons.org/readme/018EF5",
  },
  {
    name: "Sentry",
    category: "Observability",
    description:
      "Surface error trends, stack traces, and release health data to quickly identify regressions during incidents.",
    iconUrl: "https://cdn.simpleicons.org/sentry/A78BFA",
    iconBg: true,
  },
  {
    name: "ServiceNow",
    category: "ITSM",
    description:
      "Create and update ITSM tickets automatically, keeping change management in sync with investigations.",
    iconUrl: "https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg",
  },
  {
    name: "Slack",
    category: "Chat",
    description:
      "Mention @Aerol in any Slack channel to kick off an investigation. Get findings posted back to the thread in real time.",
    iconUrl: "https://cdn.simpleicons.org/slack/4A154B",
    iconBg: true,
  },
  {
    name: "Snowflake",
    category: "Data Store",
    description:
      "Run analytical queries against your data warehouse to surface trends and verify data pipeline health.",
    iconUrl: "https://cdn.simpleicons.org/snowflake/29B5E8",
  },
  {
    name: "SonarQube",
    category: "Security",
    description:
      "Review code quality reports and security findings to identify vulnerabilities related to an incident.",
    iconUrl: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/sonarqube.svg",
  },
  {
    name: "Temporal",
    category: "Infrastructure",
    description:
      "Inspect workflow executions, query task queue health, and debug stuck workflows to resolve orchestration issues.",
    iconUrl: "https://temporal.io/favicon.ico",
    iconBg: true,
  },
  {
    name: "Zendesk",
    category: "Customer Support",
    description:
      "Automatically investigate incoming support tickets and post diagnostic findings back to your agents.",
    iconUrl: "https://cdn.simpleicons.org/zendesk/03363D",
    iconBg: true,
  },
  {
    name: "Zoom",
    category: "Communication",
    description:
      "Spin up incident bridges and coordinate real-time communication during active incidents.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/zoom-icon.svg",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Infrastructure",
  "Observability",
  "Data Store",
  "Code Repository",
  "CI/CD",
  "Chat",
  "Documentation",
  "Incident Management",
  "Issue Tracking",
  "Communication",
  "Customer Support",
  "ITSM",
  "Security",
];

const CATEGORY_COLORS: Record<Exclude<Category, "All">, string> = {
  Infrastructure: "bg-[#1e3a5f]/40 text-[#6db3f2] border-[#2a5a8f]/50",
  Observability: "bg-[#3d2463]/40 text-[#b68eed] border-[#5a3a8f]/50",
  "Data Store": "bg-[#1a4a2e]/40 text-[#5ec98a] border-[#2a6b42]/50",
  "Code Repository": "bg-[#5a3218]/40 text-[#e8a060] border-[#7a4a28]/50",
  "CI/CD": "bg-[#4a3a10]/40 text-[#d4b44a] border-[#6a5420]/50",
  Chat: "bg-[#5a1a3a]/40 text-[#e87aaa] border-[#7a2a52]/50",
  Documentation: "bg-[#1a4a52]/40 text-[#5ac8d8] border-[#2a6a72]/50",
  "Incident Management": "bg-[#5a1a1a]/40 text-[#e87a7a] border-[#7a2a2a]/50",
  "Issue Tracking": "bg-[#2a2a5a]/40 text-[#8a8ae8] border-[#3a3a7a]/50",
  Communication: "bg-[#1a4a3a]/40 text-[#5ac8a8] border-[#2a6a52]/50",
  "Customer Support": "bg-[#3a1a5a]/40 text-[#a87ae8] border-[#522a7a]/50",
  ITSM: "bg-[#5a1a2a]/40 text-[#e87a9a] border-[#7a2a3a]/50",
  Security: "bg-[#2a4a1a]/40 text-[#8ac85a] border-[#3a6a2a]/50",
};

export function FramerIntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered =
    activeCategory === "All"
      ? INTEGRATIONS
      : INTEGRATIONS.filter((i) => i.category === activeCategory);

  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily = '"Instrument Serif", "Instrument Serif Placeholder", serif';

  return (
    <div className="min-h-screen bg-[#04070d] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-16">
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56,189,248,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{
              backgroundColor: "#04070d",
              border: "1px solid rgba(216, 231, 242, 0.07)",
            }}
          >
            <svg
              className="h-[14px] w-[14px] text-[#d5dbe6]"
              viewBox="0 0 18 10.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" />
            </svg>
            <span
              className="uppercase text-[#d5dbe6]"
              style={{
                fontFamily: interFamily,
                fontSize: "11px",
                letterSpacing: "0.08em",
                fontWeight: 400,
              }}
            >
              Integrations
            </span>
          </div>

          <h1
            className="mb-5 text-[40px] font-medium leading-[1.15] tracking-[-0.03em] text-transparent sm:text-[56px] lg:text-[64px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                "linear-gradient(161deg, rgb(213, 219, 230) 40%, rgba(213,219,230,0.35) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            All your integrations{" "}
            <span
              className="font-normal italic"
              style={{ fontFamily: serifFamily }}
            >
              in one place
            </span>
          </h1>

          <p
            className="mx-auto max-w-[560px] text-[17px] leading-[1.65] text-[rgba(213,219,230,0.55)]"
            style={{ fontFamily: interFamily }}
          >
            Unify your production context with a wide range of integrations,
            from infrastructure, observability, code, DevOps, documentation and
            collaboration tools.
          </p>

          {/* Stats bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {[
              { value: "42", label: "Integrations" },
              { value: "13", label: "Categories" },
              { value: "∞", label: "Possibilities" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span
                  className="text-[28px] font-semibold tracking-tight text-white"
                  style={{ fontFamily: interFamily }}
                >
                  {value}
                </span>
                <span
                  className="text-[13px] text-[rgba(213,219,230,0.45)]"
                  style={{ fontFamily: interFamily }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations grid ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-[13px] text-[rgba(213,219,230,0.35)]" style={{ fontFamily: interFamily }}>
            {activeCategory === "All" ? "All Integrations" : activeCategory} ({filtered.length})
          </p>

          {/* Category dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-[rgba(213,219,230,0.8)] transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
              style={{ fontFamily: interFamily }}
            >
              {activeCategory}
              <svg
                className={`h-4 w-4 opacity-50 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute right-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c1018] py-1 shadow-2xl"
              >
                {CATEGORIES.map((cat) => {
                  const isActive = cat === activeCategory;
                  const count = cat === "All" ? INTEGRATIONS.length : INTEGRATIONS.filter((i) => i.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setDropdownOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-[13px] transition-colors ${
                        isActive
                          ? "bg-white/[0.08] text-white"
                          : "text-[rgba(213,219,230,0.55)] hover:bg-white/[0.04] hover:text-white"
                      }`}
                      style={{ fontFamily: interFamily }}
                    >
                      <span>{cat}</span>
                      <span className="text-[11px] opacity-40">{count}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((integration) => (
            <div
              key={integration.name}
              className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              {/* Icon + Name row */}
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
                    integration.iconBg ? "bg-white/10" : "bg-white/[0.05]"
                  } p-2`}
                >
                  <img
                    src={integration.iconUrl}
                    alt={integration.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className="truncate text-[15px] font-medium text-[rgba(213,219,230,0.9)]"
                    style={{ fontFamily: interFamily }}
                  >
                    {integration.name}
                  </h3>
                  <span
                    className={`mt-0.5 inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${
                      CATEGORY_COLORS[integration.category]
                    }`}
                  >
                    {integration.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-[13px] leading-[1.65] text-[rgba(213,219,230,0.45)]"
                style={{ fontFamily: interFamily }}
              >
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Custom integration CTA ── */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-8">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-10 text-center sm:p-16"
        >
          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(56,189,248,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2
              className="mb-4 text-[28px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[36px]"
              style={{
                fontFamily: interFamily,
                backgroundImage:
                  "linear-gradient(161deg, rgb(213, 219, 230) 51%, rgba(213,219,230,0.4) 130%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Need a{" "}
              <span className="font-normal italic" style={{ fontFamily: serifFamily }}>
                custom integration?
              </span>
            </h2>
            <p
              className="mx-auto mb-8 max-w-[420px] text-[16px] leading-[1.65] text-[rgba(213,219,230,0.5)]"
              style={{ fontFamily: interFamily }}
            >
              No worries, our team can build custom integrations to connect to
              any system you need. Book a call with us to discuss.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[14px] font-medium text-[#04070d] transition-opacity hover:opacity-90"
              style={{ fontFamily: interFamily }}
            >
              Book a call
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

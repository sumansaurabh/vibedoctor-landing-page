import { useEffect, useRef, useState, useCallback } from "react";
import {
  GCPIcon,
  AWSIcon,
  AzureIcon,
  CloudflareIcon,
  JiraIcon,
  LinearIcon,
  NotionIcon,
  AsanaIcon,
  TrelloIcon,
  SlackIcon,
  TelegramIcon,
  WhatsAppIcon,
  SupabaseIcon,
  FigmaIcon,
  Context7Icon,
  ConvexIcon,
  BrowserbaseIcon,
  PlaywrightIcon,
  HuggingFaceIcon,
  AerolIcon,
  KubernetesIcon,
  VPSIcon,
} from "~/components/icons";

const F = '"Inter", "SF Pro Display", -apple-system, sans-serif';
const MONO = '"SF Mono", "Fira Code", "JetBrains Mono", monospace';

/* ─────────────────────────────────────────────
   Shared sidebar
   ───────────────────────────────────────────── */
function Sidebar({ activeTab }: { activeTab: number }) {
  return (
    <div
      className="hidden md:flex w-[20.4%] flex-shrink-0 flex-col"
      style={{
        borderRight: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(180deg, rgba(13,17,23,0.6) 0%, rgba(10,14,22,0.8) 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Nav items */}
      <div className="flex flex-col" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        {(["Tasks", "Deployments", "Migrations", "Integrations"] as const).map((tab, i) => (
          <div
            key={tab}
            className="flex items-center gap-2.5 px-4 py-2 text-[12.5px] font-medium"
            style={{
              fontFamily: F,
              color: i === activeTab ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)",
              background: i === activeTab ? "linear-gradient(90deg, rgba(184,199,217,0.08) 0%, transparent 100%)" : "transparent",
              borderLeft: i === activeTab ? "2px solid rgba(184,199,217,0.7)" : "2px solid transparent",
              transition: "all 0.2s ease",
            }}
          >
            <svg className="h-3.5 w-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor" style={{ opacity: i === activeTab ? 0.8 : 0.3 }}>
              {i === 0 && <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11zM5 5.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 5.75zm0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 9.75z" />}
              {i === 1 && <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />}
              {i === 2 && <path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3zm5.56-6.56a.75.75 0 1 1-1.06-1.06L11.44 5.5H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3z" />}
              {i === 3 && <path d="M6 2a.75.75 0 0 1 .75.75v2.1c0 .636.514 1.15 1.15 1.15h.2c.636 0 1.15-.514 1.15-1.15v-2.1a.75.75 0 0 1 1.5 0v2.1A2.65 2.65 0 0 1 8.1 7.5h-.2A2.65 2.65 0 0 1 5.25 4.85v-2.1A.75.75 0 0 1 6 2zm2 5.5a.75.75 0 0 1 .75.75v2.5h1.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5h1.75v-2.5A.75.75 0 0 1 8 7.5z" />}
            </svg>
            {tab}
          </div>
        ))}
      </div>

      {activeTab === 0 && <TasksSidebar />}
      {activeTab === 1 && <DeploymentsSidebar />}
      {activeTab === 3 && <IntegrationsSidebar />}

      {/* Bottom user — frosted */}
      <div
        className="mt-auto flex items-center gap-2.5 px-4 py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div
          className="h-6 w-6 rounded-full flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(184,199,217,0.5) 0%, rgba(213,219,230,0.5) 100%)",
            boxShadow: "0 0 8px rgba(184,199,217,0.15)",
          }}
        />
        <div className="min-w-0">
          <span className="block text-[12px] text-white/50 truncate font-medium" style={{ fontFamily: F }}>Suman Saurabh</span>
          <span className="block text-[10px] text-white/20 truncate" style={{ fontFamily: F }}>ss.sumansaurabh92@gmail.c...</span>
        </div>
      </div>
    </div>
  );
}

function TasksSidebar() {
  return (
    <>
      <div className="px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div
          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <svg className="h-3 w-3 text-white/20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <span className="text-[10px] text-white/20" style={{ fontFamily: F }}>Search tasks...</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-2 pt-1.5">
        {[
          { name: "Improve website clarity and fix...", active: true, repo: "aerol/landing-page" },
          { name: "Improve landing page clarity a...", active: false, repo: "aerol/landing-page" },
          { name: "Add gpt-4.4 model to agent-mo...", active: false, repo: "aerol/agent-model" },
          { name: "Configure gpt-5.6 pricing in confi...", active: false, repo: "aerol/agent-config" },
          { name: "Add npm run in manifest...", active: false, repo: "aerol/agent-runner" },
          { name: "Build premium AI SaaS landin...", active: false, repo: "aerol/landing-page" },
        ].map((task, i) => (
          <div
            key={i}
            className="flex items-start gap-2 rounded-lg px-2.5 py-[6px] mb-[1px]"
            style={{
              background: task.active ? "rgba(255,255,255,0.05)" : "transparent",
              border: task.active ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
            }}
          >
            <div
              className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
              style={{
                background: task.active ? "rgba(184,199,217,0.8)" : "rgba(255,255,255,0.12)",
                boxShadow: task.active ? "0 0 4px rgba(184,199,217,0.4)" : "none",
              }}
            />
            <div className="min-w-0 flex-1">
              <span
                className="block truncate text-[12px] leading-tight"
                style={{ fontFamily: F, color: task.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.38)" }}
              >
                {task.name}
              </span>
              <span className="block truncate text-[10px] text-white/15 mt-0.5" style={{ fontFamily: F }}>{task.repo}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function DeploymentsSidebar() {
  return (
    <>
      <div className="px-3 py-2 flex items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] text-white/50 font-medium"
          style={{ fontFamily: F, background: "rgba(184,199,217,0.08)", border: "1px solid rgba(184,199,217,0.15)" }}
        >
          <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor" style={{ color: "rgba(184,199,217,0.6)" }}>
            <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z" />
          </svg>
          New Deployment
        </div>
        <svg className="h-3.5 w-3.5 text-white/20 ml-auto" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834zM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5z" />
        </svg>
      </div>
      <div className="flex-1 overflow-hidden px-2 pt-2">
        <div
          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <svg className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="rgba(34,197,94,0.8)"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" /></svg>
          </div>
          <div className="min-w-0 flex-1">
            <span className="block truncate text-[12.5px] text-white/75 font-medium leading-tight" style={{ fontFamily: F }}>my-ecommerce-store</span>
            <span className="block truncate text-[10.5px] text-white/25 mt-0.5" style={{ fontFamily: F }}>sumansaurabh/sun... · 08/03/2026</span>
          </div>
          <span className="text-[10px] text-green-400/60 font-medium bg-green-400/[0.08] rounded px-1.5 py-0.5">Live</span>
        </div>
      </div>
    </>
  );
}

const integrationCategories = [
  {
    name: "Cloud Providers",
    description:
      "Connect managed cloud credentials or register your own Docker-ready VPS infrastructure.",
    icon: "cloud",
    items: [
      {
        name: "VPS",
        description:
          "Deploy over SSH to your Linux server with Docker networking and Caddy.",
        icon: "vps",
        action: "Connect",
      },
      {
        name: "Google Cloud",
        description:
          "Deploy containers to Google Cloud with service account credentials.",
        icon: "gcp",
        action: "Connect",
      },
      {
        name: "AWS",
        description:
          "Deploy containers to AWS using your IAM credentials.",
        icon: "aws",
        action: "Connect",
      },
      {
        name: "Microsoft Azure",
        description:
          "Deploy to Azure using service principal credentials.",
        icon: "azure",
        action: "Connect",
      },
      {
        name: "Cloudflare",
        description:
          "Deploy edge workloads on Cloudflare with API token-based setup.",
        icon: "cloudflare",
        action: "Connect",
      },
    ],
  },
  {
    name: "Project Management",
    description:
      "Connect issue trackers and project tools to reference tickets in your tasks.",
    icon: "project",
    items: [
      {
        name: "Jira",
        description: "Reference Jira issues directly inside task prompts.",
        icon: "jira",
        action: "Connect",
      },
      {
        name: "Linear",
        description: "Pull Linear issues into prompts and agent context.",
        icon: "linear",
        action: "Connect",
      },
      {
        name: "Notion",
        description: "Reference Notion pages and docs inside task prompts.",
        icon: "notion",
        action: "Connect",
      },
      {
        name: "Asana",
        description: "Bring Asana tasks into your coding workflow.",
        icon: "asana",
        action: "Soon",
      },
      {
        name: "Trello",
        description: "Pull Trello cards into your task context.",
        icon: "trello",
        action: "Soon",
      },
    ],
  },
  {
    name: "Communication",
    description:
      "Send notifications and trigger tasks from your messaging apps.",
    icon: "communication",
    items: [
      {
        name: "Slack",
        description: "Send task updates and notifications into Slack.",
        icon: "slack",
        action: "Connect",
      },
      {
        name: "Telegram",
        description: "Start and monitor tasks directly from Telegram.",
        icon: "telegram",
        action: "Connect",
      },
      {
        name: "WhatsApp",
        description:
          "Integrate WhatsApp Cloud API for messaging workflows.",
        icon: "whatsapp",
        action: "Connect",
      },
    ],
  },
  {
    name: "Development Tools",
    description:
      "Connect MCP (Model Context Protocol) servers to give your AI agent access to databases, design tools, and more.",
    icon: "development",
    items: [
      {
        name: "Supabase",
        description:
          "Query Supabase data and auth context directly.",
        icon: "supabase",
        action: "Connect",
      },
      {
        name: "Figma",
        description:
          "Inspect and work with Figma designs from the agent.",
        icon: "figma",
        action: "Connect",
      },
      {
        name: "Context7",
        description:
          "Pull current library docs through Context7.",
        icon: "context7",
        action: "Connect",
      },
      {
        name: "Convex",
        description: "Interact with Convex backend data and functions.",
        icon: "convex",
        action: "Connect",
      },
      {
        name: "Browserbase",
        description: "Run remote headless browser sessions.",
        icon: "browserbase",
        action: "Soon",
      },
      {
        name: "Playwright",
        description:
          "Automate browser flows with Playwright.",
        icon: "playwright",
        action: "Soon",
      },
      {
        name: "Hugging Face",
        description:
          "Access Hugging Face models and datasets.",
        icon: "huggingface",
        action: "Soon",
      },
    ],
  },
] as const;

function IntegrationsSidebar() {
  return (
    <>
      <div className="px-3 py-2 flex items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] text-white/50 font-medium"
          style={{ fontFamily: F, background: "rgba(184,199,217,0.08)", border: "1px solid rgba(184,199,217,0.15)" }}
        >
          <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor" style={{ color: "rgba(184,199,217,0.6)" }}>
            <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z" />
          </svg>
          Add Integration
        </div>
        <svg className="h-3.5 w-3.5 text-white/20 ml-auto" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834zM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5z" />
        </svg>
      </div>
      <div className="flex-1 overflow-hidden px-2 pt-2">
        <div
          className="rounded-xl px-3 py-3"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={{ background: "rgba(184,199,217,0.08)", border: "1px solid rgba(184,199,217,0.12)" }}
            >
              <svg className="h-3.5 w-3.5 text-white/55" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 2a.75.75 0 0 1 .75.75v2.1c0 .636.514 1.15 1.15 1.15h.2c.636 0 1.15-.514 1.15-1.15v-2.1a.75.75 0 0 1 1.5 0v2.1A2.65 2.65 0 0 1 8.1 7.5h-.2A2.65 2.65 0 0 1 5.25 4.85v-2.1A.75.75 0 0 1 6 2zm2 5.5a.75.75 0 0 1 .75.75v2.5h1.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5h1.75v-2.5A.75.75 0 0 1 8 7.5z" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="block truncate text-[12.5px] text-white/75 font-medium leading-tight" style={{ fontFamily: F }}>No integrations yet</span>
              <span className="block truncate text-[10.5px] text-white/25 mt-0.5" style={{ fontFamily: F }}>Connect your tools to enhance your workflow</span>
            </div>
          </div>
          <button
            className="mt-3 w-full rounded-lg px-3 py-2 text-[11.5px] font-medium text-white/75"
            style={{ fontFamily: F, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            Add New Integration
          </button>
        </div>
      </div>
    </>
  );
}

function IntegrationsSectionIcon({
  icon,
}: {
  icon: (typeof integrationCategories)[number]["icon"];
}) {
  if (icon === "cloud") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12.5h7.25a2.75 2.75 0 1 0-.63-5.43A3.75 3.75 0 0 0 3.5 8.5 2.5 2.5 0 0 0 4 12.5Z" />
      </svg>
    );
  }

  if (icon === "project") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 3.5h8M4 8h8M4 12.5h5" />
        <circle cx="2.75" cy="3.5" r=".75" fill="currentColor" stroke="none" />
        <circle cx="2.75" cy="8" r=".75" fill="currentColor" stroke="none" />
        <circle cx="2.75" cy="12.5" r=".75" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "communication") {
    return (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.25 4.25h9.5v6.5h-5.2L4.25 13V10.75h-1A1 1 0 0 1 2.25 9.75v-4.5a1 1 0 0 1 1-1Z" />
      </svg>
    );
  }

  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.25 3.5 2.75 8l2.5 4.5M10.75 3.5 13.25 8l-2.5 4.5" />
      <path d="M8.6 3.25 7.4 12.75" />
    </svg>
  );
}

function IntegrationLogo({
  icon,
}: {
  icon: (typeof integrationCategories)[number]["items"][number]["icon"];
}) {
  const icons: Record<string, React.ReactNode> = {
    vps: <VPSIcon className="h-5 w-5" />,
    gcp: <GCPIcon className="h-5 w-5" />,
    aws: <AWSIcon className="h-5 w-5" />,
    azure: <AzureIcon className="h-5 w-5" />,
    cloudflare: <CloudflareIcon className="h-5 w-5" />,
    jira: <JiraIcon className="h-5 w-5" />,
    linear: <LinearIcon className="h-5 w-5" />,
    notion: <NotionIcon className="h-5 w-5" />,
    asana: <AsanaIcon className="h-5 w-5" />,
    trello: <TrelloIcon className="h-5 w-5" />,
    slack: <SlackIcon className="h-5 w-5" />,
    telegram: <TelegramIcon className="h-5 w-5" />,
    whatsapp: <WhatsAppIcon className="h-5 w-5" />,
    supabase: <SupabaseIcon className="h-5 w-5" />,
    figma: <FigmaIcon className="h-5 w-5" />,
    context7: <Context7Icon className="h-5 w-5" />,
    convex: <ConvexIcon className="h-5 w-5" />,
    browserbase: <BrowserbaseIcon className="h-5 w-5" />,
    playwright: <PlaywrightIcon className="h-5 w-5" />,
    huggingface: <HuggingFaceIcon className="h-5 w-5" />,
  };

  return icons[icon] ?? (
    <svg className="h-5 w-5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.1" fill="rgba(24,24,27,0.08)" stroke="rgba(24,24,27,0.4)" strokeWidth="1.1" />
      <path d="M5.25 8.25a2.75 2.75 0 1 1 0-1.2h5.5a2.75 2.75 0 1 1 0 1.2h-5.5Z" fill="#171717" opacity=".82" />
    </svg>
  );
}

function IntegrationCard({
  item,
}: {
  item: (typeof integrationCategories)[number]["items"][number];
}) {
  const isSoon = item.action === "Soon";

  return (
    <div
      className="group min-h-[96px] rounded-lg px-4 py-3 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 16px 32px -24px rgba(0,0,0,0.45)",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(184,199,217,0.15) 0%, rgba(184,199,217,0.12) 100%)",
            border: "1px solid rgba(184,199,217,0.15)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{ transform: "scale(1.42)", transformOrigin: "center" }}
          >
            <IntegrationLogo icon={item.icon} />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3
              className="truncate text-[13px] font-medium leading-tight"
              style={{ fontFamily: F, color: "rgba(255,255,255,0.82)" }}
            >
              {item.name}
            </h3>
            {isSoon && (
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-medium"
                style={{
                  fontFamily: F,
                  color: "rgba(255,255,255,0.28)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                Soon
              </span>
            )}
          </div>
          <p
            className="mt-1.5 text-[11.5px] leading-[17px]"
            style={{ fontFamily: F, color: "rgba(255,255,255,0.3)" }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Window chrome (macOS-style title bar)
   ───────────────────────────────────────────── */
function WindowChrome({ children, rightContent }: { children: React.ReactNode; rightContent?: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-3 px-4"
      style={{
        height: "5.5%",
        minHeight: "36px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(180deg, rgba(30,35,44,0.5) 0%, rgba(13,17,23,0.5) 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Traffic lights with subtle glow */}
      <div className="flex items-center gap-[7px]">
        {[
          { bg: "#ff5f57", shadow: "0 0 6px rgba(255,95,87,0.3)" },
          { bg: "#febc2e", shadow: "0 0 6px rgba(254,188,46,0.3)" },
          { bg: "#28c840", shadow: "0 0 6px rgba(40,200,64,0.3)" },
        ].map((dot, i) => (
          <span
            key={i}
            className="h-[11px] w-[11px] rounded-full"
            style={{ background: dot.bg, boxShadow: dot.shadow }}
          />
        ))}
      </div>
      {children}
      {rightContent && <div className="ml-auto flex items-center gap-1.5">{rightContent}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen wrapper (shared glass + border style)
   ───────────────────────────────────────────── */
function ScreenFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden snap-center aspect-[3/4] md:aspect-[1175/680]"
      style={{
        width: "100%",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "linear-gradient(180deg, #111820 0%, #0b0f17 100%)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 25px 60px -12px rgba(0,0,0,0.5), 0 0 100px rgba(184,199,217,0.03)",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 1: Code Editor / Tasks
   ───────────────────────────────────────────── */
function ScreenCodeEditor() {
  return (
    <ScreenFrame>
      <WindowChrome
        rightContent={
          <div className="hidden sm:flex items-center gap-1.5">
            {["Code", "Chat", "Publish"].map((tab, i) => (
              <button
                key={tab}
                className="rounded-md px-3 py-1 text-[12.5px] font-medium transition-all"
                style={{
                  fontFamily: F,
                  color: i === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                  background: i === 0 ? "rgba(255,255,255,0.08)" : "transparent",
                  border: i === 0 ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        }
      >
        <div className="ml-3 flex flex-1 min-w-0 items-center gap-2 text-[13px]" style={{ fontFamily: F }}>
          <svg className="h-3.5 w-3.5 flex-shrink-0 text-white/25" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="text-white/65 font-medium truncate">Prepare production deployment with Docker + AWS</span>
        </div>
      </WindowChrome>

      <div className="flex absolute inset-0" style={{ top: "5.5%" }}>
        <Sidebar activeTab={0} />

        {/* Code editor — hidden on mobile */}
        <div className="hidden md:flex flex-1 flex-col min-w-0">
          {/* File tabs */}
          <div
            className="flex items-center"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              background: "rgba(12,16,24,0.6)",
            }}
          >
            <div className="flex items-center">
              {[
                { name: "Dockerfile", active: true },
                { name: "docker-compose.yml", active: false },
                { name: "apprunner.yaml", active: false },
              ].map((tab, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3.5 py-[7px] text-[12.5px]"
                  style={{
                    fontFamily: F,
                    color: tab.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                    background: tab.active ? "rgba(13,17,23,0.8)" : "transparent",
                    borderBottom: tab.active ? "2px solid rgba(184,199,217,0.6)" : "2px solid transparent",
                    borderRight: "1px solid rgba(255,255,255,0.03)",
                  }}
                >
                  <span style={{ color: tab.active ? "rgba(184,199,217,0.6)" : "rgba(255,255,255,0.15)" }}>
                    {tab.name === "Dockerfile" ? (
                      <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M8.5 1.5A.5.5 0 0 0 8 1H6.5a.5.5 0 0 0 0 1H8v1H4.5a.5.5 0 0 0 0 1H8v1H5.5a.5.5 0 0 0 0 1H8v1H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 .5.5h5a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 13.5 2H8.5v-.5z" /></svg>
                    ) : (
                      <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9z" /></svg>
                    )}
                  </span>
                  {tab.name}
                </div>
              ))}
            </div>
            <div className="ml-auto mr-4 text-[11px] text-white/15" style={{ fontFamily: MONO }}>/</div>
          </div>

          {/* Diff view */}
          <div className="flex-1 overflow-hidden p-0" style={{ background: "rgba(13,17,23,0.5)" }}>
            <div className="h-full overflow-hidden md:overflow-y-auto text-[12.5px] leading-[21px] [&::-webkit-scrollbar]:hidden" style={{ fontFamily: MONO, scrollbarWidth: "none" }}>
              {[
                { num: 1, code: "# ── Stage 1: Build ──", type: "added" },
                { num: 2, code: "FROM node:20-alpine AS builder", type: "added" },
                { num: 3, code: "WORKDIR /app", type: "added" },
                { num: 4, code: "COPY package*.json ./", type: "added" },
                { num: 5, code: "RUN npm ci --production=false", type: "added" },
                { num: 6, code: "COPY . .", type: "added" },
                { num: 7, code: "RUN npm run build", type: "added" },
                { num: 8, code: "", type: "normal" },
                { num: 9, code: "# ── Stage 2: Runtime ──", type: "added" },
                { num: 10, code: "FROM node:20-alpine AS runtime", type: "added" },
                { num: 11, code: "WORKDIR /app", type: "added" },
                { num: 12, code: "COPY --from=builder /app/build ./build", type: "added" },
                { num: 13, code: "COPY --from=builder /app/node_modules ./node_modules", type: "added" },
                { num: 14, code: "COPY --from=builder /app/package.json ./", type: "added" },
                { num: 15, code: "", type: "normal" },
                { num: 16, code: "# Redis for session caching", type: "added" },
                { num: 17, code: 'ENV REDIS_URL="redis://cache:6379"', type: "added" },
                { num: 18, code: "ENV NODE_ENV=production", type: "added" },
                { num: 19, code: "ENV PORT=3000", type: "added" },
                { num: 20, code: "", type: "normal" },
                { num: 21, code: "EXPOSE 3000", type: "added" },
                { num: 22, code: 'HEALTHCHECK CMD wget -q --spider http://localhost:3000/health', type: "added" },
                { num: 23, code: 'CMD ["node", "build/server.js"]', type: "added" },
              ].map((line, i) => (
                <div
                  key={i}
                  className="flex"
                  style={{
                    background:
                      line.type === "added"
                        ? "rgba(34,197,94,0.06)"
                        : line.type === "deleted"
                        ? "rgba(239,68,68,0.06)"
                        : "transparent",
                    borderLeft:
                      line.type === "added"
                        ? "3px solid rgba(34,197,94,0.3)"
                        : line.type === "deleted"
                        ? "3px solid rgba(239,68,68,0.25)"
                        : "3px solid transparent",
                  }}
                >
                  <span className="w-[48px] flex-shrink-0 select-none px-2 text-right" style={{ color: "rgba(255,255,255,0.12)" }}>{line.num}</span>
                  <span
                    className="flex-shrink-0 w-5 select-none text-center text-[13px]"
                    style={{
                      color:
                        line.type === "added" ? "rgba(34,197,94,0.7)" : line.type === "deleted" ? "rgba(239,68,68,0.6)" : "transparent",
                    }}
                  >
                    {line.type === "added" ? "+" : line.type === "deleted" ? "−" : " "}
                  </span>
                  <span
                    className="flex-1 whitespace-pre pr-4"
                    style={{
                      color:
                        line.type === "added"
                          ? "rgba(134,239,172,0.7)"
                          : line.type === "deleted"
                          ? "rgba(252,165,165,0.55)"
                          : "rgba(255,255,255,0.45)",
                      textDecoration: line.type === "deleted" ? "line-through" : "none",
                      textDecorationColor: "rgba(239,68,68,0.2)",
                    }}
                  >
                    {line.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div style={{ height: "14%", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(8,11,18,0.7)" }}>
            <div className="flex items-center gap-2 px-3 py-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40" style={{ fontFamily: F }}>Logs</span>
              <span className="h-3 w-px bg-white/[0.06]" />
              <span className="text-[11px] text-white/20 uppercase tracking-wider" style={{ fontFamily: F }}>Terminal</span>
            </div>
            <div className="px-3 py-1.5 text-[11.5px] leading-[17px] text-white/25 space-y-[2px] overflow-hidden" style={{ fontFamily: MONO }}>
              <div><span className="text-green-400/50">✓</span> Repository analyzed — Remix + Node.js detected</div>
              <div><span className="text-green-400/50">✓</span> Redis dependency found in lib/session.ts</div>
              <div><span className="text-green-400/50">✓</span> Dockerfile generated (multi-stage, 89MB final)</div>
              <div><span className="text-white/10">10:42:20</span> Pushing image to ECR: 924xxxxxx.dkr.ecr.us-east-1...</div>
              <div><span className="text-white/10">10:42:21</span> <span className="text-white/30">⟳</span> Deploying to AWS App Runner...</div>
            </div>
          </div>
        </div>

        {/* Right: Chat panel — full width on mobile, sidebar on desktop */}
        <div
          className="flex w-full md:w-[29%] flex-shrink-0 flex-col"
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(180deg, rgba(13,17,23,0.6) 0%, rgba(10,14,22,0.85) 100%)",
          }}
        >
          <div className="flex items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            {["Chat", "Deployments"].map((tab, i) => (
              <button
                key={tab}
                className="flex-1 py-2.5 text-[12.5px] font-medium"
                style={{
                  fontFamily: F,
                  color: i === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
                  borderBottom: i === 0 ? "2px solid rgba(184,199,217,0.6)" : "2px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden md:overflow-y-auto p-3.5 space-y-3.5 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            <div>
              <h4 className="text-[12.5px] font-semibold text-white/65 mb-1.5" style={{ fontFamily: F }}>What I found:</h4>
              <p className="text-[11.5px] leading-[16px] text-white/35" style={{ fontFamily: F }}>
                Detected <code className="text-[rgba(184,199,217,0.5)] font-medium" style={{ fontFamily: MONO }}>Remix + Node.js</code> app.
                Found Redis usage in <code className="text-[rgba(184,199,217,0.5)] font-medium" style={{ fontFamily: MONO }}>lib/session.ts</code> for session caching. Identified 2 external API deps.
              </p>
            </div>
            <div>
              <h4 className="text-[12.5px] font-semibold text-white/65 mb-1.5" style={{ fontFamily: F }}>Actions taken:</h4>
              <p className="text-[11.5px] leading-[16px] text-white/35" style={{ fontFamily: F }}>
                Generated multi-stage Dockerfile (89MB final). Created docker-compose with Redis sidecar. Configured AWS App Runner service with auto-scaling.
              </p>
            </div>
            <div
              className="rounded-lg p-2.5 text-[11px] leading-[16px]"
              style={{
                fontFamily: MONO,
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div><span style={{ color: "rgba(184,199,217,0.5)" }}>aws</span> apprunner create-service \</div>
              <div className="mt-0.5">  --source ecr://my-app:latest \</div>
              <div>  --port <span style={{ color: "rgba(134,239,172,0.5)" }}>3000</span> --cpu <span style={{ color: "rgba(134,239,172,0.5)" }}>1024</span> --memory <span style={{ color: "rgba(134,239,172,0.5)" }}>2048</span></div>
            </div>
            <div>
              <h4 className="text-[12.5px] font-semibold text-white/65 mb-1.5" style={{ fontFamily: F }}>Files created:</h4>
              <div className="space-y-1.5">
                {["Dockerfile", "docker-compose.yml", "apprunner.yaml", ".dockerignore"].map((file, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11.5px] text-white/35">
                    <div className="h-1 w-1 rounded-full bg-green-400/40" />
                    <span style={{ fontFamily: F }}>{file}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-lg p-2.5"
              style={{
                background: "rgba(34,197,94,0.04)",
                border: "1px solid rgba(34,197,94,0.1)",
              }}
            >
              <p className="text-[11.5px] text-green-300/55 flex items-center gap-1.5" style={{ fontFamily: F }}>
                <svg className="h-3 w-3 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor" style={{ color: "rgba(34,197,94,0.5)" }}><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" /></svg>
                Deployment config ready. Push to deploy.
              </p>
            </div>
          </div>
          {/* Chat input */}
          <div className="px-3 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <div
              className="flex items-center gap-2 rounded-xl px-3 py-2"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              <span className="flex-1 text-[12px] text-white/20" style={{ fontFamily: F }}>Ask a follow-up...</span>
              <span
                className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium"
                style={{
                  fontFamily: F,
                  color: "rgba(184,199,217,0.7)",
                  background: "rgba(184,199,217,0.08)",
                  border: "1px solid rgba(184,199,217,0.15)",
                }}
              >
                <svg className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor" style={{ opacity: 0.7 }}>
                  <path d="M8 1a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 1zm0 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 11zm7-3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 15 8zM5 8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 5 8zm8.14-3.14a.75.75 0 0 1 0 1.06l-1.77 1.77a.75.75 0 1 1-1.06-1.06l1.77-1.77a.75.75 0 0 1 1.06 0zM5.69 9.31a.75.75 0 0 1 0 1.06l-1.77 1.77a.75.75 0 0 1-1.06-1.06l1.77-1.77a.75.75 0 0 1 1.06 0zm8.45 3.83a.75.75 0 0 1-1.06 0l-1.77-1.77a.75.75 0 1 1 1.06-1.06l1.77 1.77a.75.75 0 0 1 0 1.06zM5.69 6.69a.75.75 0 0 1-1.06 0L2.86 4.92a.75.75 0 0 1 1.06-1.06l1.77 1.77a.75.75 0 0 1 0 1.06z" />
                </svg>
                Opus 4.5
              </span>
              <svg className="h-3.5 w-3.5 text-white/15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <path d="M13.5 7.5l-5.646 5.646a4 4 0 0 1-5.657-5.657l5.647-5.646a2.667 2.667 0 1 1 3.771 3.771L6.003 11.26a1.333 1.333 0 0 1-1.886-1.886l5.293-5.292" />
              </svg>
              <div
                className="flex h-[22px] w-[22px] items-center justify-center rounded-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(184,199,217,0.7) 0%, rgba(184,199,217,0.7) 100%)",
                  boxShadow: "0 2px 6px rgba(184,199,217,0.2)",
                }}
              >
                <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894l-13-6.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}

/* ─────────────────────────────────────────────
   Screen 2: Deployment
   ───────────────────────────────────────────── */
function ScreenDeployment() {
  return (
    <ScreenFrame>
      <WindowChrome
        rightContent={
          <>
            <button
              className="rounded-lg px-3.5 py-1 text-[10.5px] font-medium"
              style={{ fontFamily: F, color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-3.5 py-1 text-[10.5px] font-medium"
              style={{ fontFamily: F, color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              Create Deployment
            </button>
          </>
        }
      >
        <div className="ml-3 flex items-center gap-2 text-[11px]" style={{ fontFamily: F }}>
          <svg className="h-3.5 w-3.5 text-white/25" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="text-white/65 font-medium">New Deployment</span>
        </div>
      </WindowChrome>

      <div className="flex absolute inset-0" style={{ top: "5.5%" }}>
        <Sidebar activeTab={1} />

        {/* Form */}
        <div className="flex flex-1 flex-col min-w-0 overflow-hidden md:overflow-y-auto px-7 py-5 [&::-webkit-scrollbar]:hidden" style={{ fontFamily: F, scrollbarWidth: "none" }}>
          <h2 className="text-[19px] font-semibold text-white/90 mb-1 tracking-[-0.01em]">New Deployment</h2>
          <p className="text-[13px] text-white/30 mb-6">Deploy your application from a Git repository or uploaded folder.</p>

          <label className="text-[12.5px] font-medium text-white/55 mb-2">Project Name</label>
          <div className="flex gap-3 mb-5">
            <div
              className="flex-1 flex items-center justify-between rounded-lg px-3 py-2 text-[13px] text-white/65"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              my-ecommerce-store
              <svg className="h-3 w-3 text-white/20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
            </div>
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-white/45"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="rgba(184,199,217,0.5)"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" /></svg>
              TypeScript / Node.js (vite)
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[12px] mb-5" style={{ color: "rgba(34,197,94,0.6)" }}>
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" /></svg>
            Existing project - will create a new deployment
          </div>

          <label className="text-[12.5px] font-medium text-white/55 mb-2">Repository</label>
          <div className="flex items-center gap-2.5 mb-5 flex-wrap">
            {[
              { content: <><div className="h-4 w-4 rounded-full" style={{ background: "linear-gradient(135deg, rgba(184,199,217,0.4) 0%, rgba(213,219,230,0.4) 100%)" }} />sumansa...</>, },
              { content: "my-ecommerce-store" },
              { content: "feature/optimization" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-white/15 text-[11px] -ml-1 mr-0.5">{i === 1 ? "/" : "@"}</span>}
                <div
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12.5px] text-white/55"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {item.content}
                  <svg className="h-2.5 w-2.5 text-white/15" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mb-4">
            <div
              className="flex-1 rounded-lg px-4 py-3 text-[13px]"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-white/20 text-[16px]">&lt;/&gt;</span>
                <div>
                  <span className="text-white/50 font-medium block">Build Commands</span>
                  <span className="block text-[11px] text-white/20 mt-0.5">npm/pip/cargo/go build</span>
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded-lg px-4 py-3 text-[13px]"
              style={{
                background: "rgba(184,199,217,0.04)",
                border: "1px solid rgba(184,199,217,0.2)",
                boxShadow: "0 0 20px rgba(184,199,217,0.04)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span style={{ color: "rgba(184,199,217,0.6)" }} className="text-[16px]">⬡</span>
                <div>
                  <span className="text-white/80 font-medium block">Dockerfile</span>
                  <span className="block text-[11px] text-white/30 mt-0.5">1 found</span>
                </div>
              </div>
            </div>
          </div>          
        </div>

        {/* Deploy To panel */}
        <div
          className="hidden lg:flex w-[30%] flex-shrink-0 flex-col"
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(180deg, rgba(13,17,23,0.5) 0%, rgba(10,14,22,0.7) 100%)",
          }}
        >
          <div className="px-4 pt-5 pb-3">
            <h3 className="text-[19px] font-semibold text-white/90 tracking-[-0.01em]" style={{ fontFamily: 'sans-serif' }}>Deploy To</h3>
          </div>
          <div className="flex-1 overflow-hidden md:overflow-y-auto px-3 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            {[
              { name: "Aerol", desc: "Deploy to our managed infrastructure", price: "", active: false, soon: false, icon: "aerol" as const },
              { name: "Google Cloud Run (BYOC)", desc: "Deploy as a Docker container on GCR", price: "", active: false, soon: false, icon: "gcp" as const },
              { name: "AWS App Runner (BYOC)", desc: "Deploy as a Docker container on AWS", price: "", active: true, soon: false, icon: "aws" as const },
              { name: "Cloudflare Workers (BYOC)", desc: "Edge-first serverless deployment", price: "", active: false, soon: true, icon: "cloudflare" as const },
              { name: "Azure (BYOC)", desc: "Deploy to Microsoft Azure", price: "", active: false, soon: true, icon: "azure" as const },
              { name: "Kubernetes (BYOC)", desc: "Deploy to any Kubernetes cluster", price: "", active: false, soon: true, icon: "kubernetes" as const },
              { name: "VPS / Bare Metal (BYOC)", desc: "Deploy via SSH to any Linux server", price: "", active: false, soon: true, icon: "vps" as const },
            ].map((target, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-3 py-3 mb-1.5"
                style={{
                  background: target.active ? "rgba(184,199,217,0.04)" : "transparent",
                  border: target.active ? "1px solid rgba(184,199,217,0.18)" : "1px solid transparent",
                  boxShadow: target.active ? "0 0 20px rgba(184,199,217,0.04)" : "none",
                }}
              >
                <div
                  className="h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: target.active
                      ? "linear-gradient(135deg, rgba(184,199,217,0.15) 0%, rgba(184,199,217,0.15) 100%)"
                      : "rgba(255,255,255,0.03)",
                    border: target.active ? "1px solid rgba(184,199,217,0.15)" : "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {(() => {
                    const deployIcons: Record<string, React.ReactNode> = {
                      aerol: <AerolIcon className="h-3.5 w-3.5 text-white/85" />,
                      gcp: <GCPIcon className="h-3.5 w-3.5" />,
                      aws: <AWSIcon className="h-3.5 w-3.5" />,
                      cloudflare: <CloudflareIcon className="h-3.5 w-3.5" />,
                      azure: <AzureIcon className="h-3.5 w-3.5" />,
                      kubernetes: <KubernetesIcon className="h-3.5 w-3.5" />,
                      vps: <VPSIcon className="h-3.5 w-3.5" />,
                    };
                    return deployIcons[target.icon] ?? null;
                  })()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-medium" style={{ fontFamily: F, color: target.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)" }}>{target.name}</span>
                    
                  </div>
                  <span className="text-[11.5px] block mt-0.5" style={{ fontFamily: F, color: "rgba(255,255,255,0.25)" }}>{target.desc}</span>
                </div>
                {target.price && (
                  <span className="text-[11px] flex-shrink-0 whitespace-nowrap" style={{ fontFamily: F, color: "rgba(255,255,255,0.2)" }}>$ {target.price}</span>
                )}
                {target.active && (
                  <button
                    className="text-[11.5px] font-medium flex-shrink-0 rounded-lg px-2.5 py-1"
                    style={{ fontFamily: F, color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                  >
                    Configure
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}

function ScreenIntegrations({ isActive }: { isActive: boolean }) {
  const totalIntegrations = integrationCategories.reduce(
    (count, category) => count + category.items.length,
    0,
  );
  const connectableIntegrations = integrationCategories.reduce(
    (count, category) =>
      count + category.items.filter((item) => item.action === "Connect").length,
    0,
  );
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollAreaRef.current;
    if (!el) return;

    if (!isActive) {
      el.scrollTop = 0;
      return;
    }

    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) return;

    el.scrollTop = 0;

    let frameId = 0;
    const delayId = window.setTimeout(() => {
      const startTime = performance.now();
      const duration = 5200;

      const animate = (time: number) => {
        const progress = Math.min(1, (time - startTime) / duration);
        const eased =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        el.scrollTop = maxScroll * eased;

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    }, 700);

    return () => {
      window.clearTimeout(delayId);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [isActive]);

  return (
    <ScreenFrame>
      <WindowChrome
        rightContent={
          <div className="hidden sm:flex items-center gap-1.5">
            {["General", "Custom"].map((tab, i) => (
              <button
                key={tab}
                className="rounded-md px-3 py-1 text-[12.5px] font-medium transition-all"
                style={{
                  fontFamily: F,
                  color: i === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                  background: i === 0 ? "rgba(255,255,255,0.08)" : "transparent",
                  border: i === 0 ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
            <button
              className="rounded-md px-3 py-1 text-[12px] font-medium"
              style={{
                fontFamily: F,
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              All categories
            </button>
          </div>
        }
      >
        <div
          className="ml-3 flex items-center gap-2 text-[11px]"
          style={{ fontFamily: F }}
        >
          <svg
            className="h-3.5 w-3.5 text-white/25"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2.5v2a2 2 0 0 0 4 0v-2" />
            <path d="M8 6.5V10" />
            <path d="M5.25 12.75h5.5" />
          </svg>
          <span className="font-medium text-white/65">app.aerol.ai / integrations</span>
        </div>
      </WindowChrome>

      <div
        className="absolute inset-0 flex"
        style={{ top: "5.5%" }}
      >
        <Sidebar activeTab={3} />

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div
            className="px-6 py-5"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              background: "rgba(12,16,24,0.5)",
            }}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-[15px] flex-shrink-0"
                  style={{
                    background: "rgba(184,199,217,0.08)",
                    border: "1px solid rgba(184,199,217,0.14)",
                  }}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="rgba(184,199,217,0.72)"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2.5v2a2 2 0 0 0 4 0v-2" />
                    <path d="M8 6.5V10" />
                    <path d="M5.25 12.75h5.5" />
                  </svg>
                </div>

                <div>
                  <h2
                    className="text-[26px] font-semibold tracking-[-0.02em]"
                    style={{ fontFamily: F, color: "rgba(255,255,255,0.9)" }}
                  >
                    Integrations
                  </h2>
                  <p
                    className="mt-1 max-w-[620px] text-[13px] leading-[20px]"
                    style={{ fontFamily: F, color: "rgba(255,255,255,0.3)" }}
                  >
                    Connect your tools and services to supercharge your AI coding
                    agent.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-2 self-start">
                <div
                  className="rounded-lg px-2.5 py-1.5 text-[11px] font-medium"
                  style={{
                    fontFamily: F,
                    color: "rgba(184,199,217,0.72)",
                    background: "rgba(184,199,217,0.08)",
                    border: "1px solid rgba(184,199,217,0.12)",
                  }}
                >
                  {totalIntegrations} integrations
                </div>
                <div
                  className="rounded-lg px-2.5 py-1.5 text-[11px] font-medium"
                  style={{
                    fontFamily: F,
                    color: "rgba(255,255,255,0.32)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {connectableIntegrations} connectable
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-between gap-4 px-6 py-4"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              background: "rgba(10,14,22,0.62)",
            }}
          >
            <div
              className="flex min-w-0 flex-1 items-center gap-2 rounded-xl px-3 py-2"
              style={{
                fontFamily: F,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <svg className="h-3.5 w-3.5 flex-shrink-0 text-white/20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <span className="truncate text-[12px] text-white/20">Search integrations...</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="rounded-lg px-3 py-2 text-[11px] font-medium"
                style={{
                  fontFamily: F,
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                General
              </button>
              <button
                className="rounded-lg px-3 py-2 text-[11px] font-medium hidden lg:block"
                style={{
                  fontFamily: F,
                  color: "rgba(255,255,255,0.22)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                Custom
              </button>
            </div>
          </div>

          <div
            ref={scrollAreaRef}
            className="flex-1 overflow-hidden md:overflow-y-auto px-6 py-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", background: "rgba(10,14,22,0.45)" }}
          >
            {integrationCategories.map((category) => (
              <section key={category.name} className="mb-6 last:mb-0">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[12px]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.62)",
                    }}
                  >
                    <IntegrationsSectionIcon icon={category.icon} />
                  </div>
                  <div>
                    <h3
                      className="text-[15px] font-semibold"
                      style={{ fontFamily: F, color: "rgba(255,255,255,0.82)" }}
                    >
                      {category.name}
                    </h3>
                    <p
                      className="mt-1 text-[12px] leading-[18px]"
                      style={{ fontFamily: F, color: "rgba(255,255,255,0.28)" }}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  {category.items.map((item) => (
                    <IntegrationCard key={item.name} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}

/* ─────────────────────────────────────────────
   Main showcase with carousel
   ───────────────────────────────────────────── */
export function FramerProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideLabels = ["Tasks", "Deployments", "Integrations"] as const;
  const totalSlides = slideLabels.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const wH = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (wH - rect.top) / (wH * 0.7)));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const onH = () => {
      const { scrollLeft, clientWidth } = scrollEl;
      const slideWidth = clientWidth + 20;
      const nextSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(Math.max(0, Math.min(totalSlides - 1, nextSlide)));
    };
    scrollEl.addEventListener("scroll", onH, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onH);
  }, [totalSlides]);

  const scrollToSlide = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: el.clientWidth * index + index * 20,
      behavior: "smooth",
    });
    setActiveSlide(index);
  }, []);

  const goNext = useCallback(
    () => scrollToSlide((activeSlide + 1) % totalSlides),
    [activeSlide, scrollToSlide, totalSlides],
  );
  const goPrev = useCallback(
    () => scrollToSlide((activeSlide - 1 + totalSlides) % totalSlides),
    [activeSlide, scrollToSlide, totalSlides],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      scrollToSlide((activeSlide + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlide, scrollToSlide, totalSlides]);

  const scale = 0.88 + scrollProgress * 0.12;
  const opacity = Math.min(1, scrollProgress * 1.8);
  const rotateX = (1 - scrollProgress) * 6;
  const translateY = (1 - scrollProgress) * 40;

  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-[#04070d] py-16 sm:py-28"
      style={{ perspective: "1400px" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "1000px",
          height: "700px",
          opacity: opacity * 0.06,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(184,199,217,0.4) 0%, rgba(4,7,13,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        ref={containerRef}
        className="relative z-[2] mx-auto w-full px-4 sm:px-6 lg:px-10"
        style={{ maxWidth: "1215px" }}
      >
        <div
          style={{
            transform: `scale(${scale}) rotateX(${rotateX}deg) translateY(${translateY}px)`,
            opacity,
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
          }}
        >
          {/* Carousel */}
          <div className="relative group">
            {/* Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                color: "rgba(255,255,255,0.7)",
              }}
              aria-label="Previous"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12L6 8l4-4" /></svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                color: "rgba(255,255,255,0.7)",
              }}
              aria-label="Next"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12l4-4-4-4" /></svg>
            </button>

            <div
              ref={scrollRef}
              className="flex gap-5 overflow-hidden md:overflow-x-auto snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <ScreenCodeEditor />
              <div className="hidden md:block flex-shrink-0 w-full snap-center">
                <ScreenDeployment />
              </div>
              <div className="hidden md:block flex-shrink-0 w-full snap-center">
                <ScreenIntegrations isActive={activeSlide === 2} />
              </div>
            </div>
          </div>

          {/* Navigation pills — hidden on mobile (single slide) */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-7">
            {slideLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  fontFamily: F,
                  fontSize: "11px",
                  fontWeight: 500,
                  color: activeSlide === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)",
                  background: activeSlide === i ? "rgba(255,255,255,0.06)" : "transparent",
                  border: activeSlide === i ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                }}
              >
                <span
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeSlide === i ? "20px" : "6px",
                    height: "6px",
                    background: activeSlide === i
                      ? "linear-gradient(90deg, rgba(184,199,217,0.8) 0%, rgba(184,199,217,0.8) 100%)"
                      : "rgba(255,255,255,0.15)",
                    boxShadow: activeSlide === i ? "0 0 8px rgba(184,199,217,0.3)" : "none",
                  }}
                />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`.snap-x::-webkit-scrollbar{display:none}`}</style>

      {/* Bottom edge glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-px"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(216,231,242,0.07) 0%, rgba(4,7,13,0) 100%)" }}
      />
    </section>
  );
}

import { useEffect, useRef, useState, useCallback } from "react";

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
        {(["Tasks", "Deployments", "Migrations"] as const).map((tab, i) => (
          <div
            key={tab}
            className="flex items-center gap-2.5 px-4 py-2 text-[12.5px] font-medium"
            style={{
              fontFamily: F,
              color: i === activeTab ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)",
              background: i === activeTab ? "linear-gradient(90deg, rgba(59,130,246,0.08) 0%, transparent 100%)" : "transparent",
              borderLeft: i === activeTab ? "2px solid rgba(59,130,246,0.7)" : "2px solid transparent",
              transition: "all 0.2s ease",
            }}
          >
            <svg className="h-3.5 w-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor" style={{ opacity: i === activeTab ? 0.8 : 0.3 }}>
              {i === 0 && <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11zM5 5.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 5.75zm0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 9.75z" />}
              {i === 1 && <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />}
              {i === 2 && <path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3zm5.56-6.56a.75.75 0 1 1-1.06-1.06L11.44 5.5H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3z" />}
            </svg>
            {tab}
          </div>
        ))}
      </div>

      {activeTab === 0 && <TasksSidebar />}
      {activeTab === 1 && <DeploymentsSidebar />}

      {/* Bottom user — frosted */}
      <div
        className="mt-auto flex items-center gap-2.5 px-4 py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div
          className="h-6 w-6 rounded-full flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.5) 0%, rgba(168,85,247,0.5) 100%)",
            boxShadow: "0 0 8px rgba(99,102,241,0.15)",
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
          { name: "Improve website clarity and fix...", active: true, repo: "vibedoctor/landing-page" },
          { name: "Improve landing page clarity a...", active: false, repo: "vibedoctor/landing-page" },
          { name: "Add gpt-4.4 model to agent-mo...", active: false, repo: "vibedoctor/agent-model" },
          { name: "Configure gpt-5.6 pricing in confi...", active: false, repo: "vibedoctor/agent-config" },
          { name: "Add npm run in manifest...", active: false, repo: "vibedoctor/agent-runner" },
          { name: "Build premium AI SaaS landin...", active: false, repo: "vibedoctor/landing-page" },
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
                background: task.active ? "rgba(59,130,246,0.8)" : "rgba(255,255,255,0.12)",
                boxShadow: task.active ? "0 0 4px rgba(59,130,246,0.4)" : "none",
              }}
            />
            <div className="min-w-0 flex-1">
              <span
                className="block truncate text-[10px] leading-tight"
                style={{ fontFamily: F, color: task.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.38)" }}
              >
                {task.name}
              </span>
              <span className="block truncate text-[8.5px] text-white/15 mt-0.5" style={{ fontFamily: F }}>{task.repo}</span>
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
          style={{ fontFamily: F, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor" style={{ color: "rgba(59,130,246,0.6)" }}>
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
      className="relative flex-shrink-0 overflow-hidden snap-center"
      style={{
        width: "100%",
        aspectRatio: "1175 / 680",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "linear-gradient(180deg, #111820 0%, #0b0f17 100%)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 25px 60px -12px rgba(0,0,0,0.5), 0 0 100px rgba(59,130,246,0.03)",
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
          <>
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
          </>
        }
      >
        <div className="ml-3 flex items-center gap-2 text-[13px]" style={{ fontFamily: F }}>
          <svg className="h-3.5 w-3.5 text-white/25" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="text-white/65 font-medium">Prepare production deployment with Docker + AWS</span>
        </div>
      </WindowChrome>

      <div className="flex absolute inset-0" style={{ top: "5.5%" }}>
        <Sidebar activeTab={0} />

        {/* Code editor */}
        <div className="flex flex-1 flex-col min-w-0">
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
                    borderBottom: tab.active ? "2px solid rgba(59,130,246,0.6)" : "2px solid transparent",
                    borderRight: "1px solid rgba(255,255,255,0.03)",
                  }}
                >
                  <span style={{ color: tab.active ? "rgba(96,165,250,0.6)" : "rgba(255,255,255,0.15)" }}>
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
            <div className="h-full overflow-y-auto text-[12.5px] leading-[21px]" style={{ fontFamily: MONO }}>
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
              <div><span className="text-white/10">10:42:21</span> <span className="text-amber-400/30">⟳</span> Deploying to AWS App Runner...</div>
            </div>
          </div>
        </div>

        {/* Right: Chat panel */}
        <div
          className="hidden lg:flex w-[29%] flex-shrink-0 flex-col"
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(180deg, rgba(13,17,23,0.5) 0%, rgba(10,14,22,0.7) 100%)",
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
                  borderBottom: i === 0 ? "2px solid rgba(59,130,246,0.6)" : "2px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5">
            <div>
              <h4 className="text-[12.5px] font-semibold text-white/65 mb-1.5" style={{ fontFamily: F }}>What I found:</h4>
              <p className="text-[11.5px] leading-[16px] text-white/35" style={{ fontFamily: F }}>
                Detected <code className="text-blue-300/50 font-medium" style={{ fontFamily: MONO }}>Remix + Node.js</code> app.
                Found Redis usage in <code className="text-blue-300/50 font-medium" style={{ fontFamily: MONO }}>lib/session.ts</code> for session caching. Identified 2 external API deps.
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
              <div><span style={{ color: "rgba(192,132,252,0.5)" }}>aws</span> apprunner create-service \</div>
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
              <svg className="h-3.5 w-3.5 text-white/15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <path d="M13.5 7.5l-5.646 5.646a4 4 0 0 1-5.657-5.657l5.647-5.646a2.667 2.667 0 1 1 3.771 3.771L6.003 11.26a1.333 1.333 0 0 1-1.886-1.886l5.293-5.292" />
              </svg>
              <div
                className="flex h-[22px] w-[22px] items-center justify-center rounded-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.7) 0%, rgba(99,102,241,0.7) 100%)",
                  boxShadow: "0 2px 6px rgba(59,130,246,0.2)",
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
        <div className="flex flex-1 flex-col min-w-0 overflow-y-auto px-7 py-5" style={{ fontFamily: F }}>
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
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="rgba(96,165,250,0.5)"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" /></svg>
              TypeScript / Node.js (vite)
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[12px] mb-5" style={{ color: "rgba(52,211,153,0.6)" }}>
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" /></svg>
            Existing project - will create a new deployment
          </div>

          <label className="text-[12.5px] font-medium text-white/55 mb-2">Repository</label>
          <div className="flex items-center gap-2.5 mb-5 flex-wrap">
            {[
              { content: <><div className="h-4 w-4 rounded-full" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.4) 100%)" }} />sumansa...</>, },
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
                background: "rgba(59,130,246,0.04)",
                border: "1px solid rgba(59,130,246,0.2)",
                boxShadow: "0 0 20px rgba(59,130,246,0.04)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span style={{ color: "rgba(96,165,250,0.6)" }} className="text-[16px]">⬡</span>
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
          <div className="flex-1 overflow-y-auto px-3">
            {[
              { name: "VibeDoctor", desc: "Deploy to our managed infrastructure", price: "", active: false, soon: false, icon: "vibedoctor" as const },
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
                  background: target.active ? "rgba(59,130,246,0.04)" : "transparent",
                  border: target.active ? "1px solid rgba(59,130,246,0.18)" : "1px solid transparent",
                  boxShadow: target.active ? "0 0 20px rgba(59,130,246,0.04)" : "none",
                }}
              >
                <div
                  className="h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: target.active
                      ? "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.15) 100%)"
                      : "rgba(255,255,255,0.03)",
                    border: target.active ? "1px solid rgba(59,130,246,0.15)" : "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {target.icon === "vibedoctor" ? (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 1488 1634" fill="currentColor" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M988.937 1559.18C992.104 1562.57 1061.17 1643.79 1066.46 1610.22C1079.84 1525.21 891.517 1111.27 754.437 825.78C625.3 903.296 524.07 996.85 411.583 1097.57C343.874 1158.19 258.062 1233.58 191.995 1301.49C188.041 1305.92 184.081 1310.33 180.114 1314.68C160.301 1336.41 137.83 1360.02 106.059 1362.11C54.4461 1365.51 20.455 1344.49 0.27002 1288.61L0 1248.12C4.465 1222.05 32.6982 1189.92 60.6562 1162.51C264.969 928.56 457.725 566.293 425.423 250.933C419.719 195.232 397.131 128.429 405.57 76.3448L409.279 64.0997C436.52 -6.90835 518.746 -21.2053 575.874 32.7057C609.562 64.4977 671.17 199.981 692.095 245.572C723.987 315.065 767.82 407.618 792.677 477.797C801.457 502.584 814.029 539.749 829.087 585.716C994.904 528.784 1204.1 495.088 1359.76 554.978C1527.82 619.636 1522.65 756.344 1385.35 852.278C1293.4 916.526 1165.08 956.693 1056.52 984.508C1114.5 960.171 1170.11 934.717 1224.79 903.525C1271.89 876.657 1492.53 737.393 1385.12 668.68C1281.77 602.562 1066.76 664.634 964.08 709.333C932.783 722.956 906.489 736.433 881.624 750.361C976.873 1055.98 1101.83 1494.75 1086.31 1602.39C1074.22 1686.25 1001.74 1577.68 988.933 1559.18L988.937 1559.18ZM670.97 654.55C652.753 617.764 638.135 588.663 628.705 570.137C619.445 551.946 610.43 532.991 601.576 513.592C587.326 589.397 564.518 666.471 535.121 742.731C578.52 710.47 623.716 680.528 670.972 654.55H670.97Z" transform="scale(1, -1) translate(0, -1634)" />
                    </svg>
                  ) : target.icon === "gcp" ? (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 512 512" fill="none">
                      <path fill="#FBBC04" d="M144.4,272c-6.4,0-12.4-3.8-14.9-10.1L55.4,75.9c-3.3-8.2.7-17.5,8.9-20.8,8.2-3.3,17.5.7,20.8,8.9l74.2,186c3.3,8.2-.7,17.5-8.9,20.8-1.9.8-3.9,1.1-5.9,1.1h-.1Z" />
                      <path fill="#EA4335" d="M256,272c-6.4,0-12.4-3.8-14.9-10.1l-74.1-186c-2.6-6.6-.6-14.1,5-18.5s13.4-4.5,19.2-.4l260.1,186c7.2,5.1,8.9,15.1,3.7,22.3s-15.1,8.9-22.3,3.7L216.9,114.7l54,135.3c3.3,8.2-.7,17.5-8.9,20.8-1.9.8-4,1.1-5.9,1.1h-.1Z" />
                      <path fill="#34A853" d="M127.2,256l-72,180c-3.3,8.2.7,17.5,8.9,20.8,3.1,1.2,4,1.1,5.9,1.1,6.3,0,12.4-3.8,14.9-10.1l74.4-186c.8-2,1.1-4,1.1-5.9h-33.2Z" />
                      <path fill="#4285F4" d="M414.5,256l-197.7,141.2,54.1-135.3c.8-2,1.1-4,1.1-5.9h-33.2l-72,180c-2.6,6.6-.6,14.1,5,18.5,2.9,2.3,6.4,3.4,9.9,3.4s6.5-1,9.3-3l260.4-186c4.4-3.1,6.7-8,6.7-13h-43.6Z" />
                    </svg>
                  ) : target.icon === "aws" ? (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FF9900" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104-.296.072-.583.16-.863.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.878.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" />
                      <path fill="#FF9900" d="M21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
                    </svg>
                  ) : target.icon === "cloudflare" ? (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFF" d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z"/>
                      <path fill="#F38020" d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"/>
                      <path fill="#FAAE40" d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"/>
                    </svg>
                  ) : target.icon === "azure" ? (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="azureGrad1" x1="-1032.17" y1="145.31" x2="-1059.46" y2="65.43" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#114a8b"/>
                          <stop offset="1" stopColor="#0669bc"/>
                        </linearGradient>
                        <linearGradient id="azureGrad2" x1="-1023.73" y1="108.08" x2="-1029.98" y2="105.97" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopOpacity=".3"/>
                          <stop offset=".07" stopOpacity=".2"/>
                          <stop offset=".32" stopOpacity=".1"/>
                          <stop offset=".62" stopOpacity=".05"/>
                          <stop offset="1" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="azureGrad3" x1="-1027.16" y1="147.64" x2="-997.48" y2="65.43" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#3ccbf4"/>
                          <stop offset="1" stopColor="#2892df"/>
                        </linearGradient>
                      </defs>
                      <path d="M33.34 6.54h26.04L33.78 89.2a4.15 4.15 0 0 1-3.93 2.81H8.15a4.14 4.14 0 0 1-3.92-5.47L29.41 9.35a4.15 4.15 0 0 1 3.93-2.81z" fill="url(#azureGrad1)"/>
                      <path d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.12h23.39z" fill="url(#azureGrad3)"/>
                      <path d="M33.34 6.54a4.12 4.12 0 0 0-3.94 2.86L4.26 86.52a4.13 4.13 0 0 0 3.9 5.49h20.08a4.44 4.44 0 0 0 3.41-2.87l4.85-14.32 17.35 16.19a4.24 4.24 0 0 0 2.67.96h23.28L71.07 60.26H41.2l19.45-53.72z" fill="url(#azureGrad2)"/>
                      <path d="M66.59 9.35a4.14 4.14 0 0 0-3.93-2.81H33.61a4.15 4.15 0 0 1 3.93 2.81l25.18 77.19a4.14 4.14 0 0 1-3.93 5.47h29.05a4.14 4.14 0 0 0 3.93-5.47z" fill="url(#azureGrad3)"/>
                    </svg>
                  ) : target.icon === "kubernetes" ? (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9999 0C11.5247 0.000521512 11.0541 0.104619 10.6185 0.306152L3.22852 3.74512C2.62441 4.02476 2.12516 4.47873 1.79297 5.04883L0.292969 7.60059C-0.0957017 8.25869 -0.0801418 9.07001 0.146484 9.7793L2.78711 18.1426C2.97619 18.7499 3.36045 19.2803 3.87988 19.6504L10.5498 23.5771C11.1475 23.9424 11.7882 24.0126 11.9999 24C12.2117 24.0126 12.8523 23.9424 13.4501 23.5771L20.1201 19.6504C20.6395 19.2803 21.0238 18.7499 21.2128 18.1426L23.8535 9.7793C24.0801 9.07001 24.0957 8.25869 23.707 7.60059L22.207 5.04883C21.8748 4.47873 21.3756 4.02476 20.7715 3.74512L13.3813 0.306152C12.9457 0.104619 12.4751 0.000521512 11.9999 0Z" fill="#326CE5"/>
                      <path d="M12 5.25C11.5859 5.25 11.25 5.58594 11.25 6V6.32812C10.5039 6.47266 9.82031 6.79883 9.25195 7.27344L8.97266 7.09961C8.61719 6.875 8.14453 6.99219 7.91992 7.34766L7.41992 8.15234C7.19531 8.50781 7.3125 8.98047 7.66797 9.20508L7.94727 9.37891C7.82031 9.76758 7.75 10.1758 7.75 10.6C7.75 11.0242 7.82031 11.4324 7.94727 11.8184L7.66797 11.9922C7.3125 12.2168 7.19531 12.6895 7.41992 13.0449L7.91992 13.8496C8.14453 14.2051 8.61719 14.3223 8.97266 14.0977L9.25195 13.9238C9.82031 14.3984 10.5039 14.7246 11.25 14.8691V15.1973C11.25 15.6113 11.5859 15.9473 12 15.9473C12.4141 15.9473 12.75 15.6113 12.75 15.1973V14.8691C13.4961 14.7246 14.1797 14.3984 14.748 13.9238L15.0273 14.0977C15.3828 14.3223 15.8555 14.2051 16.0801 13.8496L16.5801 13.0449C16.8047 12.6895 16.6875 12.2168 16.332 11.9922L16.0527 11.8184C16.1797 11.4324 16.25 11.0242 16.25 10.6C16.25 10.1758 16.1797 9.76758 16.0527 9.37891L16.332 9.20508C16.6875 8.98047 16.8047 8.50781 16.5801 8.15234L16.0801 7.34766C15.8555 6.99219 15.3828 6.875 15.0273 7.09961L14.748 7.27344C14.1797 6.79883 13.4961 6.47266 12.75 6.32812V6C12.75 5.58594 12.4141 5.25 12 5.25ZM12 8.5C13.1719 8.5 14.125 9.42383 14.125 10.6C14.125 11.7762 13.1719 12.7 12 12.7C10.8281 12.7 9.875 11.7762 9.875 10.6C9.875 9.42383 10.8281 8.5 12 8.5Z" fill="white"/>
                    </svg>
                  ) : target.icon === "vps" ? (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="6" rx="1.5" fill="#6366F1" fillOpacity="0.9"/>
                      <rect x="2" y="11" width="20" height="6" rx="1.5" fill="#818CF8" fillOpacity="0.7"/>
                      <circle cx="18.5" cy="6" r="1" fill="#34D399"/>
                      <circle cx="18.5" cy="14" r="1" fill="rgba(255,255,255,0.3)"/>
                      <circle cx="15.5" cy="6" r="1" fill="rgba(255,255,255,0.4)"/>
                      <circle cx="15.5" cy="14" r="1" fill="rgba(255,255,255,0.2)"/>
                      <path d="M5 6h6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M5 14h6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M8 20v-3M12 20v-3M16 20v-3" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M6 20h12" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ) : null}
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

/* ─────────────────────────────────────────────
   Main showcase with carousel
   ───────────────────────────────────────────── */
export function FramerProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;

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
      const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
      const max = scrollWidth - clientWidth;
      if (max > 0) setActiveSlide(scrollLeft > max * 0.5 ? 1 : 0);
    };
    scrollEl.addEventListener("scroll", onH, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onH);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * index + index * 20, behavior: "smooth" });
    setActiveSlide(index);
  }, []);

  const goNext = useCallback(() => scrollToSlide((activeSlide + 1) % totalSlides), [activeSlide, scrollToSlide]);
  const goPrev = useCallback(() => scrollToSlide((activeSlide - 1 + totalSlides) % totalSlides), [activeSlide, scrollToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      scrollToSlide((activeSlide + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlide, scrollToSlide]);

  const scale = 0.88 + scrollProgress * 0.12;
  const opacity = Math.min(1, scrollProgress * 1.8);
  const rotateX = (1 - scrollProgress) * 6;
  const translateY = (1 - scrollProgress) * 40;

  return (
    <section className="relative overflow-hidden bg-[#04070d] py-16 sm:py-28" style={{ perspective: "1400px" }}>
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "1000px",
          height: "700px",
          opacity: opacity * 0.06,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(96,165,250,0.4) 0%, rgba(4,7,13,0) 70%)",
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
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
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
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <ScreenCodeEditor />
              <ScreenDeployment />
            </div>
          </div>

          {/* Navigation pills */}
          <div className="flex items-center justify-center gap-2 mt-7">
            {["Tasks", "Deployments"].map((label, i) => (
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
                      ? "linear-gradient(90deg, rgba(59,130,246,0.8) 0%, rgba(99,102,241,0.8) 100%)"
                      : "rgba(255,255,255,0.15)",
                    boxShadow: activeSlide === i ? "0 0 8px rgba(59,130,246,0.3)" : "none",
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

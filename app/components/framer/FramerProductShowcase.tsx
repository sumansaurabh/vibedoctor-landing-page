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
            className="flex items-center gap-2.5 px-4 py-2 text-[10.5px] font-medium"
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
          <span className="block text-[10px] text-white/50 truncate font-medium" style={{ fontFamily: F }}>Suman Saurabh</span>
          <span className="block text-[8px] text-white/20 truncate" style={{ fontFamily: F }}>ss.sumansaurabh92@gmail.c...</span>
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
          { name: "Build and deploy AI apps with Ag...", active: false, repo: "vibedoctor/agent-sdk" },
          { name: "Remove FramerPricing component", active: false, repo: "vibedoctor/landing-page" },
          { name: "Improve task processing accu...", active: false, repo: "vibedoctor/agent-core" },
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
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] text-white/50 font-medium"
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
            <span className="block truncate text-[10.5px] text-white/75 font-medium leading-tight" style={{ fontFamily: F }}>sunil-portfolio</span>
            <span className="block truncate text-[8.5px] text-white/25 mt-0.5" style={{ fontFamily: F }}>sumansaurabh/sun... · 08/03/2026</span>
          </div>
          <span className="text-[8px] text-green-400/60 font-medium bg-green-400/[0.08] rounded px-1.5 py-0.5">Live</span>
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
                className="rounded-md px-3 py-1 text-[10.5px] font-medium transition-all"
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
        <div className="ml-3 flex items-center gap-2 text-[11px]" style={{ fontFamily: F }}>
          <svg className="h-3.5 w-3.5 text-white/25" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z" />
          </svg>
          <span className="text-white/65 font-medium">Improve website clarity and fix broken links</span>
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
                { name: "FramerHero.tsx", active: true },
                { name: "FramerFounder.tsx", active: false },
                { name: "_index.tsx", active: false },
              ].map((tab, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3.5 py-[7px] text-[10.5px]"
                  style={{
                    fontFamily: F,
                    color: tab.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                    background: tab.active ? "rgba(13,17,23,0.8)" : "transparent",
                    borderBottom: tab.active ? "2px solid rgba(59,130,246,0.6)" : "2px solid transparent",
                    borderRight: "1px solid rgba(255,255,255,0.03)",
                  }}
                >
                  <span style={{ color: tab.active ? "rgba(96,165,250,0.6)" : "rgba(255,255,255,0.15)" }}>
                    <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9z" /></svg>
                  </span>
                  {tab.name}
                </div>
              ))}
            </div>
            <div className="ml-auto mr-4 text-[9px] text-white/15" style={{ fontFamily: MONO }}>app/components/framer/</div>
          </div>

          {/* Diff view */}
          <div className="flex-1 overflow-hidden p-0" style={{ background: "rgba(13,17,23,0.5)" }}>
            <div className="h-full overflow-y-auto text-[10.5px] leading-[19px]" style={{ fontFamily: MONO }}>
              {[
                { num: 78, code: '              backgroundClip: "text",', type: "normal" },
                { num: 79, code: "            }}", type: "normal" },
                { num: 80, code: "          >", type: "normal" },
                { num: 81, code: '            Code from Anywhere{" "}', type: "deleted" },
                { num: 82, code: '            Ship AI Apps to{" "}', type: "added" },
                { num: 83, code: "            <span", type: "normal" },
                { num: 84, code: '              className="font-normal italic text-[32px]...', type: "normal" },
                { num: 85, code: '              style={{ fontFamily: ibmPlexFamily }}', type: "normal" },
                { num: 86, code: "            >", type: "normal" },
                { num: 87, code: "            using your favourite Agent.", type: "deleted" },
                { num: 88, code: "            Customer-Owned Cloud.", type: "added" },
                { num: 89, code: "          </span>", type: "normal" },
                { num: 90, code: "          </h1>", type: "normal" },
                { num: 91, code: "", type: "normal" },
                { num: 92, code: "          <p", type: "normal" },
                { num: 93, code: '            className="max-w-[680px] mt-6 text-lg font-normal..."', type: "normal" },
                { num: 94, code: "            style={{ fontFamily: '\"Inter\", sans-serif' }}", type: "normal" },
                { num: 95, code: "          >", type: "normal" },
                { num: 96, code: '            Build your AI apps and deploy to your Cloud using just Agent sub...', type: "normal" },
                { num: 97, code: "            <br />", type: "normal" },
                { num: 98, code: '            Do not pay heavy token cost to Lovable or Replit.{" "}', type: "deleted" },
                { num: 99, code: "            An AI-native IDE in your browser. Connect with your AI agent...", type: "added" },
                { num: 100, code: '            EC2, or private infrastructure. No vendor lock-in.{" "}', type: "added" },
                { num: 101, code: "          </p>", type: "normal" },
                { num: 102, code: '          {/* Two-step CTA */}', type: "normal" },
                { num: 103, code: "           <a", type: "normal" },
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
                    className="flex-shrink-0 w-5 select-none text-center text-[11px]"
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
              <span className="text-[9px] font-semibold uppercase tracking-wider text-white/40" style={{ fontFamily: F }}>Logs</span>
              <span className="h-3 w-px bg-white/[0.06]" />
              <span className="text-[9px] text-white/20 uppercase tracking-wider" style={{ fontFamily: F }}>Terminal</span>
            </div>
            <div className="px-3 py-1.5 text-[9.5px] leading-[15px] text-white/25 space-y-[2px] overflow-hidden" style={{ fontFamily: MONO }}>
              <div><span className="text-green-400/50">✓</span> Website generated successfully.</div>
              <div><span className="text-white/10">10:42:18</span> <span className="text-blue-400/30">Creating task continuation ——————</span></div>
              <div><span className="text-white/10">10:42:19</span> Processing follow-up actions...</div>
              <div><span className="text-white/10">10:42:20</span> Using authenticated Git access</div>
              <div><span className="text-white/10">10:42:21</span> <span className="text-amber-400/30">⟳</span> Staging files for commit...</div>
            </div>
          </div>
        </div>

        {/* Right: Chat panel */}
        <div
          className="hidden lg:flex w-[22.1%] flex-shrink-0 flex-col"
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(180deg, rgba(13,17,23,0.5) 0%, rgba(10,14,22,0.7) 100%)",
          }}
        >
          <div className="flex items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            {["Chat", "Deployments"].map((tab, i) => (
              <button
                key={tab}
                className="flex-1 py-2.5 text-[10.5px] font-medium"
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
              <h4 className="text-[10.5px] font-semibold text-white/65 mb-1.5" style={{ fontFamily: F }}>What happened:</h4>
              <p className="text-[9.5px] leading-[14px] text-white/35" style={{ fontFamily: F }}>
                In client-side bundles, the <code className="text-blue-300/50 font-medium" style={{ fontFamily: MONO }}>process</code> object is often
                undefined. The fix checks for <code className="text-blue-300/50 font-medium" style={{ fontFamily: MONO }}>typeof process</code> before accessing env.
              </p>
            </div>
            <div>
              <h4 className="text-[10.5px] font-semibold text-white/65 mb-1.5" style={{ fontFamily: F }}>The fix:</h4>
              <p className="text-[9.5px] leading-[14px] text-white/35" style={{ fontFamily: F }}>
                Updated meta functions to safely check <code className="text-blue-300/50 font-medium" style={{ fontFamily: MONO }}>process.env</code> existence.
              </p>
            </div>
            <div
              className="rounded-lg p-2.5 text-[9px] leading-[14px]"
              style={{
                fontFamily: MONO,
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div><span style={{ color: "rgba(192,132,252,0.5)" }}>typeof</span> process !== <span style={{ color: "rgba(134,239,172,0.5)" }}>"undefined"</span></div>
              <div className="mt-0.5">  ? process.env.PUBLIC_URL</div>
              <div>  : <span style={{ color: "rgba(134,239,172,0.5)" }}>"undefined"</span></div>
            </div>
            <div>
              <h4 className="text-[10.5px] font-semibold text-white/65 mb-1.5" style={{ fontFamily: F }}>Files changed:</h4>
              <div className="space-y-1.5">
                {["app/routes/_index.tsx", "app/lib/seo.ts"].map((file, i) => (
                  <div key={i} className="flex items-center gap-2 text-[9.5px] text-white/35">
                    <div className="h-1 w-1 rounded-full bg-blue-400/40" />
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
              <p className="text-[9.5px] text-green-300/55 flex items-center gap-1.5" style={{ fontFamily: F }}>
                <svg className="h-3 w-3 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor" style={{ color: "rgba(34,197,94,0.5)" }}><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" /></svg>
                Task merged successfully.
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
              <span className="flex-1 text-[10px] text-white/20" style={{ fontFamily: F }}>Ask a follow-up...</span>
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
          <h2 className="text-[17px] font-semibold text-white/90 mb-1 tracking-[-0.01em]">New Deployment</h2>
          <p className="text-[11px] text-white/30 mb-6">Deploy your application from a Git repository or uploaded folder.</p>

          <label className="text-[10.5px] font-medium text-white/55 mb-2">Project Name</label>
          <div className="flex gap-3 mb-5">
            <div
              className="flex-1 flex items-center justify-between rounded-lg px-3 py-2 text-[11px] text-white/65"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              sunil-portfolio
              <svg className="h-3 w-3 text-white/20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
            </div>
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] text-white/45"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="rgba(96,165,250,0.5)"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" /></svg>
              TypeScript / Node.js (vite)
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] mb-5" style={{ color: "rgba(52,211,153,0.6)" }}>
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" /></svg>
            Existing project — will create a new deployment run
          </div>

          <label className="text-[10.5px] font-medium text-white/55 mb-2">Repository</label>
          <div className="flex items-center gap-2.5 mb-5 flex-wrap">
            {[
              { content: <><div className="h-4 w-4 rounded-full" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.4) 100%)" }} />sumansa...</>, },
              { content: "sunil-portfolio" },
              { content: "feature/l..." },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-white/15 text-[11px] -ml-1 mr-0.5">{i === 1 ? "/" : "@"}</span>}
                <div
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10.5px] text-white/55"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {item.content}
                  <svg className="h-2.5 w-2.5 text-white/15" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
                </div>
              </div>
            ))}
          </div>

          <label className="text-[10.5px] font-medium text-white/55 mb-2">Deployment Method</label>
          <div className="flex gap-3 mb-4">
            <div
              className="flex-1 rounded-lg px-4 py-3 text-[11px]"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-white/20 text-[14px]">&lt;/&gt;</span>
                <div>
                  <span className="text-white/50 font-medium block">Build Commands</span>
                  <span className="block text-[9px] text-white/20 mt-0.5">npm/pip/cargo/go build</span>
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded-lg px-4 py-3 text-[11px]"
              style={{
                background: "rgba(59,130,246,0.04)",
                border: "1px solid rgba(59,130,246,0.2)",
                boxShadow: "0 0 20px rgba(59,130,246,0.04)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span style={{ color: "rgba(96,165,250,0.6)" }} className="text-[14px]">⬡</span>
                <div>
                  <span className="text-white/80 font-medium block">Dockerfile</span>
                  <span className="block text-[9px] text-white/30 mt-0.5">1 found</span>
                </div>
              </div>
            </div>
          </div>

          <label className="text-[9.5px] text-white/35 mb-1.5">Select Dockerfile</label>
          <div
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10.5px] text-white/50 w-fit mb-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            Dockerfile
            <svg className="h-2.5 w-2.5 text-white/15" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <svg className="h-2.5 w-2.5 text-white/25" viewBox="0 0 8 8" fill="currentColor"><path d="M1 2.5l3 3 3-3" /></svg>
            <span className="text-[10.5px] font-medium text-white/55">Environment Variables</span>
            <span className="text-[8px] font-medium rounded-md px-1.5 py-0.5" style={{ color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.06)" }}>1</span>
            <div className="ml-auto flex items-center gap-1.5 text-[9.5px] text-white/30">
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9z" /></svg>
              Import from .env file
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1 rounded-lg px-3 py-2 text-[10.5px] text-white/55" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>ANEK_EDITOR</div>
            <div className="flex-1 rounded-lg px-3 py-2 text-[10.5px] text-white/55" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>true</div>
            <button className="text-white/15 px-1.5 hover:text-white/30 transition-colors">
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06z" /></svg>
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-[9.5px] text-white/25">
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z" /></svg>
            Add Variable
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
            <h3 className="text-[13px] font-semibold text-white/80 tracking-[-0.01em]" style={{ fontFamily: F }}>Deploy To</h3>
          </div>
          <div className="flex-1 overflow-y-auto px-3">
            {[
              { name: "VibeDoctor", desc: "Deploy to our managed infrastructure", price: "~$3.75/mo", active: false, soon: false },
              { name: "Google Cloud Run (BYOC)", desc: "Deploy as a Docker container on GCR", price: "Pay per request", active: false, soon: false },
              { name: "AWS App Runner (BYOC)", desc: "Deploy as a Docker container on AWS", price: "", active: true, soon: false },
              { name: "Cloudflare Workers (BYOC)", desc: "Edge-first serverless deployment", price: "Free tier: 100K/day", active: false, soon: true },
              { name: "Azure (BYOC)", desc: "Deploy to Microsoft Azure", price: "", active: false, soon: true },
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
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    style={{ color: target.active ? "rgba(96,165,250,0.7)" : "rgba(255,255,255,0.18)" }}
                  >
                    <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10.5px] font-medium" style={{ fontFamily: F, color: target.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)" }}>{target.name}</span>
                    {target.soon && (
                      <span
                        className="text-[7.5px] font-semibold rounded-md px-1.5 py-0.5"
                        style={{ color: "rgba(52,211,153,0.7)", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.1)" }}
                      >
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] block mt-0.5" style={{ fontFamily: F, color: "rgba(255,255,255,0.25)" }}>{target.desc}</span>
                </div>
                {target.price && (
                  <span className="text-[8.5px] flex-shrink-0 whitespace-nowrap" style={{ fontFamily: F, color: "rgba(255,255,255,0.2)" }}>$ {target.price}</span>
                )}
                {target.active && (
                  <button
                    className="text-[9px] font-medium flex-shrink-0 rounded-lg px-2.5 py-1"
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

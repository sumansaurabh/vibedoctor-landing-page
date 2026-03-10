import { useEffect, useRef, useState } from "react";

/* ─── Shared sidebar used by both screens ─── */
function Sidebar({ interFamily, activeTab }: { interFamily: string; activeTab: number }) {
  return (
    <div className="hidden md:flex w-[20.4%] flex-shrink-0 flex-col border-r border-white/[0.06] bg-[#0a0e16]">
      {/* Nav tabs */}
      <div className="flex flex-col border-b border-white/[0.06]">
        {["Tasks", "Deployments", "Migrations"].map((tab, i) => (
          <div
            key={tab}
            className={`flex items-center gap-2 px-3 py-1.5 text-[10.5px] font-medium border-l-2 ${
              i === activeTab
                ? "border-l-blue-400/60 bg-white/[0.04] text-white/70"
                : "border-l-transparent text-white/30"
            }`}
            style={{ fontFamily: interFamily }}
          >
            <svg className="h-3 w-3 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor" style={{ opacity: i === activeTab ? 0.7 : 0.3 }}>
              {i === 0 && <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11zM5 5.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 5.75zm0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 9.75z" />}
              {i === 1 && <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />}
              {i === 2 && <path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3zm5.56-6.56a.75.75 0 1 1-1.06-1.06L11.44 5.5H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3z" />}
            </svg>
            {tab}
          </div>
        ))}
      </div>

      {/* Sidebar content depending on active tab */}
      {activeTab === 0 && <TasksSidebarContent interFamily={interFamily} />}
      {activeTab === 1 && <DeploymentsSidebarContent interFamily={interFamily} />}

      {/* Bottom user */}
      <div className="border-t border-white/[0.06] px-3 py-2 flex items-center gap-2 mt-auto">
        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40" />
        <span className="text-[10px] text-white/40 truncate" style={{ fontFamily: interFamily }}>Suman Saurabh</span>
      </div>
    </div>
  );
}

function TasksSidebarContent({ interFamily }: { interFamily: string }) {
  return (
    <>
      <div className="border-b border-white/[0.06] px-3 py-1.5">
        <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2 py-1">
          <svg className="h-3 w-3 text-white/25" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <span className="text-[10px] text-white/25" style={{ fontFamily: interFamily }}>Search files...</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="px-2 pt-2">
          <div className="mb-1 flex items-center gap-1 px-1">
            <svg className="h-2.5 w-2.5 text-white/30" viewBox="0 0 8 8" fill="currentColor"><path d="M1 2.5l3 3 3-3" /></svg>
            <span className="text-[10px] font-medium text-white/40" style={{ fontFamily: interFamily }}>Changes</span>
            <span className="ml-auto text-[9px] text-white/20">Files</span>
          </div>
          {[
            { name: "Improve website clarity and fix...", active: true },
            { name: "Improve landing page clarity a...", active: false },
            { name: "Add gpt-4.4 model to agent-mo...", active: false },
            { name: "Configure gpt-5.6 pricing in confi...", active: false },
            { name: "Add npm run in manifest...", active: false },
            { name: "Build premium AI SaaS landin...", active: false },
            { name: "Build and deploy AI apps with Ag...", active: false },
            { name: "Remove FramerPricing component", active: false },
            { name: "Improve task processing accu...", active: false },
          ].map((task, i) => (
            <div
              key={i}
              className={`flex items-start gap-1.5 rounded-md px-2 py-1.5 ${
                task.active ? "bg-white/[0.06] text-white/80" : "text-white/40"
              }`}
            >
              <span className="mt-0.5 text-[8px] text-white/20">▸</span>
              <div className="min-w-0 flex-1">
                <span className="block truncate text-[10.5px] leading-tight" style={{ fontFamily: interFamily }}>{task.name}</span>
                <span className="block truncate text-[9px] text-white/20 mt-0.5">
                  {i === 0 ? "vibedoctor/vibedoctor-landing-page" : i < 3 ? "vibedoctor/landing-..." : "vibedoctor/agent-..."}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-2 pt-2">
          <div className="mb-1 flex items-center gap-1 px-1">
            <svg className="h-2.5 w-2.5 text-white/30" viewBox="0 0 8 8" fill="currentColor"><path d="M1 2.5l3 3 3-3" /></svg>
            <span className="text-[10px] font-medium text-white/40" style={{ fontFamily: interFamily }}>components</span>
          </div>
          {["FramerHeader.tsx", "FramerFooter.tsx", "FramerHero.tsx", "FramerFounder.tsx"].map((file, i) => (
            <div key={i} className="flex items-center gap-1.5 rounded-md px-2 py-1 text-white/35">
              <svg className="h-3 w-3 flex-shrink-0 text-blue-400/50" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9zM8 5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 8 5z" />
              </svg>
              <span className="truncate text-[10.5px]" style={{ fontFamily: interFamily }}>{file}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DeploymentsSidebarContent({ interFamily }: { interFamily: string }) {
  return (
    <>
      <div className="border-b border-white/[0.06] px-3 py-2 flex items-center gap-2">
        <span className="text-[10px] text-white/50" style={{ fontFamily: interFamily }}>+ New Deployment</span>
        <svg className="h-3 w-3 text-white/25 ml-auto" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z" />
        </svg>
      </div>
      <div className="flex-1 overflow-hidden px-2 pt-2">
        <div className="flex items-center gap-2 rounded-md bg-white/[0.06] px-2 py-2 mb-1">
          <div className="h-4 w-4 rounded-full bg-green-400/20 flex items-center justify-center">
            <span className="text-[7px] text-green-400/70">✓</span>
          </div>
          <div className="min-w-0 flex-1">
            <span className="block truncate text-[10.5px] text-white/70 leading-tight" style={{ fontFamily: interFamily }}>sunil-portfolio</span>
            <span className="block truncate text-[9px] text-white/25 mt-0.5">sumansaurabh/sun... &nbsp; 08/03/2026</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Screen 1: Code Editor (Tasks view) ─── */
function ScreenCodeEditor({ interFamily }: { interFamily: string }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden rounded-xl border border-white/[0.06] snap-center"
      style={{
        width: "100%",
        aspectRatio: "1175 / 680",
        background: "linear-gradient(180deg, #0d1117 0%, #0a0e16 100%)",
      }}
    >
      {/* Top title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4" style={{ height: "5.15%" }}>
        <div className="flex items-center gap-1.5">
          <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 flex items-center gap-2 text-[11px]" style={{ fontFamily: interFamily }}>
          <svg className="h-3.5 w-3.5 text-white/30" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z" />
          </svg>
          <span className="text-white/70 font-medium">Improve website clarity and fix broken links</span>
        </div>
        <div className="ml-auto flex items-center gap-0.5">
          {["Code", "Chat", "Publish"].map((tab, i) => (
            <button
              key={tab}
              className={`rounded-md px-3 py-1 text-[11px] font-medium ${
                i === 0 ? "bg-white/[0.08] text-white/90" : "text-white/40"
              }`}
              style={{ fontFamily: interFamily }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex absolute inset-0" style={{ top: "5.15%" }}>
        <Sidebar interFamily={interFamily} activeTab={0} />

        {/* Center — Code editor */}
        <div className="flex flex-1 flex-col min-w-0">
          <div className="flex items-center border-b border-white/[0.06] bg-[#0c1018]">
            <div className="flex items-center overflow-x-auto">
              {[
                { name: "FramerHero.tsx", active: true },
                { name: "FramerFounder.tsx", active: false },
                { name: "_index.tsx", active: false },
              ].map((tab, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-1.5 border-r border-white/[0.04] px-3 py-1.5 text-[11px] ${
                    tab.active ? "bg-[#0d1117] text-white/80 border-b-2 border-b-blue-400/60" : "text-white/35"
                  }`}
                  style={{ fontFamily: interFamily }}
                >
                  <svg className="h-3 w-3 flex-shrink-0 text-blue-400/50" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9z" />
                  </svg>
                  {tab.name}
                </div>
              ))}
            </div>
            <div className="ml-auto mr-3 text-[10px] text-white/20" style={{ fontFamily: interFamily }}>app/components/framer/</div>
          </div>

          <div className="flex-1 overflow-hidden bg-[#0d1117] p-0">
            <div className="h-full overflow-y-auto font-mono text-[11px] leading-[18px]">
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
                { num: 96, code: '            Build your AI apps and deploy to your Cloud using just Agent subscription.{" "}', type: "normal" },
                { num: 97, code: "            <br />", type: "normal" },
                { num: 98, code: '            Do not pay heavy token cost to Lovable or Replit.{" "}', type: "deleted" },
                { num: 99, code: "            An AI-native IDE in your browser. Connect with your AI agent and seamlessly deploy to your PC,", type: "added" },
                { num: 100, code: '            EC2, or private infrastructure. No vendor lock-in, just your code in your cloud.{" "}', type: "added" },
                { num: 101, code: "          </p>", type: "normal" },
                { num: 102, code: '          {/* Two-step CTA */}', type: "normal" },
                { num: 103, code: "           <a", type: "normal" },
              ].map((line, i) => (
                <div
                  key={i}
                  className={`flex ${
                    line.type === "added" ? "bg-[#1a3a2a]/60" : line.type === "deleted" ? "bg-[#3a1a1a]/60" : ""
                  }`}
                >
                  <span className="w-[44px] flex-shrink-0 select-none px-2 text-right text-white/15">{line.num}</span>
                  <span className={`flex-shrink-0 w-4 select-none text-center ${
                    line.type === "added" ? "text-green-400/70" : line.type === "deleted" ? "text-red-400/70" : "text-transparent"
                  }`}>
                    {line.type === "added" ? "+" : line.type === "deleted" ? "−" : " "}
                  </span>
                  <span className={`flex-1 whitespace-pre pr-4 ${
                    line.type === "added" ? "text-green-300/70" : line.type === "deleted" ? "text-red-300/60 line-through decoration-red-400/30" : "text-white/50"
                  }`}>
                    {line.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] bg-[#0a0e14]" style={{ height: "14%" }}>
            <div className="flex items-center gap-2 border-b border-white/[0.04] px-3 py-1">
              <span className="text-[10px] font-medium text-white/50" style={{ fontFamily: interFamily }}>LOGS</span>
              <span className="text-[10px] text-white/20">|</span>
              <span className="text-[10px] text-white/30" style={{ fontFamily: interFamily }}>TERMINAL</span>
              <span className="text-[10px] text-white/20 ml-auto">4m Archives</span>
            </div>
            <div className="px-3 py-2 font-mono text-[10px] leading-[16px] text-white/30 space-y-0.5 overflow-hidden">
              <div><span className="text-green-400/50">✓</span> Website generated successfully.</div>
              <div><span className="text-white/15">10:42:18</span> <span className="text-blue-400/40">Creating task continuation ——————————</span></div>
              <div><span className="text-white/15">10:42:19</span> Processing follow-up actions...</div>
              <div><span className="text-white/15">10:42:20</span> Using authenticated Git access</div>
              <div><span className="text-white/15">10:42:21</span> <span className="text-yellow-400/40">⟳</span> Staging files for commit...</div>
            </div>
          </div>
        </div>

        {/* Right panel — Chat */}
        <div className="hidden lg:flex w-[22.1%] flex-shrink-0 flex-col border-l border-white/[0.06] bg-[#0a0e16]">
          <div className="flex items-center border-b border-white/[0.06]">
            {["Chat", "Deployments"].map((tab, i) => (
              <button
                key={tab}
                className={`flex-1 py-2 text-[11px] font-medium border-b-2 ${
                  i === 0 ? "border-b-blue-400/60 text-white/80" : "border-b-transparent text-white/35"
                }`}
                style={{ fontFamily: interFamily }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            <div>
              <h4 className="text-[11px] font-semibold text-white/70 mb-1.5" style={{ fontFamily: interFamily }}>What happened:</h4>
              <p className="text-[10px] leading-[15px] text-white/40" style={{ fontFamily: interFamily }}>
                In environments like the client-side bundles, the <code className="text-blue-300/50">process</code> object is often
                undefined. The fix checks for <code className="text-blue-300/50">typeof process</code> before accessing <code className="text-blue-300/50">process.env</code>.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold text-white/70 mb-1.5" style={{ fontFamily: interFamily }}>The fix:</h4>
              <p className="text-[10px] leading-[15px] text-white/40" style={{ fontFamily: interFamily }}>
                Updated the client-side meta functions and SEO utilities to safely check for the existence of <code className="text-blue-300/50">process.env</code> before reading variables.
              </p>
            </div>
            <div className="rounded-md bg-white/[0.04] border border-white/[0.06] p-2 font-mono text-[9.5px] leading-[14px] text-white/45">
              <div><span className="text-purple-300/50">typeof</span> process !== <span className="text-green-300/50">"undefined"</span></div>
              <div className="mt-0.5">? process.env.PUBLIC_URL</div>
              <div>: <span className="text-green-300/50">"undefined"</span></div>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold text-white/70 mb-1.5" style={{ fontFamily: interFamily }}>Files changed:</h4>
              <div className="space-y-1">
                {["app/routes/_index.tsx", "app/lib/seo.ts"].map((file, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[10px] text-white/40">
                    <svg className="h-2.5 w-2.5 text-blue-400/40" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25V1.75z" />
                    </svg>
                    <span style={{ fontFamily: interFamily }}>{file}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md bg-green-400/[0.06] border border-green-400/[0.1] p-2">
              <p className="text-[10px] text-green-300/60" style={{ fontFamily: interFamily }}>This task has been merged and is no longer active.</p>
            </div>
          </div>
          <div className="border-t border-white/[0.06] px-3 py-2.5">
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2">
              <span className="flex-1 text-[10.5px] text-white/25" style={{ fontFamily: interFamily }}>Ask a follow-up...</span>
              <div className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-white/20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                  <path d="M13.5 7.5l-5.646 5.646a4 4 0 0 1-5.657-5.657l5.647-5.646a2.667 2.667 0 1 1 3.771 3.771L6.003 11.26a1.333 1.333 0 0 1-1.886-1.886l5.293-5.292" />
                </svg>
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-500/70">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894l-13-6.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen 2: Deployment (from screenshot) ─── */
function ScreenDeployment({ interFamily }: { interFamily: string }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden rounded-xl border border-white/[0.06] snap-center"
      style={{
        width: "100%",
        aspectRatio: "1175 / 680",
        background: "linear-gradient(180deg, #0d1117 0%, #0a0e16 100%)",
      }}
    >
      {/* Top title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4" style={{ height: "5.15%" }}>
        <div className="flex items-center gap-1.5">
          <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 flex items-center gap-2 text-[11px]" style={{ fontFamily: interFamily }}>
          <svg className="h-3.5 w-3.5 text-white/30" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="text-white/70 font-medium">New Deployment</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="rounded-md px-3 py-1 text-[11px] font-medium text-white/40 border border-white/[0.1]" style={{ fontFamily: interFamily }}>Cancel</button>
          <button className="rounded-md px-3 py-1 text-[11px] font-medium  text-white/40 border border-white/[0.1]" style={{ fontFamily: interFamily }}>Create Deployment</button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex absolute inset-0" style={{ top: "5.15%" }}>
        <Sidebar interFamily={interFamily} activeTab={1} />

        {/* Center — Deployment form */}
        <div className="flex flex-1 flex-col min-w-0 overflow-y-auto p-5" style={{ fontFamily: interFamily }}>
          <h2 className="text-[16px] font-semibold text-white/90 mb-0.5">New Deployment</h2>
          <p className="text-[11px] text-white/35 mb-5">Deploy your application from a Git repository or uploaded folder.</p>

          {/* Project Name */}
          <label className="text-[11px] font-medium text-white/60 mb-1.5">Project Name</label>
          <div className="flex gap-2 mb-4">
            <div className="flex-1 rounded-md border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/70 flex items-center justify-between">
              sunil-portfolio
              <svg className="h-3 w-3 text-white/20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/50">
              <svg className="h-3.5 w-3.5 text-blue-400/60" viewBox="0 0 16 16" fill="currentColor"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" /></svg>
              TypeScript / Node.js (vite)
            </div>
          </div>

          <div className="text-[10px] text-emerald-400/60 mb-4 flex items-center gap-1">
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" /></svg>
            Existing project - will create a new deployment run
          </div>

          {/* Repository */}
          <label className="text-[11px] font-medium text-white/60 mb-1.5">Repository</label>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5 rounded-md border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60">
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40" />
              sumansa...
              <svg className="h-2.5 w-2.5 text-white/20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
            </div>
            <span className="text-white/20 text-[11px]">/</span>
            <div className="flex items-center gap-1.5 rounded-md border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60">
              sunil-portfolio
              <svg className="h-2.5 w-2.5 text-white/20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
            </div>
            <span className="text-white/20 text-[11px]">@</span>
            <div className="flex items-center gap-1.5 rounded-md border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60">
              feature/l...
              <svg className="h-2.5 w-2.5 text-white/20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
            </div>
          </div>

          {/* Deployment Method */}
          <label className="text-[11px] font-medium text-white/60 mb-1.5">Deployment Method</label>
          <div className="flex gap-2 mb-3">
            <div className="flex-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-white/30 text-[13px]">&lt;/&gt;</span>
                <div>
                  <span className="text-white/60 font-medium">Build Commands</span>
                  <span className="block text-[9px] text-white/25 mt-0.5">npm/pip/cargo/go build</span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md border border-blue-400/30 bg-blue-400/[0.06] px-3 py-2.5 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-blue-400/60 text-[13px]">⬡</span>
                <div>
                  <span className="text-white/80 font-medium">Dockerfile</span>
                  <span className="block text-[9px] text-white/35 mt-0.5">1 found</span>
                </div>
              </div>
            </div>
          </div>

          <label className="text-[10px] text-white/40 mb-1">Select Dockerfile</label>
          <div className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50 w-fit mb-4">
            Dockerfile
            <svg className="h-2.5 w-2.5 text-white/20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z" /></svg>
          </div>

          {/* Env vars */}
          <div className="flex items-center gap-2 mb-2">
            <svg className="h-2.5 w-2.5 text-white/30" viewBox="0 0 8 8" fill="currentColor"><path d="M1 2.5l3 3 3-3" /></svg>
            <span className="text-[11px] font-medium text-white/60">Environment Variables</span>
            <span className="text-[9px] bg-white/[0.08] text-white/40 rounded px-1.5 py-0.5">1</span>
            <div className="ml-auto flex items-center gap-1 text-[10px] text-white/35">
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9z" /></svg>
              Import from .env file
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1 rounded-md border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/60">ANEK_EDITOR</div>
            <div className="flex-1 rounded-md border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/60">true</div>
            <button className="text-white/20 px-1">
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.22 4.22a.75.75 0 0 1 1.06 0L8 6.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L9.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L8 9.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L6.94 8 4.22 5.28a.75.75 0 0 1 0-1.06z" /></svg>
            </button>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-white/30">
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z" /></svg>
            Add Variable
          </div>
        </div>

        {/* Right panel — Deploy To */}
        <div className="hidden lg:flex w-[30%] flex-shrink-0 flex-col border-l border-white/[0.06] bg-[#0a0e16]">
          <div className="px-4 pt-4 pb-2">
            <h3 className="text-[13px] font-semibold text-white/80" style={{ fontFamily: interFamily }}>Deploy To</h3>
          </div>
          <div className="flex-1 overflow-y-auto px-2">
            {[
              { name: "VibeDoctor", desc: "Deploy to our managed infrastructure", price: "$ ~$3.75/mo", active: false, soon: false },
              { name: "Google Cloud Run (BYOC)", desc: "Deploy as a Docker container on GCR", price: "$ Pay per request + compute", active: false, soon: false },
              { name: "AWS App Runner (BYOC)", desc: "Deploy as a Docker container on AWS", price: "", active: true, soon: false },
              { name: "Cloudflare Workers (BYOC)", desc: "Edge-first serverless deployment", price: "$ Free tier: 100K req/day", active: false, soon: true },
              { name: "Azure (BYOC)", desc: "Deploy to Microsoft Azure", price: "", active: false, soon: true },
            ].map((target, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 mb-1 ${
                  target.active ? "border border-blue-400/30 bg-blue-400/[0.04]" : "border border-transparent hover:bg-white/[0.02]"
                }`}
              >
                <div className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                  target.active ? "bg-blue-400/10" : "bg-white/[0.04]"
                }`}>
                  <svg className={`h-3.5 w-3.5 ${target.active ? "text-blue-400/70" : "text-white/25"}`} viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium text-white/70" style={{ fontFamily: interFamily }}>{target.name}</span>
                    {target.soon && (
                      <span className="text-[8px] font-medium text-emerald-400/70 bg-emerald-400/[0.1] rounded px-1.5 py-0.5">Coming Soon</span>
                    )}
                  </div>
                  <span className="text-[9px] text-white/30 block mt-0.5" style={{ fontFamily: interFamily }}>{target.desc}</span>
                </div>
                {target.price && (
                  <span className="text-[9px] text-white/25 flex-shrink-0 whitespace-nowrap" style={{ fontFamily: interFamily }}>{target.price}</span>
                )}
                {target.active && (
                  <span className="text-[9px] text-white/40 border border-white/[0.1] rounded px-2 py-0.5 flex-shrink-0" style={{ fontFamily: interFamily }}>Configure</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main showcase component ─── */
export function FramerProductShowcase() {
  const interFamily = '"Inter", sans-serif';
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH;
      const end = windowH * 0.3;
      const current = rect.top;
      const progress = Math.min(1, Math.max(0, (start - current) / (start - end)));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track horizontal scroll for dot indicator
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const onHScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setActiveSlide(scrollLeft > maxScroll * 0.5 ? 1 : 0);
      }
    };
    scrollEl.addEventListener("scroll", onHScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onHScroll);
  }, []);

  const totalSlides = 2;

  const scrollToSlide = (index: number) => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const slideWidth = scrollEl.clientWidth;
    scrollEl.scrollTo({ left: slideWidth * index + index * 20, behavior: "smooth" });
    setActiveSlide(index);
  };

  const goNext = () => scrollToSlide((activeSlide + 1) % totalSlides);
  const goPrev = () => scrollToSlide((activeSlide - 1 + totalSlides) % totalSlides);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % totalSlides;
        scrollToSlide(next);
        return prev; // actual update comes from scroll listener
      });
    }, 6000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide]);

  const scale = 0.88 + scrollProgress * 0.12;
  const opacity = Math.min(1, scrollProgress * 1.8);
  const rotateX = (1 - scrollProgress) * 6;
  const translateY = (1 - scrollProgress) * 40;

  return (
    <section className="relative overflow-hidden bg-[#04070d] py-16 sm:py-24" style={{ perspective: "1200px" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px]"
        style={{
          opacity: opacity * 0.07,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(184,199,217,0.8) 0%, rgba(4,7,13,0) 100%)",
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
            transition: "transform 0.05s linear, opacity 0.05s linear",
          }}
        >
          {/* Carousel wrapper with arrows */}
          <div className="relative group">
            {/* Left arrow */}
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/[0.1] text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:text-white/90"
              aria-label="Previous slide"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12L6 8l4-4" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/[0.1] text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:text-white/90"
              aria-label="Next slide"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 12l4-4-4-4" />
              </svg>
            </button>

            {/* Horizontal scroll container */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 ${20 * scrollProgress}px ${60 * scrollProgress}px rgba(0,0,0,0.5), 0 0 ${120 * scrollProgress}px rgba(100,120,180,0.04)`,
                borderRadius: "12px",
              }}
            >
              <ScreenCodeEditor interFamily={interFamily} />
              <ScreenDeployment interFamily={interFamily} />
            </div>
          </div>

          {/* Dot indicators + labels */}
          <div className="flex items-center justify-center gap-3 mt-5">
            {["Tasks", "Deployments"].map((label, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? "bg-white/[0.08] text-white/70"
                    : "text-white/25 hover:text-white/40"
                }`}
                style={{ fontFamily: interFamily }}
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === i ? "w-5 bg-white/50" : "w-1.5 bg-white/20"
                  }`}
                />
                <span className="text-[11px] font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-1"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #d8e7f212 0%, #04070d 100%)" }}
      />
    </section>
  );
}

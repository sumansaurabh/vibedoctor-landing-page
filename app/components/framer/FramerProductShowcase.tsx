import { useEffect, useRef, useState } from "react";

export function FramerProductShowcase() {
  const interFamily = '"Inter", sans-serif';
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Start animating when element enters viewport, complete when centered
      const start = windowH; // bottom of viewport
      const end = windowH * 0.3; // ~30% from top
      const current = rect.top;
      const progress = Math.min(1, Math.max(0, (start - current) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Apple-style: scale from 0.88→1, slight perspective tilt, fade in
  const scale = 0.88 + scrollProgress * 0.12;
  const opacity = Math.min(1, scrollProgress * 1.8);
  const rotateX = (1 - scrollProgress) * 6; // subtle tilt
  const translateY = (1 - scrollProgress) * 40;

  return (
    <section className="relative overflow-hidden bg-[#04070d] py-16 sm:py-24" style={{ perspective: "1200px" }}>
      {/* Subtle glow behind the showcase */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px]"
        style={{
          opacity: opacity * 0.07,
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(184,199,217,0.8) 0%, rgba(4,7,13,0) 100%)",
        }}
      />

      <div
        ref={containerRef}
        className="relative z-[2] mx-auto w-full px-4 sm:px-6 lg:px-10"
        style={{ maxWidth: "1215px" }} // 1175 + padding
      >
        {/* Animated wrapper — Apple-style reveal */}
        <div
          style={{
            transform: `scale(${scale}) rotateX(${rotateX}deg) translateY(${translateY}px)`,
            opacity,
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
            transition: "transform 0.05s linear, opacity 0.05s linear",
          }}
        >
          {/* Browser-style window frame — fixed 1175×680 aspect ratio */}
          <div
            className="relative overflow-hidden rounded-xl border border-white/[0.06]"
            style={{
              width: "100%",
              aspectRatio: "1175 / 680",
              background: "linear-gradient(180deg, #0d1117 0%, #0a0e16 100%)",
              boxShadow:
                `0 0 0 1px rgba(255,255,255,0.03), 0 ${20 * scrollProgress}px ${60 * scrollProgress}px rgba(0,0,0,0.5), 0 0 ${120 * scrollProgress}px rgba(100,120,180,0.04)`,
            }}
          >
            {/* Top title bar */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4" style={{ height: "5.15%" }}>
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5">
                <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
              </div>
              {/* Task title */}
              <div className="ml-2 flex items-center gap-2 text-[11px]" style={{ fontFamily: interFamily }}>
                <svg className="h-3.5 w-3.5 text-white/30" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z" />
                </svg>
                <span className="text-white/70 font-medium">Improve website clarity and fix broken links</span>
              </div>
              {/* Right side tabs */}
              <div className="ml-auto flex items-center gap-0.5">
                {["Code", "Chat", "Publish"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`rounded-md px-3 py-1 text-[11px] font-medium transition-colors ${
                      i === 0
                        ? "bg-white/[0.08] text-white/90"
                        : "text-white/40 hover:text-white/60"
                    }`}
                    style={{ fontFamily: interFamily }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main content area — fills remaining height */}
            <div className="flex absolute inset-0" style={{ top: "5.15%" }}>
              {/* Left sidebar — Tasks */}
              <div className="hidden md:flex w-[20.4%] flex-shrink-0 flex-col border-r border-white/[0.06] bg-[#0a0e16]">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
                  <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider" style={{ fontFamily: interFamily }}>
                    Tasks
                  </span>
                  <span className="text-[10px] text-white/30">+ New Task</span>
                </div>
                {/* Task search */}
                <div className="border-b border-white/[0.06] px-3 py-1.5">
                  <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2 py-1">
                    <svg className="h-3 w-3 text-white/25" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <span className="text-[10px] text-white/25" style={{ fontFamily: interFamily }}>Search files...</span>
                  </div>
                </div>
                {/* Sections */}
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
                          task.active
                            ? "bg-white/[0.06] text-white/80"
                            : "text-white/40"
                        }`}
                      >
                        <span className="mt-0.5 text-[8px] text-white/20">▸</span>
                        <div className="min-w-0 flex-1">
                          <span className="block truncate text-[10.5px] leading-tight" style={{ fontFamily: interFamily }}>
                            {task.name}
                          </span>
                          <span className="block truncate text-[9px] text-white/20 mt-0.5">
                            {i === 0 ? "vibedoctor/vibedoctor-landing-page" : i < 3 ? "vibedoctor/landing-..." : "vibedoctor/agent-..."}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Components section */}
                  <div className="px-2 pt-2">
                    <div className="mb-1 flex items-center gap-1 px-1">
                      <svg className="h-2.5 w-2.5 text-white/30" viewBox="0 0 8 8" fill="currentColor"><path d="M1 2.5l3 3 3-3" /></svg>
                      <span className="text-[10px] font-medium text-white/40" style={{ fontFamily: interFamily }}>components</span>
                    </div>
                    {["FramerHeader.tsx", "FramerFooter.tsx", "FramerHero.tsx", "FramerFounder.tsx"].map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 rounded-md px-2 py-1 text-white/35"
                      >
                        <svg className="h-3 w-3 flex-shrink-0 text-blue-400/50" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9zM8 5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 8 5z" />
                        </svg>
                        <span className="truncate text-[10.5px]" style={{ fontFamily: interFamily }}>{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom user */}
                <div className="border-t border-white/[0.06] px-3 py-2 flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40" />
                  <span className="text-[10px] text-white/40 truncate" style={{ fontFamily: interFamily }}>Suman Saurabh</span>
                </div>
              </div>

              {/* Center — Code editor */}
              <div className="flex flex-1 flex-col min-w-0">
                {/* File tabs */}
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
                          tab.active
                            ? "bg-[#0d1117] text-white/80 border-b-2 border-b-blue-400/60"
                            : "text-white/35"
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
                  <div className="ml-auto mr-3 text-[10px] text-white/20" style={{ fontFamily: interFamily }}>
                    app/components/framer/
                  </div>
                </div>

                {/* Code content with diff */}
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
                          line.type === "added"
                            ? "bg-[#1a3a2a]/60"
                            : line.type === "deleted"
                            ? "bg-[#3a1a1a]/60"
                            : ""
                        }`}
                      >
                        <span className="w-[44px] flex-shrink-0 select-none px-2 text-right text-white/15">
                          {line.num}
                        </span>
                        <span
                          className={`flex-shrink-0 w-4 select-none text-center ${
                            line.type === "added"
                              ? "text-green-400/70"
                              : line.type === "deleted"
                              ? "text-red-400/70"
                              : "text-transparent"
                          }`}
                        >
                          {line.type === "added" ? "+" : line.type === "deleted" ? "−" : " "}
                        </span>
                        <span
                          className={`flex-1 whitespace-pre pr-4 ${
                            line.type === "added"
                              ? "text-green-300/70"
                              : line.type === "deleted"
                              ? "text-red-300/60 line-through decoration-red-400/30"
                              : "text-white/50"
                          }`}
                        >
                          {line.code}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom terminal/log */}
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

              {/* Right panel — Chat & Deployments */}
              <div className="hidden lg:flex w-[22.1%] flex-shrink-0 flex-col border-l border-white/[0.06] bg-[#0a0e16]">
                {/* Chat/Deployments tabs */}
                <div className="flex items-center border-b border-white/[0.06]">
                  {["Chat", "Deployments"].map((tab, i) => (
                    <button
                      key={tab}
                      className={`flex-1 py-2 text-[11px] font-medium border-b-2 transition-colors ${
                        i === 0
                          ? "border-b-blue-400/60 text-white/80"
                          : "border-b-transparent text-white/35"
                      }`}
                      style={{ fontFamily: interFamily }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Chat content */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  <div>
                    <h4 className="text-[11px] font-semibold text-white/70 mb-1.5" style={{ fontFamily: interFamily }}>
                      What happened:
                    </h4>
                    <p className="text-[10px] leading-[15px] text-white/40" style={{ fontFamily: interFamily }}>
                      In environments like the client-side bundles, the <code className="text-blue-300/50">process</code> object is often
                      undefined. The fix checks for <code className="text-blue-300/50">typeof process</code> before accessing <code className="text-blue-300/50">process.env</code>.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-white/70 mb-1.5" style={{ fontFamily: interFamily }}>
                      The fix:
                    </h4>
                    <p className="text-[10px] leading-[15px] text-white/40" style={{ fontFamily: interFamily }}>
                      Updated the client-side meta functions and SEO utilities to safely check for the existence of <code className="text-blue-300/50">process.env</code> before reading variables.
                    </p>
                  </div>

                  {/* Code snippet */}
                  <div className="rounded-md bg-white/[0.04] border border-white/[0.06] p-2 font-mono text-[9.5px] leading-[14px] text-white/45">
                    <div><span className="text-purple-300/50">typeof</span> process !== <span className="text-green-300/50">"undefined"</span></div>
                    <div className="mt-0.5">? process.env.PUBLIC_URL</div>
                    <div>: <span className="text-green-300/50">"undefined"</span></div>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-white/70 mb-1.5" style={{ fontFamily: interFamily }}>
                      Files changed:
                    </h4>
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
                    <p className="text-[10px] text-green-300/60" style={{ fontFamily: interFamily }}>
                      This task has been merged and is no longer active.
                    </p>
                  </div>
                </div>

                {/* Chat input bar */}
                <div className="border-t border-white/[0.06] px-3 py-2.5">
                  <div
                    className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2"
                  >
                    <span className="flex-1 text-[10.5px] text-white/25" style={{ fontFamily: interFamily }}>
                      Ask a follow-up...
                    </span>
                    <div className="flex items-center gap-1.5">
                      {/* Attachment icon */}
                      <svg className="h-3.5 w-3.5 text-white/20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                        <path d="M13.5 7.5l-5.646 5.646a4 4 0 0 1-5.657-5.657l5.647-5.646a2.667 2.667 0 1 1 3.771 3.771L6.003 11.26a1.333 1.333 0 0 1-1.886-1.886l5.293-5.292" />
                      </svg>
                      {/* Send button */}
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
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-1"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #d8e7f212 0%, #04070d 100%)",
        }}
      />
    </section>
  );
}

import { IconBrandDiscord, IconBrandBitbucket } from "@tabler/icons-react";
import { Mail, Github, Gitlab, Code, Terminal, TextCursor } from "lucide-react";

export function FramerHero() {
  const ibmPlexFamily = '"IBM Plex Sans Condensed"';
  const interFamily = '"Inter", sans-serif';

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-20"
      id="hero"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-60px] bottom-0 z-[4] h-[642px]"
        style={{
          WebkitMask:
            "radial-gradient(40% 46% at 50% 82.2%, #000 0%, #000c 73.3689%, #0000 100%)",
          mask: "radial-gradient(40% 46% at 50% 82.2%, #000 0%, #000c 73.3689%, #0000 100%)",
        }}
      >
        <div className="h-full w-full bg-[radial-gradient(55%_58%_at_50%_73%,rgba(184,199,217,0.14)_0%,rgba(4,7,13,0.04)_58%,rgba(4,7,13,0)_100%)]" />
      </div>
      
      {/* Background video shift it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[360px] top-0 z-[1] opacity-40 grayscale"
      >
        <video
          src="https://framerusercontent.com/assets/Cw9D8nOGuMDx0eVn02OhggPWXg.mp4"
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(75% 64% at 50% 50%, rgba(255,255,255,0) 17.5676%, #04070d 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-1"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #d8e7f212 0%, #04070d 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[4] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] opacity-[0.15]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(4,7,13,0) 100%)",
        }}
      />

      <div className="relative z-[5] flex w-full max-w-none flex-col gap-12 px-3 pb-5 pt-40 sm:px-6 lg:px-10 2xl:px-14">
        <div className="flex w-full flex-col items-start gap-10 text-left lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Left content to shift Provisioning text 'ml-*'*/}
          <div className="flex w-full max-w-[680px] flex-col items-start gap-6 lg:ml-40">
            <h1
              className="max-w-[936px] text-[44px] font-medium leading-[0.98] tracking-[-0.02em] text-transparent sm:text-[60px] xl:text-[80px]"
              style={{
                fontFamily: ibmPlexFamily,
                backgroundImage:
                  "radial-gradient(99% 86% at 50% 50%, rgb(213, 219, 230) 28.387387387387385%, rgb(4, 7, 13) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Code from Anywhere{" "}
              <span
                className="font-normal italic text-[32px] sm:text-[42px] xl:text-[56px]"
                style={{ fontFamily: ibmPlexFamily }}
              >
              using your favourite Agent.
            </span>
            </h1>

            <p
              className="max-w-[680px] mt-6 text-lg font-normal leading-[1.6] tracking-[-0.02em] text-[rgba(255,255,255,0.6)]"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Connect your personal Claude Code or Codex subscription.{" "}
              <br />
            </p>

            {/* Two-step CTA */}
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-5 lg:gap-6">
              {/* Step 1 – Sign In */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
                <div
                  className="text-[13px] sm:text-[15px] font-semibold text-white"
                >
                  Sign In
                </div>

                <a
                  href="https://app.vibedoctor.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] sm:text-[15px] font-semibold text-white hover:underline"
                >

                <div className="flex items-center gap-[2px] p-1 bg-white/[0.03] rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] overflow-visible">
                  <span className="flex items-center justify-center w-9 h-9 p-2 text-white rounded-md sm:rounded-lg transition-all duration-150 hover:bg-white/10" title="GitHub">
                    <Github className="w-4 h-4" />
                  </span>

                  <span className="flex items-center justify-center w-9 h-9 p-2 text-white rounded-md sm:rounded-lg transition-all duration-150 hover:bg-white/10" title="Bitbucket">
                    <IconBrandBitbucket className="w-4 h-4" />
                  </span>

                  <span className="flex items-center justify-center w-9 h-9 p-2 text-white rounded-md sm:rounded-lg transition-all duration-150 hover:bg-white/10" title="GitLab">
                    <Gitlab className="w-4 h-4" />
                  </span>
                </div>
                </a>
              </div>

              {/* Step 2 – Code from Anywhere */}
              <div className="relative flex items-center gap-2 sm:gap-3 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-xl overflow-visible">
                <span className="text-[13px] sm:text-[15px] font-medium text-white leading-[22px] whitespace-nowrap">
                  Connect your Agent
                </span>
                <a
                  href="https://app.vibedoctor.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] sm:text-[15px] font-semibold text-white hover:underline"
                >
                <div className="flex items-center gap-[2px] p-1 bg-white/[0.03] rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] overflow-visible">
                  {/* Codex */}
                  <span
                    className="flex items-center justify-center w-9 h-9 p-2 text-white rounded-md sm:rounded-lg transition-all duration-150 hover:bg-white/10"
                    title="Codex"
                  >
                    <Code className="w-4 h-4" />
                  </span>
                  {/* Gemini */}
                  <span
                    className="flex items-center justify-center w-9 h-9 p-2 text-white rounded-md sm:rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white"
                    title="Gemini"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="currentColor" />
                    </svg>
                  </span>
                  {/* Claude */}
                  <span
                    className="flex items-center justify-center w-9 h-9 p-2 text-white rounded-md sm:rounded-lg transition-all duration-150 hover:bg-white/10"
                    title="Claude"
                  >
                    <Terminal className="w-4 h-4" />
                  </span>
                  {/* Cursor */}
                  <span
                    className="flex items-center justify-center w-9 h-9 p-2 text-white rounded-md sm:rounded-lg transition-all duration-150 hover:bg-white/10"
                    title="Cursor"
                  >
                    <TextCursor className="w-4 h-4" />
                  </span>
                </div>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-8 mt-8">
              <a
                href="https://x.com/vibedoctor_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-[201px] p-2 text-[rgba(213,219,230,0.5)] transition-colors hover:text-[rgba(213,219,230,0.8)]"
                aria-label="X"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <span
                aria-hidden="true"
                className="h-6 w-[2px] bg-[#d8e7f212]"
              />
              <a
                href="https://discord.gg/H9QmZnNu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-[201px] p-2 text-[rgba(213,219,230,0.5)] transition-colors hover:text-[rgba(213,219,230,0.8)]"
                aria-label="Discord"
              >
                <IconBrandDiscord className="h-6 w-6" />
              </a>
              <span
                aria-hidden="true"
                className="h-6 w-[2px] bg-[#d8e7f212]"
              />
              <a
                href="mailto:support@vibedoctor.dev"
                className="flex h-10 w-10 items-center justify-center rounded-[201px] p-2 text-[rgba(213,219,230,0.5)] transition-colors hover:text-[rgba(213,219,230,0.8)]"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-full max-w-[520px] self-center lg:ml-auto lg:max-w-[700px] lg:self-auto">
            <img
              src="/vibedoctor.gif"
              alt="VibeDoctor workflow preview"
              className="h-auto w-full object-cover -translate-y-28 -translate-x-20"
            />
          </div>
        </div>

        <a
          href="#founder-note"
          className="mx-auto mt-2 inline-flex items-center justify-center rounded-[36px] p-[7px] text-[rgba(184,199,217,0.5)] transition-transform hover:translate-y-0.5"
          aria-label="Scroll to founder note"
        >
          <svg
            className="h-[25px] w-[25px]"
            viewBox="0 0 256 256"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

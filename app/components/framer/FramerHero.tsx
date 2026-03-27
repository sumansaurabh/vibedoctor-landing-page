import { IconBrandDiscord, IconBrandBitbucket } from "@tabler/icons-react";
import { Mail, Github, Gitlab, Code, Terminal, TextCursor } from "lucide-react";

export function FramerHero() {
  const ibmPlexFamily = '"IBM Plex Sans Condensed"';
  const interFamily = '"Inter", sans-serif';

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#04070d]"
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

      <div className="relative z-[5] mx-auto flex w-full flex-1 max-w-7xl flex-col px-6 pt-32 sm:pt-40">
        {/* Headline - vertically centered in available space */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <h1
            className="w-full text-[60px] font-medium leading-[0.98] tracking-[-0.02em] text-transparent sm:text-[75px] xl:text-[95px]"
            style={{
              fontFamily: ibmPlexFamily,
              backgroundImage:
                "radial-gradient(99% 86% at 50% 50%, rgb(213, 219, 230) 28.387387387387385%, rgb(4, 7, 13) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            AI that acts like your DevOps{" "}
            <br />
            <span
              className="font-normal italic text-[38px] sm:text-[48px] xl:text-[56px]"
              style={{ fontFamily: ibmPlexFamily }}
            >
              Deploys, Monitor and Heals your Infrastructure
            </span>
          </h1>

          <p
            className="max-w-[680px] mt-6 text-lg font-normal leading-[1.6] tracking-[-0.02em] text-[rgba(255,255,255,0.6)]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Zero-config AI DevOps agent available 24×7, created by founders with deep experience scaling infrastructure at Microsoft, Meta, and InMobi.
          </p>

          <div className="mt-4">
            <a
              href="https://app.aerol.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex min-h-[56px] items-center justify-center rounded-lg px-7 py-3.5 no-underline"
              aria-label="Sign In"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-lg"
                style={{
                  background:
                    "radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  filter: "blur(15px)",
                }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-[2px] rounded-lg bg-[#04070d] border border-white/20"
              />
              <span className="relative z-[1] flex items-center gap-1.5">
                <span
                  className="text-base font-semibold tracking-[-0.01em] text-white"
                  style={{ fontFamily: '"Inter", sans-serif', lineHeight: "1.2em" }}
                >
                  Talk to Us
                </span>
                <svg
                  className="h-[23px] w-[22px] text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

        </div>

        {/* Trusted by */}
        <div className="flex flex-col items-center gap-3 pb-6">
          <p
            className="text-xs font-medium uppercase tracking-[0.15em] text-[rgba(255,255,255,0.3)]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Trusted by
          </p>
          <div className="flex items-center gap-8 sm:gap-12">
            {[
              { name: "BareUptime", logo: "/bareuptime.svg", isTextLogo: true, height: 22 },
              { name: "GoodStartIndia", logo: "/goodstartindia.png", isTextLogo: true, height: 22 },
              { name: "Penify", logo: "/penify2.svg", isTextLogo: true, height: 32 },
            ].map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 text-[rgba(255,255,255,0.4)]"
              >
                {company.isTextLogo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="object-contain"
                    style={{ height: company.height }}
                  />
                ) : (
                  <>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="rounded-md object-contain"
                      style={{ height: company.height, width: company.width }}
                    />
                    <span
                      className="hidden text-sm font-medium sm:inline"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {company.name}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll arrow - pinned to the bottom */}
        <div className="flex flex-col items-center gap-4 pb-10">
          <a
            href="#founder-note"
            className="inline-flex items-center justify-center rounded-[36px] p-[7px] text-[rgba(184,199,217,0.5)] transition-transform hover:translate-y-0.5"
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
      </div>
    </section>
  );
}

import { Mail } from "lucide-react";

export function FramerHero() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily = '"Instrument Serif", "Instrument Serif Placeholder", serif';

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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[140px] top-0 z-[1] opacity-40 grayscale"
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

      <div className="relative z-[5] mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-5 pb-5 pt-40 text-center sm:px-10">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-2xl p-2.5"
          style={{
            backgroundColor: "rgb(11, 14, 24)",
            boxShadow:
              "rgba(64, 120, 168, 0.37) 0px 0.706592px 0.706592px -0.666667px, rgba(64, 120, 168, 0.36) 0px 1.80656px 1.80656px -1.33333px, rgba(64, 120, 168, 0.34) 0px 3.62176px 3.62176px -2px, rgba(64, 120, 168, 0.31) 0px 6.8656px 6.8656px -2.66667px, rgba(64, 120, 168, 0.247) 0px 13.6468px 13.6468px -3.33333px, rgba(64, 120, 168, 0.094) 0px 30px 30px -4px",
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-[10px] p-4"
            style={{
              backgroundColor: "rgb(11, 14, 24)",
              boxShadow:
                "rgba(87, 133, 179, 0.48) 0px 0.796192px 0.796192px -0.875px, rgba(87, 133, 179, 0.455) 0px 2.41451px 2.41451px -1.75px, rgba(87, 133, 179, 0.4) 0px 6.38265px 6.38265px -2.625px, rgba(87, 133, 179, 0.21) 0px 20px 20px -3.5px",
            }}
          >
            <div className="flex aspect-square h-12 w-12 flex-shrink-0 items-center justify-center rounded-full p-1.5" style={{ backgroundColor: "#B4B9C3" }}>
              <img
                src="/vibedoctor-logo.svg"
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6">

          <h1
            className="max-w-[936px] text-[44px] font-medium leading-[0.98] tracking-[-0.02em] text-transparent sm:text-[60px] xl:text-[80px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                "radial-gradient(99% 86% at 50% 50%, rgb(213, 219, 230) 28.387387387387385%, rgb(4, 7, 13) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Scale your AI-apps.{" "}
            <br></br>
            <span
              className="font-normal italic"
              style={{ fontFamily: serifFamily }}
            >
              Ship on your cloud.
            </span>
          </h1>

          <p
            className="max-w-[680px] text-base font-normal leading-[1.6] tracking-[-0.02em] text-[rgba(255,255,255,0.6)]"
            style={{ fontFamily: interFamily }}
          >
            VibeDoctor turns a plain-language change request into code updates,
            infra provisioning, integration wiring, and staged production
            releases across AWS, GCP, Azure, or Kubernetes.
          </p>
        </div>

        <a
          href="https://calendly.com/sumansaurabh-1/anek"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex min-h-[56px] items-center justify-center rounded-lg px-7 py-3.5 no-underline"
          aria-label="Book a Demo"
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
            className="absolute inset-0 rounded-lg"
            style={{
              background:
                "radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-[2px] rounded-lg bg-[#04070d]"
          />
          <span className="relative z-[1] flex items-center gap-1.5">
            <span
              className="text-base font-semibold tracking-[-0.01em] text-white"
              style={{ fontFamily: interFamily, lineHeight: "1.2em" }}
            >
              Book a Demo
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

        <div className="flex items-center gap-8">
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
          {/* <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-[201px] p-2 text-[rgba(213,219,230,0.5)] transition-colors hover:text-[rgba(213,219,230,0.8)]"
            aria-label="Instagram"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a> */}
          {/* <span
            aria-hidden="true"
            className="h-6 w-[2px] bg-[#d8e7f212]"
          /> */}
          <a
            href="mailto:support@vibedoctor_dev"
            className="flex h-10 w-10 items-center justify-center rounded-[201px] p-2 text-[rgba(213,219,230,0.5)] transition-colors hover:text-[rgba(213,219,230,0.8)]"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          {/* <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-[201px] p-2 text-[rgba(213,219,230,0.5)] transition-colors hover:text-[rgba(213,219,230,0.8)]"
            aria-label="Facebook"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a> */}
        </div>

        <a
          href="#founder-note"
          className="mt-2 inline-flex items-center justify-center rounded-[36px] p-[7px] text-[rgba(184,199,217,0.5)] transition-transform hover:translate-y-0.5"
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

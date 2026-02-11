export function FramerFounder() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily = '"Instrument Serif", "Instrument Serif Placeholder", serif';

  return (
    <section
      className="relative overflow-hidden rounded-t-[50px] bg-[#04070d] py-24 sm:py-[100px]"
      id="founder-note"
    >
      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 sm:px-10">
        <div className="flex w-full max-w-[744px] flex-col items-center gap-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-[60px] px-3 py-1.5"
            style={{
              backgroundColor: "#04070d",
              border: "1px solid rgba(216, 231, 242, 0.07)",
            }}
          >
            <svg
              className="h-[17px] w-[17px] text-[#d5dbe6]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M11.48 1.04a.75.75 0 0 1 1.04 0l2.74 2.63c.15.14.35.22.55.22h3.77a.75.75 0 0 1 .74.87l-.63 3.56a.75.75 0 0 0 .22.67l2.58 2.56a.75.75 0 0 1 0 1.06l-2.58 2.56a.75.75 0 0 0-.22.67l.63 3.56a.75.75 0 0 1-.74.87h-3.77a.75.75 0 0 0-.55.22l-2.74 2.63a.75.75 0 0 1-1.04 0l-2.74-2.63a.75.75 0 0 0-.55-.22H4.42a.75.75 0 0 1-.74-.87l.63-3.56a.75.75 0 0 0-.22-.67l-2.58-2.56a.75.75 0 0 1 0-1.06l2.58-2.56a.75.75 0 0 0 .22-.67l-.63-3.56a.75.75 0 0 1 .74-.87h3.77a.75.75 0 0 0 .55-.22z" />
            </svg>
            <span
              className="text-xs uppercase text-[#d5dbe6]"
              style={{
                fontFamily: interFamily,
                fontSize: "12px",
                lineHeight: "1.3em",
                letterSpacing: "0em",
                fontWeight: 400,
              }}
            >
              Why We Built This
            </span>
          </div>

          <h3
            className="w-full text-[26px] font-normal leading-[1.4] tracking-[-0.03em] text-[rgba(184,199,217,0.5)] sm:text-[32px]"
            style={{ fontFamily: interFamily }}
          >
            AI coding tools made building easy. Shipping safely to{" "}
            <span
              className="italic text-[#d5dbe6]"
              style={{ fontFamily: serifFamily }}
            >
              "Customer Private Cloud"
            </span>{" "}
            is still the bottleneck. 
          </h3>

          <h3
            className="w-full text-[26px] font-normal leading-[1.4] tracking-[-0.03em] text-[rgba(184,199,217,0.5)] sm:text-[32px]"
            style={{ fontFamily: interFamily }}
          >
            VibeDoctor closes that gap.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div
              className="h-7 w-7 overflow-hidden rounded-full"
              style={{ boxShadow: "0px 0px 0px 2px #ffffff" }}
            >
              <img
                src="/suman.png"
                alt="Co-founder"
                className="h-full w-full object-cover"
              />
            </div>
            <p
              className="text-[16px] leading-[1.6] tracking-[-0.02em] text-[rgba(213,219,230,0.6)]"
              style={{ fontFamily: interFamily }}
            >
              Suman Saurabh, Co-founder, VibeDoctor
            </p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-1"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #d8e7f212 0%, #04070d 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[1] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] opacity-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #d5dbe6b3 0%, #04070d00 100%)",
        }}
      />
    </section>
  );
}

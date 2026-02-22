export function FramerTeam() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily =
    '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const founders = [
    {
      name: "Suman Saurabh",
      role: "Co-founder · Full-stack + AI",
      bio: "Ex-OpenAI at Microsoft, where he helped build the AI Foundry ecosystem as one of the early engineers. Builds product and AI execution flows across code generation, runtime automation, and developer experience.",
      image: "/suman.png",
      imageAlt: "Suman Saurabh, co-founder of VibeDoctor",
      initials: "SS",
      location: "Bengaluru / San Francisco",
      linkedinUrl: "https://www.linkedin.com/in/ssumansaurabh/",
    },
    {
      name: "Sunil Agarwal",
      role: "Co-founder · Infrastructure",
      bio: "Built ad infrastructure (including DSB) and scaled InMovie’s end-to-end platform infrastructure. Leads infrastructure provisioning, private-cloud architecture, and deployment reliability for customer-owned environments.",
      image: null as string | null,
      imageAlt: "Sunil Agarwal, co-founder of VibeDoctor",
      initials: "SA",
      location: "Bengaluru / San Francisco",
      linkedinUrl: "https://www.linkedin.com/in/sunilagwl5/",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="team"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 bg-[radial-gradient(50%_50%_at_50%_50%,#b4b9c31f_0%,#04070d_100%)]" />
      <div className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[1] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#b4b9c3b3_0%,#04070d00_100%)] opacity-10" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-6 sm:px-10">
        <div className="flex w-full max-w-[860px] flex-col items-center gap-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-[60px] px-3 py-1.5"
            style={{
              backgroundColor: "#04070d",
              border: "1px solid rgba(180,185,195,0.12)",
            }}
          >
            <span
              className="text-xs uppercase text-[#B4B9C3]"
              style={{
                fontFamily: interFamily,
                fontSize: "12px",
                lineHeight: "1.3em",
                letterSpacing: "0em",
                fontWeight: 400,
              }}
            >
              TEAM
            </span>
          </div>

          <h2
            className="text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[44px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                "linear-gradient(161deg, rgb(180, 185, 195) 51.657657657657666%, rgb(4, 7, 13) 166%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Founders
          </h2>

          <p
            className="max-w-[720px] text-[16px] leading-[1.6] tracking-[-0.02em] text-[rgba(180,185,195,0.64)]"
            style={{ fontFamily: interFamily }}
          >
            Our mission: help teams ship AI-built apps
            safely into customer-owned cloud environments.
          </p>
        </div>

        <div className="grid w-full max-w-[1080px] gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="relative overflow-hidden rounded-[16px] border border-[rgba(180,185,195,0.12)] bg-[#04070d] p-6 shadow-[inset_0_1px_0_rgba(180,185,195,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_84%_10%,rgba(180,185,195,0.12)_0%,rgba(4,7,13,0)_74%)]" />

              <div className="relative z-[1]">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-[rgba(180,185,195,0.2)] bg-[rgba(180,185,195,0.08)]">
                    {founder.image ? (
                      <img
                        src={founder.image}
                        alt={founder.imageAlt}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center text-[18px] font-medium text-[#B4B9C3]"
                        style={{ fontFamily: interFamily }}
                      >
                        {founder.initials}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-[24px] font-medium tracking-[-0.02em] text-[#B4B9C3]"
                        style={{ fontFamily: interFamily }}
                      >
                        {founder.name}
                      </h3>
                      <a
                        href={founder.linkedinUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`LinkedIn profile for ${founder.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(180,185,195,0.2)] bg-[rgba(180,185,195,0.06)] text-[rgba(180,185,195,0.72)] transition hover:bg-[rgba(180,185,195,0.1)] hover:text-[#B4B9C3]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.003V9h3.103v1.561h.044c.432-.82 1.49-1.685 3.065-1.685 3.276 0 3.878 2.156 3.878 4.959v6.617zM5.337 7.433a1.804 1.804 0 1 1 0-3.607 1.804 1.804 0 0 1 0 3.607zM6.956 20.452H3.717V9h3.239v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                    <p
                      className="text-[14px] uppercase tracking-[0.08em] text-[rgba(180,185,195,0.72)]"
                      style={{ fontFamily: interFamily }}
                    >
                      {founder.role}
                    </p>
                  </div>
                </div>

                <p
                  className="mt-5 text-[15px] leading-[1.6] text-[rgba(180,185,195,0.62)]"
                  style={{ fontFamily: interFamily }}
                >
                  {founder.bio}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

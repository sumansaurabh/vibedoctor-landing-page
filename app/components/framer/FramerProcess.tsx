export function FramerProcess() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Repo",
      description:
        "Link your existing GitHub repository and choose the target cloud environment.",
    },
    {
      number: "02",
      title: "Submit Change Request",
      description:
        "Describe what you want in plain language: feature, bug fix, or infrastructure request.",
    },
    {
      number: "03",
      title: "Run Agent + Infra Plan",
      description:
        "Choose your coding agent, execute code changes, and provision required services with integrations.",
    },
    {
      number: "04",
      title: "Review and Release",
      description:
        "Validate output, run staged deployment, and ship with rollback safety in place.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04070d] py-24" id="process">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[120%] -rotate-[13deg] bg-gradient-to-t from-cyan-500/[0.02] to-transparent rounded-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#04070d] px-4 py-1.5">
            <svg className="h-3.5 w-3.5 text-cyan-300" viewBox="0 0 15.75 13.5" fill="currentColor">
              <path d="M 14.25 13.5 L 0 13.5 L 0 9 L 5.25 9 L 5.25 4.5 L 10.5 4.5 L 10.5 0 L 15.75 0 L 15.75 12 C 15.75 12.828 15.078 13.5 14.25 13.5 Z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              How It Works
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#d5dbe6] sm:text-4xl lg:text-5xl">
            From request to release in <span className="italic font-normal">four steps</span>
          </h2>
          <p className="max-w-lg text-base text-white/40">
            No more fragmented handoffs across freelancers, scripts, and
            hosting panels.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-white/[0.06] bg-[#04070d] p-8 transition-all hover:border-white/10 hover:bg-white/[0.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-lg bg-[#10131c] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Step {step.number}
                  </span>
                </div>
                <span className="mb-2 block text-4xl font-bold text-white/[0.06]">{step.number}</span>
                <h3 className="mb-3 text-lg font-semibold text-[#d5dbe6]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

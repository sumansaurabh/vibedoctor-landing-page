export function FramerBenefits() {
  const benefits = [
    {
      title: "Deploy to Your Cloud, Not Ours",
      description:
        "Run on AWS, GCP, Azure, or Kubernetes with full ownership of your infra, data, and costs.",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "One Flow from Request to Release",
      description:
        "Go from change request to code, provisioning, integration, and deploy without tool-hopping.",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Safer Friday Deploys",
      description:
        "Use staged rollouts and rollback-friendly releases so teams can ship fast with lower risk.",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.51a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L5.25 9.88" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04070d] py-24" id="benefits">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[120%] -rotate-[13deg] bg-gradient-to-t from-cyan-500/[0.02] to-transparent rounded-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#04070d] px-4 py-1.5">
            <svg className="h-3.5 w-3.5 text-cyan-300" viewBox="0 0 16.5 16.5" fill="currentColor">
              <path d="M 5.65 10.849 L 0.485 8.946 C 0.194 8.839 0 8.561 0 8.25 C 0 7.939 0.194 7.661 0.485 7.553 L 5.65 5.65 L 7.553 0.485 C 7.661 0.194 7.939 0 8.25 0 C 8.561 0 8.839 0.194 8.946 0.485 L 10.849 5.65 L 16.014 7.553 C 16.306 7.661 16.5 7.939 16.5 8.25 C 16.5 8.561 16.306 8.839 16.014 8.946 L 10.849 10.849 L 8.946 16.014 C 8.839 16.306 8.561 16.5 8.25 16.5 C 7.939 16.5 7.661 16.306 7.553 16.014 Z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              Why Teams Switch
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#d5dbe6] sm:text-4xl lg:text-5xl">
            Why teams choose <span className="italic font-normal">VibeDoctor</span>
          </h2>
          <p className="max-w-md text-base text-white/40">
            Prototypes are easy. Production delivery is where most teams lose
            time.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative rounded-2xl border border-white/[0.06] bg-[#04070d] p-8 transition-all hover:border-white/10 hover:bg-white/[0.02]"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 text-cyan-300/80">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#d5dbe6]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

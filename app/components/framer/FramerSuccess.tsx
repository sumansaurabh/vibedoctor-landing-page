export function FramerSuccess() {
  const stories = [
    {
      title: "Validated Pain",
      description:
        "We interviewed founders, freelancers, and small teams to map the exact bottlenecks after AI prototyping.",
      metric: "40+",
      metricLabel: "Customer Interviews",
    },
    {
      title: "Paying Beta Users",
      description:
        "Private beta already has trial paying customers validating demand for faster cloud-owned delivery workflows.",
      metric: "8",
      metricLabel: "Trial Paying Customers",
    },
    {
      title: "Early Revenue Signal",
      description:
        "Credit-based usage is generating revenue in beta while additional B2B demos move through pipeline.",
      metric: "$310",
      metricLabel: "Private Beta Revenue",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04070d] py-24" id="success-stories">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[120%] -rotate-[13deg] bg-gradient-to-t from-cyan-500/[0.02] to-transparent rounded-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#04070d] px-4 py-1.5">
            <svg className="h-3.5 w-3.5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              Traction
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#d5dbe6] sm:text-4xl lg:text-5xl">
            Built with real <span className="italic font-normal">customer feedback</span>
          </h2>
          <p className="max-w-md text-base text-white/40">
            Early numbers, real usage, and strong demand from teams shipping
            client apps.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.title}
              className="group relative rounded-2xl border border-white/[0.06] bg-[#04070d] p-8 transition-all hover:border-white/10 hover:bg-white/[0.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-500/50">{story.metric}</span>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/30">{story.metricLabel}</p>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#d5dbe6]">{story.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

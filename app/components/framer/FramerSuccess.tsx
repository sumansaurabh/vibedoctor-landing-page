export function FramerSuccess() {
  const testimonials = [
    {
      author: "Kartik Singhal",
      company: "Meta",
      quote:
        "VibeDoctor completely transformed our prototyping workflow. Being able to ship directly to our own cloud without any intermediate hosting hassle is a game changer.",
    },
    {
      author: "Farhan",
      company: "InMobi",
      quote:
        "The ability to use our preferred AI agents while maintaining full control over our deployment infrastructure makes this the ultimate platform for serious engineering teams.",
    },
    {
      author: "Simon",
      company: "",
      quote:
        "Deployment used to be the biggest bottleneck after getting an AI app working. Now we go from prompt to production in minutes on our own AWS accounts.",
    },
    {
      author: "Jama",
      company: "",
      quote:
        "Finally a tool that understands we want to own our infrastructure. The auto provisioning feature saves us hours of manual DevOps work every week.",
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              Testimonials
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#d5dbe6] sm:text-4xl lg:text-5xl">
            Loved by <span className="italic font-normal">engineers</span>
          </h2>
          <p className="max-w-md text-base text-white/40">
            See what developers are saying about shipping to their own cloud.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#04070d] p-8 transition-all hover:border-white/10 hover:bg-white/[0.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <svg className="mb-4 h-6 w-6 text-cyan-300/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm leading-relaxed text-white/70">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="relative z-10 mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-base font-semibold text-[#d5dbe6]">{testimonial.author}</p>
                {testimonial.company && (
                  <p className="mt-0.5 text-xs text-cyan-300/70">{testimonial.company}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
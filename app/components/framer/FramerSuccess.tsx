export function FramerSuccess() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily = '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const testimonials = [
    {
      author: "Kartik Singhal",
      company: "Meta",
      quote:
        "VibeDoctor completely transformed our prototyping workflow. Being able to ship directly to our own cloud without any intermediate hosting hassle is a game changer.",
    },
    {
      author: "Farhan Ahmad",
      company: "InMobi",
      quote:
        "The ability to use our preferred AI agents while maintaining full control over our deployment infrastructure makes this the ultimate platform for serious engineering teams.",
    },
    {
      author: "Simon D.",
      company: "Google",
      quote:
        "Deployment used to be the biggest bottleneck after getting an AI app working. Now we go from prompt to production in minutes on our own AWS accounts.",
    },
    {
      author: "Jama M.",
      company: "AWS",
      quote:
        "Finally a tool that understands we want to own our infrastructure. The auto provisioning feature saves us hours of manual DevOps work every week.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="success-stories"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 bg-[radial-gradient(50%_50%_at_50%_50%,#d8e7f212_0%,#04070d_100%)]" />
      <div className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[1] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#d5dbe6b3_0%,#04070d00_100%)] opacity-10" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-6 sm:px-10">
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
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
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
              TESTIMONIALS
            </span>
          </div>

          <h2
            className="text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[44px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                "linear-gradient(161deg, rgb(213, 219, 230) 51.657657657657666%, rgb(4, 7, 13) 166%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Loved by{" "}
            <span
              className="font-normal italic"
              style={{ fontFamily: serifFamily }}
            >
              Engineers
            </span>
          </h2>
        </div>

        {/* Two-column layout for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px] items-start">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[24px] border border-[rgba(216,231,242,0.07)] bg-white/[0.02] p-8 transition-all hover:border-[rgba(216,231,242,0.14)] hover:bg-white/[0.04] ${
                index % 2 !== 0 ? 'md:mt-12' : '' // Stagger the second column
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_78%_10%,rgba(103,232,249,0.05)_0%,rgba(4,7,13,0)_75%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <p
                  className="text-[17px] leading-[1.6] tracking-[-0.01em] text-[rgba(213,219,230,0.7)]"
                  style={{ fontFamily: interFamily }}
                >
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(216,231,242,0.12)] bg-gradient-to-br from-white/[0.04] to-[#04070d] text-[15px] font-medium text-cyan-200">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-[15px] font-medium text-[#d5dbe6]"
                      style={{ fontFamily: interFamily }}
                    >
                      {testimonial.author}
                    </span>
                    {testimonial.company && (
                      <span
                        className="text-[13px] text-[rgba(213,219,230,0.4)]"
                        style={{ fontFamily: interFamily }}
                      >
                        {testimonial.company}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

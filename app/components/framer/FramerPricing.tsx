export function FramerPricing() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily = '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const tiers = [
    {
      name: "Developer",
      price: "Free",
      description: "Perfect for testing the waters and building small projects.",
      features: [
        "Bring your own API key (OpenAI/Anthropic)",
        "Basic coding agent capabilities",
        "Deploy to 1 BYOC environment",
        "Community support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Startup",
      price: "$49",
      period: "/mo",
      description: "For teams ready to ship production applications securely.",
      features: [
        "Managed tokens included",
        "Advanced multi-file coding agent",
        "Unlimited BYOC environments",
        "Auto-provisioning (Redis, DBs)",
        "Priority email support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with strict security requirements.",
      features: [
        "On-prem / Private VPC deployment",
        "Custom cloud integrations",
        "SSO & Advanced Security Controls",
        "Dedicated Account Manager",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04070d] py-24 sm:py-[100px]" id="pricing">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[120%] -rotate-[13deg] bg-gradient-to-t from-cyan-500/[0.02] to-transparent rounded-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#04070d] px-4 py-1.5">
            <svg className="h-3.5 w-3.5 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              Pricing
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#d5dbe6] sm:text-4xl lg:text-5xl">
            Simple, transparent <span className="italic font-normal" style={{ fontFamily: serifFamily }}>pricing</span>
          </h2>
          <p className="max-w-lg text-base text-white/40">
            Choose the plan that fits your team's needs. Scale securely with your own cloud credits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                tier.popular
                  ? "border-cyan-300/30 bg-white/[0.04] shadow-[0_0_40px_rgba(103,232,249,0.1)]"
                  : "border-white/[0.06] bg-[#04070d] hover:border-white/10 hover:bg-white/[0.02]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium text-[#d5dbe6]">{tier.name}</h3>
                <p className="mt-2 text-sm text-white/40">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline text-[#d5dbe6]">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.period && (
                  <span className="ml-1 text-sm font-medium text-white/40">{tier.period}</span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`h-5 w-5 shrink-0 ${tier.popular ? "text-cyan-300" : "text-white/40"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.aerol.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  tier.popular
                    ? "bg-cyan-500 text-white hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.05]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

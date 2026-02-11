export function FramerIntegrations() {
  const integrations = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" },
    { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
    { name: "Anthropic", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlecloud.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftazure.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kubernetes.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postgresql.svg" },
    /*
     Keep total cards at 8 so the existing grid rhythm is preserved.
    */
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04070d] py-24" id="integrations">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[120%] -rotate-[13deg] bg-gradient-to-t from-cyan-500/[0.02] to-transparent rounded-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#04070d] px-4 py-1.5">
            <svg className="h-3.5 w-3.5 text-cyan-300" viewBox="0 0 18 10.5" fill="currentColor">
              <path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              Ecosystem
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e4e9f2] sm:text-4xl lg:text-5xl">
            Works with your existing <span className="italic font-normal">stack</span>
          </h2>
          <p className="max-w-md text-base text-white/40">
            Keep your preferred repo, cloud, runtime, and model providers.
          </p>
        </div>

        {/* Integration logos */}
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="flex h-10 w-10 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 opacity-40 invert transition-opacity group-hover:opacity-70"
                />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-white/30 group-hover:text-white/50 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  GitHubIcon,
  OpenAIIcon,
  AnthropicIcon,
  GoogleCloudIcon,
  AWSIcon,
  AzureIcon,
  DockerIcon,
  KubernetesIcon,
  PostgreSQLIcon,
  RedisIcon,
  SupabaseIcon,
  FigmaIcon,
  SlackIcon,
  SentryIcon,
  CloudflareIcon,
  LinearIcon,
} from "~/components/icons";

export function FramerBenefits() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily = '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const stacks: { name: string; icon: React.ReactNode }[] = [
    { name: "GitHub", icon: <GitHubIcon className="h-6 w-6" /> },
    { name: "OpenAI", icon: <OpenAIIcon className="h-6 w-6" /> },
    { name: "Anthropic", icon: <AnthropicIcon className="h-6 w-6" /> },
    { name: "Google Cloud", icon: <GoogleCloudIcon className="h-6 w-6" /> },
    { name: "AWS", icon: <AWSIcon className="h-6 w-6" /> },
    { name: "Azure", icon: <AzureIcon className="h-6 w-6" /> },
    { name: "Docker", icon: <DockerIcon className="h-6 w-6" /> },
    { name: "Kubernetes", icon: <KubernetesIcon className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <PostgreSQLIcon className="h-6 w-6" /> },
    { name: "Redis", icon: <RedisIcon className="h-6 w-6" /> },
    { name: "Supabase", icon: <SupabaseIcon className="h-6 w-6" /> },
    { name: "Figma", icon: <FigmaIcon className="h-6 w-6" /> },
    { name: "Slack", icon: <SlackIcon className="h-6 w-6" /> },
    { name: "Sentry", icon: <SentryIcon className="h-6 w-6" /> },
    { name: "Cloudflare", icon: <CloudflareIcon className="h-6 w-6" /> },
    { name: "Linear", icon: <LinearIcon className="h-6 w-6" /> },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="comparison"
    >
      {/* ── Integrations grid ── */}
      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-[60px] px-3 py-1.5"
            style={{
              backgroundColor: "#04070d",
              border: "1px solid rgba(216, 231, 242, 0.07)",
            }}
          >
            <svg
              className="h-[17px] w-[17px] text-[#d5dbe6]"
              viewBox="0 0 18 10.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" />
            </svg>
            <span
              className="uppercase text-[#d5dbe6]"
              style={{
                fontFamily: interFamily,
                fontSize: "12px",
                lineHeight: "1.3em",
                letterSpacing: "0em",
                fontWeight: 400,
              }}
            >
              Ecosystem
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
            Works with your existing{" "}
            <span className="font-normal italic" style={{ fontFamily: serifFamily }}>
              stack
            </span>
          </h2>
          <p
            className="max-w-[600px] text-[16px] leading-[1.6] tracking-[-0.02em] text-[rgba(213,219,230,0.6)]"
            style={{ fontFamily: interFamily }}
          >
            Keep your preferred repo, cloud, runtime, and model providers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {stacks.map(({ name, icon }) => (
            <div
              key={name}
              className="group relative flex min-h-[80px] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[16px] border border-[rgba(216,231,242,0.07)] bg-white/[0.02] px-3 py-4 transition-all duration-300 hover:border-cyan-300/25 hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_78%_10%,rgba(103,232,249,0.1)_0%,rgba(4,7,13,0)_75%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-[1] text-[rgba(213,219,230,0.55)] transition-colors duration-300 group-hover:text-cyan-200/80">
                {icon}
              </div>
              <span
                className="relative z-[1] text-center text-[11px] font-medium uppercase tracking-[0.08em] text-[rgba(213,219,230,0.72)] transition-colors duration-300 group-hover:text-cyan-100"
                style={{ fontFamily: interFamily }}
              >
                {name}
              </span>
            </div>
          ))}
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

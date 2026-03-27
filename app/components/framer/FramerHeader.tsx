import { Link } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";

const USE_CASES = [
  { label: "Auto Heal Infra", href: "/use-cases/ai-sre" },
  { label: "Automatic Infra Provisioning", href: "/use-cases/infra-provisioning" },
  { label: "Agentic Incident Management", href: "/use-cases/incident-management" },
  { label: "AI Support Engineering", href: "/use-cases/ai-support" },
];

export function FramerHeader() {
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUseCasesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex aspect-square h-10 w-10 flex-shrink-0 items-center justify-center rounded-full p-1.5" style={{ backgroundColor: "#B4B9C3" }}>
            <img
              src="/aerol-single.svg"
              alt="Aerol"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </Link>

        {/* Center Nav - Pill shaped */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur-md">
          {[
            { label: "Features", href: "/#features" },
            { label: "Integrations", href: "/integrations" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white rounded-full hover:bg-white/[0.06]"
            >
              {item.label}
            </Link>
          ))}

          {/* Use Cases Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setUseCasesOpen((v) => !v)}
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white rounded-full hover:bg-white/[0.06]"
              aria-expanded={useCasesOpen}
              aria-haspopup="true"
            >
              Use Cases
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${useCasesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 1l5 5 5-5" />
              </svg>
            </button>

            {useCasesOpen && (
              <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[230px] rounded-2xl border border-white/10 bg-[#04070d]/95 backdrop-blur-xl py-2 shadow-2xl shadow-black/60 z-[60]">
                {USE_CASES.map((item, i) => (
                  <div key={item.href}>
                    {i > 0 && <div className="mx-4 h-px bg-white/[0.06]" />}
                    <Link
                      to={item.href}
                      onClick={() => setUseCasesOpen(false)}
                      className="flex items-center px-4 py-2.5 mx-1 rounded-xl text-sm text-white/55 hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Docs", href: "https://docs.aerol.ai/" },
            { label: "Team", href: "/team" },
            { label: "Contact", href: "/contact" },
            { label: "Book a Demo", href: "https://calendly.com/sumansaurabh-1/anek" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white rounded-full hover:bg-white/[0.06]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="https://app.aerol.ai"
          className="group relative flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white hover:bg-white/[0.06]"
        >
          <svg className="h-3.5 w-3.5 opacity-80" viewBox="0 0 16.5 16.5" fill="currentColor">
            <path d="M 5.65 10.849 L 0.485 8.946 C 0.194 8.839 0 8.561 0 8.25 C 0 7.939 0.194 7.661 0.485 7.553 L 5.65 5.65 L 7.553 0.485 C 7.661 0.194 7.939 0 8.25 0 C 8.561 0 8.839 0.194 8.946 0.485 L 10.849 5.65 L 16.014 7.553 C 16.306 7.661 16.5 7.939 16.5 8.25 C 16.5 8.561 16.306 8.839 16.014 8.946 L 10.849 10.849 L 8.946 16.014 C 8.839 16.306 8.561 16.5 8.25 16.5 C 7.939 16.5 7.661 16.306 7.553 16.014 Z" />
          </svg>
          Sign In
        </a>
      </div>
    </header>
  );
}

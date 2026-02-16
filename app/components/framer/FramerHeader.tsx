import { Link } from "@remix-run/react";

/**
 * Renders the header component for the Framer application.
 */
export function FramerHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex aspect-square h-10 w-10 flex-shrink-0 items-center justify-center rounded-full p-1.5" style={{ backgroundColor: "#B4B9C3" }}>
            <img
              src="/vibedoctor-logo.svg"
              alt="Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </Link>

        {/* Center Nav - Pill shaped */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur-md">
          {[
            { label: "Process", href: "/#services" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Docs", href: "https://docs.vibedoctor.dev/" },
            { label: "Team", href: "/team" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white rounded-full hover:bg-white/[0.06]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="https://app.vibedoctor.dev"
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

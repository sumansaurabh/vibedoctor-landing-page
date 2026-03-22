import { Link } from "@remix-run/react";
import { IconBrandDiscord } from "@tabler/icons-react";
import { Mail } from "lucide-react";

export function FramerFooter() {
  return (
    <footer className="relative bg-[#04070d] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top section */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/vibedoctor-complete.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Features", href: "/#services" },
              { label: "Docs", href: "https://docs.vibedoctor.dev/" },
              { label: "Team", href: "/team" },
              { label: "Contact", href: "/contact" },
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
              { label: "GDPR", href: "/gdpr" },
              { label: "Sub-processors", href: "/subprocessors" },
              { label: "Security", href: "/security" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="https://x.com/vibedoctor_dev" target="_blank" rel="noopener noreferrer" className="text-white/30 transition-colors hover:text-white/60">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://discord.gg/kb2cXHuC" target="_blank" rel="noopener noreferrer" className="text-white/30 transition-colors hover:text-white/60" aria-label="Discord">
              <IconBrandDiscord className="h-4 w-4" />
            </a>
            <a href="mailto:support@vibedoctor.dev" className="text-white/30 transition-colors hover:text-white/60">
              <Mail className="h-4 w-4" />
            </a>
            {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/30 transition-colors hover:text-white/60">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/30 transition-colors hover:text-white/60">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a> */}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Compliance trust strip */}
        <Link
          to="/security"
          className="flex flex-wrap items-center justify-center gap-3 mb-10 group"
          aria-label="View our security and compliance details"
        >
          {/* GDPR Compliant — shield with checkmark */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors">
            <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            GDPR Compliant
          </span>

          {/* NIST Aligned — columns/institution */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors">
            <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="22" x2="21" y2="22" />
              <line x1="6" y1="18" x2="6" y2="11" />
              <line x1="10" y1="18" x2="10" y2="11" />
              <line x1="14" y1="18" x2="14" y2="11" />
              <line x1="18" y1="18" x2="18" y2="11" />
              <polygon points="12 2 20 7 4 7" />
            </svg>
            NIST Aligned
          </span>

          {/* SOC 2 In Progress — clock */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors">
            <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            SOC 2 In Progress
          </span>

          {/* 256-bit Encryption — lock */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors">
            <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            256-bit Encryption
          </span>
        </Link>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Penify Technologies LLC All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

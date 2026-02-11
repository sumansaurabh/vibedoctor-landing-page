"use client";

import { useEffect, useRef, useState } from "react";

export function FramerBenefits() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily = '"Instrument Serif", "Instrument Serif Placeholder", serif';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const visualCards = [
    {
      title: "From Request to Release",
      description:
        "Request -> Provision Infra -> Integrate -> Deploy.",
      image: "https://s3.anek.codes/ai-generated-images/generated/WfJr5YfehOyJuHNRTL8dA/PkebtsNB-puriPGu.jpeg",
      alt:
        "Dark premium futuristic product visual showing a flow from text prompt to GitHub code changes to cloud deployment pipeline; navy and black base with subtle cyan glow; cinematic depth; enterprise-grade mood.",
    },
    {
      title: "Your Cloud, Your Control",
      description:
        "Connect with GCP, AWS, Azure, or Kubernetes in your private cloud. No vendor lock-in, no third-party access.",
      image: "https://s3.anek.codes/ai-generated-images/generated/WfJr5YfehOyJuHNRTL8dA/Ph-5S0z1DbDsXE1_.jpeg",
      alt:
        "Secure private-cloud themed scene with a central platform panel connected to AWS, GCP, Azure, and Kubernetes icons inside a protected customer-owned boundary; dark mode, minimal, trustworthy security aesthetic.",
    },
    {
      title: "Safer Production Delivery",
      description:
        "Highlight Reliability, Staged Rollouts, Health Checks, and Rollback-ready releases with low-risk shipping.",
      image: "https://s3.anek.codes/ai-generated-images/generated/WfJr5YfehOyJuHNRTL8dA/ybwNX6XAQKE0Ssf9.jpeg",
      alt:
        "Operations control-room style dashboard showing rollout stages, service health, and rollback button with green status signals; dark cinematic UI, high contrast typography, subtle cyan accents, no clutter.",
    },
  ];

  // Duplicate cards for seamless infinite scroll
  const allCards = [...visualCards, ...visualCards, ...visualCards];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        const cardWidth = scrollContainer.scrollWidth / allCards.length;
        const resetPoint = cardWidth * visualCards.length;

        if (scrollPosition >= resetPoint) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, allCards.length, visualCards.length]);

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="comparison"
      style={{
        backgroundImage: `url('https://s3.anek.codes/ai-generated-images/generated/WfJr5YfehOyJuHNRTL8dA/lxguPtYeOQ6cSRIy.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to maintain contrast */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,7,13,0.85) 0%, rgba(4,7,13,0.92) 50%, rgba(4,7,13,0.85) 100%)",
        }}
      />
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
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm10.5 0 1.94 1.94L18.38 13l1.12 1.12-1.94 1.94L19.5 18l-1.12 1.12-1.94-1.94-1.94 1.94L13.38 18l1.94-1.94-1.94-1.94z" />
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
              COMPARISON
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
            Why Choose Us{" "}
            <span
              className="font-normal italic"
              style={{ fontFamily: serifFamily }}
            >
              Over Others
            </span>
          </h2>
        </div>

        {/* Rolling Carousel */}
        <div className="relative w-full">
          {/* Gradient fade edges */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,13,0.95) 0%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
            style={{
              background:
                "linear-gradient(270deg, rgba(4,7,13,0.95) 0%, transparent 100%)",
            }}
          />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              scrollBehavior: "auto",
            }}
          >
            {allCards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="group relative flex-shrink-0 overflow-hidden rounded-[20px] border border-[rgba(216,231,242,0.07)] bg-[#04070d] transition-transform duration-300 hover:scale-105"
                style={{ width: "clamp(300px, 33vw, 380px)" }}
              >
                <div
                  className="relative aspect-[16/10] cursor-pointer overflow-hidden border-b border-[rgba(216,231,242,0.07)]"
                  onClick={() => setExpandedImage(card.image)}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(60% 70% at 70% 20%, rgba(184,199,217,0.35) 0%, rgba(4,7,13,0.2) 45%, rgba(4,7,13,0.75) 100%)",
                    }}
                  />
                  {/* Click hint */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-cyan-300/20 p-3 backdrop-blur-sm ring-1 ring-cyan-300/40">
                      <svg className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 px-5 py-5">
                  <h3
                    className="text-[22px] font-medium leading-[1.2] tracking-[-0.015em] text-[#e4e9f2]"
                    style={{ fontFamily: interFamily }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.6] tracking-[-0.01em] text-[rgba(213,219,230,0.62)]"
                    style={{ fontFamily: interFamily }}
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-8"
          style={{
            background: "rgba(4, 7, 13, 0.95)",
            backdropFilter: "blur(10px)",
            animation: "fadeIn 0.2s ease-out",
          }}
          onClick={() => setExpandedImage(null)}
        >
          <div
            className="relative h-[85vh] w-[90vw] overflow-hidden rounded-[24px] border border-[rgba(103,232,249,0.3)] shadow-[0_0_80px_rgba(103,232,249,0.25)]"
            style={{
              animation: "expandIn 0.3s ease-out",
            }}
          >
            <img
              src={expandedImage}
              alt="Expanded view"
              className="h-full w-full object-contain"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,7,13,0.4)_100%)]" />
          </div>
          {/* Close hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm text-cyan-200" style={{ fontFamily: interFamily }}>
              Click anywhere to close
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes expandIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

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

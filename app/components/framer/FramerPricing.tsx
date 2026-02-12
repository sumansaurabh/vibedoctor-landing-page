export function FramerPricing() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily =
    '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const hourlyFeatures = [
    'Charges include 1 vCPU, 1 GB RAM, and 1 GB disk',
    'Stop anytime, pay only for what you use',
    'Ideal for quick fixes and experiments',
  ];

  const creditNotes = [
    'No credit card required to start',
    'Credits never expire',
  ];

  const tokenNotes = [
    'Token usage is tracked per model in real time',
    'No hidden markups on token consumption',
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="pricing"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 bg-[radial-gradient(50%_50%_at_50%_50%,#b4b9c31f_0%,#04070d_100%)]" />
      <div className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[1] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#b4b9c3b3_0%,#04070d00_100%)] opacity-10" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-6 sm:px-10">
        <div className="flex w-full max-w-[860px] flex-col items-center gap-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-[60px] px-3 py-1.5"
            style={{
              backgroundColor: '#04070d',
              border: '1px solid rgba(180,185,195, 0.07)',
            }}
          >
            <svg
              className="h-[17px] w-[17px] text-[#B4B9C3]"
              viewBox="0 0 18.531 18.531"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M 0.219 9.219 C 0.079 9.079 0 8.888 0 8.69 L 0 0 L 8.69 0 C 8.888 0 9.079 0.079 9.219 0.219 L 18.531 9.531 C 18.823 9.823 18.823 10.298 18.531 10.591 L 10.594 18.531 C 10.301 18.823 9.826 18.823 9.533 18.531 Z" />
            </svg>
            <span
              className="text-xs uppercase text-[#B4B9C3]"
              style={{
                fontFamily: interFamily,
                fontSize: '12px',
                lineHeight: '1.3em',
                letterSpacing: '0em',
                fontWeight: 400,
              }}
            >
              PRICING
            </span>
          </div>

          <h2
            className="text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[44px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                'linear-gradient(161deg, rgb(180, 185, 195) 51.657657657657666%, rgb(4, 7, 13) 166%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Simple,{' '}
            <span className="font-normal italic" style={{ fontFamily: serifFamily }}>
              Credit-Based
            </span>{' '}
            Pricing
          </h2>

          <p
            className="max-w-[760px] text-[16px] leading-[1.6] tracking-[-0.02em] text-[rgba(180,185,195,0.6)]"
            style={{ fontFamily: interFamily }}
          >
            Pay only for what you use. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="grid w-full max-w-[1080px] gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="relative overflow-hidden rounded-[20px] border border-[rgba(180,185,195,0.08)] bg-[#04070d] p-7 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_85%_at_78%_8%,rgba(180,185,195,0.14)_0%,rgba(4,7,13,0)_72%)]" />

            <div className="relative z-[1]">
              <div
                className="inline-flex items-center rounded-full border border-[rgba(180,185,195,0.18)] bg-white/[0.02] px-3 py-1 text-[13px] uppercase tracking-[0.08em] text-[rgba(180,185,195,0.88)]"
                style={{ fontFamily: interFamily }}
              >
                Hourly Billing
              </div>

              <p
                className="mt-4 text-[17px] leading-[1.55] text-[rgba(180,185,195,0.64)]"
                style={{ fontFamily: interFamily }}
              >
                Perfect for short tasks and testing
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span
                  className="text-[54px] font-medium leading-none tracking-[-0.03em] text-[#B4B9C3]"
                  style={{ fontFamily: interFamily }}
                >
                  $0.0285
                </span>
                <span
                  className="mb-1 text-[22px] text-[rgba(180,185,195,0.74)]"
                  style={{ fontFamily: interFamily }}
                >
                  /hour
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {hourlyFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] leading-[1.55] text-[rgba(180,185,195,0.7)]"
                    style={{ fontFamily: interFamily }}
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B4B9C3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-[12px] border border-[rgba(180,185,195,0.3)] bg-[rgba(180,185,195,0.12)] px-5 py-3 text-[15px] font-medium text-[#B4B9C3] transition-colors hover:bg-[rgba(180,185,195,0.2)]"
                style={{ fontFamily: interFamily }}
              >
                Get Started with $5 Free Credits
              </a>
            </div>
          </article>

          <div className="space-y-6">
            <article className="rounded-[20px] border border-[rgba(180,185,195,0.08)] bg-[#04070d] p-7">
              <h3
                className="text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#B4B9C3]"
                style={{ fontFamily: interFamily }}
              >
                $5 Free Credits
              </h3>
              <p
                className="mt-3 text-[16px] leading-[1.55] text-[rgba(180,185,195,0.64)]"
                style={{ fontFamily: interFamily }}
              >
                Every new account receives $5 in credits. Top up anytime with a
                minimum of $5.
              </p>

              <ul className="mt-5 space-y-3">
                {creditNotes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.55] text-[rgba(180,185,195,0.7)]"
                    style={{ fontFamily: interFamily }}
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgba(180,185,195,0.75)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[20px] border border-[rgba(180,185,195,0.08)] bg-[#04070d] p-7">
              <h3
                className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#B4B9C3]"
                style={{ fontFamily: interFamily }}
              >
                Model Token Pricing
              </h3>
              <p
                className="mt-3 text-[15px] leading-[1.55] text-[rgba(180,185,195,0.62)]"
                style={{ fontFamily: interFamily }}
              >
                Model token costs are metered separately so your bill stays
                predictable and transparent.
              </p>

              <ul className="mt-5 space-y-3">
                {tokenNotes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-[1.55] text-[rgba(180,185,195,0.68)]"
                    style={{ fontFamily: interFamily }}
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgba(180,185,195,0.8)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

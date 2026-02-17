import { Form } from "@remix-run/react";

type ContactFormValues = {
  message: string;
  senderEmail: string;
  senderName: string;
  subject: string;
};

type ContactFormActionData = {
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
  message: string;
  success: boolean;
  values?: Partial<ContactFormValues>;
};

type FramerContactProps = {
  actionData?: ContactFormActionData;
  isSubmitting?: boolean;
};

export function FramerContact({
  actionData,
  isSubmitting = false,
}: FramerContactProps) {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily =
    '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const contactCards = [
    {
      title: "Email Us",
      description:
        "Facing technical challenges or product concerns? We're here to assist",
      actionLabel: "support@vibedoctor.dev",
      actionHref: "mailto:support@vibedoctor.dev",
    },
    {
      title: "Contact Sales",
      description:
        "Let's collaborate on custom solutions or discuss product priorities",
      actionLabel: "Book a call",
      actionHref: "https://calendly.com/sumansaurabh-1/anek",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 bg-[radial-gradient(50%_50%_at_50%_50%,#b4b9c31f_0%,#04070d_100%)]" />
      <div className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[1] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#b4b9c3b3_0%,#04070d00_100%)] opacity-10" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-6 sm:px-10">
        <div className="flex w-full max-w-[860px] flex-col items-center gap-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-[60px] px-3 py-1.5"
            style={{
              backgroundColor: "#04070d",
              border: "1px solid rgba(180,185,195,0.12)",
            }}
          >
            <span
              className="text-xs uppercase text-[#B4B9C3]"
              style={{
                fontFamily: interFamily,
                fontSize: "12px",
                lineHeight: "1.3em",
                letterSpacing: "0em",
                fontWeight: 400,
              }}
            >
              CONTACT
            </span>
          </div>

          <h2
            className="text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[44px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                "linear-gradient(161deg, rgb(180, 185, 195) 51.657657657657666%, rgb(4, 7, 13) 166%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Reach Us{" "}
            <span
              className="font-normal italic"
              style={{ fontFamily: serifFamily }}
            >
              Anytime
            </span>
          </h2>

          <p
            className="max-w-[720px] text-[16px] leading-[1.6] tracking-[-0.02em] text-[rgba(180,185,195,0.64)]"
            style={{ fontFamily: interFamily }}
          >
            Have questions or need help? We're here for you.
          </p>
        </div>

        <div className="grid w-full max-w-[1080px] gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[16px] border border-[rgba(180,185,195,0.12)] bg-[#04070d] p-6 shadow-[inset_0_1px_0_rgba(180,185,195,0.12)]"
              >
                <h3
                  className="text-[20px] font-medium tracking-[-0.02em] text-[#B4B9C3]"
                  style={{ fontFamily: interFamily }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-3 text-[15px] leading-[1.6] text-[rgba(180,185,195,0.62)]"
                  style={{ fontFamily: interFamily }}
                >
                  {card.description}
                </p>
                <a
                  href={card.actionHref}
                  target={card.actionHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.actionHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex rounded-full border border-[rgba(180,185,195,0.2)] bg-white/[0.02] px-3 py-1.5 text-[14px] text-[#B4B9C3] transition-colors hover:bg-white/[0.06]"
                  style={{ fontFamily: interFamily }}
                >
                  {card.actionLabel}
                </a>
              </article>
            ))}
          </div>

          <Form
            method="post"
            className="rounded-[16px] border border-[rgba(180,185,195,0.12)] bg-[#04070d] p-6 shadow-[inset_0_1px_0_rgba(180,185,195,0.12)]"
          >
            <p
              className="text-[22px] font-medium tracking-[-0.02em] text-[#B4B9C3]"
              style={{ fontFamily: interFamily }}
            >
              We'd love to help! Let us know how.
            </p>

            {actionData?.message ? (
              <p
                className={`mt-4 rounded-[10px] border px-3 py-2 text-[14px] ${
                  actionData.success
                    ? "border-[rgba(180,185,195,0.22)] bg-[rgba(180,185,195,0.08)] text-[#B4B9C3]"
                    : "border-[rgba(248,113,113,0.3)] bg-[rgba(248,113,113,0.08)] text-[rgba(248,113,113,0.92)]"
                }`}
                style={{ fontFamily: interFamily }}
              >
                {actionData.message}
              </p>
            ) : null}

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span
                  className="text-[13px] uppercase tracking-[0.08em] text-[rgba(180,185,195,0.74)]"
                  style={{ fontFamily: interFamily }}
                >
                  Full Name
                </span>
                <input
                  type="text"
                  name="senderName"
                  placeholder="Your name"
                  defaultValue={actionData?.values?.senderName || ""}
                  aria-invalid={actionData?.fieldErrors?.senderName ? true : undefined}
                  className="h-11 rounded-[10px] border border-[rgba(180,185,195,0.16)] bg-white/[0.02] px-3 text-[15px] text-[#B4B9C3] outline-none placeholder:text-[rgba(180,185,195,0.42)] focus:border-[rgba(180,185,195,0.35)]"
                  style={{ fontFamily: interFamily }}
                />
                {actionData?.fieldErrors?.senderName ? (
                  <span
                    className="text-[12px] text-[rgba(248,113,113,0.9)]"
                    style={{ fontFamily: interFamily }}
                  >
                    {actionData.fieldErrors.senderName}
                  </span>
                ) : null}
              </label>

              <label className="grid gap-2">
                <span
                  className="text-[13px] uppercase tracking-[0.08em] text-[rgba(180,185,195,0.74)]"
                  style={{ fontFamily: interFamily }}
                >
                  Email Address
                </span>
                <input
                  type="email"
                  name="senderEmail"
                  placeholder="you@company.com"
                  defaultValue={actionData?.values?.senderEmail || ""}
                  aria-invalid={actionData?.fieldErrors?.senderEmail ? true : undefined}
                  className="h-11 rounded-[10px] border border-[rgba(180,185,195,0.16)] bg-white/[0.02] px-3 text-[15px] text-[#B4B9C3] outline-none placeholder:text-[rgba(180,185,195,0.42)] focus:border-[rgba(180,185,195,0.35)]"
                  style={{ fontFamily: interFamily }}
                />
                {actionData?.fieldErrors?.senderEmail ? (
                  <span
                    className="text-[12px] text-[rgba(248,113,113,0.9)]"
                    style={{ fontFamily: interFamily }}
                  >
                    {actionData.fieldErrors.senderEmail}
                  </span>
                ) : null}
              </label>

              <label className="grid gap-2">
                <span
                  className="text-[13px] uppercase tracking-[0.08em] text-[rgba(180,185,195,0.74)]"
                  style={{ fontFamily: interFamily }}
                >
                  Subject Of Interest
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Regarding product"
                  defaultValue={actionData?.values?.subject || ""}
                  aria-invalid={actionData?.fieldErrors?.subject ? true : undefined}
                  className="h-11 rounded-[10px] border border-[rgba(180,185,195,0.16)] bg-white/[0.02] px-3 text-[15px] text-[#B4B9C3] outline-none placeholder:text-[rgba(180,185,195,0.42)] focus:border-[rgba(180,185,195,0.35)]"
                  style={{ fontFamily: interFamily }}
                />
                {actionData?.fieldErrors?.subject ? (
                  <span
                    className="text-[12px] text-[rgba(248,113,113,0.9)]"
                    style={{ fontFamily: interFamily }}
                  >
                    {actionData.fieldErrors.subject}
                  </span>
                ) : null}
              </label>

              <label className="grid gap-2">
                <span
                  className="text-[13px] uppercase tracking-[0.08em] text-[rgba(180,185,195,0.74)]"
                  style={{ fontFamily: interFamily }}
                >
                  How may we assist you?
                </span>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Give us more info..."
                  defaultValue={actionData?.values?.message || ""}
                  aria-invalid={actionData?.fieldErrors?.message ? true : undefined}
                  className="rounded-[10px] border border-[rgba(180,185,195,0.16)] bg-white/[0.02] px-3 py-3 text-[15px] text-[#B4B9C3] outline-none placeholder:text-[rgba(180,185,195,0.42)] focus:border-[rgba(180,185,195,0.35)]"
                  style={{ fontFamily: interFamily }}
                />
                {actionData?.fieldErrors?.message ? (
                  <span
                    className="text-[12px] text-[rgba(248,113,113,0.9)]"
                    style={{ fontFamily: interFamily }}
                  >
                    {actionData.fieldErrors.message}
                  </span>
                ) : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 inline-flex h-11 items-center justify-center rounded-[10px] border border-[rgba(180,185,195,0.3)] bg-[rgba(180,185,195,0.1)] px-4 text-[15px] font-medium text-[#B4B9C3] transition-colors hover:bg-[rgba(180,185,195,0.16)]"
                style={{ fontFamily: interFamily }}
              >
                {isSubmitting ? "Sending..." : "Send Your Message"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

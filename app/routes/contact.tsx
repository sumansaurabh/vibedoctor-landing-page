import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useNavigation } from "@remix-run/react";
import { FramerContact } from "~/components/framer/FramerContact";
import { FramerFooter } from "~/components/framer/FramerFooter";
import { FramerHeader } from "~/components/framer/FramerHeader";
import { env } from "~/lib/env.server";

type ContactFormValues = {
  message: string;
  senderEmail: string;
  senderName: string;
  subject: string;
};

export type ContactActionData = {
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
  message: string;
  success: boolean;
  values?: Partial<ContactFormValues>;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const values: ContactFormValues = {
    senderName: String(formData.get("senderName") || "").trim(),
    senderEmail: String(formData.get("senderEmail") || "").trim(),
    subject: String(formData.get("subject") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.senderEmail) {
    fieldErrors.senderEmail = "Email is required.";
  } else if (!emailRegex.test(values.senderEmail)) {
    fieldErrors.senderEmail = "Please enter a valid email address.";
  }

  if (!values.subject) {
    fieldErrors.subject = "Subject is required.";
  }

  if (!values.message) {
    fieldErrors.message = "Message is required.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ContactActionData>(
      {
        success: false,
        message: "Please fix the highlighted fields and try again.",
        fieldErrors,
        values,
      },
      { status: 400 },
    );
  }

  const requestBody = {
    senderEmail: values.senderEmail,
    senderName: values.senderName || undefined,
    subject: values.subject,
    message: values.message,
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(env.EMAIL_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    let apiPayload: Record<string, unknown> | null = null;
    try {
      apiPayload = (await response.json()) as Record<string, unknown>;
    } catch {
      apiPayload = null;
    }

    if (!response.ok) {
      const message =
        (typeof apiPayload?.message === "string" && apiPayload.message) ||
        (typeof apiPayload?.error === "string" && apiPayload.error) ||
        "Unable to send your message right now. Please try again.";

      return json<ContactActionData>(
        {
          success: false,
          message,
          values,
        },
        { status: response.status >= 400 ? response.status : 500 },
      );
    }

    return json<ContactActionData>({
      success: true,
      message:
        (typeof apiPayload?.message === "string" && apiPayload.message) ||
        "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact email request failed:", error);

    return json<ContactActionData>(
      {
        success: false,
        message:
          "Something went wrong while sending your message. Please try again.",
        values,
      },
      { status: 500 },
    );
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: "Contact | VibeDoctor" },
    {
      name: "description",
      content:
        "Reach VibeDoctor for technical support, product questions, or sales discussions.",
    },
  ];
};

export default function ContactRoute() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="min-h-screen w-full bg-[#04070d] text-white antialiased">
      <FramerHeader />
      <main className="pt-[84px]">
        <FramerContact actionData={actionData} isSubmitting={isSubmitting} />
      </main>
      <FramerFooter />
    </div>
  );
}

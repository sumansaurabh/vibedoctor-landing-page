import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { Toaster } from "~/components/ui/toaster";
import { Toaster as Sonner } from "~/components/ui/sonner";
import { TooltipProvider } from "~/components/ui/tooltip";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Instrument+Serif:ital@0;1&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "VibeDoctor App" },
    { name: "description", content: "VibeDoctor Generated Project" },
    { name: "author", content: "VibeDoctor" },
    { property: "og:title", content: "VibeDoctor App" },
    { property: "og:description", content: "VibeDoctor Generated Project" },
    { property: "og:type", content: "website" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const enableAmplitude = import.meta.env.VITE_ENABLE_AMPLITUDE !== "false";
  const amplitudeApiKey =
    import.meta.env.VITE_AMPLITUDE_API_KEY || "c79c28d22ed36cc6a9787b3d544e6d05";
  const amplitudeInitScript = `window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));window.amplitude.init(${JSON.stringify(amplitudeApiKey)}, {"autocapture":{"elementInteractions":true}});`;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {enableAmplitude && amplitudeApiKey ? (
          <>
            <script src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"></script>
            <script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.25.0-min.js.gz"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: amplitudeInitScript,
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {/* VERY IMPORTANT: This preload script is very important or else bad thing will happen to the code */}
        <script src="https://cdn.jsdelivr.net/npm/@anek-codes/editor/dist/client/preload/script.js"></script>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <title>Error!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-muted">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
            <p className="mb-4 text-xl text-muted-foreground">
              An unexpected error occurred
            </p>
            <a
              href="/"
              className="text-primary underline hover:text-primary/90"
            >
              Return to Home
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

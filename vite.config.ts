import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  server: {
    port: 5173,
  },
  optimizeDeps: {
    // Prevent stale optimized chunks for R3F/Three during React upgrades.
    exclude: ["@react-three/fiber", "@react-three/drei", "three"],
  },
  resolve: {
    alias: {
      "db": path.resolve(__dirname, "./db"),
    },
  },
  plugins: [
    remix({
      serverModuleFormat: "esm",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});

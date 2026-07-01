import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Connect } from "vite";
import type { IncomingMessage, ServerResponse } from "http";
import { componentTagger } from "lovable-tagger";

function devTerminalLogPlugin() {
  return {
    name: "dev-terminal-log",
    configureServer(server: { middlewares: Connect.Server }) {
      server.middlewares.use("/__dev-log", (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", () => {
          try {
            const parsed = JSON.parse(body) as { message?: string; data?: unknown };
            console.log(`[CGSI] ${parsed.message ?? "log"}`, parsed.data ?? "");
          } catch {
            console.log("[CGSI]", body);
          }
          res.statusCode = 200;
          res.end("ok");
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), mode === "development" && devTerminalLogPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

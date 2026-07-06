import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react-dom") || id.includes("react")) {
            return "react";
          }

          if (id.includes("react-router-dom")) {
            return "router";
          }

          if (id.includes("@tanstack")) {
            return "query";
          }

          if (id.includes("date-fns")) {
            return "date";
          }

          if (id.includes("react-markdown")) {
            return "markdown";
          }

          if (id.includes("swiper")) {
            return "swiper";
          }
        },
      },
    },
  },
});
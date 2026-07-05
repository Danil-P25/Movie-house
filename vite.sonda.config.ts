import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sonda from "sonda/vite";

export default defineConfig({
  plugins: [react(), sonda()],
  build: {
    sourcemap: true,
  },
});
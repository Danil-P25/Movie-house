/// <reference types="vitest/config" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },

  test: {
    coverage: {
      provider: "v8",
      exclude: ["**/*.module.css", "**/*.css"],

      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },

    projects: [
      {
        extends: true,

        test: {
          globals: true,
          environment: "jsdom",
          setupFiles: "./src/tests/setup.ts",
        },
      },

      {
        extends: true,

        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],

        test: {
          name: "storybook",

          browser: {
            enabled: true,
            headless: true,

            provider: playwright({}),

            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
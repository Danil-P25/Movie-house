import { defineConfig } from "orval";

export default defineConfig({
  tmdb: {
    input: {
      target: "https://developer.themoviedb.org/openapi/tmdb-api.json",
    },
    output: {
      mode: "single",
      target: "./src/generated/api/tmdb.ts",
      schemas: "./src/generated/api/types",
      client: "fetch",
      baseUrl: "https://api.themoviedb.org",
    },
  },
});
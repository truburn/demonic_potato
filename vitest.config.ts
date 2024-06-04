import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/utils/test-setup.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json"],
      exclude: ["**/.*", "**/*.d.ts"],
    },
  },
});

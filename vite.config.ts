import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@elements",
        replacement: fileURLToPath(new URL("./src/elements", import.meta.url)),
      },
      {
        find: "@layout",
        replacement: fileURLToPath(new URL("./src/layout", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@styles",
        replacement: fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    ],
  },
});

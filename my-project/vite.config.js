import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPrefixSelector from "postcss-prefix-selector";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "modules",
    minify: "terser",
    lib: {
      entry: "src/main.jsx",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPrefixSelector({
          prefix: "#root",
          transform(prefix, selector, prefixedSelector) {
            if (selector.startsWith("html") || selector.startsWith("body")) {
              return selector.replace(/^html|^body/, prefix);
            }
            return prefixedSelector;
          },
        }),
      ],
    },
  },
  define: {
    "process.env.NODE_ENV": undefined,
    "process.env": undefined,
  },
});

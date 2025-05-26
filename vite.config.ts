// https://github.com/facebook/stylex/discussions/825#discussioncomment-11720866

import { reactRouter } from "@react-router/dev/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // React + Babel
    react({
      babel: {
        // Make an explicit connection to babel.config.cjs
        // Note: Must use relative paths
        configFile: "./babel.config.cjs",
      },
    }),

    // React Router
    reactRouter(), // Goes after react()

    // TypeScript
    tsconfigPaths(),
  ],
  // PostCSS
  css: {
    // Make an explicit connection to postcss.config.cjs
    // Note: Must use relative paths
    postcss: "./postcss.config.cjs",
  },
});

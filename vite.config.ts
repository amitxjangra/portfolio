import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
  plugins: [reactRouter(), tailwindcss(), tsconfigPaths()],
  ssr: {
    // Prevent styled-components from being SSR'd if not needed
    noExternal: ["styled-components"],
  },
  optimizeDeps: {
    // Ensure styled-components is pre-bundled for client-side
    include: ["styled-components"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "../../node_modules/react"),
      "react-dom": path.resolve(__dirname, "../../node_modules/react-dom"),
    },
  },
  server: {
    port: 3000,
    watch: {
      // Useful on some Windows setups or network drives where FS events are unreliable
      usePolling: true,
      interval: 100,
    },
    hmr: {
      overlay: true,
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../../dist/frontend"),
    emptyOutDir: true,
  },
});

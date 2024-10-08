import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['lib'] })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es']
    }
  },
});

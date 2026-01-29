import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // Tell Vite's dev server to proxy API requests to NestJS:
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

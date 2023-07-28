import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/title_database/[name]-[hash].js",
        entryFileNames: "static/js/title_database/[name]-[hash].js",
        assetFileNames: "static/[ext]/title_database/[name]-[hash].[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {},
  },
  plugins: [Vue()],
  server: {
    proxy: {
      "/api": {
        // target: "http://192.168.2.18",
        target: "https://dev.iweiqidian.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

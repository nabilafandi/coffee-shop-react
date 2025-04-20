import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rules: {
    "react/prop-types": 0,
  },
  server: {
    proxy: {
      "/odoo-api": {
        target: "http://localhost:6903",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/odoo-api/, ""),
      },
    },
  },
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    rules: {
      "react/prop-types": 0,
    },
    server: {
      proxy: {
        "/odoo-api": {
          target: env.VITE_REACT_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/odoo-api/, ""),
        },
      },
    },
  };
});
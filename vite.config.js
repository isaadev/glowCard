import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import restart from "vite-plugin-restart";
import TailwindCSS from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    restart({
      restart: [
        "./tailwind.config.js",
      ],
    }),
    react(),
  ],
});

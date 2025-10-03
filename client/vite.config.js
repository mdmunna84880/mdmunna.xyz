import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from 'vite-plugin-sitemap'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), sitemap({
      hostname: 'https://mdmunna.xyz',
      // optional: provide extra options or a routes array if plugin supports it
      // routes: ['/','/about','/projects','/contact']
    })],
});

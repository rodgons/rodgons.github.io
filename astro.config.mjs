import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://rodgons.github.io",
  base: "rodgons.github.io",

  vite: {
    plugins: [tailwindcss()],
  },
});

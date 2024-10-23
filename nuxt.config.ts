import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "src"),
  },

  css: [
    "~/assets/main.css",
  ],

  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-10-20",
})
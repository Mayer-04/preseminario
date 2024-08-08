/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blueCatolica: "#0066AF",
        yellowCatolica: "#FBB814",
      },
    },
  },
  plugins: [],
};

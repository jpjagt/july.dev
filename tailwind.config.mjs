/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter', sans-serif"],
        rubik: ["'Rubik', sans-serif"],
      }
    },
  },
  plugins: [],
}

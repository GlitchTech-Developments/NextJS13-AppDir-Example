/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]', '[data-theme="light"]'],
  content: ["./src/**/*.{ts,tsx}", "./src/app/page.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};

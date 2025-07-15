// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ABCMonumentGrotesk", "sans-serif"],
        mono: ["ABCMonumentGroteskSemiMono", "monospace"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          'Apple Color Emoji"',
          'Segoe UI Emoji"',
          'Segoe UI Symbol"',
          'Noto Color Emoji"',
        ],
      },
      borderRadius: {

      },
      colors: {
        oha__green: '#1b9d3c',
        oha__yellow: '#F09443'

      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
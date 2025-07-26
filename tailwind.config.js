/** @type {import('tailwindcss').Config} */
import { defaultColors } from "tailwindcss/defaultTheme";
// Removed TypeScript type annotation as this is a JavaScript file
const colors = {
  ...defaultColors,
  neutral: {
    900: "#21214D",
    600: "#57577B",
    300: "#9393B7",
    200: "#CBCDD0",
    0: "#FFFFFF",
  },
  blue: {
    700: "#2A4CD5",
    600: "#4865DB",
    300: "#89CAFF",
    200: "#C7D3F7",
    100: "#E0E6FA",
  },
  red: {
    700: "#E60013",
    300: "#FF9B99",
  },
  indigo: {
    200: "#B8B1FF",
  },
  green: {
    300: "#89E780",
  },
  amber: {
    300: "#FFC97C",
  },
  lightGradient: "linear-gradient(180deg, #F5F5FF 72.99%, #E0E0FF 100%)",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reddit: ["Reddit Sans", "sans-serif"],
      },
      colors: colors,
    },
  },
  plugins: [],
};

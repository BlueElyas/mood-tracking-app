/** @type {import('tailwindcss').Config} */
import { defaultColors } from "tailwindcss/defaultTheme";
import {
  borderRadius,
  colors,
  spacing,
  borderRadius,
} from "./tailwind-constants";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reddit: ["Reddit Sans", "sans-serif"],
      },
      colors: { ...defaultColors, ...colors, ...spacing, ...borderRadius },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import { defaultColors } from "tailwindcss/defaultTheme";
import {
  colors,
  spacing,
  borderRadius,
  backgroundImage,
} from "./tailwind-constants";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reddit: ["Reddit Sans", "sans-serif"],
      },
      colors: {
        ...defaultColors,
        ...colors,
      },
      spacing,
      borderRadius,
      backgroundImage,
    },
  },
  plugins: [],
};

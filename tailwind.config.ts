import type { Config } from "tailwindcss";
// import colors from "@/app/_theme/colors";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#EEF3FC",
        light1: "#E4E4E7",
        light2: "#D4D4D8",
        primary: "#419197",
        lightGray: "#AAAAAA",
        success: "#009A19",
        black: "#000000",
        error: "#E80000",
        pure: "#FFFFFF",
        text: "#777777",
        dark: "#020202",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
};
export default config;

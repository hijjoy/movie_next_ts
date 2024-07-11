import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#72d5cf",
        secondary: "#f6f6f6",
        white: "#f5f5f5",
        gray: "#242424",
        light_gray: "#3d3d3d",
      },
      boxShadow: {
        custom: "0px 0px 300px 100px rgba(114, 213, 206, 0.06)",
      },
    },
    keyframes: {
      moveRightToLeft: {
        "0%": {
          right: "-170px",
        },
        "100%": {
          right: "0",
        },
      },
      moveLeftToRight: {
        "0%": {
          left: "-170px",
        },
        "100%": {
          left: "0",
        },
      },
    },
    animation: {
      moveRightToLeft: "moveRightToLeft 1s ease-in-out",
      moveLeftToRight: "moveLeftToRight 1s ease-in-out",
    },
  },
  plugins: [],
};
export default config;

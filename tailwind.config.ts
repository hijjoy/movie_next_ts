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
      },
    },
  },
  plugins: [],
};
export default config;

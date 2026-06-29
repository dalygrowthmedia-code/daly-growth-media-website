import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#8FCDF5",
          blue: "#3A9BE0",
          ink: "#1A2B3A",
          mist: "#F4FAFE",
          line: "#D9EAF6"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "Geist",
          "Avenir Next",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(26, 43, 58, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

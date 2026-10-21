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
          sky: "#62C6FF",
          blue: "#4DB8FF",
          navy: "#040E20",
          panel: "#0A1F40",
          ink: "#EAF4FF",
          mist: "#061633",
          line: "#173A68"
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
        soft: "0 18px 50px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;

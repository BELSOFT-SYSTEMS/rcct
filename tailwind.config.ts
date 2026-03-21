import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#CC0000",
          "red-dark": "#990000",
          "red-light": "#FF1A1A",
          black: "#0A0A0A",
          "gray-dark": "#1A1A1A",
          "gray-mid": "#4A4A4A",
          "gray-light": "#F5F5F5",
          "gray-border": "#E5E5E5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.5s ease forwards",
        "counter": "counter 2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-bg.jpg')",
        "grid-pattern": "linear-gradient(rgba(204,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;

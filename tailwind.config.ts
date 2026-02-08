import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
        },
        page: {
          bg: "var(--color-page-bg)",
          text: "var(--color-page-text)",
        },
        muted: "var(--color-muted-text)",
        card: {
          bg: "var(--color-card-bg)",
          alt: "var(--color-card-alt)",
        },
        border: {
          soft: "var(--color-border-soft)",
          card: "var(--color-border-card)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-merriweather)", "Merriweather", "serif"],
        display: ["var(--font-merriweather)", "Merriweather", "serif"]
      }
    }
  },
  plugins: []
};

export default config;


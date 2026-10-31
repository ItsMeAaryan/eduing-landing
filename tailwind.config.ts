import type { Config } from "tailwindcss";

/**
 * EDUING design tokens.
 * Every colour is an RGB channel triplet defined in app/globals.css so it
 * flips between light (default) and dark (`.dark` on <html>) and still
 * supports Tailwind opacity modifiers, e.g. `text-ink/60`, `bg-brand/10`.
 */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        line: token("line"),
        brand: {
          DEFAULT: token("brand"),
          2: token("brand-2"),
          soft: token("brand-soft"),
        },
        gold: {
          DEFAULT: token("gold"),
          soft: token("gold-soft"),
        },
        night: token("night"),
        mint: token("mint"),
        coral: token("coral"),
      },
      borderRadius: {
        card: "28px",
        tile: "20px",
        chip: "999px",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(42px, 4.9vw, 82px)", { lineHeight: "1.0", letterSpacing: "-0.045em" }],
        display: ["clamp(34px, 4.6vw, 64px)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        card: "0 1px 0 rgb(var(--ink) / 0.04), 0 12px 32px -12px rgb(var(--ink) / 0.12)",
        lift: "0 2px 0 rgb(var(--ink) / 0.04), 0 30px 60px -20px rgb(var(--ink) / 0.25)",
        glow: "0 18px 50px -12px rgb(var(--brand) / 0.55)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        shine: "shine 3.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "60%,100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

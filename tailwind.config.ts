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
        bg: "#08080A",
        surface: "#111114",
        "surface-2": "#18181C",
        "surface-alt": "#0C0C10",
        "surface-feature": "#13131A",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(255,255,255,0.15)",
        "border-subtle": "rgba(255,255,255,0.06)",
        "text-primary": "#FAFAFA",
        "text-secondary": "rgba(255,255,255,0.5)",
        "text-muted": "rgba(255,255,255,0.25)",
        "text-body": "rgba(255,255,255,0.55)",
        accent: "#4F46E5",
        "accent-light": "#6366F1",
        "accent-lighter": "#818CF8",
        "accent-glow": "rgba(79,70,229,0.15)",
        gold: "#F59E0B",
        success: "#22C55E",
      },
      borderRadius: {
        card: "16px",
        btn: "8px",
        tag: "6px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(48px, 7vw, 80px)",
          { lineHeight: "1.0", fontWeight: "800", letterSpacing: "-0.04em" },
        ],
        "section-title": [
          "48px",
          { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.03em" },
        ],
        "sub-heading": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: [
          "16px",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
        "label": [
          "13px",
          { fontWeight: "500", letterSpacing: "0.05em" },
        ],
      },
      maxWidth: {
        container: "1100px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
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
      },
    },
  },
  plugins: [],
};
export default config;

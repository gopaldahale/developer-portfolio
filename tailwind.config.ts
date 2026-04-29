import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bricolage)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: "#06080f",
        "bg-2": "#0b0f1c",
        "bg-3": "#111827",
        primary: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          dark: "#5b21b6",
        },
        accent: {
          cyan: "#22d3ee",
          pink: "#f472b6",
          green: "#34d399",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(ellipse at 25% 50%, #7c3aed22 0%, transparent 50%), radial-gradient(ellipse at 75% 20%, #22d3ee18 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #f472b610 0%, transparent 50%)",
      },
      animation: {
        "blob-1": "blob1 8s ease-in-out infinite",
        "blob-2": "blob2 10s ease-in-out infinite 2s",
        "blob-3": "blob3 12s ease-in-out infinite 4s",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.7s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        blob1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 20px) scale(1.15)" },
          "66%": { transform: "translate(30px, -30px) scale(0.85)" },
        },
        blob3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, 40px) scale(0.9)" },
          "66%": { transform: "translate(-30px, -20px) scale(1.1)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        glow: "0 0 30px rgba(124, 58, 237, 0.4)",
        "glow-cyan": "0 0 30px rgba(34, 211, 238, 0.3)",
        "glow-sm": "0 0 15px rgba(124, 58, 237, 0.25)",
        card: "0 4px 24px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;

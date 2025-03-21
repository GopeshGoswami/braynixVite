import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
        britannica: ["var(--font-britannica)"],
        britanicaBlack: ["var(--font-britanicaBlack)"],
        IBMPlexMono: ["var(--font-IBMPlexMono)"],
        sfProDisplay: ["var(--font-sfProDisplay)"],
        dmSans: ["var(--font-dmSans)"],
        raleway: ["var(--font-raleway)"],
        plusJakartaSans: ["var(--font-plusJakartaSans)"],
        // poppinsMedium: ["var(--font-poppinsMedium"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;

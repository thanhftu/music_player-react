/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tct_cybian: {
          100: "#f8d9c0",
          200: "#f4bb92",
        },
      },
      animation: {
        marquee: "marquee 12s linear infinite",
        quiet: "quiet 1.2s ease-in-out infinite",
        normal: "normal 1.2s ease-in-out infinite",
        loud: "loud 1.2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        quiet: {
          "25%": { transform: "scale(0.6)" },
          "50%": { transform: "scale(0.4)" },
          "75%": { transform: "scale(0.8)" },
        },
        normal: {
          "25%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.4)" },
          "75%": { transform: "scale(0.6)" },
        },
        loud: {
          "25%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.4)" },
          "75%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};

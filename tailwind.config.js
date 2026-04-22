/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        mist: "#a3a3a3",
        accent: "#f5f5f5",
        rose: "#737373",
        gold: "#262626",
        panel: "rgba(24, 24, 24, 0.8)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 16px 70px rgba(255, 255, 255, 0.06)",
        rose: "0 18px 80px rgba(255, 255, 255, 0.04)"
      },
      fontFamily: {
        display: ["Avenir Next", "Segoe UI", "sans-serif"],
        body: ["IBM Plex Sans", "Avenir Next", "Segoe UI", "sans-serif"]
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

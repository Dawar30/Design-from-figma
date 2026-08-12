/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Bright cyan accent used for the brand mark, headline highlights and links.
        brand: {
          50: "#ecfcff",
          100: "#cff7fe",
          200: "#a5eefd",
          300: "#67e0fa",
          400: "#20c9ee",
          500: "#06b0d9",
          600: "#0890b6",
          700: "#0b7293",
          800: "#105c76",
          900: "#134e63",
        },
        // Deep navy used for primary buttons, the signup hero panel and the footer.
        navy: {
          800: "#111a3f",
          900: "#0b1030",
          950: "#07070f",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
        float: "0 24px 60px -20px rgba(15, 23, 42, 0.28)",
        panel: "0 30px 80px -24px rgba(15, 23, 42, 0.35)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

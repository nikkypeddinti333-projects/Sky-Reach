/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        sky: { DEFAULT: "#1E8CF0", deep: "#0F6BC4", soft: "#EAF4FF" },
        sun: "#FFB020",
        ink: "#16263D",
        mist: "#F5F9FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

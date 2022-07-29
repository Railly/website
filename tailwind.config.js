module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./icons/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./posts/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      dm: ["DM Sans", "sans-serif"],
    },
    extend: {
      // custom animation for underline from left to right
      keyframes: {
        under: {
          "0%": {
            width: 0,
            opacity: 0,
          },
          "100%": {
            width: "100%",
            opacity: 1,
          },
        },
        animation: {
          underline: "under 1s ease-in-out infinite",
        },
      },
    },
  },
  plugins: [],
};

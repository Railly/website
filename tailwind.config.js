module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./icons/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./posts/**/*.mdx",
    "./contentlayer.config.ts",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      dm: ["DM Sans", "sans-serif"],
      mono: ["Fira Code", "monospace"],
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
      backgroundImage: {
        "bg-dotted":
          "radial-gradient(circle at 50% 50%,#605e6755 0,#191d21 15%)",
      },
    },
  },
  plugins: [],
};

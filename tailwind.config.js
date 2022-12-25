const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./icons/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./posts/**/*.mdx",
    "./contentlayer.config.ts",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      dm: ["DM Sans", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
    extend: {
      colors: {
        'hunter-rose': {
            '50': '#fef1f6',
            '100': '#fde6ef',
            '200': '#fdcde0',
            '300': '#fda4c5',
            '400': '#fa6c9d',
            '500': '#f4457d',
            '600': '#e31f54',
            '700': '#c6103c',
            '800': '#a31133',
            '900': '#88132e',
        },
        'hunter-blue': {
            '50': '#eefaff',
            '100': '#d9f2ff',
            '200': '#bce9ff',
            '300': '#8eddff',
            '400': '#59c7ff',
            '500': '#2ba8ff',
            '600': '#1b8df5',
            '700': '#1475e1',
            '800': '#175db6',
            '900': '#19508f',
        },
        'hunter-yellow': {
            '50': '#fff9eb',
            '100': '#fdecc8',
            '200': '#fbd98c',
            '300': '#f9c35a',
            '400': '#f7a728',
            '500': '#f1850f',
            '600': '#d5620a',
            '700': '#b1420c',
            '800': '#8f3411',
            '900': '#762b11',
        },
        'hunter-green': {
            '50': '#f0fdf9',
            '100': '#cdfaed',
            '200': '#9cf3dc',
            '300': '#50e3c2',
            '400': '#32cfb0',
            '500': '#19b398',
            '600': '#11907c',
            '700': '#127364',
            '800': '#135c52',
            '900': '#154c45',
        },
        'hunter-black': {
            '50': '#f5f7f8',
            '100': '#dee5e9',
            '200': '#bdcad2',
            '300': '#94a7b4',
            '400': '#6e8293',
            '500': '#536779',
            '600': '#415160',
            '700': '#37434e',
            '800': '#2f3740',
            '900': '#191d21',
        },
      },
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

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./icons/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx,mjs}",
    "./utils/**/*.{ts,tsx}",
    "./posts/**/*.mdx",
    "./contentlayer.config.ts",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "foreground-contrast": "hsl(var(--foreground-contrast))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "hunter-rose": {
          50: "#fef1f6",
          100: "#fde6ef",
          200: "#fdcde0",
          300: "#fda4c5",
          400: "#fa6c9d",
          500: "#f4457d",
          600: "#e31f54",
          700: "#c6103c",
          800: "#a31133",
          900: "#88132e",
        },
        "hunter-blue": {
          50: "#eefaff",
          100: "#d9f2ff",
          200: "#bce9ff",
          300: "#8eddff",
          400: "#59c7ff",
          500: "#2ba8ff",
          600: "#1b8df5",
          700: "#1475e1",
          800: "#175db6",
          900: "#19508f",
        },
        "hunter-yellow": {
          50: "#fff9eb",
          100: "#fdecc8",
          200: "#fbd98c",
          300: "#f9c35a",
          400: "#f7a728",
          500: "#f1850f",
          600: "#d5620a",
          700: "#b1420c",
          800: "#8f3411",
          900: "#762b11",
        },
        "hunter-green": {
          50: "#f0fdf9",
          100: "#cdfaed",
          200: "#9cf3dc",
          300: "#50e3c2",
          400: "#32cfb0",
          500: "#19b398",
          600: "#11907c",
          700: "#127364",
          800: "#135c52",
          900: "#154c45",
        },
        "hunter-black": {
          50: "#f5f7f8",
          100: "#dee5e9",
          200: "#bdcad2",
          300: "#94a7b4",
          400: "#6e8293",
          500: "#536779",
          600: "#415160",
          700: "#37434e",
          800: "#2f3740",
          900: "#191d21",
        },
        "hunter-purple": {
          50: "#f7f5ff",
          100: "#eae2ff",
          200: "#d0c4ff",
          300: "#a78bfa",
          400: "#8461f7",
          500: "#653eea",
          600: "#512bd1",
          700: "#421987",
          800: "#34125f",
          900: "#270f3a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
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
      },
      backgroundImage: {
        "bg-dotted":
          "radial-gradient(circle at 50% 50%,#605e6755 0,#141318 15%)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        underline: "under 1s ease-in-out infinite",
      },
      boxShadow: {
        "toolbar": "0 0 6px 1px",
        "toolbar-hover": "0 0 8px 2px",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
};

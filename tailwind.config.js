/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        ete: {
          blue: "#1A40C8",
          "blue-dark": "#091748",
          red: "#FF202C",
          "red-dark": "#950008",

          green: "#08B744",
          "green-dark": "#03511E",
          yellow: "#FEF03A",
          "yellow-dark": "#AA9E01",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Fredoka", "sans-serif"],
        mono: ["Ubuntu Mono", "monospace"],
        primaryRegular: ["Regular"],
        primaryItalic: ["Italic"],
        primaryBold: ["Bold"],
      },
      backgroundImage: {
        "dark-mode":
          "linear-gradient(to bottom, #AA9E014D, #03511E4D, #0917484D, #9500084D), url('../ICONES.svg')",
        "light-mode":
          "linear-gradient(to bottom, #FEF03A4D, #08B7444D, #1A40C84D, #FF202C4D), url('../ICONES.svg')",
        rainbow:
          "linear-gradient(to right, #FEF03A, #08B744, #1A40C8, #FF202C)",
        // rainbow:
        //   "linear-gradient(to right, #FF202C, #FEF03A, #08B744, #1A40C8, #4b0082, #ee82ee)",
        /* "dark-mode":
          "linear-gradient(to bottom, #554F00, #023012, #4A0004, #04091D), url('./src/assets/ICONES.svg')",*/
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

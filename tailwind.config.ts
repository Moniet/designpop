import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "15px",
      },
    },
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    keyframes: {
      slideDown: {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      slideUp: {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    },
  },
  plugins: [],
}
export default config

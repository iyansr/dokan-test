import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ["var(--font-plus-jakarta-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        app: {
          blue: "#0719B3",
          "dark-blue": "#030B53",
          text: "#1D1F1E",
          "text-nav": "#022C22",
          "text-secondary": "#646A69",
          "text-tertiary": "#242424",
          "input-placeholder": "#C2C2C2",
          "bg-dark": "#1A1B1E",
          gray: "#606060",
          label: "#383838",
          border: "#D9DEDD",
        },
      },
      borderRadius: {
        "10": "10px",
      },
      boxShadow: {
        custom: "0px 1px 2px 0px #022C2214",
        button: "0px 1px 2px 0px #EFF0F280",
      },
    },
  },
  plugins: [],
} satisfies Config;

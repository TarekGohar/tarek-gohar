import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primeform: ["Primeform Pro", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        number: ["Number", "sans-serif"],
      },
    },

  },
  plugins: [],
} satisfies Config;

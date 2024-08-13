/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#3F72AF",
      background: "#D8DBE2",
      black: "#080708",
      white: "#FFFFFF",
      cinza: "#7D7E83",
    },
    fontFamily: {
      sans: ["Niramit", "sans-serif"],
    },
  },
  plugins: [],
};

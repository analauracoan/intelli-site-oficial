/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "4K": "2560px",
      LaptopL: "1440px",
      Laptop: "1024px",
      Tablet: "768px",
      MobileL: "425px",
      MobileM: "375px",
      MobileS: "320px",
    },
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

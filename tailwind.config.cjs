/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ss: "400px",
        sl: "520px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        mxl: "1100px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1636px",
        "4xl": "1836px",
        "5xl": "1920px",
      },
    },
  },
  plugins: [],
};

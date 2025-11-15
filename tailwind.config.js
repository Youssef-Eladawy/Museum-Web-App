/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        grey: "rgb(var(--color-grey) / <alpha-value>)",
      },
      fontFamily: {
        primary: ["Jost", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

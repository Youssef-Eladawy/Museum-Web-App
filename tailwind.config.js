/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#13357b",       // كان var(--main-color)
        secondary: "#f2f2f2",  // كان var(--secondery-color)
      },
    },
  },
  plugins: [],
}

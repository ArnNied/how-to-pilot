/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          base: "#E8D7CD",
          dark: "#EDC49D",
        },
        secondary: {
          base: "#202020",
        },
        tertiary: {
          base: "#FF8906",
        },
      },
    },
    plugins: [],
  },
}

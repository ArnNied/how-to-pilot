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
          lighter: "#787878",
          light: "#2F3266",
          base: "#202020",
        },
        tertiary: {
          orange: "#FF8906",
          blue: "#4263E4",
        },
      },
    },
    plugins: [],
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
      Roboto: ['Roboto', "sans-serif"],
      Montserrat: ['Montserrat', "sans-serif"]
    }, backgroundImage: {
      "home-page": "url('./Images/background.png')",
    },
    colors: {
      blank: '#D9D9D91A'
    }
  },
  },
  plugins: [],
}

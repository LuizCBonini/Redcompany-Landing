/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'title':['Poppins', 'sans-serif']
    },
    colors: {
      'red': '#BB0723',
      'bordo': '#750723',
      'white': '#FFFFFF',
    },
    maxWidth: {
      'home-title': '25.5rem',
    },
    margin: {
      'home-title': '11.5%',
    },
  },
  plugins: [],
}
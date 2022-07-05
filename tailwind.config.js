/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins':['Poppins', 'sans-serif']
      },
      colors: {
        'red': '#BB0723',
        'bordo': '#750723',
        'white': '#FFFFFF',
        'title': '#444444',
        'text': '#363636',
        'green': '#4BA883',
      },
      maxWidth: {
        'home-title': '10em',
        'why-content': '58em',
      },
      margin: {
        'home-title': '11.5%',
      },
      boxShadow: {
        'orçamento-shadow': '0px 3px 6px #00000045;'
      },
    },
    },

  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
        'gothamLight':['GothamLight', 'sans-serif'],
        'gothamBold':['GothamBold', 'sans-serif'],
      },
      colors: {
        'red': '#BB0723',
        'bordo': '#750723',
        'white': '#FFFFFF',
        'title': '#444444',
        'text': '#363636',
        'green': '#4BA883',
        'amarelo': '#E8A91C',
        'grey-lighter': '#E5E5E4'
      },
      maxWidth: {
        'home-title': '10em',
        'why-content': '58em',
        'about-content': '10em',
      },
      margin: {
        'home-title': '11.5%',
      },
      boxShadow: {
        'orçamento-shadow': '0px 3px 6px #00000045;'
      },
      screens: {
        'laptopG': '1200px',
        'laptop': '770px',
        'mobileG': '430px',
        'mobileM': '380px'
      }
    },
    },

  plugins: [],
}

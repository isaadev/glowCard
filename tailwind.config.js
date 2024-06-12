/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        'top': '3.5rem',
        'middle': '30rem',
        'bottom': '4rem',
        '0' : '0rem',
        '0.5' : '0.5rem',
        'btnpad': '1rem',
        'cardpad': '1.5rem',
        'cardwidth': '240px',
        'cardHeight': '320px',
        'profileW': '1200px',
        'maxintroCardW':'703px',
        'maxintroCardH':'407px',
        'minintroCardH':'200px',
        'minintroCardW':'200px',


      },
      fontSize: {
        'prodTxt': '0.8rem',
        'sellerTxt': '0.6rem',
        'btnTxt': '0.45rem',
        'topTxt': '0.7rem',
      },
      colors: {
        'nextbtn': '#DCC7DD'
      },
      screens: {
        'xs' : '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },

  },
  plugins: [],
};

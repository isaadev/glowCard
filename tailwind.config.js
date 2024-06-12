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
        'profileW': '1575px'

      },
      fontSize: {
        'prodTxt': '0.8rem',
        'sellerTxt': '0.6rem',
        'btnTxt': '0.45rem',
        'topTxt': '0.7rem',
      },
      colors: {
        'nextbtn': '#DCC7DD'
      }
    },

  },
  plugins: [],
};

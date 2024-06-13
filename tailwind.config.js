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
        '0.2' : '0.2rem',

        'btnpad': '1rem',
        'cardpad': '1.0rem',
        'cardwidth': '240px',
        'cardHeight': '320px',

        // Profile header width
        'desktop': '1200px',
        'tablet': '780px',

      },
      fontSize: {
        // For product cards only
        'productTxt': '0.8rem',
        'sellerTxt': '0.6rem',
        'cartTxt': '0.45rem',
        'topTxt': '0.7rem',

        // For profile header
        'desktop': '1rem',
        'tablet': '0.8rem',
        'mobile': '0.40rem'
      },
      colors: {
        'nextbtn': '#DCC7DD'
      }
    },
    screens: {
      'desktop': '1280px',
      'tablet': '800px',
    },
  },
  plugins: [],
};

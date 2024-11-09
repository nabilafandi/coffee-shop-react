/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#41b941',
        danger: '#e74c3c',
        gray: {800:'#434040',50:'#D9D9D9'},
        red: {800:'#FF1717'},

        offWhite: '#F0E8DB',
        trippicalBlack: '#1A1A1A',
        trippicalWhite: '#FEFEF9',
        logoRed: '#FF1717',
        darkRed: '#CC0000',
        lightRed: '#F56033',

      },
      fontFamily: {
        'avenir': ['Avenir', 'sans-serif'],
        'mogena': ['Mogena', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
})
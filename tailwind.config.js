/** @type {import('tailwindcss').Config} */
export default {
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
        red: {800:'#FF1717'}
      },
      fontFamily: {
        'sans': ['Jakarta Sans', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
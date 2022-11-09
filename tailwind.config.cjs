/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'color-cta-read-more': '#f45b53',
      },
      fontFamily: {
        inter: 'Inter',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '800px',
        'mini': '350px',
        'laptop': '1003px',
        'miniTv': '1024px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}

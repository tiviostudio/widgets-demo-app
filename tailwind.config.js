/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000',
        secondary: '#253843'
      },
      screens: {
        'xl': '1300px',
      }
    },
  },
  plugins: [],
}


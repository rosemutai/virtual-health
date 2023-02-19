/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#233348',
        'light-blue': '#1F1534',
        'light-grey': '#7D7987',
        'blue': '#458FF6'
      }
    },
    fontFamily: {
      'mulish': ['Mulish', 'sans-serif']
    }
  },
  plugins: [],
}

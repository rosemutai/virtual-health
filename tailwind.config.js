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
      },
      backgroundImage: {
        'hero-pattern': "url('../public/images/bgelement.svg')",
      },

      boxShadow: {
        '3xl': '10, 40, 50, rgba(229, 233, 246, 0.4)'
      }
    },
    fontFamily: {
      'mulish': ['Mulish', 'sans-serif']
    }
  },
  plugins: [],
}

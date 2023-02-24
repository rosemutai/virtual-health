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
      spacing: {
        '8-5': '8.5rem',
      },

      backgroundImage: {
        'hero-pattern': "url('../public/images/bgelement.svg')",
        'background-gradient': 'linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)',
        'footer-linearbackground': 'linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)',
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

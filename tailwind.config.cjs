/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      ugly: 'UglyTypistRegular',
      anar: 'AnarchistMustacheRegular',
    },

    extend: {
      colors: {
        'main-bg': '#003844',
        'color-secondary': '#f194b4',
        'color-tertiary': '#ffb100',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D38784',
        secondary: '#212B3B',
      },
      container: {
        center: true,
        screens: {
          DEFAULT: '62.125rem',
        },
        padding: {
          DEFAULT: '2rem',
        },
      },
    },
  },
  plugins: [],
};

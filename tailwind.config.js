import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#ffffff', // almost white
        400: 'black', // baby blue
        500: '#848482', // gray
        600: 'red', // wine
      },
      grayscale: {
        25: 'black', // beige
        50: '#54626F', //black coal
        100: 'red',
        200: 'ghostwhite',
        950: 'inherit',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};

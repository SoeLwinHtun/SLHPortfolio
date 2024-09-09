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
        200: '#ffffff', 
        400: 'black', 
        500: '#002366', 
        600: 'red', 
      },
      grayscale: {
        25: 'black',
        50: '#54626F',
        100: 'red',
        200: 'ghostwhite',
        950: 'black',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};

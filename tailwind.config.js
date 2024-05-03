/** @type {import('tailwindcss').Config} */
const colors = require('./src/ui/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors,
    },
  },
  plugins: [],
};

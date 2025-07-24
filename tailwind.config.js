/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        caveat: ['"Caveat"', 'cursive'],
        instrument: ['"Instrument Serif"', 'serif'],
        didact: ['"Didact Gothic"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        brink: ['Brink', 'sans-serif']
      }
    },
  },
  plugins: [],
}


// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
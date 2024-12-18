/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
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
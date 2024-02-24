/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        pixel:['Pixelify Sans'],
        gbold:['gsans-bold'],
        greg:['gsans-regular'],
        gmed:['gsans-medium']
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors:{
        'white-sr':'#FEFEFE',
        'gray-sr':'#B8B8B8',
        'graybg-sr':'#F6F6F6',
        'black-sr':'#303030',
        'graybar-sr':'#808080',
        'blue-sr':'#003D73'
      },
      margin:{
        '450px':'450px'
      }
    },
  },
  plugins: [],
}

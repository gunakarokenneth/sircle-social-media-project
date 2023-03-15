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
        'blue-sr':'#003D73',
        'blacktext-sr':'#303030'
      },
      margin:{
        '450px':'450px'
      },
      width:{
        '600px':'600px'
      },
      width2:{
        '1000px':'1000px'
      },
      width3:{
        '530px':'530px'
      },
      width4:{
        '188px':'188px'
      },
      height:{
        '300px':'300px'
      },
      padding:{
        '35px':'35px'
      },
      padding2:{
        '80px':'80px'
      },
      rounded:{
        '10px':'10px'
      },
    },
  },
  plugins: [],
}

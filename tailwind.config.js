/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  purge:[
    './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['var(--font-inter)',],
        'DM-San': ["DM Sans","sans-serif"],
        "Montserrat":["Montserrat","sans-serif"]
      },
      backgroundImage: {
        'login-pattern': "url('/images/bgs/login.png')"
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'menu-btn-color':{
          "bg":"#F3F3F3",
          "border":"#E3E3E4",
          'click':'#6F35FC',
        },
        'border-color':{
          "wallet":"#E1E1E1",
          "token":"#EDF1F4"
        },
        "customText":{
          "transaction-confirm":"#71D78D",
          "transaction-title":"#525252",
          "transaction-date":"#07162F"
        },
        'default-color': '#312ECB',
        'default-color-opacity':'#d4cef7',
        'black-color':{
          100:"#040308",
          200:"#9C9DAF",
          300:"#EDF1F4",
          400:"#D9D9D9",
          500:"#b3b3b3"
        },
        'bg-color':{
          100:"#9C9DAF"
        },
        'blue-color':{
          100:"#3278E0"
        },
        'white-color':{
          100:'#F5F5F5'
        },
        'font-color':{
          100:"#525252"
        },
        "wallet-menu-color":"#F3F3F3",
        "wallet-background":"#D4D4D4"
    },
    transformOrigin:{
      'top-left-0-1/2':'0% -50%'
    }
    }
  },
  plugins: [require('tailwindcss-font-inter')],
}

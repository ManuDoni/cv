const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './curriculum_donini_manuel.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        grey: colors.slate,
      },
      screens: {
        'print': {'raw': 'print'},
        // => @media  print { ... }
      },
      spacing: {
        '28': '7rem', // w-28 = 7rem
      }
    },
  },
  plugins: [],
}

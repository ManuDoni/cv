module.exports = {
  purge: [
    './curriculum_donini_manuel.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
        // => @media  print { ... }
      },
      spacing: {
        '28': '7rem', // w-28 = 7rem
      }
    },
  },
  variants: {},
  plugins: [],
}

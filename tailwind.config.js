module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'sm':"423px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

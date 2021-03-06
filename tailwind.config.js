module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        primary: '#03363d',
        danger: '#e55239',
        success: '#33c175',
        warning: '#f1b24a',
      },
      fontFamily: {
        pop: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
};

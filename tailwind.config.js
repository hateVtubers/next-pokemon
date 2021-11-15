module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'crimson': {
          DEFAULT: '#EE1515',
          '50': '#FAC0C0',
          '100': '#F9ADAD',
          '200': '#F68787',
          '300': '#F46161',
          '400': '#F13B3B',
          '500': '#EE1515',
          '600': '#BD0E0E',
          '700': '#890A0A',
          '800': '#550606',
          '900': '#200202'
        },
      },
      height: {
        '4.5': '18px',
        '5.5': '22px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    lineHeight: {
      'loose': '2rem',
    },
    letterSpacing: {
      'wide': '0.147rem',
      'wider': '0.169rem',
      'widest': '0.297rem',
    },
    fontSize: {
      'xxl': '9.375rem',
      'xl': '6.25rem',
      'lg': '3.5rem',
      'md': '2rem',
      'sm': '1.75rem',
      'xs': '1.125rem',
      'xss': '1rem',
      'xxxs': '0.875rem'
    },
    fontFamily: {
      sans: ['"Barlow Condensed"', 'sans-serif'],
      serif: ['Bellefair', 'serif'],
    },
    colors: {
      cinder: '#0B0D17',
      fog: '#D0D6F9',
      white: '#fff',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



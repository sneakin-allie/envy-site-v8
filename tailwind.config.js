module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { // taken rom Ayana's color scheme
        darkgreen: '#052324', // formerly darkgreen
        teal: '#047870',
        emerald: '#1DCA7F',
        aquamarine: '#7EE8B9',
        mint: '#BEF0DB',
        palemint: '#E8FAF3', // formerly palegreen - updated
        darkslategray: '#314448',
        gunmetalgray: '#455C5A', // formerly darkslategray - updated
        slategray: '#7B9291', // formerly graygreen - updated
        silver: '#BDC8C8',
        darkergreen: '#041F20', // formerly darkergreen NOT in color scale
      },
      fontFamily: {
        ibmplexserif: ['IBM Plex Serif'], // formerly ibmplexserif
        spacegrotesk: ['Space Grotesk'], // formerly spacegrotesk
      },
      fontSize: {
        'h3': ['2.5rem'],
        '*': ['5.625rem'],
        'larger': ['9.375rem'],
        'largest': ['14.063rem'],
        // '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      letterSpacing: {
        h5: '0.25em',
      },
      width: {
        '374': '23.375em',
        '526': '32.875em',
      },
      height: {
        '96': '6em',
        '144': '9em',
        '180': '11.25em',
      }
    },
  },
  plugins: [],
}

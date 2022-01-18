module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { // match Ayana's color scale
        darkgreen: '#052324',
        teal: '#047870',
        emerald: '#1DCA7F',
        aquamarine: '#7EE8B9',
        mint: '#BEF0DB',
        palemint: '#E8FAF3', 
        darkslategray: '#314448',
        gunmetalgray: '#455C5A', 
        slategray: '#7B9291', 
        silver: '#BDC8C8',
        darkergreen: '#041F20', // not in color scale
      },
      fontFamily: {
        ibmplexserif: ['IBM Plex Serif'], 
        spacegrotesk: ['Space Grotesk'], 
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
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      }, 
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      }  
    },
  },
  plugins: [],
}

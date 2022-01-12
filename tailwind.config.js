module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkgreen: '#052324',
        graygreen: '#7B9291',
        palegreen: '#E8FAF3',
        lightgray: '#FFFFFF', // change this to white
        darkergreen: '#041F20',
      },
      fontFamily: {
        ibmplexserif: ['IBM Plex Serif'],
        spacegrotesk: ['Space Grotesk']
      }
    },
  },
  plugins: [],
}

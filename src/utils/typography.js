import Typography from 'typography';

const typography = new Typography({
  
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Lato', 'Arial', 'sans-serif' ],
  bodyFontFamily: ['Lato', 'Arial', 'sans-serif' ],
  googleFonts: [
      {
      name: 'Lato',
      styles:[
          '400',
          '700',
      ]
    },
  ]

})

typography.injectStyles()
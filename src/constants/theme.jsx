import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

import '../fonts/hk-grotesk/index.css'

import { blue } from '@material-ui/core/colors'

const normalFonts = ['"HK Grotesk"', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', 'Arial', 'sans-serif'].join(',')

const headingFonts = ['"HK Grotesk"', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', 'Arial', 'sans-serif'].join(',')

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#7C0000',
      },
      secondary: {
        main: '#E70012',
      },
    },
    typography: {
      fontFamily: normalFonts,
      body1: {
        fontSize: '1.5rem',
        // letterSpacing: "0.3px", // improve readability
      },
      body2: {
        fontSize: '1.3rem',
        // letterSpacing: "0.3px", // improve readability
      },
      caption: {
        fontSize: '0.95rem',
        color: 'rgba(255, 255, 255, 0.5)', // 'hint' text colour
        // fontStyle: "italic",
      },
      h1: {
        fontSize: '4rem',
        fontWeight: '700',
        fontFamily: headingFonts,
        lineHeight: 1.1,
      },
      h2: {
        fontSize: '3.65rem',
        fontWeight: '600',
        fontFamily: headingFonts,
      },
      h3: {
        fontWeight: '500',
        fontFamily: headingFonts,
      },
      h4: {
        fontWeight: '500',
        fontFamily: headingFonts,
      },
      h5: {
        fontWeight: '500',
        fontFamily: headingFonts,
      },
      h6: {
        fontWeight: '500',
        fontFamily: normalFonts,
      },
      button: {
        fontFamily: normalFonts,
      },
    },
  }),
  { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'], factor: 2.25 },
)

export default theme

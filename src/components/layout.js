import React from 'react'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'

import './layout.css'

import Header from './header'
import Link from './Link'

import { MuiThemeProvider, Button, Box, useMediaQuery, Paper } from '@material-ui/core'

import { Body2 } from './EasyText'

import CookieConsent from 'react-cookie-consent'

import theme from '../constants/theme'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const LargeScreen = useMediaQuery('(min-width:600px)')

  const FooterContent = (
    <>
      {LargeScreen ? (
        <Box textAlign="center">
          <Body2>
            &copy; {new Date().getFullYear()}
            {' - David Wheatley'}
          </Body2>
        </Box>
      ) : (
        <Box textAlign="center">
          <Body2 style={{ fontSize: 13 }}>
            &copy; {new Date().getFullYear()}
            {' - David Wheatley'}
          </Body2>
        </Box>
      )}
    </>
  )

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CookieConsent
          location="bottom"
          enableDeclineButton={false}
          buttonText="Sounds good!"
          cookieName="cookieConsent"
          style={{ background: '#2B373B' }}
          expires={365} // consent expires in one year
          // eslint-disable-next-line no-unused-vars
          ButtonComponent={({ children, style, ...props }) => {
            props['variant'] = 'contained'
            props['color'] = 'primary'
            props['style'] = { margin: 'auto' }

            return React.createElement(Button, props, children)
          }}
        >
          For this site to work properly, we need to store cookies on your device.{' '}
          <span style={{ fontSize: '10px' }}>
            <Link hasExternalLinkIcon={false} to="http://www.whatarecookies.com/">
              Learn more about cookies
            </Link>
          </span>
        </CookieConsent>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div style={{ marginBottom: theme.spacing(4) }}>
          <Box component="main">{children}</Box>
        </div>

        {LargeScreen ? (
          <Paper
            component="footer"
            style={{
              position: 'fixed',
              bottom: 0,
              padding: theme.spacing(1.5),
              paddingBottom: theme.spacing(1.75),
              width: '100vw',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            elevation={12}
          >
            {FooterContent}
          </Paper>
        ) : (
          <Paper
            component="footer"
            style={{
              position: 'fixed',
              bottom: 0,
              padding: theme.spacing(1),
              paddingBottom: theme.spacing(1.25),
              width: '100vw',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            elevation={4}
          >
            {FooterContent}
          </Paper>
        )}
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

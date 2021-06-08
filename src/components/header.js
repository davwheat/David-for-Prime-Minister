import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { makeStyles, Toolbar, IconButton } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import { CustomAppBar } from './material/AppBar'

import { H6 } from './EasyText'

import MenuIcon from 'mdi-react/MenuIcon'
import NavDrawer from './material/NavDrawer'

import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: -8,
  },
  title: {
    paddingLeft: '84px',
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  navbar: {
    minWidth: 250,
  },
  withScrollIndicator: {
    position: 'sticky',
    marginTop: -32,
    top: 0,
    display: 'block',
    zIndex: 1001,
    height: 3,
    background: theme.palette.secondary.dark,
    width: '100vw',
    overflow: 'hidden',
    '&:after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      top: 0,
      height: 3,
      width: '1rem', // initial size
      background: theme.palette.secondary.main,
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const Header = ({ pageTitle, type }) => {
  const classes = useStyles()

  useEffect(() => {
    if (type === 'article') {
      const styleElem = document.head.appendChild(document.createElement('style'))

      window.addEventListener('scroll', () => {
        let h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight'

        let scrollPercentage = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100

        styleElem.innerHTML = `#scrollIndicator:after {
          width: calc(${scrollPercentage}% + 1rem);
        }`
      })
    }
  })

  return (
    <>
      <CssBaseline />
      <MakeAppBar title={pageTitle} />
    </>
  )
}

const MakeAppBar = ({ title }) => {
  const classes = useStyles()
  // const theme = useTheme()

  const [DrawerOpen, setDrawerOpen] = useState(false)

  // const ShowDrawer = () => {}

  return (
    <div className={classes.root}>
      <CustomAppBar>
        <div style={{ position: 'relative' }}>
          <Toolbar>
            <IconButton title="Menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon color="white" />
            </IconButton>
            <StaticImage
              draggable="false"
              src="../images/fist-transparent_small.png"
              alt=""
              height={64 * 0.9}
              placeholder="none"
              style={{
                position: 'absolute',
                display: 'inline-block',
                verticalAlign: 'middle',
                height: '90%',
                marginLeft: 48,
                bottom: 0,
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <H6 className={classes.title}>{title}</H6>
            </div>
          </Toolbar>
        </div>
      </CustomAppBar>
      <NavDrawer open={DrawerOpen} closeDrawer={() => setDrawerOpen(false)} />
    </div>
  )
}

MakeAppBar.propTypes = {
  title: PropTypes.string,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string,
  type: PropTypes.oneOf(['article', null]),
}

Header.defaultProps = {
  siteTitle: ``,
  pageTitle: `The Big Dave Political Party`,
}

export default Header

/* eslint-disable react/no-danger */
import React, { useRef, useEffect } from 'react'

import { Parallax } from 'react-scroll-parallax'
import { useTheme, makeStyles } from '@material-ui/core'
import { H1 } from './EasyText'
import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  hero: {
    height: 600,
    overflow: 'hidden',
    position: 'relative',
    willChange: 'transform',
  },
  img: {
    // try to improve animate performance
    '-webkit-backface-visibility': 'hidden',
    '-webkit-perspective': 1000,
    '-webkit-transform': 'translateZ(0)',
    'backface-visibility': 'hidden',
    perspective: 1000,
    transform: 'translateZ(0)',
    willChange: 'filter',

    width: 'calc(100% + 26px)',
    height: '100%',
    objectFit: 'cover',
    marginLeft: -13,
    marginRight: -13,

    [theme.breakpoints.down('sm')]: {
      filter: 'none !important',
    },
  },
}))

const percentWithinViewport = function (element) {
  var elementTop = element.offsetTop
  var scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
  var spaceTop = elementTop - scrollTop
  var elementHeight = element.getBoundingClientRect().height
  var screenHeight = window.innerHeight
  var scrollBottom = scrollTop + screenHeight
  var bottomElement = elementTop + element.getBoundingClientRect().height
  var spaceBottom = bottomElement - scrollBottom
  var heightInScreen = elementHeight - spaceBottom
  var percentage

  if (spaceTop < 0) {
    heightInScreen -= spaceTop * -1
  }

  if (spaceBottom < 0) {
    heightInScreen -= spaceBottom * -1
  }

  percentage = (heightInScreen / screenHeight) * 100
  percentage = percentage < 0 ? 0 : percentage

  return percentage
}

export default function HeroImage({ customImg, customAlt, customQuote }) {
  const classes = useStyles()
  const theme = useTheme()

  const imageRef = useRef()

  useEffect(() => {
    const updateImageStyles = () => {
      if (window.innerWidth <= 600) return

      const element = imageRef.current

      if (!element) return

      const pct = percentWithinViewport(element)

      const realPercent = Math.min(Math.max(((100 - pct - 35.9659) / 64.0341) * 100, 0), 100)

      element.style.filter = `grayscale(${realPercent}%) blur(${realPercent / 10}px)`
    }

    window.addEventListener('scroll', updateImageStyles, {
      capture: true,
      passive: true,
    })

    return () => window.removeEventListener('scroll', updateImageStyles)
  }, [])

  return (
    <>
      <Parallax className={classes.hero} styleInner={{ height: '100%', width: '100%', willChange: 'transform' }} tagOuter="div" y={[-50, 50]}>
        <div ref={imageRef}>
          <StaticQuery
            query={graphql`
              {
                allFile(filter: { sourceInstanceName: { eq: "header-images" } }) {
                  nodes {
                    relativePath
                    childImageSharp {
                      gatsbyImageData(width: 1080, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                  }
                }
              }
            `}
            render={data => (
              <GatsbyImage
                alt={customAlt || 'Photo of party leader: David Wheatley'}
                image={getImage(
                  data.allFile.nodes.find(node => node.relativePath === customImg) ||
                    data.allFile.nodes.find(node => node.relativePath === 'main.jpg'),
                )}
                className={classes.img}
              />
            )}
          />
        </div>
      </Parallax>
      <div
        style={{
          marginTop: -600,
          height: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          WebkitTextStroke: 'thick black',
          color: '#E70012',
          position: 'relative',
        }}
      >
        <H1 align="center">
          <q
            style={{ fill: theme.palette.primary.main }}
            dangerouslySetInnerHTML={{
              __html: customQuote ? customQuote : `If&nbsp;nothing&nbsp;else, we&nbsp;are&nbsp;radical.`,
            }}
          />
        </H1>
      </div>
    </>
  )
}

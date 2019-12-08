/* eslint-disable react/no-danger */
import React, { useRef, useEffect } from "react"

import { Parallax } from "react-scroll-parallax"
import { useTheme, makeStyles } from "@material-ui/core"
import { H1 } from "./EasyText"

const useStyles = makeStyles(() => ({
  hero: {
    height: 600,
    overflow: "hidden",
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}))

const percentWithinViewport = function(element) {
  var elementTop = element.offsetTop
  var scrollTop =
    (window.pageYOffset || document.documentElement.scrollTop) -
    (document.documentElement.clientTop || 0)
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
      const element = imageRef.current

      const pct = percentWithinViewport(element)

      const realPercent = Math.min(
        Math.max(((100 - pct - 35.9659) / 64.0341) * 100, 0),
        100
      )

      element.style.filter = `grayscale(${realPercent}%) blur(${realPercent /
        10}px)`
    }

    window.addEventListener("scroll", updateImageStyles)

    return () => window.removeEventListener("scroll", updateImageStyles)
  }, [])

  return (
    <>
      <Parallax
        className={classes.hero}
        styleInner={{ height: "100%", width: "100%" }}
        tagOuter="div"
        y={[-75, 50]}
      >
        <img
          alt={
            customImg
              ? customAlt
                ? customAlt
                : ``
              : "Photo of party leader: David Wheatley"
          }
          src={customImg ? customImg : require("../images/hero.png")}
          className={classes.img}
          ref={imageRef}
        />
      </Parallax>
      <div
        style={{
          marginTop: -600,
          height: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          WebkitTextStroke: "thick black",
          color: "#E70012",
          position: "relative",
        }}
      >
        <H1 align="center">
          <q
            style={{ fill: theme.palette.primary.main }}
            dangerouslySetInnerHTML={{
              __html: customQuote
                ? customQuote
                : `If&nbsp;nothing&nbsp;else, we&nbsp;are&nbsp;radical.`,
            }}
          />
        </H1>
      </div>
    </>
  )
}

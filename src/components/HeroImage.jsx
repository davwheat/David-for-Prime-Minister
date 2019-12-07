/* eslint-disable react/no-danger */
import React from "react"

import { Parallax } from "react-scroll-parallax"
import { useTheme, makeStyles } from "@material-ui/core"
import { H1 } from "./EasyText"

const useStyles = makeStyles(() => ({
  hero: {
    height: 600,
    overflow: "hidden",
    position: "relative",
  },
}))

export default function HeroImage({ customImg, customQuote }) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <Parallax
        className={classes.hero}
        styleInner={{ height: "100%", width: "100%" }}
        tagOuter="div"
        y={[-75, 50]}
      >
        <img
          alt="Photo of party leader: David Wheatley"
          src={customImg ? customImg : require("../images/hero.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Parallax>
      <div
        style={{
          marginTop: -600,
          height: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          WebkitTextStroke: "0.08em rgba(255,255,255,0.75)",
          color: "rgba(0,0,0,0.75)",
          position: "relative",
        }}
      >
        <H1 align="center">
          <q
            style={{fill: theme.palette.primary.main}}
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

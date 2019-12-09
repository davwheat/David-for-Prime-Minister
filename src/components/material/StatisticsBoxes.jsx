import React from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core"
import { H4, P2, H2 } from "../EasyText"
import xolor from "xolor"

const useStyles = stats =>
  makeStyles(theme => ({
    root: {
      width: "100vw",
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      marginBottom: theme.spacing(4),
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    stat: {
      minHeight: 150,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexBasis: `calc(100% / ${stats.length})`,
      "&>*": { flexBasis: 1 },
    },
  }))

function getRandomColorInt(i, c) {
  const max = c === 1 ? 35 : -15,
    min = c === 1 ? 15 : -35

  let rng = Math.floor(Math.random() * Math.floor(max - min)) + min

  while (rng > -5 && rng < 5) {
    rng = Math.floor(Math.random() * Math.floor(max - min)) + min
  }

  return intToValidColorInt(i + rng)
}

function intToValidColorInt(i) {
  if (i > 255) {
    return 255
  } else if (i < 0) {
    return 0
  } else {
    return i
  }
}

export default function StatisticsBoxes({ baseColor, stats }) {
  const classes = useStyles(stats)()
  const theme = useTheme()

  const base = xolor(baseColor)

  const contrastColor = theme.palette.getContrastText(baseColor)

  const colors = [
    `rgb(${base.r},${base.g},${base.b})`,
    `rgb(${intToValidColorInt(base.r + 15)},${intToValidColorInt(
      base.g + 15
    )},${intToValidColorInt(base.b + 15)})`,
    `rgb(${intToValidColorInt(base.r - 15)},${intToValidColorInt(
      base.g - 15
    )},${intToValidColorInt(base.b - 15)})`,
  ]

  while (
    colors[1] === `` ||
    theme.palette.getContrastText(colors[1]) !== contrastColor
  ) {
    colors[1] = `rgb(${getRandomColorInt(base.r)},${getRandomColorInt(
      base.g
    )},${getRandomColorInt(base.b)})`
  }

  while (
    colors[2] === `` ||
    theme.palette.getContrastText(colors[2]) !== contrastColor
  ) {
    const c1 = xolor(colors[1])

    colors[2] = `rgb(${getRandomColorInt(c1.r)},${getRandomColorInt(
      c1.g
    )},${getRandomColorInt(c1.b)})`
  }

  return (
    <section className={classes.root}>
      {stats.map((stat, i) => (
        <div
          className={classes.stat}
          key={stat.caption}
          style={{ background: colors[i] }}
        >
          <H2
            style={{
              color: theme.palette.getContrastText(colors[i]),
              fontWeight: 900,
            }}
          >
            {stat.figure}
          </H2>
          <P2
            style={{
              fontWeight: 700,
              color: theme.palette.getContrastText(colors[i]),
            }}
          >
            {stat.caption}
          </P2>
        </div>
      ))}
    </section>
  )
}

StatisticsBoxes.propTypes = {
  baseColor: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      figure: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ),
}

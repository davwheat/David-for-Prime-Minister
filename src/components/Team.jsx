import React from "react"

import clsx from "clsx"

import { makeStyles, Paper } from "@material-ui/core"
import { H4, H6, P2 } from "./EasyText"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "space-around",
    justifyContent: "space-evenly",
  },
  person: {
    width: "100%",
    maxWidth: 275,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto auto auto",
    gridRowGap: theme.spacing(),
    margin: theme.spacing(1.5),
  },
  personSmall: {
    maxWidth: 200,
  },
  personOnlyName: {
    gridTemplateRows: "auto auto",
  },
  portrait: {
    borderRadius: "50%",
    width: 275,
    height: 275,
    objectFit: "cover",
    marginBottom: theme.spacing(),
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: 200,
      height: 200,
    },
  },
  personSmallPortrait: {
    width: 200,
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
    },
  },
  name: {
    textTransform: "uppercase",
    wordSpacing: 275,
    textAlign: "center",
    fontWeight: 700,
    letterSpacing: 3,
    fontSize: "1.6rem",
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "1.2rem",
  },
  description: {
    textAlign: "center",
    fontSize: "1.1rem",
  },
  flexBreak: {
    flexBasis: "100%",
    height: 2,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    opacity: 0.25,
    background: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAFCAYAAAAHQL+kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAArSURBVDhPY2xqavrPQGNw6tQppc2bN9+HcmkCmKD0kAejHhlsYJh4hIEBADLACAfgepqCAAAAAElFTkSuQmCC") repeat-x center center`,
  },
}))

const People = [
  {
    name: "David Wheatley",
    title: "Party Leader",
    description: `More commonly known as "Big Dave", David has always stood for a country that delivers for all, not a select few. David follows the will of the people, not the entitled.`,
    portrait: require("../images/the-team/david-wheatley.png"),
  },
  {
    name: "Matty Brennan",
    title: "Campaign Manager",
    description: `Matthew Brennan is known for his dashing looks, intelligence, and discovery of the atom (according to him).`,
    portrait: require("../images/the-team/matty-brennan.png"),
  },
  {
    name: "James Polhill",
    title: "",
    description: ``,
    portrait: require("../images/the-team/james-polhill.png"),
    dense: true,
  },
  {
    name: "Alex Drane",
    title: "",
    description: ``,
    portrait: require("../images/the-team/alex-drane.png"),
    dense: true,
  },
  {
    name: "Sam Grant",
    title: "",
    description: ``,
    portrait: require("../images/the-team/sam-grant.png"),
    dense: true,
  },
]

export default function TheTeam() {
  const classes = useStyles()

  let isInDense = false

  return (
    <section className={classes.root}>
      {People.map((person, i) => {
        const onlyName = person.title === `` && person.description === ``

        const a = (
          <>
            {person.dense && !isInDense && (
              <div key={i} className={classes.flexBreak} />
            )}
            <div
              key={person.name}
              className={clsx(
                classes.person,
                person.dense && classes.personSmall,
                onlyName && classes.personOnlyName
              )}
            >
              <Paper
                component="img"
                className={clsx(
                  classes.portrait,
                  person.dense && classes.personSmallPortrait
                )}
                alt="Image of David Wheatley"
                src={person.portrait}
                elevation={4}
                draggable="false"
              />
              <H4 className={classes.name} color="primary" component="h2">
                {person.name}
              </H4>
              {!onlyName && (
                <H6 className={classes.title} component="h3">
                  {person.title}
                </H6>
              )}
              {!onlyName && (
                <P2 className={classes.description}>
                  {person.description.split("\n").map((i, key) => (
                    <>
                      {i}
                      <br />
                    </>
                  ))}
                </P2>
              )}
            </div>
          </>
        )

        if (person.dense) {
          isInDense = true
        }

        return a
      })}
    </section>
  )
}

import React from "react"

import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Slide,
  Divider,
  Fade,
  useTheme,
} from "@material-ui/core"

import Link from "../Link"

import HomeIcon from "mdi-react/HomeOutlineIcon"
import ManifestoIcon from "mdi-react/ScriptTextOutlineIcon"
import WhyUsIcon from "mdi-react/HelpIcon"

const useStyles = makeStyles({
  fullList: {
    width: "auto",
    minWidth: 250,
  },
})

export default function NavDrawer({ open, closeDrawer }) {
  const classes = useStyles()
  const theme = useTheme()

  const menuItems = [
    {
      name: "Home",
      url: "",
      icon: <HomeIcon color={theme.palette.primary.main} />,
    },
    {},
    {
      name: "Manifesto",
      url: "manifesto",
      icon: <ManifestoIcon color={theme.palette.primary.main} />,
    },
    {
      name: "Why Us?",
      url: "why-us",
      icon: <WhyUsIcon color={theme.palette.primary.main} />,
    },
  ]

  const menu = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={() => closeDrawer()}
      onKeyDown={() => closeDrawer()}
    >
      <List>
        <Fade in style={{ transitionDelay: 125 }} timeout={200}>
          <ListSubheader
            onClick={e => {
              e.stopPropagation()
            }}
            style={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 15,
              userSelect: "none",
            }}
            color="default"
          >
            The Big Dave Political Party
          </ListSubheader>
        </Fade>
        {menuItems.map((item, index) => {
          return item.name ? (
            <Slide
              direction="right"
              in
              style={{ transitionDelay: index * 60 + 150 }}
              timeout={180}
              key={index}
            >
              <div>
                <ListItem button component={Link} to={item.url}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </div>
            </Slide>
          ) : (
            <Divider key={new Date()} />
          )
        })}
      </List>
    </div>
  )

  return (
    <Drawer
      open={open}
      PaperProps={{
        style: { borderRadius: 8 },
      }}
      onClose={() => closeDrawer()}
    >
      {menu()}
    </Drawer>
  )
}

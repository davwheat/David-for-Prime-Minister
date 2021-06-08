import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Paper, List, ListItem, ListItemText, ListSubheader, Fab } from '@material-ui/core'
import Link from './Link'
import { makeStyles } from '@material-ui/styles'

import ExpandMore from '@material-ui/icons/ExpandMoreOutlined'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    overflow: 'hidden',
    zIndex: 999,
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      top: 72,
      right: theme.spacing(),
      width: '100%',
      maxWidth: 350,
      transform: `translateX(calc(100% + ${theme.spacing()}px))`,
      transition: theme.transitions.create('transform'),
    },
    [theme.breakpoints.up('lg')]: {
      float: 'left',
      top: 72,
      left: theme.spacing(),
      position: 'sticky',
      width: 'calc((100% - 960px) / 2)',
      minWidth: 250,
      maxWidth: `max-content`,
    },
  },
  panelOpen: {
    [theme.breakpoints.down('md')]: {
      transform: `translateX(0px)`,
    },
  },
  showContentsButton: {
    display: 'none',
    transform: 'rotate(90deg)',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      position: 'fixed',
      top: 72 + theme.spacing(2),
      right: theme.spacing(),
      zIndex: 9999,
      transition: theme.transitions.create('transform'),
      '&[data-open=true]': {
        transform: 'rotate(-90deg)',
        background: 'transparent !important',
        boxShadow: 'none',
        color: 'black',
      },
    },
  },
}))

export default function PageNavSidebar({ menuItems }) {
  const classes = useStyles()

  const [SidebarOpen, setSidebarOpen] = useState(false)

  const ToggleSidebar = () => {
    setSidebarOpen(!SidebarOpen)
  }

  return (
    <>
      <Fab
        className={classes.showContentsButton}
        color="primary"
        data-open={SidebarOpen}
        onClick={ToggleSidebar}
        aria-label="Toggle contents sidebar"
      >
        <ExpandMore />
      </Fab>

      <Paper
        onClick={e => {
          setSidebarOpen(false)
          e.stopPropagation()
        }}
        elevation={8}
        className={clsx(classes.root, SidebarOpen && classes.panelOpen)}
      >
        <List dense>
          <ListSubheader
            style={{
              textTransform: 'uppercase',
              fontWeight: 700,
              fontSize: 15,
              userSelect: 'none',
            }}
          >
            Page Contents
          </ListSubheader>

          {menuItems.map(item => (
            <ListItem component={Link} to={item.anchor} key={item.anchor}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  )
}

PageNavSidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string.isRequired,
      anchor: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

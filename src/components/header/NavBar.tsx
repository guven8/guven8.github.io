import React from 'react'
import { Home, Book, AccountBox } from '@material-ui/icons'
import { ListItem, ListItemText, Typography, List, } from '@material-ui/core'

export const NavBar = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Home
            <Home />
          </Typography>
        </ListItemText>
        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Posts
            <Book />
          </Typography>
        </ListItemText>
        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Contact
            <AccountBox />
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  )
}
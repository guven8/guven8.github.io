import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  avatar: {
    margin: 10
  }
});

export const Header = () => {
  const classes = useStyles();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);

  const sideList = (
    <div className={classes.list}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar color="primary" position="static">
      <Drawer open={sideMenuOpen} onClose={toggleSideMenu}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleSideMenu}
          onKeyDown={toggleSideMenu}
        >
          {sideList}
        </div>
      </Drawer>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={toggleSideMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Guven Kemal Portfolio
        </Typography>
        {/* <NavBar /> */}
      </Toolbar>
    </AppBar>
  );
};

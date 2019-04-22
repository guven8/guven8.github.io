import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer
} from '@material-ui/core';
// import { NavBar } from "./NavBar"
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
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
};

type P = {
  classes: any;
};

type S = {
  sideMenuOpen: boolean;
};

@withStyles(styles)
export class Header extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { sideMenuOpen: false };
  }

  private toggleSideMenu = () => this.setState({ sideMenuOpen: !this.state.sideMenuOpen });

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <AppBar color="primary" position="static">
        <Drawer open={this.state.sideMenuOpen} onClose={this.toggleSideMenu}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleSideMenu}
            onKeyDown={this.toggleSideMenu}
          >
            {sideList}
          </div>
        </Drawer>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.toggleSideMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Guven Kemal Portfolio
          </Typography>
          {/* <NavBar /> */}
        </Toolbar>
      </AppBar>
    );
  }
}

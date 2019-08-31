import React from "react";
import { AppBar, makeStyles, Container, Toolbar } from "@material-ui/core";
import angellistIcon from '../assets/angellist-icon.png';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';

const useStyles = makeStyles(theme => ({
  grow: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#000'
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  icon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    width: 42,
    height: 42,
    opacity: 0.9,
    '&:hover': {
      opacity: 1
    }
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar disableGutters className={classes.toolbar}>
          <div className={classes.grow} />
          <img src={angellistIcon} alt="angel list link" className={classes.icon} />
          <img src={githubIcon} alt="github link" className={classes.icon} />
          <img src={linkedinIcon} alt="linked in link" className={classes.icon} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

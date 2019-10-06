import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://guvenkemal.dev/">
        guvenkemal.dev
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Designed and coded by Guven Kemal
      </Typography>
      <Copyright />
    </footer>
  );
};

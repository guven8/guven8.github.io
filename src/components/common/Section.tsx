import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

type P = {
  title: string;
  className?: string;
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  title: {
    marginBottom: theme.spacing(4)
  }
}));

export const Section: React.FunctionComponent<P> = (props) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.container + ' ' + props.className || ''}
      maxWidth="md"
    >
      <Typography variant="h4" align="left" className={classes.title}>
        {props.title}
      </Typography>
      {props.children}
    </Container>
  );
};

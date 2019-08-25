import React from 'react';
import { Container, Typography, Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bgcircles: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden'
  },
  bgcircle: {},
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <div className={classes.bgcircles}>
        <div className={classes.bgcircle} />
        <div className={classes.bgcircle} />
        <div className={classes.bgcircle} />
      </div>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Guven Kemal
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Download CV
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Get in touch
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
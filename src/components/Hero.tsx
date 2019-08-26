import React from 'react';
import { Container, Typography, Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0.8)'
    },
    '50%': {
      transform: 'scale(1.2)'
    },
    '100%': {
      transform: 'scale(0.8)'
    }
  },
  hero: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    position: 'relative'
  },
  bgcircles: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    height: '100%'
  },
  bgcircle: {
    position: 'absolute',
    borderRadius: '50%',
    willChange: 'transform',
    border: '1px solid #BD24F6',
    opacity: 0.2,
    animation: '$ripple 10s ease-in-out infinite',
    '&:first-child': {
      left: '110px',
      top: '-680px',
      width: '1940px',
      height: '1940px'
    },
    '&:nth-child(2)': {
      left: '550px',
      top: '-300px',
      width: '1060px',
      height: '1060px'
    },
    '&:nth-child(3)': {
      left: '830px',
      top: '-30px',
      width: '500px',
      height: '500px',
    }
  },
  heroSummary: {
    maxWidth: '600px'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  gradientBG: {
    background: 'linear-gradient(45deg, #1a6dff 30%, #c822ff 90%)'
  },
  gradientBorder: {
    borderColor: 'linear-gradient(45deg, #1a6dff 30%, #c822ff 90%)'
  }
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.bgcircles}>
        <div className={classes.bgcircle} />
        <div className={classes.bgcircle} />
        <div className={classes.bgcircle} />
      </div>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
          Guven Kemal
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.heroSummary}>
          I'm a front end web developer, based in London. I specialise in React. Check out my recent work below.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="flex-start">
            <Grid item>
              <Button variant="contained" color="primary" className={classes.gradientBG}>
                Download CV
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" className={classes.gradientBorder}>
                Get in touch
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
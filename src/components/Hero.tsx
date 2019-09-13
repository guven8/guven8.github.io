import React from 'react';
import { Container, Typography, Button, Grid, Theme, makeStyles, createStyles } from '@material-ui/core';
import { BackgroundAnimation } from './common/Animations';

const useStyles = makeStyles((theme: Theme) => {
  const { palette, spacing, breakpoints } = theme;
  return createStyles({
    hero: {
      backgroundColor: palette.background.paper,
      padding: spacing(8, 0, 6),
      position: 'relative',
      [breakpoints.down('xs')]: {
        padding: spacing(3, 1, 3),
      }
    },
    heroSummary: {
      maxWidth: '600px'
    },
    heroButtons: {
      marginTop: spacing(4),
    },
    gradientBG: {
      background: `linear-gradient(45deg, ${palette.primary.main} 30%, ${palette.secondary.main} 90%)`
    },
    gradientBorder: {
      borderColor: `linear-gradient(45deg, ${palette.primary.main} 30%, ${palette.secondary.main} 90%)`
    }
  })
});

export const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <BackgroundAnimation type="circles-ripple" />
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
              <Button variant="outlined" color="secondary" className={classes.gradientBorder}>
                Get in touch
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
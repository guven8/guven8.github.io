import React from 'react';
import { Section } from './common/Section';
import { Card, makeStyles, Theme, createStyles } from '@material-ui/core';
import { BackgroundAnimation } from './common/Animations';

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;
  return createStyles({
    contact: {
      // backgroundColor: theme.palette.background.default,
      backgroundColor: 'black',
      padding: theme.spacing(8, 0, 6),
      position: 'relative',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(3, 1, 3),
      }
    }
  });
});

export const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <BackgroundAnimation type="circles-rise" />
      <Section title="Contact">
        <Card>
          <ul>
            <li>Email</li>
            <li>Angel List</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </Card>
      </Section>
    </div>
  );
}
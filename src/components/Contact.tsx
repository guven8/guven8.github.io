import React from 'react';
import { Section } from './common/Section';
import { Card, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  contact: {
    backgroundColor: theme.palette.background.default
  }
}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
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
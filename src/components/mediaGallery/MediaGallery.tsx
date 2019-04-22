import * as React from 'react';
import { MediaCard } from './MediaCard';
import { Grid, withStyles } from '@material-ui/core';
import mediaList from './mockedMedia';

const styles = {
  root: {
    flexGrow: 1,
    margin: '30px 0'
  }
};

type P = {
  classes: {
    root: typeof styles.root;
  };
};

const MediaGallery = (props: P) => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={24} justify="center" className={classes.root}>
        {mediaList.map(media => (
          <Grid item>
            <MediaCard
              key={media.id}
              image={media.image}
              description={media.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const styledComponent = withStyles(styles)(MediaGallery);
export { styledComponent as MediaGallery };

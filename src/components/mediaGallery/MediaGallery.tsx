import * as React from "react";
import { MediaCard } from "./MediaCard";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { mediaList } from "./mediaData";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "30px 0"
  }
});

export const MediaGallery = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography align="center" gutterBottom variant="h5" component="h2">
        My Recent Projects
      </Typography>
      <Grid container justify="center" className={classes.root}>
        {mediaList.map((media, i) => (
          <Grid item key={i}>
            <MediaCard mediaItem={media} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

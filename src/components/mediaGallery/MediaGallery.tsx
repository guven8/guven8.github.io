import * as React from "react";
import { MediaCard } from "./MediaCard";
import { Grid, makeStyles } from "@material-ui/core";
import { mediaList } from "./mockedMedia";

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

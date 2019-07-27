import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    background: "springgreen",
    minHeight: 600
  },
  heading: {
    padding: 0,
    margin: 0
  }
});

type P = {};

export const MainHeader = (props: P) => {
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      <Typography component="h2" variant="h1" gutterBottom>
        Main Header
      </Typography>
    </div>
  );
};

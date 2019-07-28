import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 200,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"
  },
  nameLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0"
  },
  logo: {
    border: "1px solid white",
    color: "white",
    fontStyle: "italic",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#3f51b5",
    width: 40,
    height: 40,
    margin: "0 20px"
  }
});

type P = {};

export const MainHeader = (props: P) => {
  const classes = useStyles(props);
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.nameLogoContainer}>
          <Typography variant="h3">Guven</Typography>
          <span className={classes.logo} />
          <Typography variant="h3">Kemal</Typography>
        </div>
        <Typography variant="subtitle1">
          A full stack developer based in London
        </Typography>
      </div>
    </div>
  );
};

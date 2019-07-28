import * as React from "react";
import { makeStyles, Card, Typography, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 14
  }
});

export const Bio = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography
          color="textSecondary"
          align="center"
          className={classes.title}
        >
          My name is Guv
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga fugit
          deleniti eveniet! Commodi cumque minima cupiditate sunt laudantium
          consequatur, et harum eligendi. Accusamus molestiae blanditiis veniam
          ducimus mollitia, qui adipisci.
        </Typography>
      </CardContent>
    </Card>
  );
};

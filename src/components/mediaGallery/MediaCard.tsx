import React from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

type P = {
  classes: {
    card: string;
    media: string;
  };
  description: string;
  image: string;
};

export const MediaCard = withStyles(styles)((props: P) => {
  const { classes, image, description } = props;
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
});

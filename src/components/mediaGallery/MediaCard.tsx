import React from "react";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 15
  },
  media: {
    height: 140
  }
});

type P = {
  mediaItem: {
    image: string;
    title: string;
    description: string;
  };
};

export const MediaCard = (props: P) => {
  const classes = useStyles();
  const { image, title, description } = props.mediaItem;

  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
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
};

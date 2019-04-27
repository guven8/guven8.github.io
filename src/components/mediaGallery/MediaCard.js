import React from 'react'
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles
} from '@material-ui/core'

const styles = {
  card: {
    maxWidth: 345,
    margin: 15
  },
  media: {
    height: 140
  }
}

export const MediaCard = withStyles(styles)(({ classes, image, description }) => {
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
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
  )
})

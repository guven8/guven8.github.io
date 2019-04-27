import * as React from 'react'
import { MediaCard } from './MediaCard'
import { Grid, withStyles } from '@material-ui/core'
import mediaList from './mockedMedia'

const styles = {
  root: {
    flexGrow: 1,
    margin: '30px 0'
  }
}

export const MediaGallery = withStyles(styles)(({ classes }) => {
  return (
    <div>
      <Grid container justify="center" className={classes.root}>
        {mediaList.map((media, i) => (
          <Grid item key={i}>
            <MediaCard image={media.image} description={media.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
})

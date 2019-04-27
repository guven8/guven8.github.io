import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

const styles = {
  container: {
    background: 'springgreen',
    minHeight: 600
  },
  heading: {
    padding: 0,
    margin: 0
  }
}

export const MainHeader = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography component="h2" variant="h1" gutterBottom>
        Main Header
      </Typography>
    </div>
  )
})

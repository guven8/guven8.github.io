import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Container, makeStyles, Typography } from '@material-ui/core';
import { v4 } from 'uuid';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundPosition: '0% 0%'
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const projects = [
  {
    id: v4(),
    name: 'Flexy Employer Portal',
    image: require('../assets/flexy-employer.png'),
    desc: 'This is a media card. You can use this section to describe the content.'
  },
  {
    id: v4(),
    name: 'Flexy Admin Panel',
    image: require('../assets/flexy-admin.png'),
    desc: 'This is a media card. You can use this section to describe the content.'
  },
  {
    id: v4(),
    name: 'Flexy Worker App',
    image: require('../assets/flexy-worker-landing.png'),
    desc: 'This is a media card. You can use this section to describe the content.'
  }
];

export const ProjectGallery = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={project.image}
                title={project.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography>
                  {project.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                    </Button>
                <Button size="small" color="primary">
                  Edit
                    </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
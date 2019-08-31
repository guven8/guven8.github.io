import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography
} from '@material-ui/core';
import { v4 } from 'uuid';
import { ProjectModal } from './ProjectModal';
import { Section } from './common/Section';

const useStyles = makeStyles((theme: Theme) => createStyles({
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

export const projects = [
  {
    id: v4(),
    name: 'Flexy Employer Portal',
    image: require('../assets/flexy-employer.png'),
    desc: 'This is a media card. You can use this section to describe the content.',
    tech: ['react', 'redux', 'typescript', 'scss', 'google-maps-api']
  },
  {
    id: v4(),
    name: 'Flexy Admin Panel',
    image: require('../assets/flexy-admin.png'),
    desc: 'This is a media card. You can use this section to describe the content.',
    tech: ['react', 'redux', 'typescript', 'scss', 'google-maps-api', 'ant-d']
  },
  {
    id: v4(),
    name: 'Flexy Worker App',
    image: require('../assets/flexy-worker-landing.png'),
    desc: 'This is a media card. You can use this section to describe the content.',
    tech: ['react-native', 'redux', 'typescript', 'google-maps-api']
  }
];

export const Projects = () => {
  const classes = useStyles();
  const [modalProjectId, openProjectModal] = React.useState('');
  const handleOpenProjectModal = (projectId: string) => () => { openProjectModal(projectId); };
  const handleCloseProjectModal = () => { openProjectModal(''); };

  return (
    <>
      <ProjectModal projectId={modalProjectId} handleClose={handleCloseProjectModal} />
      <Section title="Projects">
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
                  <Typography gutterBottom variant="h5">{project.name}</Typography>
                  <Typography>{project.desc}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleOpenProjectModal(project.id)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}
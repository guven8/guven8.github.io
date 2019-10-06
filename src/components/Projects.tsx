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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
      backgroundPosition: '0% 0%'
    },
    cardContent: {
      flexGrow: 1
    }
  })
);

export const projects = [
  {
    id: v4(),
    name: 'Flexy Employer Portal',
    mainImage: require('../assets/flexy-employer-dashboard.png'),
    images: [
      require('../assets/flexy-employer-dashboard.png'),
      require('../assets/flexy-employer-job-details.png'),
      require('../assets/flexy-employer-invoicing-dashboard.png'),
      require('../assets/flexy-employer-ltm.png')
    ],
    shortDesc:
      'A Web app used by hirers to post jobs, manage workers and view timesheets.',
    longDesc:
      'The Flexy employer portal is the place where hirers on the flexy platform post jobs, and manage workers for each job. Each job can have multiple locations and the hirer can choose whether to interview workers or have the shifts filled automatically. The job details page shows all the job locations as well as any team members or candidates for each schedule. There is a Worker Profile page which details information such as their previous work experience, personal statement, experience, proximity to the job location and more. The hirer can also view invoices submitted by workers who have completed shifts, query the timesheets if there is a problem, and also rate workers.',
    myInvolvement: [
      'Helped bring the app into production, removing mocked data and wiring up to the back end',
      'Brought improvements to functionality of the create job journey, such as validation improvements, and styling improvements',
      'Implemented the invoice query functionality allowing users to contact an operator regarding an invoice and view previous comments in the dialog',
      ,
      'Implemented the ability to broadcast / unbroadcast a job which controls its visibilit on the worker app',
      'Implemented the location tracking modal, allowing hirers to view the location log of the worker whilst checked into a job via location pings sent from the worker app',
      'General maintenance and bug fixes over a period of two years'
    ],
    tech: ['react', 'redux', 'typescript', 'scss', 'google-maps-api'],
    modalReady: true
  },
  {
    id: v4(),
    name: 'Flexy Admin Panel',
    mainImage: require('../assets/flexy-admin-manage-checkpoints.png'),
    images: [require('../assets/flexy-admin-invite-worker.png')],
    shortDesc:
      'A web app used by flexy operators to fill shifts, manage timesheets, invoice hirers as much more.',
    longDesc: '',
    tech: ['react', 'redux', 'typescript', 'scss', 'google-maps-api', 'ant-d'],
    modalReady: false
  },
  {
    id: v4(),
    name: 'Flexy Worker App',
    mainImage: require('../assets/flexy-worker-landing.png'),
    images: [],
    shortDesc:
      'A mobile application used by workers to apply for jobs, check into a job and submit timesheets.',
    longDesc: '',
    tech: ['react-native', 'redux', 'typescript', 'google-maps-api'],
    modalReady: false
  }
];

export const Projects = () => {
  const classes = useStyles();
  const [modalProjectId, openProjectModal] = React.useState('');
  const handleOpenProjectModal = (projectId: string) => () => {
    openProjectModal(projectId);
  };
  const handleCloseProjectModal = () => {
    openProjectModal('');
  };

  return (
    <>
      <ProjectModal
        projectId={modalProjectId}
        handleClose={handleCloseProjectModal}
      />
      <Section title="Projects">
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={project.mainImage}
                  title={project.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    {project.name}
                  </Typography>
                  <Typography>{project.shortDesc}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={handleOpenProjectModal(project.id)}
                    disabled={!project.modalReady}
                  >
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
};

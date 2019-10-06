import React, { useState } from 'react';
import { Modal, Chip, makeStyles, createStyles } from '@material-ui/core';
import { projects } from './Projects';
import { ImageSlider } from './ImageSlider';

type P = {
  projectId: string;
  handleClose: () => void;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      top: 20,
      width: '100%',
      maxWidth: 1200,
      left: 0,
      right: 0,
      margin: '0 auto',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    title: {
      textAlign: 'center',
      marginBottom: 20
    },
    sectionNav: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    projectDesc: {
      paddingRight: 20,
      fontWeight: 600,
      flex: 1
    },
    projectDescList: {
      padding: 0
    },
    imageDescContainer: {
      display: 'flex'
    },
    image: {
      height: '100%',
      maxHeight: '650px',
      margin: '0 auto 20px'
    }
  })
);

export const ProjectModal = (props: P) => {
  const { projectId, handleClose } = props;
  const classes = useStyles();
  const project =
    !!projectId && projects.find((project) => project.id === projectId);
  const [activeSection, changeActiveSection] = useState('summary');

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={!!projectId}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        {!!project && (
          <>
            <h2 className={classes.title} id="simple-modal-title">
              {project.name}
            </h2>
            <div className={classes.imageDescContainer}>
              <div className={classes.projectDesc}>
                <div className={classes.sectionNav}>
                  <Chip
                    label="Summary"
                    color={
                      activeSection === 'summary' ? 'primary' : 'secondary'
                    }
                    onClick={() => changeActiveSection('summary')}
                  />
                  <Chip
                    label="My involvement"
                    color={
                      activeSection === 'my-involvement'
                        ? 'primary'
                        : 'secondary'
                    }
                    onClick={() => changeActiveSection('my-involvement')}
                  />
                  <Chip
                    label="Technology"
                    color={
                      activeSection === 'technology' ? 'primary' : 'secondary'
                    }
                    onClick={() => changeActiveSection('technology')}
                  />
                </div>
                <div id="simple-modal-description">
                  {activeSection === 'summary' && <p>{project.longDesc}</p>}
                  {activeSection === 'my-involvement' && (
                    <ul className={classes.projectDescList}>
                      {project.myInvolvement!.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  )}
                  {activeSection === 'technology' && (
                    <ul className={classes.projectDescList}>
                      <li>react</li>
                    </ul>
                  )}
                </div>
              </div>
              <ImageSlider images={project.images} />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

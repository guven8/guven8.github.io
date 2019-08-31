import React from 'react';
import { Modal, makeStyles, createStyles } from '@material-ui/core';
import { projects } from './Projects';

type P = {
  projectId: string;
  handleClose: () => void;
}

const useStyles = makeStyles(theme => createStyles({
  paper: {
    position: 'absolute',
    top: 100,
    width: 900,
    left: 0,
    right: 0,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  image: {
    maxWidth: 600
  }
}));;

export const ProjectModal = (props: P) => {
  const { projectId, handleClose } = props;
  const classes = useStyles();
  const project = !!projectId && projects.find(project => project.id === projectId);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={!!projectId}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        {!!project &&
          <>
          <img src={project.image} alt={project.name} className={classes.image} />
            <h2 id="simple-modal-title">{project.name}</h2>
            <p id="simple-modal-description">
              {project.desc}
            </p>
          </>
        }
      </div>
    </Modal>
  );
}
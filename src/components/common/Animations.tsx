import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import angellistIcon from '../../assets/angellist-icon.png';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0.8)'
    },
    '50%': {
      transform: 'scale(1.2)'
    },
    '100%': {
      transform: 'scale(0.8)'
    }
  },
  '@keyframes rising': {
    '0%': {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 1,
      borderRadius: 0
    },
    '100%': {
      transform: 'translateY(-1000px) rotate(720deg)',
      opacity: 0,
      borderRadius: '50%'
    }
  },
  circlesRipple: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    height: '100%',
    margin: 0,
    '& li': {
      position: 'absolute',
      display: 'block',
      borderRadius: '50%',
      willChange: 'transform',
      listStyle: 'none',
      border: `1px solid ${theme.palette.secondary.main}`,
      opacity: 0.2,
      animation: '$ripple 10s ease-in-out infinite',
      '&:first-child': {
        left: '110px',
        top: '-680px',
        width: '1940px',
        height: '1940px'
      },
      '&:nth-child(2)': {
        left: '550px',
        top: '-300px',
        width: '1060px',
        height: '1060px'
      },
      '&:nth-child(3)': {
        left: '830px',
        top: '-30px',
        width: '500px',
        height: '500px',
      }
    }
  },
  circlesRise: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& li': {
      position: 'absolute',
      display: 'block',
      listStyle: 'none',
      width: '20px',
      height: '20px',
      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
      animation: '$rising 15s linear infinite',
      backgroundSize: 'cover',
      '&:nth-child(1n)': {
        backgroundImage: `url(${githubIcon})`,
      },
      '&:nth-child(2n)': {
        backgroundImage: `url(${linkedinIcon})`,
      },
      '&:nth-child(3n)': {
        backgroundImage: `url(${angellistIcon})`,
      },
      bottom: '-150px',
      '&:nth-child(1)': {
        left: '25%',
        width: '80px',
        height: '80px',
        animationDelay: '0s',
      },
      '&:nth-child(2)': {
        left: '10%',
        width: '20px',
        height: '20px',
        animationDelay: '2s',
        animationDuration: '12s',
        // backgroundImage: `url(${githubIcon})`,
        // backgroundSize: 'cover'
      },
      '&:nth-child(3)': {
        left: '70%',
        width: '20px',
        height: '20px',
        animationDelay: '4s',
        // backgroundImage: `url(${linkedinIcon})`,
        // backgroundSize: 'cover'
      },
      '&:nth-child(4)': {
        left: '40%',
        width: '60px',
        height: '60px',
        animationDelay: '0s',
        animationDuration: '18s'
      },
      '&:nth-child(5)': {
        left: '65%',
        width: '20px',
        height: '20px',
        animationDelay: '0s'
      },
      '&:nth-child(6)': {
        left: '75%',
        width: '110px',
        height: '110px',
        animationDelay: '3s'
      },
      '&:nth-child(7)': {
        left: '35%',
        width: '150px',
        height: '150px',
        animationDelay: '7s'
      },
      '&:nth-child(8)': {
        left: '50%',
        width: '25px',
        height: '25px',
        animationDelay: '15s',
        animationDuration: '45s'
      },
      '&:nth-child(9)': {
        left: '20%',
        width: '15px',
        height: '15px',
        animationDelay: '2s',
        animationDuration: '35s'
      },
      '&:nth-child(10)': {
        left: '85%',
        width: '150px',
        height: '150px',
        animationDelay: '0s',
        animationDuration: '11s'
      }
    }
  }
}));

type P = {
  type: 'circles-ripple' | 'circles-rise'
}

export const BackgroundAnimation = (props: P) => {
  const classes = useStyles();
  const config = {
    'circles-ripple': {
      className: classes.circlesRipple,
      itemCount: 3
    },
    'circles-rise': {
      className: classes.circlesRise,
      itemCount: 10
    }
  }[props.type];

  const items = [];
  for (let i = 0; i < config.itemCount; i++) {
    items.push(<li key={i} />);
  }
  return (
    <ul className={config.className}>
      {items}
    </ul>
  );
}

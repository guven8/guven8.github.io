import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: 860,
      height: 650,
      margin: '0 auto',
      position: 'relative'
    },
    slider: {
      width: 800,
      height: '100%',
      margin: '0 auto',
      overflow: 'hidden'
    },
    sliderWrapper: {
      height: '100%',
      width: '100%',
      transition: 'transform ease-out 0.45s',
      display: 'inline-flex'
    },
    slide: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // backgroundPosition: '50% 50%',
      flexBasis: '100%',
      flexShrink: 0
    },
    buttonLeft: {
      position: 'absolute',
      top: '50%',
      cursor: 'pointer',
      left: 0
    },
    buttonRight: {
      position: 'absolute',
      top: '50%',
      cursor: 'pointer',
      right: 0
    }
  })
);

type P = {
  images: string[];
};

export const ImageSlider = (props: P) => {
  const { images } = props;
  const classes = useStyles();
  const [state, setState] = useState({ currentIndex: 0, translateValue: 0 });

  const slideWidth = () => document.querySelector('#slide')!.clientWidth;

  const goToPrevSlide = () => {
    if (state.currentIndex === 0) {
      return;
    }
    setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + +slideWidth()
    }));
  };

  const goToNextSlide = () => {
    if (state.currentIndex === images.length - 1) {
      return setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -slideWidth()
    }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <div
          className={classes.sliderWrapper}
          style={{
            transform: `translateX(${state.translateValue}px)`
          }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className={classes.slide}
              id="slide"
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          ))}
        </div>
      </div>
      <ArrowBackIosIcon
        className={classes.buttonLeft}
        onClick={goToPrevSlide}
      />
      <ArrowForwardIosIcon
        className={classes.buttonRight}
        onClick={goToNextSlide}
      />
    </div>
  );
};

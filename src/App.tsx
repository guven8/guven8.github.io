import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { MediaGallery } from './components/mediaGallery/MediaGallery';
import { CssBaseline } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Header />
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <MediaGallery />
        </div>
      </>
    );
  }
}

export default App;

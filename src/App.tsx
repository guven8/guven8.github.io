import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { Footer } from './components/Footer';

export function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <ProjectGallery />
      </main>
      <Footer />
    </React.Fragment>
  );
}
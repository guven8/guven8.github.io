import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
// import { indigo, pink, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1a6dff' },
    secondary: { main: '#c822ff' }
  }
  // palette: {
  //   primary: indigo,
  //   secondary: pink,
  //   error: red
  // }
});

export function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
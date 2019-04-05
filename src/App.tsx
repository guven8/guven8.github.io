import React, { Component } from 'react';
import { Header } from './components/header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="intro">
          <p>
            My name is Guven.
            I am a web developer based in London.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

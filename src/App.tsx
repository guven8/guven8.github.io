import React, { Component } from 'react';
// import logo from './logo.svg';
import { Header } from './components/header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            My name is Guven.
            I am a web developer based in London.
          </p>
        </header>
      </div>
    );
  }
}

export default App;

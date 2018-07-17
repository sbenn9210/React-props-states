import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Stepper} from './components/stepper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stepper />
      </div>
    );
  }
}

export default App;

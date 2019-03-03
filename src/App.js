import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ninjas name="Ryu" age="25" belt="black" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Mert', age: 25, belt: 'green', id: 1},
      {name: 'Mert2', age: 30, belt: 'black', id: 2},
      {name: 'Mert3', age: 42, belt: 'red', id: 3},
    ]
  }

  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;

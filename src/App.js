import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Mert', age: 25, belt: 'green', id: 1},
      {name: 'Mert2', age: 30, belt: 'black', id: 2},
      {name: 'Mert3', age: 42, belt: 'red', id: 3},
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas:ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

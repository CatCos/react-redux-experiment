import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const personsList = [
  {
    name: 'Catarina Costa',
    age: 23
  },
  {
    name: 'Rui Pereira',
    age: 24
  },
  {
    name: 'Maria Antonia',
    age: 54
  },
  {
    name: 'Manel das Dores',
    age: 78
  },
];

class App extends Component {
  state = {
    persons: personsList,
  }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
  renderPerson(person, id) {
    return (
      <li key={id} className="list-item">
        <div>{`Name: ${person.name}`}</div>
        <div>{`Age: ${person.age}`}</div>
      </li>
    );
  }

  render() {
    return (
        <ul>
          {this.state.persons.map((person, index) => this.renderPerson(person, index))}
        </ul>
      </div>
    );
  }
}

export default App;

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
    newPerson: {
      name: '',
      age: ''
    }
  }

  handleNameChange = (e) => {
    const name = e.target.value;
    const newPerson = Object.assign({}, this.state.newPerson, { name });
    this.setState({ newPerson });
  }

  handleAgeChange = (e) => {
    const age = e.target.value;
    const newPerson = Object.assign({}, this.state.newPerson, { age });
    this.setState({ newPerson });
  }

  renderNewPersonForm() {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={this.state.newPerson.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={this.state.newPerson.age}
            onChange={this.handleAgeChange}
          />
        </div>
        <button className="btn btn-default" onClick={this.handleFormSubmition}>Add person</button>
      </form>
    );
  }

  generateRandId() {
    return Math.floor((Math.random() * 100000) + 1);
  }

  resetNewPersonForm() {
    this.setState({ newPerson: { name: '', age: '' } });
  }

  addPerson() {
    this.setState({ persons: this.state.persons.concat(this.state.newPerson) });
  }

  handleFormSubmition = (e) => {
    e.preventDefault();
    this.addPerson();
    this.resetNewPersonForm();
  }

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
      <div className="container">
        {this.renderNewPersonForm()}
        <ul>
          {this.state.persons.map((person, index) => this.renderPerson(person, index))}
        </ul>
      </div>
    );
  }
}

export default App;

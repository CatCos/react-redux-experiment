import React, { Component } from 'react';
import classnames from 'classnames';

import Error from './Error';

import { Persons } from '../api';

class NewPersonForm extends Component {
  state = {
    persons: [],
    newPerson: {
      name: '',
      age: ''
    },
    errors: {
      name: '',
      age: ''
    }
  }

  componentWillMount() {
    Persons
      .getAll()
      .then(persons => this.setState({ persons }));
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

  handleFormSubmition = (e) => {
    e.preventDefault();
    this.addPerson();
  }

  renderError(message) {
    if (message) {
      return <Error message={message} />;
    }

    return null;
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
          { this.renderError(this.state.errors.name) }
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={this.state.newPerson.age}
            onChange={this.handleAgeChange}
          />
          { this.renderError(this.state.errors.age) }
        </div>
        <button className="btn btn-default" onClick={this.handleFormSubmition}>Add person</button>
      </form>
    );
  }

  resetNewPersonForm() {
    this.setState({ newPerson: { name: '', age: '' } });
  }

  resetErrors() {
    this.setState({ errors : { name: '', age: '' } });
  }

  isValid() {
    const { name, age } = this.state.newPerson;

    if (name === '' && age === '') {
      this.setState({ errors: { name: 'Name required.', age: 'Age required.' } });
      return false;
    }
    else if (name === '') {
      this.setState({ errors: { name: 'Name required.' } });
      return false;
    }
    else if (age === '') {
      this.setState({ errors: { age: 'Age required.' } });
      return false;
    }

    this.resetErrors();
    this.resetNewPersonForm();
    return true;
  }

  addPerson() {
    if (this.isValid()) {
      this.setState({ persons: this.state.persons.concat(this.state.newPerson) });
    }
  }

  renderPerson(person, id) {
    const isEven = id => id % 2 === 0;
    const isOdd = id => Math.abs(id % 2) === 1;

    const styles = classnames('list-item', {
      'even-item': isEven(id),
      'odd-item': isOdd(id)
    });

    return (
      <li key={id} className={styles}>
        <div>{`Name: ${person.name}`}</div>
        <div>{`Age: ${person.age}`}</div>
      </li>
    );
  }

  renderPersonsList() {
    if (this.state.persons.length === 0) {
      return <div><strong>Fetching persons...</strong></div>;
    }

    return (
      <ul>
        {this.state.persons.map((person, index) => this.renderPerson(person, index))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="col col-xs-6 col-md-6">
          {this.renderNewPersonForm()}
        </div>
        <div className="col col-xs-6 col-md-6">
          {this.renderPersonsList()}
        </div>
      </div>
    );
  }
}

export default NewPersonForm;

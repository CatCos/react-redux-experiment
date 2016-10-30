import React, { Component } from 'react';
import classnames from 'classnames';

import NewPersonForm from './components/NewPersonForm';

import './App.css';

const App = () =>
  <div className="container main-container">
    <div className="row">
      <NewPersonForm />
    </div>
  </div>;

export default App;

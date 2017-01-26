import React, { Component } from 'react';
import Manage from './routes/manage/manage.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>{this.props.txt}</h1>
        <Manage cam="cameron"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import './Validator.css';
import Validator from './Validator';

class App extends Component {
  state={
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Validator />
      </div>
    );
  }
}

export default App;
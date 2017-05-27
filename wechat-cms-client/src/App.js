import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Radio, Icon } from 'antd';
import './App.css';
const ButtonGroup = Button.Group;

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default App;

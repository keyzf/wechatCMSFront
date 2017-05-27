import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
        </div>
    );
  }

}

export default App;

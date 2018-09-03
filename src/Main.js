import React, { Component } from 'react';
import Header from "./components/Header";
import Buttons from './components/Button';
class Main extends Component {
  constructor() {
    super()
    this.state = {
      headerImage: [],
      name: 'test',
      url: ''
    }
  }
  render() {
    return (
      <div>
        <Header test={this.state.name}/>
        <Buttons/>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import About from './Components/About';
import { AnimatedSwitch } from 'react-router-transition';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

class Main extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Router>
        <div>
          <ul className="router">
          </ul>
          <hr />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    </header>
    </div>
    );
  }
}



export default withRouter(Main);

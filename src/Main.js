import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter, Link
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import test from "./test";

class Main extends Component {
  render() {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

    return (
      <HashRouter>
        <div>
        <div className="home-image">
        <div className="home-text">
          <h2>Hello World</h2>
          <button className="btn btn-primary" href="https://reactjs.org/docs/handling-events.html" onClick={handleClick}>Test</button>
          <Link to="/testing">
          <button className="btn btn-primary" type="button">
          TESTING
          </button>
          </Link>

        </div>
        <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/stuff">Stuff</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/testing">test</NavLink></li>
        </ul>
        </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/testing" component={test}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter, Link
} from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import '../style/header.css';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      h1: 'header',
    }
  }
  render(){
  return(
    <div>
    <HashRouter>
    <div>
      <div className="">
      <ul className="header-list">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </div>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path='/projects/' exact component={Projects} />
        <Route path="/contact" component={Contact}/>
      </div>
    </div>
    </HashRouter>
    </div>
  );

};
}


export default Header;

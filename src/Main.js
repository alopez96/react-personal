import React, { Component } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import About from './Components/About';
import { AnimatedSwitch } from 'react-router-transition';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { SMALL } from './ScreenSizes';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  dark: true,
  gradient: {
    to: "#252525",
    from: "#434343"
  },
  contactGradient: {
    from: "#8650FF",
    to: "#33249D"
  },
  textNormal: "#FFFFFF",
  textColored: "#D0C9FF",
  textDark: "#786EBC",
  images: {
    home: {


    },
    about: {

    },
    navBar: {

    }
  }
}

const lightTheme = {
  dark: false,
  gradient: {
    to: "#FFFFFF",
    from: "#D9D9FF"
  },
  contactGradient: {
    from: "#4F6CD3",
    to: "#9FF5BB"
  },
  textNormal: "#434343",
  textColored: "#5270D2",
  textDark: "#5667A2",
  images: {
    home: {

    },
    about: {

    },
    navBar: {

    }
  }
}


class Main extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Router>
        <div>
        {/*
        <ul className="router">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
           */}
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

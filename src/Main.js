import React, { Component } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Projects from './Components/Projects';
import Contact from './Components/Contact';

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
}


class Main extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Router>
        <div>
          <hr />
          <Route exact path="/" component={Home} />
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

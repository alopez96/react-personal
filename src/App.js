import React, { Component } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Projects from './Components/projects/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar'

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


function App(){
  
    return (
      <div className="App">
        <Router>
        <div>
        <NavBar index="0" />
          <Route exact path="/" render={(props) => <Home {...props} theme={lightTheme}/>} />
          <Route path="/contact" render={(props) => <Contact {...props} theme={darkTheme}/>} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    </div>
    );
}



export default withRouter(App);

import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Projects from './Components/projects/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import styled from 'styled-components';

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
  backgroundColor: "#4D3636"
}

const lightTheme = {
  dark: false,
  gradient: {
    to: "#FFFFFF",
    from: "#D9D9FF"
  },
  contactGradient: {
    from: "#4F6CD3",
    to: "#5667A2"
  },
  textNormal: "#434343",
  textColored: "#5270D2",
  textDark: "#5667A2",
  backgroundColor: "#A3E3EC"
}

const AppDiv = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  font-size: calc(10px + 2vmin);
  color: white;
  min-height: 100vh;
`


function App() {

  const [isDark, setisDark] = useState(false)
  var theme;

  //handle theme change
  useEffect(() => {
    if(isDark){
      theme = darkTheme 
    }
    else{
      theme = lightTheme
    }
  }, [isDark]);
  
    return (
      <AppDiv theme={lightTheme}>
        <Router>
        <div>
        <NavBar index="0" theme={lightTheme} />
          <Route exact path="/" render={(props) => <Home {...props} theme={lightTheme}/>} />
          <Route path="/contact" render={(props) => <Contact {...props} theme={lightTheme}/>} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    </AppDiv>
    );
}



export default withRouter(App);

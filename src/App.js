import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Projects from './Components/projects/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './variables/Theme';

const AppDiv = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  font-size: calc(10px + 2vmin);
  color: white;
  min-height: 100vh;
`


function App() {

  const [theme, setTheme] = useState(lightTheme)

  const updateTheme = () => {
    if(theme == lightTheme){
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }
  
    return (
      <AppDiv theme={theme}>
        <Router>
        <div>
        <NavBar index="0" theme={theme} updateTheme={updateTheme}/>
          <Route exact path="/" render={(props) => <Home {...props} theme={theme}/>} />
          <Route path="/contact" render={(props) => <Contact {...props} theme={theme}/>} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    </AppDiv>
    );
}



export default withRouter(App);
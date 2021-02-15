import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import NavBar from './components/elements/NavBar';
import MobileNav from './components/elements/MobileNav';
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
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setisMobile] = useState(window.innerWidth < 500)

  //like component did mount
  useEffect(() => {
    window.addEventListener('resize', () => { updateWidth() });

    //returned function will be called on component unmount 
    return () => {
        window.removeEventListener('resize', () => {updateWidth() })
    }
  }, []);

  //handle change in width
  useEffect(() => {
    // update isMobile bool
    console.log('changing width', width)
    setisMobile( width < 500 )
  }, [width]);
  
  const updateWidth = () => {        
    setWidth(window.innerWidth)
  }

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
          {isMobile?
          <MobileNav index="0" theme={theme} updateTheme={updateTheme}/>
          :
          <NavBar index="0" theme={theme} updateTheme={updateTheme}/>
          }
          <Route exact path="/" render={(props) => <Home {...props} theme={theme}/>} />
          <Route path="/contact" render={(props) => <Contact {...props} theme={theme}/>} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    </AppDiv>
    );
}



export default withRouter(App);
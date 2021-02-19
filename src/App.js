import React, { useState, useEffect } from 'react';
import Home from './Components/home/Home';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact';
import About from './Components/about/About';
import NavBar from './Components/nav/NavBar';
import MobileNav from './Components/nav/MobileNav';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './variables/Theme';


function App() {

  const [theme, setTheme] = useState(lightTheme)
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setisMobile] = useState(window.innerWidth < 500)
  const [isNavOpen, setisNavOpen] = useState(false)

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
    // console.log('update theme', theme)
    if(theme == lightTheme){
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }

  useEffect(()=>{
    console.log('theme updated', theme)
  }, [theme])

  // handle update on state: isNavOpen
  useEffect(()=>{
    // if nav is open, do not allow for scroll
    isNavOpen
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "visible"
  }, [isNavOpen])
  

    return (
      <AppDiv theme={theme}>
        <Router>
        <div>
          {isMobile?
          <MobileNav index="0" isNavOpen={isNavOpen} setisNavOpen={setisNavOpen} theme={theme} updateTheme={updateTheme}/>
          :
          <NavBar index="0" theme={theme} updateTheme={updateTheme}/>
          }
          <Route exact path="/" render={(props) => <Home {...props} theme={theme}/>} />
          <Route path="/contact" render={(props) => <Contact {...props} theme={theme}/>} />
          <Route path="/projects" render={(props) => <Projects {...props} theme={theme}/>}  />
          <Route path="/about" render={(props) => <About {...props} theme={theme}/>}  />
        </div>
      </Router>
    </AppDiv>
    );
}

const AppDiv = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  font-size: calc(10px + 2vmin);
  color: white;
  min-height: 100vh;
`


export default withRouter(App);
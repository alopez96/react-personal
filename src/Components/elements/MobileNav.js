import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SMALL } from '../../variables/ScreenSizes';
import burger from '../../assets/burger.svg';
import burgerWhite from '../../assets/burger-white.svg';
import Toggle from './Toggle';
import resume from '../../assets/pdf/arturo_resume.pdf'


const List = styled.div`
    transition: opacity 500ms;
    visibility: visible;
    top: 1rem;
    right: 2rem;
    opacity: 1;
    color: #dcdcdc;
    padding-top: 1rem;
    display: flex;
    position: fixed;
    @media (max-width: ${SMALL}px) {
      flex-direction: column;
      align-items: center;
      position: static;
      top: inherit;
      right: inherit;
  }
`

const ListItem = styled.div`
    float: right;
    cursor: pointer;
    margin-right: 2rem;
    text-decoration: none;
    position: relative;
    color: ${props => props.theme.textSecondary};
    &:before {
        // content: "";
        position: absolute;
        left: 0;
        width: ${props => props.index ? "100%" : "0%"};
        height: 3px;
        transition: width 500ms;
    }
    @media (max-width: ${SMALL}px) {
        // float: none;
        margin: auto;
        margin: 10px 0;
        font-size: 1.25em;
        font-weight: bolder;
        text-transform: uppercase;
    }
    &:hover {
      color: ${props => props.theme.btnColor};
      &:before {
          width: 100%;
      }
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit; 
`

const NavPage = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    z-index: 4;
`

const Label = styled.label`
  color: ${(props) => props.theme.toogleColor};
  font-size: 16px;
  margin-left: -20px;
  margin-top: 5px;
    cursor: pointer;
    margin-right: 1rem;
    text-decoration: none;
    position: relative;
    &:before {
        width: ${props => props.index ? "100%" : "0%"};
    }
    @media (max-width: ${SMALL}px) {
        margin: auto;
        margin: 10px 0;
        font-size: 1.25em;
        font-weight: bolder;
        text-transform: uppercase;
    }
    &:hover {
      color: ${props => props.theme.btnColor};
      &:before {
          width: 100%;
      }
    }
` 

const CloseBtn = styled.div`
    color: ${props => props.theme.textSecondary};
    font-weight: 600;
    @media (max-width: ${SMALL}px) {
        
    }
    &:hover {
      color: ${props => props.theme.btnColor};
      &:before {
          width: 100%;
      }
    }
`

function MobileNav ({ theme, updateTheme }) {

    const [isNavOpen, setisNavOpen] = useState(false)

    const toogleNav = (value) => { 
        console.log('pressed toogle', value)
        setisNavOpen(!value)
    }


    const openLink = (url) => () => {
        console.log("clicked", url)
        window.open(url, '_blank');
        // return false was recommended by stackoverflow
        // it means, do not take the default option
        return false;
      }

    return (
      <div>
        {isNavOpen?
        <NavPage theme={theme}>
        <List>
            <ListItem>
                <Toggle theme={theme} updateTheme={updateTheme}/>
            </ListItem>
            <StyleLink to="/">
                <ListItem onClick={()=>toogleNav(isNavOpen)} theme={theme}>Home</ListItem>
            </StyleLink>
            <StyleLink to="/projects" >
            <ListItem onClick={()=>toogleNav(isNavOpen)} theme={theme}>Experience</ListItem>
            </StyleLink>
            <ListItem theme={theme} onClick={openLink(resume)}>
                Resume
            </ListItem>
            <StyleLink to="/contact" >
            <ListItem onClick={()=>toogleNav(isNavOpen)} theme={theme}>Contact</ListItem>
            </StyleLink>
            <CloseBtn theme={theme} onClick={()=>toogleNav(isNavOpen)} className='pointer'>X</CloseBtn> 
        </List>
        </NavPage>
        : <Burger isNavOpen={isNavOpen} toogleNav={toogleNav} theme={theme}/>
        }
      </div>
    )
}


function Burger({isNavOpen, toogleNav, theme}) {

    if(theme.dark === true){
        return(
            <div className='open-btn' onClick={()=>toogleNav(isNavOpen)}>
                    <img src={burgerWhite} alt='nav icon'/>
                </div>
            )
    }
    else{
        return(
            <div className='open-btn' onClick={()=>toogleNav(isNavOpen)}>
                    <img src={burger} alt='nav icon'/>
                </div>
            )
    }
}


export default MobileNav;
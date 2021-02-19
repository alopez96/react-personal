import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SMALL } from '../../variables/ScreenSizes';
import { Icon } from 'semantic-ui-react'
import Toggle from '../elements/Toggle';
import resume from '../../assets/pdf/arturo_resume.pdf';
import navList from './NavList';
import openLink from '../elements/openLink';


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

const CloseBtn = styled.div`
    color: ${props => props.theme.textSecondary};
    font-weight: 600;
    @media (max-width: ${SMALL}px) {
        position: absolute;
        top: 5px;
        right: 12px;
        position: fixed;
        font-size: 30px;
    }
    &:hover {
      color: ${props => props.theme.btnColor};
      &:before {
          width: 100%;
      }
    }
`

const BurgerAndToggle = styled.div`
    margin-left: 5px;
    justify-content: center;
`

function MobileNav ({ theme, updateTheme, isNavOpen, setisNavOpen }) {

    const toogleNav = (value) => { 
        setisNavOpen(!value)
    } 

    return (
      <div>
        <Toggle theme={theme} updateTheme={updateTheme}/>
        {isNavOpen?
        <NavPage theme={theme}>
        <CloseBtn theme={theme} onClick={()=>toogleNav(isNavOpen)} >
            x 
        </CloseBtn> 
        <List>
            {navList.map((item) => {
            if(item.route === 'resume-link'){
              return(
                <ListItem theme={theme} onClick={openLink(resume)}>
                  Resume
                </ListItem>
              )
            } else{
              return(
                <StyleLink to={item.route}>
                <ListItem onClick={()=>toogleNav(isNavOpen)} theme={theme}>{item.title}</ListItem>
                </StyleLink>
              )
            }
          })}        
        </List>
        </NavPage>
        :<BurgerAndToggle>
            <Burger isNavOpen={isNavOpen} toogleNav={toogleNav} theme={theme}/>
          </BurgerAndToggle>
        }
      </div>
    )
}


const BurgerIcon = styled.div`
    top: 2px;
    right: 12px;
    position: absolute;
    font-size: 30px;
    color: ${props => props.theme.textSecondary};
`

function Burger({isNavOpen, toogleNav, theme}) {
    return(
        <BurgerIcon theme={theme} onClick={()=>toogleNav(isNavOpen)}>
                <Icon name='bars'/>
            </BurgerIcon>
        )
}


export default MobileNav;
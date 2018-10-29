import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Link } from 'react-router-dom';
import { SMALL } from '../ScreenSizes';
import Hamburger from './logos/hamburger.png';
import Github from './logos/github.png';
import Close from './logos/close_dark.svg'

const Logo = styled.h1`
    font-size: 1.5em;
    position: relative;
    font-weight: bold;
    padding-bottom: 5px;
    float: left;
    color: #AC3B61;
    &:before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 15px;
        width: 60px;
        height: 3px;
        border-radius: 20px;
        background-color: ${props => props.theme.textDark};;
    }
`

const List = styled.ul`
    list-style: none;
    transition: opacity 500ms;
    visibility: visible;
    opacity: 1;
    color: ${props => props.theme.textNormal};

`

const ListItem = styled.li`
    float: right;
    cursor: pointer;
    margin-left: 40px;
    text-decoration: none;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        margin-top: 10px;
        width: ${props => props.index ? "100%" : "0%"};
        height: 3px;
        background-color: ${props => props.theme.textDark};
        transition: width 500ms;
    }
    @media (max-width: ${SMALL}px) {
        float: none;
        margin: auto;
        text-align: center;
        margin: 20px 0;
        font-size: 1.25em;
        font-weight: bolder;
        text-transform: uppercase;
    }
    &:hover {
      &:before {
          width: 100%;
      }
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`



export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Logo>AL</Logo>
        <List>
            <StyleLink to="/contact" ><ListItem>Contact</ListItem></StyleLink>
            <StyleLink to="/projects" ><ListItem>Projects</ListItem></StyleLink>
            <StyleLink to="/about" ><ListItem>About</ListItem></StyleLink>
            <StyleLink to="/home" ><ListItem >Home</ListItem></StyleLink>
        </List>
      </div>
    )
  }
}

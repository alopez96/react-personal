import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SMALL } from '../variables/ScreenSizes';

const Toogle = styled.div`
  top: 1rem;
  left: 2rem;
  float: left;
  position: absolute;
  @media (max-width: ${SMALL}px) {
    top: 0;
    font-size: 0.2em;
  }
`

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
        margin: 2rem 0 0 0;
        font-size: 1.25em;
        font-weight: bolder;
        text-transform: uppercase;
    }
    &:hover {
      color: white;
      &:before {
          width: 100%;
      }
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit; 
`

function NavBar ({ theme, updateTheme }) {
    return (
      <div>
        <Toogle>
          <ListItem>
          <div class="ui toggle checkbox">
          <input type="checkbox" name="public" onClick={() => {updateTheme()}}/>
          <label style={{color:theme.textPrimary}}>Dark Mode</label>
          </div>
          </ListItem>
        </Toogle>
        <List>
          <StyleLink to="/" >
            <ListItem theme={theme}>Home</ListItem>
          </StyleLink>
          <StyleLink to="/projects" >
            <ListItem theme={theme}>Experience</ListItem>
          </StyleLink>
          <StyleLink to="/projects" >
            <ListItem theme={theme}>Leadership</ListItem>
          </StyleLink>
          <StyleLink to="/contact" >
            <ListItem theme={theme}>Contact</ListItem>
          </StyleLink>
        </List>
      </div>
    )
}


export default NavBar;
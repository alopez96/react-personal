import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SMALL } from '../ScreenSizes';


const List = styled.ul`
    list-style: none;
    transition: opacity 500ms;
    visibility: visible;
    opacity: 1;
    color: #dcdcdc;
    padding-top: 4rem;
`

const ListItem = styled.li`
    float: right;
    cursor: pointer;
    margin-right: 2rem;
    text-decoration: none;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        margin: 10rem;
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

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <List>
            <StyleLink to="/contact" >
              <ListItem>Contact</ListItem>
            </StyleLink>
            <StyleLink to="/projects" >
              <ListItem>Projects</ListItem>
            </StyleLink>
            <StyleLink to="/" >
              <ListItem >Home</ListItem>
            </StyleLink>
        </List>
      </div>
    )
  }
}

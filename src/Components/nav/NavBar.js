import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SMALL } from '../../variables/ScreenSizes';
import Toggle from './../elements/Toggle';
import navList from './NavList';
import LinkText from './../elements/LinkText';


const List = styled.div`
    transition: opacity 500ms;
    visibility: visible;
    top: 12px;
    right: 12px;
    opacity: 1;
    color: #dcdcdc;
    padding-top: 1rem;
    display: flex;
    position: absolute;
    @media (max-width: ${SMALL}px) {
      flex-direction: column;
      align-items: center;
      position: static;
      top: inherit;
      right: inherit;
  }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit; 
`


function NavBar ({ theme, updateTheme, hoverable }) {
    return (
      <div>
        <List>
          {navList.map((item) => {
            return(
              <StyleLink to={item.route} ref={el => hoverable = el}>
                <LinkText theme={theme} cta={item.title} isNav={true}/>
              </StyleLink>
            )
          })}
          <Toggle theme={theme} updateTheme={updateTheme}/>
        </List>
      </div>
    )
}


export default NavBar;
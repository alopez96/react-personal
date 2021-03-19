import React from 'react';
import styled from 'styled-components';
import { SMALL } from '../../variables/ScreenSizes';



const ListItem = styled.div`
float: right;
cursor: pointer;
margin-right: 2rem;
text-decoration: none;
position: relative;
color: ${props => props.theme.textSecondary};
font-size: 20px;
&:before {
    // content: "";
    position: absolute;
    left: 0;
    width: ${props => props.index ? "100%" : "0%"};
    height: 3px;
    transition: width 500ms;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.textSecondary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
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
  cursor: none;
  &:before {
      width: 100%;
      visibility: visible;
      transform: scaleX(1);
  }
}
`

function LinkText ({ theme, item }){
    return(
        <ListItem theme={theme}>{item.title}</ListItem>
    )
}

export default LinkText;
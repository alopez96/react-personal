import React, { useState } from 'react';
import styled from 'styled-components';
import { SMALL } from '../../variables/ScreenSizes';

const Label = styled.label`
  color: ${(props) => props.theme.toogleColor};
  font-size: 16px;
  margin-left: 5px;
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
        margin: 10px;
        font-size: 20px;
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

function Toggle ({ theme, updateTheme }) {
    return (
        // <div class="ui toggle checkbox">
        // <input type="checkbox" name="public" onClick={() => {updateTheme()}}/>
        // <label style={{color:theme.toogleColor}}>Dark Mode</label>
        // </div>
        <div>
          <label class="switch">
          <input type="checkbox" onClick={() => {updateTheme()}}/>
          <span class="slider round"></span>
        </label>
        <Label theme={theme}>
          Dark Mode
        </Label>
        </div>
    )
}


export default Toggle;
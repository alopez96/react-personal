import React, { useState } from 'react';
import styled from 'styled-components';
import { SMALL } from '../../variables/ScreenSizes';

const Toogle = styled.div`
  top: 1rem;
  left: 2rem;
  float: left;
  position: absolute;
  @media (max-width: ${SMALL}px) {
    float: none;
    position: static;
    display: flex;
    align-self: center;
    text-align:center;
    margin: auto;
    width: 50%;
  }
`

function Toggle ({ theme, updateTheme }) {
    return (
        <div class="ui toggle checkbox">
        <input type="checkbox" name="public" onClick={() => {updateTheme()}}/>
        <label style={{color:theme.toogleColor}}>Dark Mode</label>
        </div>
    )
}


export default Toggle;
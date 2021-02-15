import React, { useState } from 'react';
import styled from 'styled-components';
import { SMALL } from '../../variables/ScreenSizes';


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
        </div>
    )
}


export default Toggle;
import React from 'react';
import styled from 'styled-components';
import { SMALL } from '../../variables/ScreenSizes';

const Label = styled.label`
  color: ${(props) => props.theme.toogleColor};
  font-size: 14px;
  margin-left: 5px;
  margin-right: 1rem;
  text-decoration: none;
  position: relative;
    &:before {
        width: ${props => props.index ? "100%" : "0%"};
    }
    @media (max-width: ${SMALL}px) {
        margin: auto;
        margin: 10px;
        font-size: 15px;
        text-transform: uppercase;
    }
    &:hover {
      color: ${props => props.theme.btnColor};
      &:before {
          width: 100%;
      }
    }
`

const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`

function Toggle ({ theme, updateTheme }) {
    return ( 
        <Content>
          <label className="switch">
            <input type="checkbox" onClick={() => {updateTheme()}}/>
            <span className="slider round"></span>
          </label>
        <Label theme={theme}>
          Dark mode
        </Label>
        </Content>
    )
}


export default Toggle;
import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'


const Btn = styled.button` 
width: 170px;
border: none;
// background-color: #8650FF;
background-image: ${props => `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
color: #fff;
font-size: 20px;
padding: 10px 5px;
border-radius: 50px;
@media (max-width: ${SMALL}px) {
    width: 200px;
    margin-right: auto;
    margin-left: auto;
}
:hover{
    color: white;
    text-decoration: none;
    cursor: none;
}
`

function PrimaryButton ({ theme, hoverable, cta }) {
    return (
        <Btn
        ref={el => hoverable = el}
        color={theme.contactGradient}>
            {cta}
        </Btn>
    )
}

export default PrimaryButton;
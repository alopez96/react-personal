import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { SMALL } from '../../variables/ScreenSizes'

const MainHeader = styled.h1`
    display: none;
    @media (max-width: ${SMALL}px) {
        display: inherit;
        margin-left: 10px;
        color: ${props => props.theme.textSecondary};
    }
`

function Contact ({ theme }) {
  return (
      <div>
        <MainHeader theme={theme}>Contact</MainHeader>
        
      </div>
  )
}

export default Contact

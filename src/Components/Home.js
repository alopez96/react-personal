import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../ScreenSizes'
import about from './../Text'

const Header = styled.h1`
    color: ${props => props.theme.textPrimary};
    margin: 0;
    font-size: 3.5em;
    @media (max-width: ${SMALL}px) {
        font-size: 2em;
        width: 70vw;
        margin: 0 auto 0 auto;
    }
`

const SubHeader = styled.p`
    color: ${props => props.theme.textSecondary};
    margin-left: 5px;
    margin-top: 20px;
    @media (max-width: ${SMALL}px) {
        width: 70%;
        margin: 2rem auto 0 auto;
    }
`

function Home ({theme}) {
    return (
      <div>
          <div className='home-section'>
            <div className='home-text'>
          <Header theme={theme}>{about.header}</Header>
          <SubHeader theme={theme}>{about.sub_header}</SubHeader>
          </div>
          {/* <button>Test</button> */}
          </div>
        </div>
    )
}

export default Home;
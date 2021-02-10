import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../ScreenSizes'
import about from './../Text'

const Header = styled.h1`
    color: ${props => props.theme.textPrimary};
    margin: 0;
    font-size: 3em;
    @media (max-width: ${SMALL}px) {
        font-size: 2em;
        margin: 0 auto 0 auto;
    }
`

const SubHeader = styled.p`
    color: ${props => props.theme.textSecondary};
    margin-left: 5px;
    margin-top: 20px;
    @media (max-width: ${SMALL}px) {
        margin: 2rem auto 0 auto;
    }
`

const Btn = styled.button` 
    width: 10rem;
    border: none;
    background-color: black;
    color: white;
`

const goContact = () => {
    console.log('contact')
}

function Home ({theme}) {
    return (
      <div>
          <div className='home-section'>
            <div className='home-text'>
            <Header theme={theme}>{about.header}</Header>
            <SubHeader theme={theme}>{about.sub_header}</SubHeader>
            <Btn onClick={() => goContact}>Test</Btn>
          </div>
          </div>
        </div>
    )
}

export default Home;
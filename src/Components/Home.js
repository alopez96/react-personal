import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../variables/ScreenSizes'
import about from '../variables/Text'

// split the about string for new line characters
const sub_header_split = about.sub_header.split('\n').map(str => <p>{str}</p>);

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
    background-color: #8650FF;
    color: #fff;
`



const goContact = () => {
    console.log('contact')
}

function Home ({ theme }) {
    console.log('props theme', theme.btnColor)
    return (
      <div>
          <div className='home-section'>
            <div className='home-text'>
            <Header theme={theme}>{about.header}</Header>
            <SubHeader theme={theme}>{sub_header_split}</SubHeader>
            <Btn onClick={() => goContact}>Test</Btn>
          </div>
          </div>
        </div>
    )
}

export default Home;
import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../variables/ScreenSizes'
import about from '../variables/Text'
import arturo from './../Assests/arturo-circle.png'

// split the about string for new line characters
const sub_header_split = about.sub_header.split('\n').map(str => <p>{str}</p>);

const Header = styled.h1`
    color: ${props => props.theme.textPrimary};
    margin: 0;
    font-size: 2em;
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

const Image = styled.img` 
    background-color: #8650FF;
    width: 300px;
    height: 300px;
    object-fit: contain;
    border-radius: 50%;
    border: 5px solid rgb(61, 61, 61);
    @media (max-width: ${SMALL}px) {
        width: 100px;
        height: 100px;
        margin: 0;
    }
`



const goContact = () => {
    console.log('contact')
}

function Home ({ theme }) {
    console.log('props theme', theme.btnColor)
    return (
      <div className='home-pic'>
          <div className='home-section'>
            <div className='home-text'>
            <Header theme={theme}>{about.header}</Header>
            <SubHeader theme={theme}>{sub_header_split}</SubHeader>
            <Btn onClick={() => goContact}>Test</Btn>
          </div>
          </div>
          <Image src={arturo}/>
        </div>
    )
}

export default Home;
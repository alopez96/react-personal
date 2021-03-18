import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import about from '../../variables/AboutText'
import arturo from '../../assets/arturo-circle.png'
import { Link } from 'react-router-dom'
import PrimaryButton from './../elements/PrimaryButton'


// split the about string for new line characters
const sub_header_split = about.subheader.split('\n').map(str => <p>{str}</p>);

const Header = styled.h1`
    color: ${props => props.theme.textPrimary};
    font-size: 2em;
    @media (max-width: ${SMALL}px) {
        text-transform: uppercase;
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }
`

const SubHeader = styled.p`
    color: ${props => props.theme.textPrimary};
    margin-top: 20px;
    @media (max-width: ${SMALL}px) {
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }
`


const Image = styled.img` 
    // background-color: #8650FF;
    background-image: ${props => `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    width: 300px;
    height: 300px;
    object-fit: contain;
    border-radius: 50%;
    border: 3px solid rgb(61, 61, 61);
    // ipad size
    @media (max-width: 700px) {
        width: 200px;
        height: 200px;
    }

    @media (max-width: ${SMALL}px) {
        width: 150px;
        height: 150px;
        margin: 0;
        border: 2px solid rgb(61, 61, 61);
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :hover{
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`

function Home ({ theme, hoverable }) {
    return (
      <div className='home-pic'>
          <div className='home-section'>
            <div className='home-text'>
            <Header theme={theme}>{about.header}</Header>
            <SubHeader theme={theme}>{sub_header_split}</SubHeader>
            <StyleLink to="/projects" >
                <PrimaryButton
                hoverable={hoverable}
                theme={theme}
                cta='See my work'
                />
            </StyleLink>
          </div>
          </div>
          <Image color={theme.contactGradient} src={arturo}/>
        </div>
    )
}

export default Home;
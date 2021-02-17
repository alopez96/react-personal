import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import openLink from './../elements/openLink'

const Bubble = styled.div`
    width: 90%;
    height: 500px;
    border-radius: 0px;
    grid-area: ${props => props.gridArea};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    box-shadow: 4px 4px 8px 0 ${props => props.theme.shadow};
     @media (max-width: 1200px) {
        width: 90%;
        height: 400px;
        min-height: 50%;
        grid-area: none;
        justify-content: center;
        margin: 10px;
        &:before {
            display: none;
        }
    }
    @media (max-width: ${SMALL}px) {
        width: 95%;
        height: 100%;
        margin: 10px 0;
        &:before {
            display: none;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        padding: 0 1px;
        text-align: left;
    }
    border: 1px #ccc;
    border-style: ${props => props.theme.border};
    color: ${props => props.theme.textSecondary};
    background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    color: white;
    // this will prevent the touch on mobile device to react to :hover definition
    // @media (hover: hover) {
    //     :hover {
    //         background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    //         color: white;
    //     }
    // }
`

const Body = styled.h6`
    font-weight: 400;
    font-size: 12px;
    font-style: italic;
    @media (max-width: 1200px) {
        font-size: 12px;
    }
`

const TechList = styled.p`
    // color: ${props => props.theme.textSecondary};
    font-size: 18px;
    width: 55%;
    @media (max-width: ${SMALL}px) {
        width: 90%;
        font-size: 16px;
        padding: 20px 2px;
    }
`

const Button = styled.div`
    width: 150px;
    height: 36px;
    border-radius: 23px;
    background-image: ${props => `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: white;
    transition: box-shadow .5s, transform .5s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }
    @media (max-width: ${SMALL}px) {
        width: 100px;
    }
`

const AboutCard = ({ size, color, gridArea, title, date, tech, url, theme, noBtn}) => {

    // split the about string for new line characters
    const tech_split = tech.split('\n').map(str => <p>{str}</p>);


    return (
        <Bubble size={size} color={theme.contactGradient} gridArea={gridArea} theme={theme}>
            {/* <Title theme={theme}>{title}</Title> */}
            <TechList theme={theme}>{tech_split}</TechList>
            <Body theme={theme}>{date}</Body>
            {noBtn? null
                :<Button onClick={openLink(url)} color={theme.contactGradient}>
                    Website
                </Button>
                }
        </Bubble>
    )
}

export default AboutCard
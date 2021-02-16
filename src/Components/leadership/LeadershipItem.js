import React from 'react'
import styled from 'styled-components'
import Open from '../logos/open.png'
import { SMALL } from '../../variables/ScreenSizes'



const Bubble = styled.div`
    width: ${props => `${props.size}vw`};
    height: ${props => `${props.size}vw`};
    border-radius: 5%;
    // background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    position: relative;
    grid-area: ${props => props.gridArea};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1px;
    box-shadow: 4px 4px 8px 0 ${props => props.theme.shadow};
    &:before {
        content: "";
        position: absolute;
        left: -.5vw;
        top: -.5vw;
        width: ${props => `${props.size + 1}vw`};
        height: ${props => `${props.size + 1}vw`};
        border-radius: 10%;
        background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
        z-index: -2;
        opacity: .2;
    }
     @media (max-width: 1200px) {
        width: 48%;
        height: 200px;
        min-height: 50px;
        border-radius: 5px;
        grid-area: none;
        flex-direction: row;
        justify-content: start;
        margin: 10px;
        &:before {
            display: none;
        }
    }
    @media (max-width: ${SMALL}px) {
        width: 95%;
        height: 200px;
        border-radius: 5px;
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
    :hover{
        background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
        color: white;
    }
`

const Title = styled.h3`
    // color: ${props => props.theme.textSecondary};
    font-size: 16px;
    font-weight: bold;
    @media (max-width: 1200px) {
        margin-left: 0.5rem;
        font-size: 1em;
    }
`

const Body = styled.h6`
    // color: ${props => props.theme.textSecondary};
    font-size: 12px;
    @media (max-width: 1200px) {
        margin-left: 10px;
        font-size: 1em;
    }
`

const TechList = styled.p`
    // color: ${props => props.theme.textSecondary};
    font-size: 14px;
    @media (max-width: ${SMALL}px) {
        margin: 1rem;
    }
`

const Button = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 23px;
    background-image: ${props => `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow .5s, transform .5s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }
`

const PdfBtn = styled.div`
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

const Container = styled.div`
    margin-top: 10px;
    display: flex;
    @media (max-width: 1200px) {
        margin-top: 0;
        margin-left: auto;
        margin-right: auto;
    }
`

const openLink = (url) => () => {
    console.log("clicked")
    window.open(url, '_blank');
}

const LeadershipItem = ({ size, color, gridArea, title, body, tech, url, theme}) => {

    // split the about string for new line characters
    const tech_split = tech.split(';').map(str => <p>{str}</p>);
    console.log('tech list', tech)


    return (
        <Bubble size={size} color={color} theme={theme} gridArea={gridArea}>
            <Title theme={theme}>{title}</Title>
            <Body>{body}</Body>
            <TechList>{tech_split}</TechList>
            {/* <Container>
                {url.length === 0 ?
                <PdfBtn onClick={openLink()} color={color}>View resume</PdfBtn>
                :
                <PdfBtn onClick={openLink(url)} color={color}>View website</PdfBtn>
                // <Button color={color}><img width="20" src={Open} onClick={openLink(url)}></img></Button>
                }
            </Container> */}
        </Bubble>
    )
}

export default LeadershipItem;
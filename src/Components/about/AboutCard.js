import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import { Link } from 'react-router-dom'

const Bubble = styled.div`
    width: 70%;
    height: 500px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
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
    // border-style: ${props => props.theme.border};
    background-image: ${props => `linear-gradient(-45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    // color: ${props => props.theme.textPrimary};
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

const MainText = styled.p`
    // color: ${props => props.theme.textSecondary};
    font-size: 18px;
    width: 90%;
    @media (max-width: ${SMALL}px) {
        width: 90%;
        font-size: 16px;
        padding: 20px 2px;
        font-weight: 400;
    }
`

const Button = styled.div`
    width: 150px;
    height: 36px;
    background: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: black;
    transition: box-shadow .5s, transform .5s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
    }
    @media (max-width: ${SMALL}px) {
        width: 100px;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: 20px;
    }
`

const MainHeader = styled.h1`
    display: none;
    @media (max-width: ${SMALL}px) {
        display: inherit;
        width: 90%;
        margin: 0px;
        padding-top: 10px;
        font-size: 30px;
        font-weight: 300;
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :hover{
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`

const AboutCard = ({ size, title, date, about, url, theme, noBtn}) => {

    // split the about string for new line characters
    const about_split = about.split('\n').map(str => <p>{str}</p>)

    return (
        <Bubble size={size} color={theme.gradient} theme={theme}>
            <MainHeader theme={theme}>{title}</MainHeader>
            <MainText theme={theme}>{about_split}</MainText>
            <Body theme={theme}>{date}</Body>
            { noBtn ? null // if noBtn is passed down from props, do not display
                :
                <StyleLink to='/contact'>
                    <Button color={theme.contactGradient}>
                    Contact
                </Button>
                </StyleLink>
                }
        </Bubble>
    )
}

export default AboutCard
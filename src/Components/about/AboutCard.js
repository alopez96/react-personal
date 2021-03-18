import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import { Link } from 'react-router-dom'
import PrimaryButton from './../elements/PrimaryButton'


const Bubble = styled.div`
    width: 70%;
    min-height: 500px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
     @media (max-width: 1200px) {
        width: 90%;
        min-height: 50%;
        grid-area: none;
        justify-content: center;
        margin: 10px;
        &:before {
            display: none;
        }
    }
    @media (max-width: ${SMALL}px) {
        &:before {
            display: none;
        }
        padding: 10px 5px;
        width: 95%;
        margin: 10px 0;
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
    margin: 100px;
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

const AboutCard = ({ size, title, about, theme, noBtn}) => {

    // split the about string for new line characters
    const about_split = about.split('\n').map(str => <p>{str}</p>)

    return (
        <Bubble size={size} color={theme.gradient} theme={theme}>
            <MainHeader theme={theme}>{title}</MainHeader>
            <MainText theme={theme}>{about_split}</MainText>
            { 
            // if noBtn is passed down from props, do not display
                noBtn ? null
                :
                <StyleLink to='/contact'>
                    <PrimaryButton
                    theme={theme}
                    cta='Contact'
                    />
                </StyleLink>
                }
        </Bubble>
    )
}

export default AboutCard
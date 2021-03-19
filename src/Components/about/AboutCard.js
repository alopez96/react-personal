import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import { Link } from 'react-router-dom'
import PrimaryButton from './../elements/PrimaryButton'


const Bubble = styled.div`
    width: 70%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 40px;
    @media (max-width: ${SMALL}px) {
        &:before {
            display: none;
        }
        padding: 10px 5px;
        width: 95%;
        margin: 10px 0;
    }
    border: 1px #8650FF;
    color: ${props => props.theme.textPrimary};
    box-shadow: 4px 4px 8px 0 ${props => props.theme.shadow};
    border-style: ${props => props.theme.border};
`

const MainText = styled.p`
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
    :hover{
        text-decoration: none;
        cursor: none;
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
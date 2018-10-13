import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SMALL } from '../ScreenSizes';


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    width: 77%;
    height: auto;
    background-color: white;
    padding: 50px 50px 35px 50px;
    border-radius: 8px;
    background-image: url(${props => props.image.normal}), linear-gradient(-45deg, ${props => props.theme.gradient.from} 0%, ${props => props.theme.gradient.to} 100%);
    background-position: ${props => props.center ? "bottom right" : "bottom center"};
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: relative;
    @media (max-width: ${SMALL}px) {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 25px 30px 0 30px;
        border-radius: 0px;
        background-image: url(${props => props.image.mobile}), linear-gradient(-45deg, ${props => props.theme.gradient.from} 0%, ${props => props.theme.gradient.to} 100%);
        background-size: 135%;
    }
`

export const Button = styled(Link)`
    width: 150px;
    text-align: center;
    margin-top: 30px;
    background-color: ${props => props.theme.textDark};
    padding: 10px 0;
    border-radius: 5px;
    color: #FFF;
    transition: opacity .25s;
    text-decoration: none;
    &:hover {
        opacity: .75;
    }
    @media (max-width: ${SMALL}px) {
        margin: 20px auto;
        box-shadow: 0 3px 10px rgba(0,0,0,.15);
    }
`

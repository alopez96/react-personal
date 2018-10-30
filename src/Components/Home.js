import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import { SMALL } from '../ScreenSizes'

const Header = styled.h1`
    color: #f7f6f0;
    margin: 0;
    font-size: 3.5em;
    @media (max-width: ${SMALL}px) {
        font-size: 2em;
        text-align: center;
    }
`

const SubHeader = styled.p`
    color: ${props => props.theme.textDark};
    margin-left: 5px;
    margin-top: 20px;
    @media (max-width: ${SMALL}px) {
        text-align: center;
        width: 70%;
        margin: 20px auto 0 auto;
    }
`

const ThemeChooserContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
`

export default class Home extends Component {
  render() {
    return (
      <div>
          <NavBar index="0" />
          <Header>HI I’M ARTURO LOPEZ</Header>
          <SubHeader>I’m a Computer Science Student at University of California, Santa Cruz.</SubHeader>
        </div>
    )
  }
}

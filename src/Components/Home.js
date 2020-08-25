import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import { SMALL } from '../ScreenSizes'
import about from './../Text'

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

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar index="0" />
          <div className='home-section'>
          <Header>{about.header}</Header>
          <SubHeader>{about.sub_header}</SubHeader>
          </div>
        </div>
    )
  }
}

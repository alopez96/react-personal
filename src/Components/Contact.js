import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Github from './logos/github.png'
import Gmail from './logos/email2.png'
import Twitter from './logos/twitter.png'

import { SMALL } from '../ScreenSizes'

const Rect = styled.div`
    width: 500px;
    height: 500px;
    transform: rotate(-45deg);
    display: flex;
    margin-top:100px;
    background-image: linear-gradient(to left, #DA7B93, #2E151B);
    justify-content: center;
    @media (max-width: ${SMALL}px) {
        width: 105vw;
        height: 400px;
        transform: rotate(-10deg) skew(-10deg);
    }
`

const Content = styled.div`
    transform: rotate(45deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${SMALL}px) {
        transform: skew(10deg) rotate(10deg);
    }
`

const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = styled.h1`
    color: white;
`

const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`

const P = styled.a`
    color: white;
    margin-left: 20px;
    font-size: 15px;
    cursor: pointer;
`

const openLink = (url) => () => {
    if(url.charAt(0) !== "h"){
        window.location = `mailto:${url}`;
    }else{
        window.open(url, '_blank');
    }
}

const Contact = (props) => {
  return (
      <div>
        <NavBar index="3"/>
        <Center>
            <Rect>
                <Content>
                    <Header>Contact</Header>
                    <ListItem onClick={openLink('https://github.com/alopez96')}>
                        <img width="30" src={Github}/>
                        <P>alopez96</P>
                    </ListItem>
                    <ListItem onClick={openLink('alopez96@ucsc.edu')}>
                        <img width="30" src={Gmail}/>
                        <P>alopez96@ucsc.edu</P>
                    </ListItem>
                    <ListItem onClick={openLink('https://twitter.com/arturolopezucsc')}>
                        <img width="30" src={Twitter}/>
                        <P>arturolopezucsc</P>
                    </ListItem>
                </Content>
            </Rect>
        </Center>
      </div>
  )
}

export default Contact

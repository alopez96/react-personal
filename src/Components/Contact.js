import React from 'react'
import { Container, Card } from './GlobalStyles'
import styled from 'styled-components'
import NavBar from './NavBar';
import Github from './logos/github.png';
import Gmail from './logos/email2.png';
import Twitter from './logos/twitter.png';

import { SMALL } from '../ScreenSizes';

const Rect = styled.div`
    background-image: linear-gradient(-45deg, ${props => props.theme.contactGradient.from} 0%, ${props => props.theme.contactGradient.to} 100%);
    width: 400px;
    height: 400px;
    transform: rotate(-45deg);
    display: flex;
    justify-content: center;
    @media (max-width: ${SMALL}px) {
        position: absolute;
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
    <Container>
      <Card image="">
        <NavBar index="3" />
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
      </Card>
    </Container>
  )
}

export default Contact

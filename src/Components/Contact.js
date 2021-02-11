import React from 'react'
import styled from 'styled-components'
import Github from './logos/github.png';
import Gmail from './logos/email2.png';
import Twitter from './logos/twitter.png';

import { SMALL } from '../variables/ScreenSizes'

const Center = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${SMALL}px) {
        justify-content: center;
        align-content: center;
        height: 100vh;
        width: 100vw;
    }
`

const Header = styled.h1`
    color: white;
`

const Rect = styled.div`
    width: 40vw;
    height: 100vh;
    display: flex;
    margin-top: 2rem;
    align-items:center;
    justify-content: center;
    @media (max-width: ${SMALL}px) {
        width: 100vw;
        height: 20vh;
        margin-top: -6rem;
        transform: rotate(-10deg) skew(-10deg);
    }
`

const Content = styled.div`
    display: flex;
    background-image: ${props => `linear-gradient(45deg, ${props.color.from} 0%, ${props.color.to} 100%)`};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    @media (max-width: ${SMALL}px) {
        transform: skew(10deg) rotate(10deg);
    }
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

const Button = styled.div`
    width: 4rem;
    height: 4rem;
    padding: 2rem 4rem 2rem 4rem;
    font-size: 1.4rem;
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

const openLink = (url) => () => {
    if(url.charAt(0) !== "h"){
        window.location = `mailto:${url}`;
    }else{
        window.open(url, '_blank');
    }
}

function Contact ({ theme }) {
  return (
      <div>
        <Center>
            <Rect>
                <Content color={theme.contactGradient}>
                <Header>Contact</Header>
                {/* <ListItem onClick={openLink('alopez96gucsc.edu')}>
                        <img width="30" src={Gmail}/>
                        <P></P>
                    </ListItem> */}
                    <ListItem onClick={openLink('https://github.com/alopez96')}>
                        <img width="30" src={Github}/>
                        <P>alopez96</P>
                    </ListItem>
                    
                                        
                    {/* <Button color={theme.contactGradient}>Send</Button> */}
                
                </Content>
            </Rect>
        </Center>
      </div>
  )
}

export default Contact

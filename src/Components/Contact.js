import React from 'react'
import styled from 'styled-components'
import Github from './logos/github.png';
import Twitter from './logos/twitter.png';
import { Icon } from 'semantic-ui-react'

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
        width: 100%;
        height: 60vh;
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
    padding: 100px;
    @media (max-width: ${SMALL}px) {
        transform: skew(10deg) rotate(10deg);
        width: 100%;
        margin: 0;
    }
`


const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 32px;
`

const P = styled.a`
    margin-left: 10px;
    font-size: 20px;
    cursor: pointer;
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
                        <Icon name='github' />
                        {/* <P>alopez96</P> */}
                    </ListItem>

                    <ListItem onClick={openLink('https://www.linkedin.com/in/rturolopez/')}>
                        <Icon name='linkedin' />
                    </ListItem>

                    <ListItem onClick={openLink('https://arturocreates.com/#contact')}>
                        <Icon name='mail' />
                    </ListItem>
                    
                                        
                    {/* <Button color={theme.contactGradient}>Send</Button> */}
                
                </Content>
            </Rect>
        </Center>
      </div>
  )
}

export default Contact

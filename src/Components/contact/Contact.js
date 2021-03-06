import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { SMALL } from '../../variables/ScreenSizes'
import openLink from '../elements/openLink'

const Center = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${SMALL}px) {
        justify-content: center;
        align-content: center;
        min-height: 80vh;
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
    padding: 100px 200px;
    @media (max-width: ${SMALL}px) {
        transform: skew(10deg) rotate(10deg);
        width: 100%;
        margin: 0;
        padding: 100px;
    }
`

const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 32px;
    @media (max-width: ${SMALL}px) {
        flex-direction: column;
    }
`

const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    font-size: 32px;
    :hover {
        // cursor: pointer;
    }
    @media (max-width: ${SMALL}px) {
        margin: 10px 0;
    }
`

const MainHeader = styled.h1`
    display: none;
    @media (max-width: ${SMALL}px) {
        display: inherit;
        margin-left: 10px;
        color: ${props => props.theme.textSecondary};
    }
`

function Contact ({ theme }) {
  return (
      <div>
        {/* <MainHeader theme={theme}>Contact</MainHeader> */}
        <Center>
            <Rect>
                <Content color={theme.contactGradient}>
                <Header>Contact</Header>
                <List>
                    <ListItem onClick={openLink('https://github.com/alopez96')}>
                        <Icon name='github' />
                    </ListItem>

                    <ListItem onClick={openLink('https://www.linkedin.com/in/rturolopez/')}>
                        <Icon name='linkedin' />
                    </ListItem>

                    <ListItem onClick={openLink('https://arturocreates.com/#contact')}>
                        <Icon name='mail' />
                    </ListItem>
                    </List>                
                </Content>
            </Rect>
        </Center>
      </div>
  )
}

export default Contact

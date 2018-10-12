import React, { Component } from 'react';
import '../Style/home.css';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Container, Card, Button } from './GlobalStyles';
import { SMALL } from '../ScreenSizes';

const Header = styled.h1`
    color: ${props => props.theme.textColored};
    margin: 0;
    margin-top: 80px;
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

const ThemeButton = styled.div`
    width: 75px;
    background-color: ${props => props.active ? "white" : "transparent"};
    color: ${props => props.active ? "black" : props.theme.textColored};
    margin-bottom: 20px;
    padding: 7px 0;
    border-radius: 1000px;
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    transition: background 500ms;
`



export default class Home extends Component {

    state = {
        dark: this.props.theme.dark
    }

    changeTheme = (tf) => (event) => {
        event.preventDefault();
        this.setState({dark: tf});
        this.props.changeTheme(tf);
    }

  render() {
    return (
        <Container>
           <Card image={this.props.theme.images.home}>
                <NavBar index="0" />
                <Header>HI I’M ARTURO LOPEZ</Header>
                <SubHeader>I’m a Computer Science Student at University of California, Santa Cruz.</SubHeader>
                <Button to="/aboutMe">Learn more</Button>
                <ThemeChooserContainer>


                </ThemeChooserContainer>
            </Card>
        </Container>

    )
  }
}

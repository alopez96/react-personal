import React, { Component } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Link } from 'react-router-dom';
import { SMALL } from '../ScreenSizes';

const Logo = styled.h1`
    font-size: 1.5em;
    position: relative;
    font-weight: bold;
    padding-bottom: 5px;
    float: left;
    color: ${props => props.theme.textNormal};
    &:before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 35px;
        width: 60px;
        height: 3px;
        border-radius: 20px;
        background-color: ${props => props.theme.textDark};;
    }
`

const List = styled.ul`
    list-style: none;
    transition: opacity 500ms;
    visibility: visible;
    opacity: 1;
    color: ${props => props.theme.textNormal};
    @media (min-width: ${SMALL}px) {
        visibility: visible;
        opacity: 1;
        background: red;
    }
    @media (max-width: ${SMALL}px) {
        position: absolute;
        background-image: linear-gradient(-45deg, ${props => props.theme.gradient.from} 0%, ${props => props.theme.gradient.to} 100%);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        visibility: ${props => props.hidden ? "hidden" : "visible"};
        opacity: ${props => props.hidden ? "0" : "1"};
    }
`

const ListItem = styled.li`
    float: right;
    cursor: pointer;
    margin-left: 40px;
    text-decoration: none;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        margin-top: 10px;
        width: ${props => props.index ? "100%" : "0%"};
        height: 3px;
        background-color: ${props => props.theme.textDark};
        transition: width 500ms;
    }
    @media (max-width: ${SMALL}px) {
        float: none;
        margin: auto;
        text-align: center;
        margin: 20px 0;
        font-size: 1.25em;
        font-weight: bolder;
        text-transform: uppercase;
    }
    &:hover {
      &:before {
          width: 100%;
      }
    }
`

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const CloseBtn = styled.div`
    z-index: 50;
    position: fixed;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url("data:image/jpeg;base64,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");
    margin-top: 35px;
    margin-right: 35px;
    cursor: pointer;
    @media (min-width: ${SMALL}px) {
        visibility: hidden;
    }
    @media (max-width: ${SMALL}px) {
        visibility: ${props => props.hidden ? "hidden" : "visible"};
    }
`

const Menu = styled.div`
    width: 30px;
    height: 20px;
    margin-top: 10px;

    background-repeat: no-repeat;
    float: right;
    cursor: pointer;
    @media (min-width: ${SMALL}px){
        display: none;
    }
`


export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = { hideMenu: window.innerWidth > SMALL ? false : true };
    }


    toggleMenu = (index, visible) => () => {
        if(this.props.index == index && index || window.innerWidth > SMALL) return;
        this.setState(state => ({
            hideMenu: !state.hideMenu
        }));
    }

    updateScreenSize = () => {
        if(window.innerWidth > SMALL && this.state.hideMenu){
            this.setState({
                hideMenu: false
            })
        }else if(window.innerWidth < SMALL && !this.state.hideMenu){
            this.setState({
                hideMenu: true
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateScreenSize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateScreenSize);
    }

  render() {
      const { index, theme } = this.props;
      const { hideMenu } = this.state;
    return (
      <div>
        <Logo>ARTURO</Logo>
        <List hidden={hideMenu}>
            <CloseBtn onClick={this.toggleMenu()} hidden={hideMenu} />
            <StyleLink to="/contact" ><ListItem index={index == 3 ? true : false} onClick={this.toggleMenu(3, false)}>Contact</ListItem></StyleLink>
            <StyleLink to="/projects" ><ListItem index={index == 2 ? true : false} onClick={this.toggleMenu(2, false)}>Projects</ListItem></StyleLink>
            <StyleLink to="/about" ><ListItem index={index == 1 ? true : false} onClick={this.toggleMenu(1, false)}>About</ListItem></StyleLink>
            <StyleLink to="/" ><ListItem index={index == 0 ? true : false} onClick={this.toggleMenu(0, false)}>Home</ListItem></StyleLink>
        </List>
        <Menu onClick={this.toggleMenu()}/>
      </div>
    )
  }
}

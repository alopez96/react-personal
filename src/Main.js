import React, { Component } from 'react';
import Home from './Components/Home';
import { Route, withRouter } from 'react-router-dom';
import About from './Components/About';
import { AnimatedSwitch } from 'react-router-transition';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { SMALL } from './ScreenSizes';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  dark: true,
  gradient: {
    to: "#252525",
    from: "#434343"
  },
  contactGradient: {
    from: "#8650FF",
    to: "#33249D"
  },
  textNormal: "#FFFFFF",
  textColored: "#D0C9FF",
  textDark: "#786EBC",
  images: {
    home: {


    },
    about: {

    },
    navBar: {

    }
  }
}

const lightTheme = {
  dark: false,
  gradient: {
    to: "#FFFFFF",
    from: "#D9D9FF"
  },
  contactGradient: {
    from: "#4F6CD3",
    to: "#9FF5BB"
  },
  textNormal: "#434343",
  textColored: "#5270D2",
  textDark: "#5667A2",
  images: {
    home: {

    },
    about: {

    },
    navBar: {

    }
  }
}


class Main extends Component {

  state = {
    theme: darkTheme
  }
  changeTheme = (tf) => {
    this.setState({theme: tf ? darkTheme : lightTheme})
  }
  renderHome = () => {
    return <Home theme={this.state.theme} changeTheme={this.changeTheme} />
  }
  renderComponents = MyComp => () => {
    return <MyComp theme={this.state.theme} />
  }

  render() {
    const { theme } = this.state;
    document.querySelector('body').style.backgroundImage = `linear-gradient(45deg, ${theme.gradient.from} 0%, ${theme.gradient.to} 100%)`
    return (
      <ThemeProvider style={{width: "100%", height:"100%"}} theme={this.state.theme} onScroll={this.handleScroll}>
        <AnimatedSwitch
          atEnter={window.innerWidth > SMALL ? { opacity: 0 } : { opacity: 1 }}
          atLeave={window.innerWidth > SMALL ? { opacity: 0 } : { opacity: 1 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={this.renderHome} />
          <Route path="/about" component={this.renderComponents(About)} />
          <Route path="/projects" component={this.renderComponents(Projects)} />
          <Route path="/contact" component={this.renderComponents(Contact)} />
        </AnimatedSwitch>
      </ThemeProvider>
    );
  }
}



export default withRouter(Main);

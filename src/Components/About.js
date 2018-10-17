import React, { Component } from 'react';
import { Container, Card } from './GlobalStyles';
import NavBar from './NavBar';
import styled from 'styled-components';
import {SMALL} from '../ScreenSizes';


const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Header = styled.h1`
    color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,.5);
    margin-bottom: 30px;
`

const Text = styled.p`
    color: white;
    max-width: 400px;
    width: 90%;
    text-align: center;
    text-shadow: 0 2px 6px rgba(0,0,0,.5);
    @media (max-width: 350px) {
        font-size: .75em;
    }
    @media (max-width: ${SMALL}px) {
        font-size: .9em;
    }
`

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.theme.images.about.normal});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 1200px;
    bottom: 0;
    left: 0;
    z-index: -5;

    @media (min-height: 1200px) {
        background-size: 200%;
    }
    @media (max-width: ${SMALL}px) {
        background-size: 100%;
        background-position-y: -100%;
        background-image: url(${props => props.theme.images.about.mobile});
    }
    @media (max-width: 600px) {
        background-position-y: 100%;
    }
`



const About = (props) => {
  return (
    <Container>
      <Card image="" center>
        <NavBar index="1"/>
        <Content>
            <Header>About me</Header>
            <div>
                  {/* <div>
                      <img src="./static/images/srjc.jpg" alt="Card image cap"/>
                      <img src="./static/images/ucsc.png" alt="Card image cap"/>
                </div> */}
                </div>
            <Text className="about-text">
              <p>
                I discovered my passion for Science and Technology at a young age.
                Growing up, I always questioned how things worked and how they were built. As a senior in high school,
                I took a Physics course that introduced me to the field of Engineering.
                During this time, I also began to wonder how my phone and the school computers worked. I was fascinated by the fact
                that I press a key or screen, and it would respond.
                I went on to <a href="https://www.santarosa.edu/" target="_blank">Santa Rosa Junior College</a>
                where I found a combination of my interests, and passion: <strong>Computer Science</strong>.
                </p>
                <p>
                  Community College, was also the time when I saw most of my friends drop out of school.
                  Many young teenagers that grow up seeing this
                  as the only option, limit themselves and their goals after high school.
                  I want to help younger generations from low income communities expand their opportunities and their dreams,
                  by helping them find their passion in tech, education, and STEM.
                  Today, I am looking for ways to expand my
                  opportunities in computer science and <strong>software engineering</strong>.
                  I am a student at <a href="https://www.ucsc.edu/" target="_blank">Univerversity of California, Santa Cruz</a>
                  where I will be graduating with my Computer Science degree in 2019.
                </p>
            </Text>
        </Content>
        <Background />
      </Card>
    </Container>
  )
}

export default About

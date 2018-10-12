import React from 'react'
import { Container, Card } from './GlobalStyles'
import NavBar from './NavBar';
import ProjectItem from './ProjectItem';
import styled from 'styled-components'
import { SMALL } from '../ScreenSizes';

const Grid = styled.div`
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-areas:
    'lt lt0 lt1 mt mt0 mt1 rt rt0 rt1'
    'lm lm0 lm1 mm mm0 mm1 rm rm0 rm1'
    'lb lb0 lb1 mb mb0 mb1 rb rb0 rb1';
    padding: 40px;
    z-index: 2;
    margin: 0 auto;
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-grow: space-between;
        padding: 0px;
        margin-top: 20px;
        overflow: auto;
    }
    @media (max-width: ${SMALL}px) {
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px;
        margin-top: 20px;
        overflow: auto;
    }
`

const Projects = (props) => {
  return (
    <Container>
        <Card image="">
            <NavBar index="2"/>
            <Grid>
                <ProjectItem
                    size={13}
                    color={{from: "#4040F4", to: "#713FFA"}}
                    gridArea="lt0"
                    title="Robofriends"
                    url="https://eager-swirles-8b12c3.netlify.com/"
                    body="Enter a name to search for Robot name. React practice."
                    tech="ReactJS | Clarify API | npm"
                    />
                <ProjectItem
                    size={13}
                    color={{from: "#F44040", to: "#713FFA"}}
                    gridArea="lm"
                    title="JUMP'N"
                    url="https://alopez96.github.io/"
                    body="Landing page for personal startup idea."
                    tech="HTML5 | CSS3 | Bootstrap | Netlify"
                    />
                <ProjectItem
                    size={13}
                    color={{from: "#3FC8FA", to: "#4040F4"}}
                    gridArea="mm"
                    title="My Resume"
                    url=""
                    tech="Latex"
                    />
                <ProjectItem
                    size={13}
                    color={{from: "#40AFF4", to: "#3FFA87"}}
                    gridArea="rt"
                    title="This site"
                    url=""
                    body=""
                    tech="ReactJS | ReactRouter | npm | node.js"
                    />
                <ProjectItem
                    size={13}
                    color={{from: "#8967E8", to: "#612DB5"}}
                    gridArea="rm0"
                    title="Game Up"
                    url=""
                    body="Android app to connect gamers."
                    tech="Android Studio | Java | Firebase"
                    />
                <ProjectItem
                    size={13}
                    color={{from: "#B9FA3F", to: "#5AD0A7"}}
                    gridArea="rb"
                    title="MakeUp Artist"
                    url="https://socer-a512d.appspot.com/Avalos"
                    tech="VueJS | Web2py | Python | Google App Engine"
                    />
                <ProjectItem
                    size={13}
                    color={{from: "#F4AF40", to: "#F4D15C"}}
                    gridArea="lb0"
                    title="Soccer Pick Up"
                    url="https://socer-a512d.appspot.com/soccer"
                    tech="VueJS | Web2py | Python | Google App Engine"
                    />
            </Grid>

        </Card>
    </Container>
  )
}

export default Projects

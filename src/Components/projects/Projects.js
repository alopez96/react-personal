import React from 'react'
import NavBar from '../NavBar'
import ProjectItem from './ProjectItem'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'

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
        overflow: auto;
    }
`

const Projects = (props) => {
  return (
        <div>
            <Grid  className="projects">
                <ProjectItem
                    title="Full Stack Web Development"
                    size={20}
                    color={{from: "#4040F4", to: "#713FFA"}}
                    gridArea="lt0"
                    url="https://www.alliesproservices.com/"
                    // github="https://github.com/alopez96/react-robofriends"
                    // tech="Business Website for Allies Pro Services."
                    tech="React, Node, Express, MongoDB, MySQL, Web Design, Responsive Design"
                    />
                {/* <ProjectItem
                    title="Brendas' Jumpies"
                    size={13}
                    color={{from: "#F44040", to: "#713FFA"}}
                    gridArea="lb0"
                    url="https://brendasjumpies.com/"
                    // github="https://github.com/alopez96/jumpn"
                    tech="Business website for Brendas' Jumpies."
                /> */}
                <ProjectItem
                    title="Face Detection App"
                    size={20}
                    color={{from: "#3FC8FA", to: "#4040F4"}}
                    gridArea="mm"
                    url="https://face-recognition-reactjs.herokuapp.com/"
                    // github="https://github.com/alopez96/jumpn"
                    tech="Web application to detect faces in an image."
                />
                <ProjectItem
                    title="Data Engineer"
                    size={20}
                    color={{from: "#3FC8FA", to: "#4040F4"}}
                    gridArea="rm0"
                    url="https://workers-dinner.surge.sh/"
                    // github="https://github.com/alopez96/workers-dinner"
                    tech="PySpark, SQL, AWS"
                    />
                <ProjectItem
                    title="Analytics Tester"
                    size={20}
                    color={{from: "#3FC8FA", to: "#4040F4"}}
                    gridArea="rt"
                    url="https://workers-dinner.surge.sh/"
                    // github="https://github.com/alopez96/workers-dinner"
                    tech="SQL testing, Automation, Parameterization"
                    />
                {/* <ProjectItem
                    title="Personal Website"
                    size={13}
                    color={{from: "#40AFF4", to: "#3FFA87"}}
                    gridArea="rb"
                    url="https://arturolopez.me/"
                    // github="https://github.com/alopez96/arturo-personal"
                    tech="Second website to showcase experience and skills."
                    /> */}
                <ProjectItem
                    title="Web Developer"
                    size={20}
                    color={{from: "#8967E8", to: "#612DB5"}}
                    gridArea="lm"
                    url="http://arturo-start.surge.sh/"
                    // github="https://github.com/alopez96/startpage"
                    tech="Customized startpage inspired by reddit r/startpages."
                    />
            </Grid>

        </div>
  )
}

export default Projects

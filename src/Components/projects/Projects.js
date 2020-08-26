import React from 'react'
import NavBar from '../NavBar'
import ProjectItem from './ProjectItem'
import styled from 'styled-components'
import { SMALL } from '../../ScreenSizes'

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
        <div>
            <Grid  className="projects">
                <ProjectItem
                    title="Allies Pro Services LLC"
                    size={13}
                    color={{from: "#4040F4", to: "#713FFA"}}
                    gridArea="lt0"
                    url="https://www.alliesproservices.com/"
                    // github="https://github.com/alopez96/react-robofriends"
                    tech="React"
                    />
                <ProjectItem
                    title="Brendas' Jumpies"
                    size={13}
                    color={{from: "#F44040", to: "#713FFA"}}
                    gridArea="lm"
                    url="https://brendasjumpies.com/"
                    // github="https://github.com/alopez96/jumpn"
                    tech="React"
                />
                <ProjectItem
                    title="JUMP'N"
                    size={13}
                    color={{from: "#F44040", to: "#713FFA"}}
                    gridArea="lm"
                    url="https://jumpin.netlify.app/"
                    // github="https://github.com/alopez96/jumpn"
                    tech="HTML | CSS"
                    />
                <ProjectItem
                    title="Workers' Dinner"
                    size={13}
                    color={{from: "#3FC8FA", to: "#4040F4"}}
                    gridArea="mm"
                    url="https://workers-dinner.surge.sh/"
                    github="https://github.com/alopez96/workers-dinner"
                    tech="HTML | CSS"
                    />
                <ProjectItem
                    title="My Personal Website"
                    size={13}
                    color={{from: "#40AFF4", to: "#3FFA87"}}
                    gridArea="rt"
                    url="https://arturolopez.me/"
                    github="https://github.com/alopez96/arturo-personal"
                    tech="HTML | CSS"
                    />
                <ProjectItem
                    title="Start Page"
                    size={13}
                    color={{from: "#8967E8", to: "#612DB5"}}
                    gridArea="rm0"
                    url="http://arturo-start.surge.sh/"
                    github="https://github.com/alopez96/startpage"
                    tech="React"
                    />

                    {/* <ProjectItem
                    size={13}
                    color={{from: "#4040F4", to: "#713FFA"}}
                    gridArea="lt0"
                    title="Robofriends"
                    url="https://eager-swirles-8b12c3.netlify.com/"
                    github="https://github.com/alopez96/react-robofriends"
                    tech="React"
                    /> */}
                    
            </Grid>

        </div>
  )
}

export default Projects

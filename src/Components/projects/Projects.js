import React from 'react'
import ProjectItem from './ProjectItem'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import Leadership from './../leadership/Leadership'

const Grid = styled.div`
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
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px;
        margin-top: 20px;
        overflow: auto;
    }
`
const Space = styled.div`
    width: 100%;
    height: 100px;
    @media (max-width: ${SMALL}px) {
        height: 1px;
        margin-bottom: 60px;
    }
`

const Header = styled.h1`
    display: none;
    @media (max-width: ${SMALL}px) {
        display: inherit;
        margin-left: 10px;
        color: ${props => props.theme.textSecondary};
    }
`


const Projects = ({ theme }) => {
  return (
      <div> 
          <Space><Header theme={theme}>Experience</Header></Space>
        <Grid  className="projects">
            <ProjectItem
                title="Software Developer @ Accenture"
                size={20}
                color={{from: "#4040F4", to: "#713FFA"}}
                gridArea="lt0"
                url=""
                theme={theme}
                noBtn={true}
                date={'Nov 2020 - Present'}
                // github="https://github.com/alopez96/react-robofriends"
                // tech="Business Website for Allies Pro Services."
                tech="Data Engineer & PySpark developer"
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
                title="Analytics Tester @ Accenture"
                size={20}
                color={{from: "#4040F4", to: "#713FFA"}}
                // color={{from: "#3FFA87", to: "#4040F4"}}
                gridArea="rt"
                url=""
                noBtn={true}
                theme={theme}
                date={'Nov 2019 - Oct 2020'}
                // github="https://github.com/alopez96/workers-dinner"
                tech="Co-Lead | SQL Testing & Automation"
                />
            <ProjectItem
                title="Web and Mobile Freelance"
                size={20}
                color={{from: "#4040F4", to: "#713FFA"}}
                // color={{from: "#8967E8", to: "#612DB5"}}
                gridArea="lm"
                url="https://arturocreates.com/"
                theme={theme}
                noBtn={true}
                date={'Aug 2020 - Present'}
                // github="https://github.com/alopez96/workers-dinner"
                tech="Design, Develop, Test, Launch Software applications"
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
                title="Computer Science BS"
                size={20}
                color={{from: "#4040F4", to: "#713FFA"}}
                // color={{from: "#F44040", to: "#4040F4"}}
                gridArea="mm"
                url=""
                theme={theme}
                noBtn={true}
                date={'Graduated June 2020'}
                // github="https://github.com/alopez96/jumpn"
                tech="University of California, Santa Cruz"
            />
            <ProjectItem
                title="Software Developer @ Realtime"
                size={20}
                color={{from: "#4040F4", to: "#713FFA"}}
                // color={{from: "#3FC8FA", to: "#4040F4"}}
                gridArea="rm0"
                url=""
                theme={theme}
                noBtn={true}
                date={'Oct 2018 - Nov 2018'}
                // github="https://github.com/alopez96/startpage"
                tech="React and Android developer"
                />
            {/* <ProjectItem
                title="Allies Pro Services Website"
                size={20}
                color={{from: "#F44040", to: "#4040F4"}}
                gridArea="mm"
                url="https://www.alliesproservices.com/"
                // github="https://github.com/alopez96/jumpn"
                tech="Web Consulting Project; Tech stack: React, Node, Express, SQL, Stripe API"
            /> */}
        </Grid>
        <Leadership theme={theme}/>
        </div>
  )
}

export default Projects

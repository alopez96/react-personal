import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import Card from '../projects/ProjectItem';

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

const Leadership = ({ theme }) => {
  return (
      <div>
          <Space><Header theme={theme}>Leadership</Header></Space>
        <Grid  className="projects">
            <Card
                title="OKIA"
                size={20}
                // color={{from: "#4040F4", to: "#713FFA"}}
                gridArea="lt0"
                url=""
                theme={theme}
                noBtn={true}
                tech="Developing a software application to help students get financial aid."
                />
            <Card
                title="Workers' Dinner"
                size={20}
                // color={{from: "#3FFA87", to: "#4040F4"}}
                gridArea="rt"
                url=""
                theme={theme}
                noBtn={true}
                tech="Coordinated a day of giving back to the college campus labor community."
                />
            <Card
                title="TXT Volunteering"
                size={20}
                // color={{from: "#8967E8", to: "#612DB5"}}
                gridArea="lm"
                url="https://arturocreates.com/"
                theme={theme}
                noBtn={true}
                tech="Supporting black and brown youth from inner city LA."
                />
            <Card
                title="Mentors United"
                size={20}
                // color={{from: "#F44040", to: "#4040F4"}}
                gridArea="mm"
                theme={theme}
                noBtn={true}
                url="https://www.alliesproservices.com/"
                tech="Organized and a connected with local high school to create a Mentorship program."
                />
            <Card
                title="SHPE"
                size={20}
                // color={{from: "#3FC8FA", to: "#4040F4"}}
                gridArea="rm0"
                theme={theme}
                noBtn={true}
                url="https://www.asherhousewellness.com/"
                tech="Volunteered & supported as the Regional Webmaster for SHPE [Society of Hispanic Professional Engineers]"
                />
        </Grid>
        </div>
  )
}

export default Leadership;
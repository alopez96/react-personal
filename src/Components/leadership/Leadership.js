import React from 'react'
import LeadershipItem from './LeadershipItem'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'

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

const Leadership = (props) => {
  return (
      <div>
          <Space/>
        <Grid  className="projects">
            <LeadershipItem
                title="OKIA"
                size={20}
                color={{from: "#4040F4", to: "#713FFA"}}
                gridArea="lt0"
                url=""
                // github="https://github.com/alopez96/react-robofriends"
                // tech="Business Website for Allies Pro Services."
                tech=""
                />
            <LeadershipItem
                title="Workers' Dinner"
                size={20}
                color={{from: "#3FFA87", to: "#4040F4"}}
                gridArea="rt"
                url=""
                // github="https://github.com/alopez96/workers-dinner"
                tech=""
                />
            <LeadershipItem
                title="TXT Volunteering"
                size={20}
                color={{from: "#8967E8", to: "#612DB5"}}
                gridArea="lm"
                url="https://arturocreates.com/"
                // github="https://github.com/alopez96/workers-dinner"
                tech=""
                />
            <LeadershipItem
                title="SHPE"
                size={20}
                color={{from: "#3FC8FA", to: "#4040F4"}}
                gridArea="rm0"
                url="https://www.asherhousewellness.com/"
                // github="https://github.com/alopez96/startpage"
                tech=""
                />
            <LeadershipItem
                title="Mentors United"
                size={20}
                color={{from: "#F44040", to: "#4040F4"}}
                gridArea="mm"
                url="https://www.alliesproservices.com/"
                // github="https://github.com/alopez96/jumpn"
                tech=""
            />
        </Grid>
        </div>
  )
}

export default Leadership;
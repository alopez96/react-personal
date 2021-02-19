import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { SMALL } from '../../variables/ScreenSizes'
import AboutCard from './AboutCard'
import about from './../../variables/AboutText'

const MainHeader = styled.h1`
    display: none;
    @media (max-width: ${SMALL}px) {
        display: inherit;
        margin-left: 10px;
        color: ${props => props.theme.textSecondary};
    }
`

const Section = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    @media (max-width: ${SMALL}px) {
        min-height: 80vh;
    }
`

function About ({ theme }) {
  return (
      <div>
        <Section>
        <AboutCard
                title={about.about_header}
                size={20}
                color={{from: "#4040F4", to: "#713FFA"}}
                gridArea="lt0"
                url=""
                theme={theme}
                noBtn={true}
                // date={'Nov 2020 - Present'}
                tech={about.about_p}
                />
        </Section>
      </div>
  )
}

export default About

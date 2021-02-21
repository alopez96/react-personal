import React from 'react'
import styled from 'styled-components'
import { SMALL } from '../../variables/ScreenSizes'
import AboutCard from './AboutCard'
import about from './../../variables/AboutText'


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
                title='About me'
                theme={theme}
                // noBtn={true}
                about={about.about_p}
                />
        </Section>
      </div>
  )
}

export default About

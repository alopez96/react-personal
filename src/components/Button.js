import React from 'react'
import { Button, Icon  } from 'semantic-ui-react'

const Buttons = () => (
  <div>
    <Button content='Primary' primary />
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Icon name='arrow right' />
    <Icon name='heart' />
  </div>
)

export default Buttons

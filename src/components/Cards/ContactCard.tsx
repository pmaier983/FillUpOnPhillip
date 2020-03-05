import React from 'react'
import styled from 'styled-components'

import CardHandle from './CardHandle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  /* TODO: why is flex-grow: 1 not working here */
  height: calc(100% - 20px);
`

const ContactCard = () => (
  <Container>
    <CardHandle height="20px" />
    <CardContent>
      <div>Hello</div>
    </CardContent>
  </Container>
)

export default ContactCard

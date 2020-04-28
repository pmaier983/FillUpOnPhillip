import React from 'react'
import styled from 'styled-components'

import BulletPointList from '../BulletPointList'

import { variables } from '../../utils/variables'
import { whatMattersTech, whatMattersPersonal } from '../../static/WhatMatters'

const whyMonolog = `
Why did I build such a complex website just to get across a few simple details. 
A text document would have sufficed. Yes, yes it would have. 
But I built this website not to get across a few simple details but to experiment with some interesting technology. 
P.S. I'm not a designer. I did not hire a designer. Sorry if this site adheres to little or no design principles.
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* TODO: why is flex-grow: 1 not working here */
  height: calc(100% - ${variables.cardHeaderHeight});
`

const CardTitle = styled.h2`
  font-size: ${variables.fontLarge};
  text-decoration: underline;
  margin: 0;
`

const ListTitle = styled.h3`
  font-size: ${variables.fontLarge};
  margin: 0;
`

const BlurbContainer = styled.div`
  text-align: center;
  min-height: ${variables.fontLarge};
  font-size: ${variables.fontNormal};
  overflow-y: auto;
  overflow-x: hidden;
`

const WhatMattersCard = () => (
  <CardContent>
    <CardTitle>Some of What Matters To Me:</CardTitle>
    <ListTitle>Tech:</ListTitle>
    <BulletPointList list={whatMattersTech} />
    <ListTitle>Personal:</ListTitle>
    <BulletPointList list={whatMattersPersonal} />
    <ListTitle>Why?</ListTitle>
    <BlurbContainer>{whyMonolog}</BlurbContainer>
  </CardContent>
)

export default WhatMattersCard

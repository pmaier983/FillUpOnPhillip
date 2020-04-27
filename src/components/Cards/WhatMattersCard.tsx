import React from 'react'
import styled from 'styled-components'

import BulletPointList from '../BulletPointList'

import { variables } from '../../utils/variables'
import { whatMattersTech, whatMattersPersonal } from '../../static/WhatMatters'

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
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

const WhatMattersCard = () => (
  <CardContent>
    <CardTitle>Some of What Matters To Me:</CardTitle>
    <ListTitle>Tech:</ListTitle>
    <BulletPointList list={whatMattersTech} />
    <ListTitle>Personal:</ListTitle>
    <BulletPointList list={whatMattersPersonal} />
  </CardContent>
)

export default WhatMattersCard

import React from 'react'
import styled from 'styled-components'

import BulletPointList from '../BulletPointList'

import { variables } from '../../utils/variables'
import { whatMattersTech, whatMattersPersonal, whyMonolog } from '../../static/WhatMatters'

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* TODO: why is flex-grow: 1 not working here */
  height: calc(100% - ${variables.cardHeaderHeight});
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

interface IPaddingListColumn {
  width?: string
}

const PaddingListColumn = styled.div<IPaddingListColumn>`
  height: 100%;
  width: ${({ width = '5px' }) => width};
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
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
  min-height: 30px;
  font-size: ${variables.fontNormal};
  overflow-y: auto;
  overflow-x: hidden;
`

const WhatMattersCard = () => (
  <CardContent>
    <CardTitle>Some of What Matters To Me:</CardTitle>
    <ListContainer>
      <PaddingListColumn />
      <div>
        <ListTitle>Tech:</ListTitle>
        <FlexRow>
          <PaddingListColumn width="10px" />
          <BulletPointList list={whatMattersTech} />
        </FlexRow>
      </div>
      <div>
        <ListTitle>Personal:</ListTitle>
        <FlexRow>
          <PaddingListColumn width="10px" />
          <BulletPointList list={whatMattersPersonal} />
        </FlexRow>
      </div>
      <PaddingListColumn />
    </ListContainer>
    <ListTitle>Why does this site exist?</ListTitle>
    <BlurbContainer>
      {whyMonolog}
    </BlurbContainer>
  </CardContent>
)

export default WhatMattersCard

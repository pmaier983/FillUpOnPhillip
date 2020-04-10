import React from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

import { ITechCard } from '../static/TechUsed'
import { variables } from '../utils/theme'

import RepositoryRolodexCard from './RepositoryRolodexCard'
import MaterialIcon from './MaterialIcon'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - ${variables.cardHeaderHeight});
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Title = styled.div`
  text-decoration: underline;
  font-size: ${variables.fontLarge};
  text-align: center;
  margin-left: auto;
`

const RefreshContainer = styled.div`
margin-left: auto;
`

const SlidingTextContained = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: inherit;
  justify-content: space-between;
`

interface IHorizontalTextRolodexProps {
  title: string,
  textCards: ITechCard[],
  textCardIndex: number,
  setTextCardIndex: (payload: number) => void,
}

const HorizontalTextRolodex: React.FC<IHorizontalTextRolodexProps>= (
  {
    title, textCards, children, textCardIndex, setTextCardIndex,
  },
) => {
  const handleRightClick = () => {
    setTextCardIndex(textCardIndex + 1)
  }

  const handleLeftClick = () => {
    setTextCardIndex(textCardIndex - 1)
  }

  const handleCardIndexReset = () => {
    setTextCardIndex(0)
  }

  // TODO: a better method of inserting children into the flow
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <RefreshContainer>
          <MaterialIcon name="refresh" onClick={handleCardIndexReset} />
        </RefreshContainer>
      </TitleContainer>
      <SlidingTextContained>
        <MaterialIcon name="chevron_left" alignSelf="center" onClick={handleLeftClick} />
        {textCardIndex === 0
          ? children : <RepositoryRolodexCard {..._.get(`[${textCardIndex - 1}]`, textCards)} />}
        <MaterialIcon name="chevron_right" alignSelf="center" onClick={handleRightClick} />
      </SlidingTextContained>
    </Container>
  )
}

export default HorizontalTextRolodex

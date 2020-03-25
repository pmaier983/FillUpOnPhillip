import React, { useState } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

import { ITechCard } from '../../static/TechUsed'
import { variables } from '../../utils/theme'
import MaterialIcons from '../MaterialIcon'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - ${variables.cardHeaderHeight});
`

const Title = styled.div`
  font-size: ${variables.fontLarge};
`

const SlidingTextContained = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
`

const TextCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const LinksAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TextCardName = styled.div`
  font-size: ${variables.fontNormal};
  font-weight: ${variables.fontWeightStrong};
`

const TextCardImage = styled.img`
  height: 50px;
  width: 50px;
`

const TextContent = styled.body`
  margin: 0;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`

interface ISlidingTextCardContentProps {
  title: string,
  textCards: ITechCard[],
}

const renderTextCard = ({ name, icon, blurb }: ITechCard) => (
  <TextCardContainer>
    <LinksAndIconContainer>
      <TextCardImage src={icon} />
      <LinkContainer>
        <TextCardName>{name}</TextCardName>
      </LinkContainer>
    </LinksAndIconContainer>
    <TextContent>{blurb}</TextContent>
  </TextCardContainer>
)

const SlidingTextCardContent: React.FC<ISlidingTextCardContentProps>= (
  { title, textCards, children },
) => {
  const [textCardIndex] = useState(0)

  return (
    <Container>
      <Title>{title}</Title>
      <SlidingTextContained>
        <MaterialIcons name="chevron_left" alignSelf="center" />
        {renderTextCard(_.get(`[${textCardIndex}]`, textCards))}
        <MaterialIcons name="chevron_right" alignSelf="center" />
      </SlidingTextContained>
    </Container>
  )
}

export default SlidingTextCardContent

import React, { useState } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

import { ITechCard } from '../../static/TechUsed'
import { variables } from '../../utils/theme'

import MaterialIcons from '../MaterialIcon'
import IconContainer from '../IconContainer'

const GitHubLogo = require('../../static/GitHub-logo.png')

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - ${variables.cardHeaderHeight});
`

const Title = styled.div`
  text-decoration: underline;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: space-around;
`

const TextCardName = styled.div`
  font-size: ${variables.fontMedium};
  font-weight: ${variables.fontWeightStrong};
`

const TextCardImage = styled.img`
  width: 50%;
  height: auto;
  max-width: 120px;
`

const TextContent = styled.p`
  margin: 0;
`

const LinksAndTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

interface ISlidingTextCardContentProps {
  title: string,
  textCards: ITechCard[],
}

const renderTextCard = ({
  name, icon, blurb, links: { github, website },
}: ITechCard) => (
  <TextCardContainer>
    <LinksAndIconContainer>
      <TextCardImage src={icon} />
      <LinksAndTitleContainer>
        <TextCardName>{name}</TextCardName>
        <LinksContainer>
          <IconContainer src={GitHubLogo} link={github} />
          <IconContainer link={website}><MaterialIcons name="storefront" size="35px" /></IconContainer>
        </LinksContainer>
      </LinksAndTitleContainer>
    </LinksAndIconContainer>
    <TextContent>{blurb}</TextContent>
  </TextCardContainer>
)

const SlidingTextCardContent: React.FC<ISlidingTextCardContentProps>= (
  {
    title, textCards, children,
  },
) => {
  const [textCardIndex, setCardIndex] = useState(2)

  const handleRightClick = () => {
    setCardIndex((cardIndex) => (cardIndex < textCards.length ? cardIndex + 1 : cardIndex))
  }

  const handleLeftClick = () => {
    setCardIndex((cardIndex) => (cardIndex > 0 ? cardIndex - 1 : cardIndex))
  }

  // TODO: a better method of inserting children into the flow
  return (
    <Container>
      <Title>{title}</Title>
      <SlidingTextContained>
        <MaterialIcons name="chevron_left" alignSelf="center" onClick={handleLeftClick} />
        {textCardIndex === 0
          ? children : renderTextCard(_.get(`[${textCardIndex - 1}]`, textCards))}
        <MaterialIcons name="chevron_right" alignSelf="center" onClick={handleRightClick} />
      </SlidingTextContained>
    </Container>
  )
}

export default SlidingTextCardContent

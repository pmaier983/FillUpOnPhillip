import React from 'react'
import styled from 'styled-components'

import MaterialIcons from './MaterialIcon'
import IconContainer from './IconContainer'

import { variables } from '../utils/theme'
import { ITechCard } from '../static/TechUsed'
import { useQuery } from '../hooks'
import { GET_REPOSITORY } from '../Queries'

const GitHubLogo = require('../static/GitHub-logo.png')

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

interface IRolodexCardProps extends ITechCard {
  handleCardIndexReset: () => void,
}

const RolodexCard = ({
  handleCardIndexReset, name, owner, icon, blurb, links: { github, website },
}: IRolodexCardProps) => {
  const {
    loading, error, LoadingIcon, ErrorAlert,
  } = useQuery(GET_REPOSITORY, {
    variables: {
      name,
      owner,
    },
  })

  if (loading) {
    return <LoadingIcon />
  }

  if (error) {
    return <ErrorAlert />
  }

  return (
    <TextCardContainer>
      <MaterialIcons name="refresh" onClick={handleCardIndexReset} />
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
}

export default RolodexCard

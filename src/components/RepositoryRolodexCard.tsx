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
  flex-direction: column;
`

const LinksAndIconContainer = styled.div`
  width: 100%;
  margin: 10% 0px;
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

interface IRepositoryRolodexCardProps extends ITechCard {
  handleCardIndexReset: () => void,
}

const RepositoryRolodexCard = ({
  handleCardIndexReset, name: repositoryName, owner: RepositoryOwner, icon, blurb, links: { github, website },
}: IRepositoryRolodexCardProps) => {
  const {
    data, loading, error, LoadingIcon,
  } = useQuery(GET_REPOSITORY, {
    variables: {
      name: repositoryName,
      owner: RepositoryOwner,
    },
  })

  if (loading) {
    return <LoadingIcon />
  }

  if (error) {
    throw Error(`The Rolodex Card, ${repositoryName} Failed`)
  }
  const { name } = data
  console.log('This is the Data:', data)

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

export default RepositoryRolodexCard

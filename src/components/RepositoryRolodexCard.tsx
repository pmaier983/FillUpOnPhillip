import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import MaterialIcons from './MaterialIcon'
import IconContainer from './IconContainer'
import TooltipStatic from './TooltipStatic'

import { stripHttp } from '../utils/functions.helpers'
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
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: space-around;
`

const LinkPadder = styled.div`
  width: 100%;
  height: 10px;
`

const RefreshContainer = styled.div`
  align-self: flex-end;
`

const TextCardName = styled.div`
  font-size: ${variables.fontMedium};
  font-weight: ${variables.fontWeightStrong};
`

const TextCardImage = styled.img`
  max-width: 45%;
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
  handleCardIndexReset,
  name: repositoryName,
  owner: RepositoryOwner,
  displayName,
  icon,
  blurb,
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
  const {
    repository: {
      createdAt,
      description,
      diskUsage,
      homepageUrl,
      name,
      updatedAt,
      url,
    },
  } = data

  const strippedHomepageURL = stripHttp(homepageUrl)
  const strippedGithubURL = stripHttp(url)

  const totalDaysSinceCreation = moment().diff(createdAt, 'days')
  const yearsSinceCreation = Math.floor(totalDaysSinceCreation / variables.daysInYear)
  const daysSinceCreation = totalDaysSinceCreation % variables.daysInYear
  const creationDate = moment(createdAt).format(variables.createdDateFormat)

  return (
    <TextCardContainer>
      <RefreshContainer>
        <MaterialIcons name="refresh" onClick={handleCardIndexReset} />
      </RefreshContainer>
      <LinkPadder />
      <LinksAndIconContainer>
        <TooltipStatic content={creationDate}>
          {`Created: ${yearsSinceCreation} years ${daysSinceCreation} days ago`}
        </TooltipStatic>
        <TextCardImage src={icon} />
        <LinksAndTitleContainer>
          <TextCardName>{displayName}</TextCardName>
          <LinksContainer>
            <IconContainer src={GitHubLogo} link={strippedHomepageURL} />
            <IconContainer link={strippedGithubURL}><MaterialIcons name="storefront" size="35px" /></IconContainer>
          </LinksContainer>
        </LinksAndTitleContainer>
      </LinksAndIconContainer>
      <LinkPadder />
      <TextContent>{blurb}</TextContent>
    </TextCardContainer>
  )
}

export default RepositoryRolodexCard

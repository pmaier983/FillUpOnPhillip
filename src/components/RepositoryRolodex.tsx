import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import MaterialIcon from './MaterialIcon'
import IconContainer from './IconContainer'
import TooltipStatic from './TooltipStatic'

import { stripHttp } from '../utils/functions.helpers'
import { variables } from '../utils/variables'
import { ITechCard } from '../static/TechUsed'
import { useQuery } from '../hooks'
import { GET_REPOSITORY } from '../Queries'

const GitHubLogo = require('../static/GitHub-logo.png')

const TextCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

// TODO: Perfect Size Each Image
const TextCardImage = styled.img`
  max-width: 20%;
  cursor: pointer;
`

const BlurbContent = styled.p`
  margin: 0;  
`

const LinksAndTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  min-height: 75px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const EmphasizedText = styled.div`
  font-weight: ${variables.fontWeightStrong};
`

const SeparatorLine = styled.div`
  width: 100%;
  margin: 10px 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lineEmphasized};
`

const InvisibleSmallPadding = styled.div`
  width: 100%;
  height: 10px;
`

const FactContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: space-between;
`

const RepositoryRolodex = ({
  name: repositoryName,
  owner: RepositoryOwner,
  displayName,
  icon,
  blurb,
}: ITechCard) => {
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
      updatedAt,
      url,
    },
  } = data

  const strippedHomepageURL = stripHttp(homepageUrl)
  const strippedGithubURL = stripHttp(url)

  // TODO: how to integrate moment().fromNow()
  const timeSinceCreation = `${moment().diff(createdAt, 'years')} years ago`
  const creationDate = moment(createdAt).format(variables.createdDateFormat)

  const timeSinceUpdate = `${moment().diff(updatedAt, 'minutes')} minutes ago`
  const updateDate = moment(updatedAt).format(variables.specificTimeFormat)

  return (
    <TextCardContainer>
      <InvisibleSmallPadding />
      <LinksAndIconContainer>
        <TextCardImage src={icon} onClick={() => window.open(`https://${strippedHomepageURL}`)} />
        <LinksAndTitleContainer>
          <TextCardName>{displayName}</TextCardName>
          <LinksContainer>
            <IconContainer src={GitHubLogo} link={strippedGithubURL} alt={`The Home Page of ${displayName}`} />
            <IconContainer link={strippedHomepageURL} alt={`The Github Page of ${displayName}`}><MaterialIcon name="storefront" size="35px" /></IconContainer>
          </LinksContainer>
        </LinksAndTitleContainer>
      </LinksAndIconContainer>
      <InvisibleSmallPadding />
      <SeparatorLine />
      <FactContainer>
        <TooltipStatic content={creationDate}>
          <EmphasizedText>Created: </EmphasizedText>
          {timeSinceCreation}
        </TooltipStatic>
        <TooltipStatic content={updateDate}>
          <EmphasizedText>Updated Last: </EmphasizedText>
          {timeSinceUpdate}
        </TooltipStatic>
        <div>
          <EmphasizedText>Raw Disk Usage:</EmphasizedText>
          {`${diskUsage} Kb`}
        </div>
      </FactContainer>
      <SeparatorLine />
      <TextContentContainer>
        <div>
          <EmphasizedText>Description: </EmphasizedText>
          {description}
        </div>
        <SeparatorLine />
        <EmphasizedText>My Thoughts:</EmphasizedText>
        <BlurbContent>{blurb}</BlurbContent>
      </TextContentContainer>
    </TextCardContainer>
  )
}

export default RepositoryRolodex

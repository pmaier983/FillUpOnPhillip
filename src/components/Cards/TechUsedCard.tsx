import React from 'react'
import styled from 'styled-components'

import HorizontalTextRolodex from '../HorizontalTextRolodex'

import { useLandingPageContext, LANDING_PAGE_ACTIONS } from '../../contexts/LandingPageProvider'
import { technologyUsed } from '../../static/TechUsed'

const ApolloLogo = require('../../static/Apollo-logo.png')
const GraphQLLogo = require('../../static/GraphQL-logo.png')
const JestLogo = require('../../static/Jest-logo.png')
const ReactLogo = require('../../static/React-logo.png')
const StyledComponentsLogo = require('../../static/StyledComponents-logo.png')
const TypeScriptLogo = require('../../static/TypeScript-logo.png')
const ReactTestingLibraryLogo = require('../../static/ReactTestingLibrary-logo.png')
const RGLLogo = require('../../static/RGL-logo.png')

interface IImageLinkProps {
  width?: string,
  height?: string,
}

const ImageLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: center;
  height: 90%;
`

const ImageLink = styled.img<IImageLinkProps>`
  width: 50%;
  height: 22%;
  object-fit: contain;
`

const SlidingTestCard = () => {
  const [{ techUsedCardIndex }, dispatch] = useLandingPageContext()

  const handleTechUsedCardIndex = (payload: number) => {
    dispatch({ type: LANDING_PAGE_ACTIONS.UPDATE_TECH_USED_CARD_INDEX, payload })
  }

  return (
    <HorizontalTextRolodex
      title="Tech Used to build this Website (Click In)"
      textCards={technologyUsed}
      textCardIndex={techUsedCardIndex}
      setTextCardIndex={handleTechUsedCardIndex}
    >
      <ImageLinkContainer>
        <ImageLink src={ApolloLogo} />
        <ImageLink src={GraphQLLogo} />
        <ImageLink src={TypeScriptLogo} />
        <ImageLink src={StyledComponentsLogo} />
        <ImageLink src={ReactLogo} />
        <ImageLink src={RGLLogo} />
        <ImageLink src={ReactTestingLibraryLogo} />
        <ImageLink src={JestLogo} />
      </ImageLinkContainer>
    </HorizontalTextRolodex>
  )
}


export default SlidingTestCard

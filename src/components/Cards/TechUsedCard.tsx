import React from 'react'
import styled from 'styled-components'

import HorizontalTextRolodex from '../HorizontalTextRolodex'

import { useLandingPageContext, LANDING_PAGE_ACTIONS } from '../../contexts/LandingPageProvider'
import { technologyUsed } from '../../static/TechUsed'

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
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px black;
  };
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
        {technologyUsed.map(
          ({ icon, name }, index) => (
            <ImageLink
              key={name}
              src={icon}
              onClick={() => handleTechUsedCardIndex(index + 1)}
            />
          ),
        )}
      </ImageLinkContainer>
    </HorizontalTextRolodex>
  )
}


export default SlidingTestCard

import React from 'react'
import styled from 'styled-components'

import HorizontalTextRolodex from '../HorizontalTextRolodex'

import { useLandingPageContext, LANDING_PAGE_ACTIONS } from '../../contexts/LandingPageProvider'
import { variables } from '../../utils/variables'

interface IImageLinkProps {
  width?: string,
  height?: string,
}

const ImageLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: center;
  height: calc(100% - ${variables.cardHeaderHeight});
`

const ImageLink = styled.img<IImageLinkProps>`
  width: 50%;
  height: 22%;
  object-fit: contain;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.borderBasic};
    background-color: ${({ theme }) => theme.minorBackgroundColorSoft};
    border-radius: ${variables.borderRadiusNormal};
  };
`

const SlidingTestCard = () => {
  const [{ techUsedCardIndex, techUsedRolodex }, dispatch] = useLandingPageContext()

  const handleTechUsedCardIndex = (payload: number) => {
    dispatch({ type: LANDING_PAGE_ACTIONS.UPDATE_TECH_USED_CARD_INDEX, payload })
  }

  return (
    <HorizontalTextRolodex
      title="Tech Used to build this Website"
      textCards={techUsedRolodex}
      textCardIndex={techUsedCardIndex}
      setTextCardIndex={handleTechUsedCardIndex}
    >
      <ImageLinkContainer data-testid="tech-used-icons">
        {techUsedRolodex.map(
          ({ icon, name }, index) => (
            <ImageLink
              alt={name}
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

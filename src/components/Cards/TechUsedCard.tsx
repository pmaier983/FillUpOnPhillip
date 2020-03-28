import React from 'react'

import SlidingTextCardContent from './SlidingTextCardContent'

import { useLandingPageContext, LANDING_PAGE_ACTIONS } from '../../contexts/LandingPageProvider'
import { technologyUsed } from '../../static/TechUsed'

const SlidingTestCard = () => {
  const [{ techUsedCardIndex }, dispatch] = useLandingPageContext()

  const handleTechUsedCardIndex = (payload: number) => {
    dispatch({ type: LANDING_PAGE_ACTIONS.UPDATE_TECH_USED_CARD_INDEX, payload })
  }

  return (
    <SlidingTextCardContent
      title="Tech Used to build this Website"
      textCards={technologyUsed}
      textCardIndex={techUsedCardIndex}
      setTextCardIndex={handleTechUsedCardIndex}
    >
      <div>
        <div>Lodash/fp</div>
        <div>styled-components</div>
        <div>Apollo-Graphql</div>
        <div>material-design-icons</div>
        <div>typescript</div>
      </div>
    </SlidingTextCardContent>
  )
}


export default SlidingTestCard

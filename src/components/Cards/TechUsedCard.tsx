import React from 'react'

import SlidingTextCardContent from './SlidingTextCardContent'
import { technologyUsed } from '../../static/TechUsed'

const SlidingTestCard = () => (
  <SlidingTextCardContent title="Tech Used to build this Website" textCards={technologyUsed}>
    Put a custom card with a placement Index here
  </SlidingTextCardContent>
)


export default SlidingTestCard

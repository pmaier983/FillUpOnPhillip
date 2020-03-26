import React from 'react'

import SlidingTextCardContent from './SlidingTextCardContent'
import { technologyUsed } from '../../static/TechUsed'

const SlidingTestCard = () => (
  <SlidingTextCardContent title="Tech Used to build this Website" textCards={technologyUsed}>
    <div>
      <div>Lodash/fp</div>
      <div>styled-components</div>
      <div>Apollo-Graphql</div>
      <div>material-design-icons</div>
      <div>typescript</div>
    </div>
  </SlidingTextCardContent>
)


export default SlidingTestCard

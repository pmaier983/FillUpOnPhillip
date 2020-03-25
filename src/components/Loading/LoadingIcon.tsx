import React from 'react'
import styled from 'styled-components'

import { variables } from '../../utils/theme'

import './LoadingIcon.css'

const CenterLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - ${variables.cardHeaderHeight});
`

const LoadingIcon = () => (
  <CenterLoadingContainer>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </CenterLoadingContainer>
)

export default LoadingIcon

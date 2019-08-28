import React from "react"
import styled from "styled-components"

import VisitorInfoContainer from "./VisitorInfoContainer"
import PersonalInfoContainer from "./PersonalInfoContainer"

import { colors } from "./utils/theme"

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: ${colors.eggshellWhite};
`

const LeftHalfContainer = styled.div`
  width: 50%;
  height: 100%;
`

const RightHalfContainer = styled(LeftHalfContainer)`
  border-left: 2px dashed ${colors.taupeGray};
`

const LandingPage = () => {
  return (
    <PageContainer>
      <LeftHalfContainer>
        <VisitorInfoContainer />
      </LeftHalfContainer>
      <RightHalfContainer>
        <PersonalInfoContainer />
      </RightHalfContainer>
    </PageContainer>
  )
}

export default LandingPage

import React from "react"
import styled from "styled-components"

import VisitorInfoContainer from "../containers/VisitorInfoContainer"
import PersonalInfoContainer from "../containers/PersonalInfoContainer"

import { theme } from "../utils/theme"

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: ${theme.majorBackgroundColor};
`

const LeftHalfContainer = styled.div`
  width: 50%;
  height: 100%;
`

const RightHalfContainer = styled(LeftHalfContainer)`
  border-left: 2px dashed ${theme.lineEmphasized};
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

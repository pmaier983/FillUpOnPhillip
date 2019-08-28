import React from "react"
import styled from "styled-components"

import { GlobalStyles } from "./components/utils/theme"

import LandingPage from "./components/pages/LandingPage"

const LandingPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <LandingPageContainer>
        <LandingPage />
      </LandingPageContainer>
    </React.Fragment>
  )
}

export default App

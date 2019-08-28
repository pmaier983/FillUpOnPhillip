import React from "react"
import styled from "styled-components"

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
    <LandingPageContainer>
      <LandingPage />
    </LandingPageContainer>
  )
}

export default App

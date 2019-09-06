import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import LandingPage from './components/pages/LandingPage';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Red Hat Text');
    font-family: 'Red Hat Text', sans-serif;
  }
`;

const LandingPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPageContainer>
        <LandingPage />
      </LandingPageContainer>
    </>
  );
}

export default App;

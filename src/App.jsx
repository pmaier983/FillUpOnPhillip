import React from 'react';
import styled from 'styled-components';

import LandingPage from './components/pages/LandingPage';

const LandingPageContainer = styled.div`
  font-family: 'Red Hat Text', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Red Hat Text" rel="stylesheet" type="text/css" />
      <LandingPageContainer>
        <LandingPage />
      </LandingPageContainer>
    </>
  );
}

export default App;

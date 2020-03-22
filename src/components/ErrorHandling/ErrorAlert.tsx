import React from 'react'
import styled from 'styled-components'
import { theme } from '../../utils/theme'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: ${theme.lightAlert};
  width: 100%;
  height: calc(100% - '20px');
`

const ErrorAlert = () => (
  <ErrorContainer>
    <strong>Error!</strong>
    There has been an error, sorry!
  </ErrorContainer>
)

export default ErrorAlert

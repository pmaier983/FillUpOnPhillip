import React from 'react'
import styled from 'styled-components'

import CardHandle from './CardHandle'
import ErrorBoundary from '../ErrorHandling/ErrorBoundary'

interface IPropsContainer {
  width?: string,
  height?: string,
  minWidth?: string,
  minHeight?: string,
  maxWidth?: string,
  maxHeight?: string,
  isDraggable?: boolean,
  testid?: string,
}

const Container = styled.div<IPropsContainer>`
  background-color: ${({ theme }) => theme.minorBackgroundColor};
  border: 1px ${({ theme }) => theme.borderBasic} solid;
  border-radius: 4px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.minorBackgroundColor};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
`

const CardContainer: React.FC<IPropsContainer>= ({ children, testid, ...rest }) => (
  <Container {...rest} data-testid={testid}>
    <CardHandle height="20px" />
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  </Container>
)

export default CardContainer

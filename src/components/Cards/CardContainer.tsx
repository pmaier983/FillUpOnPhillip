import React from 'react'
import styled from 'styled-components'

import CardHandle from './CardHandle'
import ErrorBoundry from '../ErrorHandling/ErrorBoundry'

import { theme } from '../../utils/theme'

interface IPropsContainer {
  width?: string,
  height?: string,
  minWidth?: string,
  minHeight?: string,
  maxWidth?: string,
  maxHeight?: string,
  isDraggable?: boolean,
}

const Container = styled.div<IPropsContainer>`
  background-color: ${theme.minorBackgroundColor};
  border: 1px ${theme.borderBasic} solid;
  border-radius: 4px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${theme.minorBackgroundColor};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
`

const CardContainer: React.FC<IPropsContainer>= ({ children, ...rest }) => (
  <Container {...rest}>
    <CardHandle height="20px" />
    <ErrorBoundry>
      {children}
    </ErrorBoundry>
  </Container>
)

export default CardContainer

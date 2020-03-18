import React from 'react'
import styled from 'styled-components'

import CardHandle from './CardHandle'

import { theme } from '../../utils/theme'

interface IPropsContainer {
  width?: string,
  height?: string,
  minWidth?: string,
  minHeight?: string,
  maxWidth?: string,
  maxHeight?: string,
}

const Container = styled.div<IPropsContainer>`
  background-color: ${theme.minorBackgroundColor};
  border: 1px ${theme.border} solid;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${theme.minorBackgroundColor};
  border-radius: 4px;
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
`

const CardContainer: React.FC<IPropsContainer>= ({ children, ...rest }) => (
  <Container {...rest}>
    <CardHandle height="20px" />
    {children}
  </Container>
)

export default CardContainer

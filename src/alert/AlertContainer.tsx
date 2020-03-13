import React from 'react'
import styled from 'styled-components'

import { formatToUnit } from '../utils/functions.helpers'
import { BasicTextAlertContainer } from './Alerts'

interface IContainerProps {
  margin?: string,
  width?: string,
  height?: string,
}

const Container = styled.div<IContainerProps>`
  position: absolute;
  display: flex;
  z-index: 10;
  bottom: ${(props) => props.margin};
  left: ${(props) => props.margin};
  width:  ${(props) => props.width};
  height: ${(props) => props.height};
`

interface IAlertContainerProps {
  width?: string,
  height?: string,
  margin?: string,
}

const AlertContainer: React.FC<IAlertContainerProps> = ({
  width, height, margin = '10px', children,
}) => (
  <Container
    width={formatToUnit(width)}
    margin={formatToUnit(margin)}
    height={formatToUnit(height)}
  >
    <BasicTextAlertContainer>
      {children}
    </BasicTextAlertContainer>
  </Container>
)

export default AlertContainer

import React from 'react'
import styled from 'styled-components'

import { formatToUnit } from '../utils/functions.helpers'
import { BasicTextAlertContainer } from './Alerts'

const Container = styled.div`
  position: absolute;
  display: flex;
  z-index: 10;
  bottom: ${(props) => props.margin};
  left: ${(props) => props.margin};
  width:  ${(props) => props.width};
  height: ${(props) => props.height};
`


const AlertContainer = ({
  width, height, margin = 10, children,
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

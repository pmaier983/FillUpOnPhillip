import React from "react"
import styled, { keyframes } from "styled-components"

import { theme } from "./utils/theme"
import { formatToUnit } from "./utils/helperFunctions"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const PositioningContainer = styled.div`
  position: fixed;
  bottom: ${props => props.windowBottom};
  left: ${props => props.windowLeft};
  width: ${props => props.width};
  height: ${props => props.height};
  animation: ${props =>
      props.animateIn && props.visible ? fadeIn : { opacity: 0 }}
    350ms linear;
`

const AlertContainer = ({
  children,
  visible,
  animateIn,
  width,
  height,
  windowBottom = 30,
  windowLeft = 30,
  ...props
}) => (
  <PositioningContainer
    windowBottom={formatToUnit(windowBottom)}
    windowLeft={formatToUnit(windowLeft)}
    width={formatToUnit(width)}
    height={formatToUnit(height)}
    visible={visible}
    animateIn={animateIn}
    {...props}
  >
    {visible ? children : null}
  </PositioningContainer>
)

const BasicTextContainer = styled.div`
  background-color: ${theme.minorBackgroundColor};
  border-radius: 5px;
  border: 5px solid ${theme.darkAlert};
  padding: 5px;
`

export const BasicTextAlertContainer = ({ children, ...props }) => {
  return <BasicTextContainer {...props}>{children}</BasicTextContainer>
}

export default AlertContainer

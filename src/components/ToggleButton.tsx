import React from 'react'
import styled from 'styled-components'

import { variables } from '../utils/theme'

interface IStyleProps {
  width: number,
  height: number,
}

interface IToggleButtonProps extends IStyleProps {
  toggleState: boolean,
  handleToggle: (bool: boolean) => void,
  leftValue?: any,
  rightValue?: any
}

interface IButtonContainerProps extends IStyleProps {
  isApproved: boolean,
}

const ButtonContainer = styled.div<IButtonContainerProps>`
  display: flex;
  flex-direction: row;
  min-width: 70px;
  min-height: 20px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ isApproved, theme }) => (isApproved ? theme.lightApproval : theme.lightAlert)};
  border-radius: ${variables.borderRadiusNormal};
  border: 1px solid ${({ theme }) => theme.borderBasic};
`

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`

const Toggle = styled.div<IStyleProps>`
  position: absolute; 
  min-width: 35px;
  min-height: 15px;
  width: ${({ width }) => `${width * 0.45}px`};
  height: ${({ height }) => `${height * 0.80}px`};
  background-color: ${({ theme }) => theme.majorBackgroundColor};
  border-radius: ${variables.borderRadiusNormal};
  cursor: pointer;
`

interface ITextContainerProps {
  hasPointer: boolean;
}

const TextContainer = styled.span<ITextContainerProps>`
  z-index: 2;
  cursor: ${({ hasPointer }) => (hasPointer ? 'pointer' : null)};
`

const ToggleButton = ({
  width = 100,
  height=50,
  toggleState=true,
  handleToggle,
  leftValue='ON',
  rightValue='OFF',
}: IToggleButtonProps) => {
  const toggleOff = () => {
    handleToggle(false)
  }

  const toggleOn = () => {
    handleToggle(true)
  }

  return (
    <ButtonContainer
      width={width}
      height={height}
      isApproved={toggleState}
    >
      <WordContainer>
        {toggleState && <Toggle width={width} height={height} onClick={toggleOff} />}
        <TextContainer onClick={toggleOff} hasPointer={toggleState}>{leftValue}</TextContainer>
      </WordContainer>
      <WordContainer>
        {!toggleState && <Toggle width={width} height={height} onClick={toggleOn} />}
        <TextContainer onClick={toggleOn} hasPointer={!toggleState}>{rightValue}</TextContainer>
      </WordContainer>
    </ButtonContainer>
  )
}

export default ToggleButton

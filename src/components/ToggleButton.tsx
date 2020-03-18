import React from 'react'
import styled from 'styled-components'

import { theme, variables } from '../utils/theme'

interface IStyleProps {
  width: number,
  height: number,
}

interface IToggleButtonProps extends IStyleProps {
  toggleState: boolean,
  handleToggle: (bool: boolean) => void,
}

interface IButtonContainerProps extends IStyleProps {
  color: string,
}

const ButtonContainer = styled.div<IButtonContainerProps>`
  display: flex;
  flex-direction: row;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ color }) => color};
  border-radius: ${variables.normalBorderRadius};
  border: 1px solid ${theme.border};
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
  width: ${({ width }) => `${width * 0.42}px`};
  height: ${({ height }) => `${height * 0.85}px`};
  background-color: ${theme.majorBackgroundColor};
  border-radius: ${variables.normalBorderRadius};
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
  width = 100, height=50, toggleState=true, handleToggle,
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
      color={toggleState ? theme.lightApproval : theme.lightAlert}
    >
      <WordContainer>
        {toggleState && <Toggle width={width} height={height} onClick={toggleOff} />}
        <TextContainer onClick={toggleOff} hasPointer={toggleState}>ON</TextContainer>
      </WordContainer>
      <WordContainer>
        {!toggleState && <Toggle width={width} height={height} onClick={toggleOn} />}
        <TextContainer onClick={toggleOn} hasPointer={!toggleState}>OFF</TextContainer>
      </WordContainer>
    </ButtonContainer>
  )
}

export default ToggleButton

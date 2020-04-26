import React from 'react'
import styled from 'styled-components'

import { variables } from '../utils/variables'

interface IToggleButtonProps {
  width: number,
  height: number,
  trueBackgroundColor: string,
  falseBackgroundColor: string,
  toggleState: boolean,
  handleToggle: () => void,
  leftValue?: any,
  rightValue?: any,
  enableToggleIndicator?: boolean,
  color?: string,
  testid?: string,
}

interface IButtonContainerProps {
  width: number,
  height: number,
  trueBackgroundColor: string,
  falseBackgroundColor: string,
  toggleState: boolean,
}

interface IToggleProps {
  width: number,
  height: number,
}

interface IWordContainerProps {
  color: string,
}

const ButtonContainer = styled.div<IButtonContainerProps>`
  display: flex;
  flex-direction: row;
  min-width: 70px;
  min-height: 20px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${
  (
    {
      toggleState,
      falseBackgroundColor,
      trueBackgroundColor,
    },
  ) => (toggleState ? trueBackgroundColor : falseBackgroundColor)};
  border-radius: ${variables.borderRadiusNormal};
  border: 1px solid ${({ theme }) => theme.borderBasic};
`

const WordContainer = styled.div<IWordContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: ${({ color }) => color};
  cursor: pointer;
`

const Toggle = styled.div<IToggleProps>`
  position: absolute; 
  min-width: 35px;
  min-height: 15px;
  width: ${({ width }) => `${width * 0.45}px`};
  height: ${({ height }) => `${height * 0.80}px`};
  background-color: ${({ theme }) => theme.toggleColor};
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

// TODO: this component has sort of gotten out of hand
// compartmentalize its components and fix this jumble.
// or otherwise refactor (think on it)
// TODO: fix not being able to click Text Container
const ToggleButton = ({
  width = 100,
  height = 50,
  handleToggle,
  color = 'black',
  toggleState = true,
  trueBackgroundColor,
  falseBackgroundColor,
  enableToggleIndicator = true,
  leftValue = 'ON',
  rightValue = 'OFF',
  testid,
}: IToggleButtonProps) => (
  <ButtonContainer
    width={width}
    height={height}
    toggleState={toggleState}
    trueBackgroundColor={trueBackgroundColor}
    falseBackgroundColor={falseBackgroundColor}
    data-testid={testid}
  >
    <WordContainer onClick={handleToggle} color={color}>
      {
        toggleState
        && enableToggleIndicator
        && <Toggle width={width} height={height} onClick={handleToggle} />
        }
      <TextContainer hasPointer={toggleState}>{leftValue}</TextContainer>
    </WordContainer>
    <WordContainer onClick={handleToggle} color={color}>
      {
        !toggleState
        && enableToggleIndicator
        && <Toggle width={width} height={height} onClick={handleToggle} />
        }
      <TextContainer hasPointer={!toggleState}>{rightValue}</TextContainer>
    </WordContainer>
  </ButtonContainer>
)


export default ToggleButton

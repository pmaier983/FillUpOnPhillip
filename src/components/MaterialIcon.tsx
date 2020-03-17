/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'

interface IconStylingProps {
  fontSize?: string,
  color?: string,
  onclick?: () => void,
}

interface IMaterialIconsProps extends IconStylingProps {
  name: string,
  onClick?: () => any,
}

const IconContainer = styled.div`
  cursor: pointer;
`

// TODO: avoid using !important
const Icon = styled.i<IconStylingProps>`
  font-size: ${({ fontSize }) => fontSize} !important;
  color: ${({ color }) => color}; 
`

// TODO: correctly manage onKeyPress, role and tabIndex...
const MaterialIcons = ({ name, onClick, ...props }: IMaterialIconsProps) => (
  <IconContainer role={onClick && 'button'} onClick={onClick} onKeyPress={onClick}>
    <Icon {...props} className="material-icons">
      {name}
    </Icon>
  </IconContainer>
)

export default MaterialIcons

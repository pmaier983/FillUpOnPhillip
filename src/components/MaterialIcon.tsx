/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef } from 'react'
import styled from 'styled-components'

interface IconStylingProps {
  fontSize?: string,
  color?: string,
  onclick?: () => void,
  hasHoverEffect?: boolean,
}

interface IMaterialIconsProps extends IconStylingProps {
  name: string,
  onClick?: () => any,
}

const IconContainer = styled.div<IconStylingProps>`
  cursor: pointer;
`

// TODO: avoid using !important
// TODO: how to add rgba to theme.
const Icon = styled.i<IconStylingProps>`
  font-size: ${({ fontSize }) => fontSize} !important;
  color: ${({ color }) => color}; 
  &:hover {
  background: ${({ hasHoverEffect }) => hasHoverEffect && 'rgba(55.7, 55.3, 54.1, 0.25)'};
    border-radius: 20px;
  }
`

// TODO: correctly manage onKeyPress, role and tabIndex...
// TODO: clarify React.Ref attribute
const MaterialIcons = forwardRef(
  ({ name, onClick, ...props }: IMaterialIconsProps, buttonRef: React.Ref<any>) => (
    <IconContainer role={onClick && 'button'} onClick={onClick} onKeyPress={onClick} ref={buttonRef}>
      <Icon {...props} className="material-icons">
        {name}
      </Icon>
    </IconContainer>
  ),
)

export default MaterialIcons

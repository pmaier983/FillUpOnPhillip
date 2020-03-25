/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

interface IconStylingProps {
  size?: string,
  color?: string,
  onclick?: () => void,
  hasHoverEffect?: boolean,
  width?: string,
  alignSelf?: string,
  overflow?: string,
}

interface IMaterialIconsProps extends IconStylingProps {
  name: string,
  onClick?: () => any,
}

// eslint-disable-next-line no-unused-vars
const ICON_THEMES = {
  FILLED: '',
  OUTLINED: '-outlined',
  ROUNDED: '-round',
  TWOTONE: '-two-tone',
  SHARP: '-sharp',
}

const IconContainer = styled.div<IconStylingProps>`
  cursor: pointer;
  align-self: ${({ alignSelf }) => alignSelf};
`

// TODO: avoid using !important
// TODO: how to add rgba to theme.
const Icon = styled.i<IconStylingProps>`
  overflow: ${({ overflow }) => overflow};
  font-size: ${({ size }) => size} !important;
  color: ${({ color }) => color}; 
  width: ${({ width }) => width};
  &:hover {
    background: ${({ hasHoverEffect }) => hasHoverEffect && 'rgba(55.7, 55.3, 54.1, 0.25)'};
    border-radius: 20px;
  }
`

// TODO: correctly manage onKeyPress, role and tabIndex...
// TODO: clarify React.Ref attribute
const MaterialIcons = forwardRef(
  ({
    name, onClick, alignSelf, ...props
  }: IMaterialIconsProps, buttonRef: React.Ref<any>) => {
    // TODO: make a regex to do this super quick
    const materialTheme = _.get(_.flow(_.split('_'), _.last, _.toUpper)(name), ICON_THEMES)
    return (
      <IconContainer role={onClick && 'button'} onClick={onClick} onKeyPress={onClick} alignSelf={alignSelf} ref={buttonRef}>
        <Icon {...props} className={materialTheme ? `material-icons${materialTheme}` : 'material-icons'}>
          {name}
        </Icon>
      </IconContainer>
    )
  },
)

export default MaterialIcons

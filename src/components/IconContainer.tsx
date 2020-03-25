import React, { useMemo } from 'react'
import styled from 'styled-components'
import { theme } from '../utils/theme'

interface IIconContainerProps {
  height?: string,
  width?: string,
  src?: string,
  link?: string,
  href?: string,
}

interface ILogoLinkContainerProps {
  width: string,
  height: string,
}

const LogoLinkContainer = styled.div<ILogoLinkContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 0 0 0 1px black;
  padding: 4px;
  border-radius: 4px;
  margin: 2px 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 2px ${theme.lightAlert}; 
  }
  :active {
    box-shadow: 0 0 0 3px ${theme.darkAlert};
  }
`

const IconContainer: React.FC<IIconContainerProps> = ({
  src, children, width = '35px', height = '35px', href, link, ...props
}) => {
  const handleLogoClickRedirect = () => {
    if (link) {
      window.open(`https://${link}`)
    }
  }

  const renderLogo = useMemo(() => (
    <LogoLinkContainer width={width} height={height} {...props}>
      {children || (
      <img
        width="100%"
        height="100%"
        src={src}
        alt="This Clearly Didnt Work"
        onClick={handleLogoClickRedirect}
        onKeyDown={handleLogoClickRedirect}
        // TODO: make this more accessible
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="link"
      />
      )}
    </LogoLinkContainer>
  ), [width, height, src, link])

  return (
    href
      ? (
        <a href={href}>
          {renderLogo}
        </a>
      )
      : renderLogo
  )
}

export default IconContainer

import React from 'react'
import styled from 'styled-components'

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
  color: ${({ theme }) => theme.linkColor};
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.lightAlert}; 
  }
  :active {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.darkAlert};
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

  return (
    <a href={href}>
      <LogoLinkContainer
        width={width}
        height={height}
        {...props}
        onClick={handleLogoClickRedirect}
        onKeyDown={handleLogoClickRedirect}
      >
        {children || (
        <img
          width="100%"
          height="100%"
          src={src}
          alt="This Clearly Didnt Work"
          // TODO: make this more accessible
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="link"
        />
        )}
      </LogoLinkContainer>
    </a>
  )
}

export default IconContainer

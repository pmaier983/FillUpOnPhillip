import React from 'react'
import styled from 'styled-components'
import MaterialIcon from '../MaterialIcon'

import { theme } from '../../utils/theme'

import CardHandle from './CardHandle'

const LinkedinLogo = require('../../static/linkedin-logo.png')
const GitHubLogo = require('../../static/GitHub-logo.png')
const ResumeIcon = require('../../static/Resume-Icon.png')
const Resume = require('../../static/Phillip_Maier_Resume.pdf')

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  /* TODO: why is flex-grow: 1 not working here */
  height: calc(100% - 20px);
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

interface ILogoLinksProps {
  href?: string,
}

// TODO: remove duplicate code
const LogoLinks = styled.img<ILogoLinksProps>`
  width: 35px;
  height: 35px;
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

const LogoLinkContainer = styled.div<ILogoLinksProps>`
  width: 35px;
  height: 35px;
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

const handleLogoClickRedirect = (url: string) => {
  window.open(`https://${url}`)
}

const ContactCard = () => (
  <Container>
    <CardContent>
      <LogoContainer>
        <LogoLinks src={LinkedinLogo} onClick={() => handleLogoClickRedirect('www.linkedin.com/in/phillip-maier-3a4161102/')} href="mailto:pmaier983@gmail.com" />
        <LogoLinks src={GitHubLogo} onClick={() => handleLogoClickRedirect('github.com/pmaier983')} />
        <a href="mailto:pmaier983@gmail.com">
          <LogoLinkContainer>
            <MaterialIcon fontSize="35px" color="black" name="mail" />
          </LogoLinkContainer>
        </a>
        <LogoLinks src={ResumeIcon} href={Resume} />
      </LogoContainer>
    </CardContent>
  </Container>
)

export default ContactCard

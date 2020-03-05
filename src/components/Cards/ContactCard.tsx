import React from 'react'
import styled from 'styled-components'

import { theme } from '../../utils/theme'

import CardHandle from './CardHandle'

const LinkedinLogo = require('../../static/linkedin-logo.png')
const GitHubLogo = require('../../static/GitHub-logo.png')
const GmailLogo = require('../../static/Gmail-logo.png')
// const PictureOfSelf = require('../../static/PictureOfSelf.png');
// const Resume = require('../../static/PhillipMaierResume.pdf');

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

interface ILogoLinksProps {
  href?: string,
}

const LogoLinks = styled.img<ILogoLinksProps>`
  width: 35px;
  height: 35px;
  box-shadow: 0 0 0 1px black;
  padding: 4px;
  border-radius: 4px;
  margin: 25px 10px;
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
    <CardHandle height="20px" />
    <CardContent>
      <LogoLinks src={LinkedinLogo} onClick={() => handleLogoClickRedirect('www.linkedin.com/in/phillip-maier-3a4161102/')} href="mailto:pmaier983@gmail.com" />
      <LogoLinks src={GitHubLogo} onClick={() => handleLogoClickRedirect('github.com/pmaier983')} />
      <a href="mailto:pmaier983@gmail.com">
        <LogoLinks src={GmailLogo} />
      </a>
    </CardContent>
  </Container>
)

export default ContactCard

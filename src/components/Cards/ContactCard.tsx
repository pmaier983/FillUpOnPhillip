import React from 'react'
import styled from 'styled-components'
import MaterialIcon from '../MaterialIcon'

import { variables } from '../../utils/variables'

import IconContainer from '../IconContainer'

const LinkedinLogo = require('../../static/linkedin-logo.png')
const GitHubLogo = require('../../static/GitHub-logo.png')
const ResumeIcon = require('../../static/Resume-Icon.png')
const Resume = require('../../static/Phillip_Maier_Resume.pdf')

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  /* TODO: why is flex-grow: 1 not working here */
  height: calc(100% - ${variables.cardHeaderHeight});
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const ContactCard = () => (
  <CardContent>
    <LogoContainer>
      <IconContainer src={LinkedinLogo} link="www.linkedin.com/in/phillip-maier-3a4161102/" alt={'Phillip Maier\'s Linkedin Profile Page'} />
      <IconContainer src={GitHubLogo} link="github.com/pmaier983" alt={'Phillip Maier\'s Github Page'} />
      <IconContainer href="mailto:pmaier983@gmail.com" alt={'Phillip Maier\'s Mailing Address'}>
        <MaterialIcon size="35px" color="black" name="mail" />
      </IconContainer>
      <IconContainer src={ResumeIcon} href={Resume} alt={'Phillip Maier\'s Resume'} />
    </LogoContainer>
  </CardContent>
)

export default ContactCard

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AlertContainer, { BasicTextAlertContainer } from '../AlertContainer';
import { useToggleVisibility } from '../hooks';
import { theme } from '../utils/theme';

const LinkedinLogo = require('../../static/linkedin-logo.png');
const GitHubLogo = require('../../static/GitHub-logo.png');
const GmailLogo = require('../../static/Gmail-logo.png');
const PictureOfSelf = require('../../static/PictureOfSelf.png');
const Resume = require('../../static/PhillipMaierResume.pdf');

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 10px 10px 0 15px;
`;

const TextDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
`;

const ProfilePicture = styled.img`
  align-self: center;
  width: 50%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 16px dashed ${theme.lightAlert};
`;

const Links = styled.a`
  color: ${theme.lightAlert};
  cursor: pointer;
  :hover {
    color: ${theme.darkAlert}; 
  }
`;

const ClipboardLinks = styled.div`
  cursor: pointer;
  :hover {
    color: ${theme.darkAlert}; 
  }
`;

const LogoLinks = styled.img`
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
`;

const handleLogoClickRedirect = (url) => {
  window.open(`https://${url}`);
};

const handleLogoClipboardCopy = (textToClip, onSuccessfulCopy) => {
  // if copy command exists:
  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    const textarea = document.createElement('textarea');
    textarea.textContent = textToClip;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      onSuccessfulCopy({ content: 'pmaier983@gmail.com was copied to your clipboard', borderColor: theme.darkApproval });
      return document.execCommand('copy');
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};

const defaultMessage = 'Welcome to My Site. Explore Some!';

const PersonalInfoContainer = () => {
  const [alertVisible, _, setVisibility] = useToggleVisibility(true, 4500);
  const [alert, setAlertContent] = useState({
    content: defaultMessage,
    borderColor: theme.darkApproval,
  });

  useEffect(() => {
    setVisibility(true);
  }, [alert, setVisibility]);

  const { content, borderColor } = alert;
  return (
    <InfoContainer>
      <TextDescriptionContainer>
        <div>Phillip ED Maier</div>
        <div>Software Engineer</div>
        <ClipboardLinks onClick={() => handleLogoClipboardCopy('pmaier983@gmail.com', setAlertContent)}>pmaier983@gmail.com</ClipboardLinks>
        <Links href={Resume}>Resume (PDF)</Links>
        <div>
          <LogoLinks src={LinkedinLogo} onClick={() => handleLogoClickRedirect('www.linkedin.com/in/phillip-maier-3a4161102/')} href="mailto:pmaier983@gmail.com" />
          <LogoLinks src={GitHubLogo} onClick={() => handleLogoClickRedirect('github.com/pmaier983')} />
          <a href="mailto:pmaier983@gmail.com">
            <LogoLinks src={GmailLogo} />
          </a>
        </div>
      </TextDescriptionContainer>
      <ProfilePicture src={PictureOfSelf} />
      <AlertContainer
        visible={alertVisible}
        animateIn
        style={{ maxWidth: '300px' }}
      >
        <BasicTextAlertContainer style={{ borderColor }}>
          {content}
        </BasicTextAlertContainer>
      </AlertContainer>
    </InfoContainer>
  );
};

export default PersonalInfoContainer;

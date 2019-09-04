import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { theme } from '../utils/theme';
import { URL_STUBS } from '../utils/expressInteraction';
import { useToggleVisibility, useInput } from '../hooks';
import AlertContainer, { BasicTextAlertContainer } from '../AlertContainer';


import FormattedInput from '../FormattedInput';

const CenteredContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  margin: 20px;
  align-self: center;
`;

const Button = styled.div`
  background-color: ${theme.minorBackgroundColor};
  border: 3px dashed ${theme.lightAlert};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  :active {
    border: 3px solid ${theme.darkAlert};
  }
`;

const defaultMessage = 'Welcome to My Site. Explore Some!';

const alertTranslator = (alert) => {
  if (alert.includes('Error: ValidationError: name:')) return 'Please Input a name longer than 3 characters';
  if (alert.includes('Error: ValidationError: email:')) return 'Please Input an email longer than 5 characters';
  return `Something Went Wrong. Try a Refresh, 
        and if that doesn't work send me an Email with a 
        description of what happened and I'll fix it. Sorry!`;
};

const VisitorInfoContainer = () => {
  const [alertVisible, _, setVisibility] = useToggleVisibility(false, 7000);
  const [alert, setAlertContent] = useState({
    content: defaultMessage,
    borderColor: theme.darkApproval,
  });
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: note, bind: bindNote, reset: resetNote } = useInput('');

  const onPost = () => {
    axios
      .post(process.env.REACT_APP_SERVER_URL + URL_STUBS.ADD_VISITOR, {
        name,
        email,
        note,
      })
      .then((response) => {
        resetName();
        resetEmail();
        resetNote();
        setAlertContent({
          content: response.data,
          borderColor: theme.darkApproval,
        });
      })
      .catch((error) => {
        error.response
          ? setAlertContent({
            content: alertTranslator(error.response.data),
            borderColor: theme.darkAlert,
          })
          : setAlertContent({
            content: 'My Server Is Offline Sorry!',
            borderColor: theme.darkAlert,
          });
      });
  };

  useEffect(() => {
    setVisibility(true);
  }, [alert, setVisibility]);

  const { content, borderColor } = alert;
  return (
    <CenteredContainer>
      <Label>Tell me About Yourself</Label>
      <FormattedInput
        name="name:"
        width="250"
        boxStyling={{
          width: '150px',
        }}
        {...bindName}
      />
      <FormattedInput
        name="email:"
        width="250"
        boxStyling={{ width: '150px' }}
        {...bindEmail}
      />
      <FormattedInput
        name="note:"
        width="250"
        height="150"
        type="textarea"
        boxStyling={{ width: '148px' }}
        {...bindNote}
      />
      <Button onClick={onPost}>Send To Phillip</Button>
      <AlertContainer
        visible={alertVisible}
        animateIn
        style={{ maxWidth: '300px' }}
      >
        <BasicTextAlertContainer style={{ borderColor }}>
          {content}
        </BasicTextAlertContainer>
      </AlertContainer>
    </CenteredContainer>
  );
};

export default VisitorInfoContainer;

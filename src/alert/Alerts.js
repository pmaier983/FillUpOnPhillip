import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BasicTextContainer = styled.div`
  background-color: yellow;
  border-radius: 5px;
  border: 5px solid black;
  padding: 5px;
  width: 100%;
  height: 100%;
`;

// eslint-disable-next-line import/prefer-default-export
export const BasicTextAlertContainer = ({ children, ...props }) => (
  <BasicTextContainer {...props}>{children}</BasicTextContainer>);

BasicTextAlertContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
};

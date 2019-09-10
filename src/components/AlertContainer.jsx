import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from './utils/theme';
import { formatToUnit } from './utils/helperFunctions';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PositioningContainer = styled.div`
  position: fixed;
  bottom: ${(props) => props.windowBottom};
  left: ${(props) => props.windowLeft};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${(props) => (props.animateIn && props.visible ? fadeIn : { opacity: 0 })}
    350ms linear;
`;

const AlertContainer = ({
  children,
  visible,
  animateIn,
  width,
  height,
  windowBottom = 30,
  windowLeft = 30,
  ...props
}) => (
  <PositioningContainer
    windowBottom={formatToUnit(windowBottom)}
    windowLeft={formatToUnit(windowLeft)}
    width={formatToUnit(width)}
    height={formatToUnit(height)}
    visible={visible}
    animateIn={animateIn}
    {...props}
  >
    {visible ? children : null}
  </PositioningContainer>
);

AlertContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
  visible: PropTypes.bool,
  animateIn: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  windowBottom: PropTypes.number,
  windowLeft: PropTypes.number,
};


const BasicTextContainer = styled.div`
  background-color: ${theme.minorBackgroundColor};
  border-radius: 5px;
  border: 5px solid ${theme.darkAlert};
  padding: 5px;
`;

export const BasicTextAlertContainer = ({ children, ...props }) => (
  <BasicTextContainer {...props}>{children}</BasicTextContainer>);

BasicTextAlertContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
};

export default AlertContainer;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { theme } from './utils/theme';

const menuBoxKeyframes = keyframes`
  0% { 
    width: 0; 
    opacity: 0;
  }
  100% { 
    width: 150px; /* this can't be fill or the animaton halters */
    opacity: 1;
    }
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  border-top: 2px solid ${theme.lineEmphasized};
  border-right: 2px solid ${theme.lineEmphasized};
  border-bottom: 2px solid ${theme.lineEmphasized};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background: ${theme.minorBackgroundColor};
  position: relative;
  animation-name: ${menuBoxKeyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const MenuElement = styled.div`
  border-bottom: ${(props) => (props.bottomBorder ? '2px' : 0)} solid ${theme.lineEmphasized};
  padding: 10px;
`;

const NavigationMenu = ({ history }) => {
  const handleDataVisualizerRedirect = () => history.push('/data-visualizer');
  return (
    <MenuBox>
      <MenuElement onClick={handleDataVisualizerRedirect}>DataVisualizer</MenuElement>
    </MenuBox>
  );
};

NavigationMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(NavigationMenu);

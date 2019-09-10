import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { formatToUnit } from './utils/helperFunctions';

const MenuIconContainer = styled.div`
  width: ${(props) => formatToUnit(props.width)};
  height: 100%;
`;

const Line = styled.div`
  background-color: black;
  width: 100%;
  border-radius: 5px;
  height: ${(props) => formatToUnit(props.barHeight)};
  margin: ${(props) => formatToUnit(props.height / 3)} 0;
`;

const MenuIcon = ({
  width = 30, height = 15, barHeight = 5, handleClick,
}) => (
  <MenuIconContainer width={width} onClick={handleClick}>
    <Line height={height} barHeight={barHeight} />
    <Line height={height} barHeight={barHeight} />
    <Line height={height} barHeight={barHeight} />
  </MenuIconContainer>
);

MenuIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  barHeight: PropTypes.number,
  handleClick: PropTypes.func,
};

export default MenuIcon;

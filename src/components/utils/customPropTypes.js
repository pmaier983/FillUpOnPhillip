import PropTypes, { string, number } from 'prop-types';

const style = PropTypes.objectOf(PropTypes.oneOfType([string, number]));

// eslint-disable-next-line import/prefer-default-export
export { style };

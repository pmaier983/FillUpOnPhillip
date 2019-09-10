const formatToUnit = (element, defaultUnit = 'px') => {
  const stringElement = String(element);
  const values = [
    'cm',
    'mm',
    'Q',
    'in',
    'pc',
    'pt',
    'px',
    'em',
    'ex',
    'rem',
    'lh',
    'vw',
    'vh',
    'vmin',
    'vmax',
  ];
  return values.some((value) => stringElement.includes(value))
    ? element
    : `${element}${defaultUnit}`;
};

// eslint-disable-next-line import/prefer-default-export
export { formatToUnit };

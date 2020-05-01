const formatToUnit = (element?: string, defaultUnit?: String) => {
  const stringElement = String(element)
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
  ]
  return values.some((value) => stringElement.includes(value))
    ? element
    : `${element}${defaultUnit}`
}

formatToUnit.defaultProps = {
  defaultUnit: 'px',
}

const stripHttp = (url: string): string => url.replace(/(^\w+:|^)\/\//, '')

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

// eslint-disable-next-line import/prefer-default-export
export { formatToUnit, stripHttp, copyToClipboard }

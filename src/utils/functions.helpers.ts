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

// eslint-disable-next-line import/prefer-default-export
export { formatToUnit, stripHttp }

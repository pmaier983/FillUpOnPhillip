import {
  useState, useCallback, useLayoutEffect,
} from 'react'

const getSize = (el: HTMLElement) => {
  if (!el) {
    return {
      width: 0,
      height: 0,
    }
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  }
}

const useSize = (ref: any): any => {
  const [size, setSize] = useState(getSize(ref ? ref.current : {}))

  const handleResize = useCallback(() => {
    if (ref.current) {
      setSize(getSize(ref.current))
    }
  }, [ref])

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, ref])

  return size
}

export default useSize

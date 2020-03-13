import React from 'react'
import LoadingIcon from './Loading/LoadingIcon'
import ErrorAlert from './ErrorHandling/ErrorAlert'

interface IHandleQueryWrapperProps {
  loading: boolean,
  error: any, // TODO: use Type Apollo Error | undefined
  children: any,
}

const HandleQueryWrapper: React.FC<IHandleQueryWrapperProps> = ({ loading, error, children }) => {
  if (loading) {
    return <LoadingIcon />
  }
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return <ErrorAlert />
  }
  return children
}

export { HandleQueryWrapper }
